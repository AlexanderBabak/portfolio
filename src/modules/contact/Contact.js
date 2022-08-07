import React from "react";
import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../../img/about-9.jpg";

function Contact() {
  const formRef = useRef();

  const [done, setDone] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

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
  };

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
            <form className="input__box" ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                name="user_name"
                className="contact name"
                placeholder="Ваше имя *"
              />
              <input
                type="text"
                name="user_email"
                className="contact email"
                placeholder="Ваш Email *"
              />
              <input
                type="text"
                name="user_subject"
                className="contact subject"
                placeholder="Тема письма"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Напишите ваше сообщение"
                style={{ fontFamily: "sans-serif" }}
              ></textarea>
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
