import React from "react";
import "./About.css";
import aboutImg from "../../img/about.jpg";

function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="about">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">Обо мне</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                В 2018 году я написал свой первый Hello world! Именно тогда у
                меня родилась идея стать Front-end разработчиком. Решение было
                спонтанным. На тот момент мне был 31 год, и я уже 12 лет работал
                журналистом. Телевидение, должность руководителя пресс-службы
                футбольного клуба, потом снова телевидение, радио и постоянная
                работа в кадре. Можно сказать, в своей профессии я попробовал
                всё. И решился на новый вызов.
              </p>
              <p className="about__text p__color">
                Начитавшись историй про то, как 30-летние становятся
                программистами, понял, что у меня тоже получится. В итоге, в
                течение нескольких лет, совмещая учёбу с основной работой, я
                прошёл:
              </p>
              <p className="about__text p__color">
                - курсы киевской школы SkillUp{" "}
                <a
                  href="https://skillup.ua/lp/uiux-online/"
                  target="_blank"
                  rel="noreferrer"
                >
                  "Основы HTML/CSS"
                </a>{" "}
                и{" "}
                <a
                  href="https://skillup.ua/lp/frontend-online/"
                  target="_blank"
                  rel="noreferrer"
                >
                  "JavaScript/React"
                </a>{" "}
                <br />- курс{" "}
                <a
                  href="https://from0to1.com.ua/"
                  target="_blank"
                  rel="noreferrer"
                >
                  "Вёрстка сайтов от 0 до 1"
                </a>{" "}
                <br />- курс{" "}
                <a
                  href="https://stepik.org/course/113714/promo"
                  target="_blank"
                  rel="noreferrer"
                >
                  "Redux для управления состоянием"
                </a>{" "}
                <br />- практику и 2 проекта в компании{" "}
                <a href="https://dex-it.ru/" target="_blank" rel="noreferrer">
                  DEX
                </a>
                .
              </p>
              <p className="about__text p__color">
                На сегодняшний день у меня уже есть несколько реализованных
                проектов и опыт работы в команде. Вэб-разработка из хобби
                переросла в нечто большее. Думаю, всё ещё впереди. Вывод один –
                если хотите стать программистом, вы им станете. Трудно ли это,
                каждый решает сам.
              </p>
              <div className="about__button d__flex align__items__center">
                <a
                  className="button button--flex"
                  download=""
                  target="_blank"
                  rel="noreferrer"
                  href="https://disk.yandex.ru/i/MJeewEMZEd4LBA"
                >
                  <button className="about btn pointer">Скачать CV</button>
                </a>

                <a href="#contact">
                  <button className="about btn pointer">Связаться</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#home" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
