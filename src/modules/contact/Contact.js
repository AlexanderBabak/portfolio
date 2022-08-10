import React from "react";
import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../../img/about-9.jpg";
import { useForm } from "react-hook-form";

function Contact() {
  const [done, setDone] = useState(false);
  const formRef = useRef();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const handleFormSubmit = handleSubmit(() => {
    emailjs
      .sendForm(
        "service_rvqjoe8",
        "template_lx64vt8",
        formRef.current,
        "Be8z_ROwJ1_SY7Q4w"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  });

  return (
    <div className="contact component__space" id="contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Заказать проект</h1>
              <p className="hire__text white">Свяжитесь со мной по телефону:</p>
              <p className="hire__text white">
                <strong>+373 779 47179</strong> или по email{" "}
                <strong>bbkshow1987@gmail.com</strong>
              </p>
            </div>
            <form
              className="input__box"
              ref={formRef}
              onSubmit={handleFormSubmit}
            >
              <input
                className="contact name"
                placeholder="Ваше имя"
                {...register("user_name", {
                  required: "Name is required",
                  minLength: 2,
                })}
              />
              {errors.user_name && (
                <p className="warning1">Введите имя длиной от 2-х символов</p>
              )}
              <input
                className="contact email"
                placeholder="Ваш Email"
                type="text"
                {...register("user_email", {
                  required: "Email is required",
                  pattern:
                    /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/,
                })}
              />
              {errors.user_email && (
                <p className="warning2">Введите корректный email</p>
              )}
              <input
                className="contact subject"
                placeholder="Тема письма"
                {...register("user_subject", {
                  required: "Name is required",
                  min: 2,
                  max: 20,
                })}
              />
              {errors.user_subject && (
                <p className="warning3">
                  Введите тему от 2-х до 20-ти символов
                </p>
              )}
              <textarea
                name="message"
                id="message"
                {...register("message", {
                  required: "Message is required",
                  min: 1,
                  max: 100,
                })}
                placeholder="Напишите ваше сообщение"
                style={{ fontFamily: "sans-serif", resize: "none" }}
              ></textarea>
              {errors.message && (
                <p className="warning4">Введите сообщение до 100 символов</p>
              )}

              <button className="btn contact pointer" type="submit">
                Отправить
              </button>
              {done && (
                <p style={{ color: "white" }}>Ваше сообщение отправлено...</p>
              )}
            </form>
          </div>
        </div>
        <div className="col__2new">
          <img src={contactImg} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
