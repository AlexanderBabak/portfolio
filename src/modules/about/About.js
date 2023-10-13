import React from "react";
import { useTranslation } from "react-i18next";
import "../../utils/i18next";
import "./About.css";
import aboutImg from "../../img/about.jpg";

function About() {
  const { t } = useTranslation();

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
            <h1 className="about__heading">{t("about.tittle")}</h1>
            <div className="about__meta">
              <p className="about__text p__color">{t("about.text1")}</p>
              <p className="about__text p__color"><strong style={{color: '#fff'}}>{t("about.text2")}</strong></p>
              <p className="about__text p__color">{t("about.text2_p1")}</p>
              <p className="about__text p__color"><strong style={{color: '#fff'}}>{t("about.text3")}</strong></p>
              <p className="about__text p__color">{t("about.text3_p1")}</p>
              <p className="about__text p__color">{t("about.text3_p2")}</p>
              <p className="about__text p__color">{t("about.text3_p3")}</p>
              <p className="about__text p__color">{t("about.text3_p4")}</p>
              <div className="about__button d__flex align__items__center">
                <a
                  className="button button--flex"
                  download=""
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/file/d/1aV7XLYjNp4cDSawu9l_5RuYU1VqRklpY/view"
                >
                  <button className="about btn pointer">
                    {t("buttons.cv")}
                  </button>
                </a>

                <a className="button button--flex"
                   download=""
                   target="_blank"
                   rel="noreferrer"
                   href="https://www.linkedin.com/in/alexander-babak-359131246">
                  <button className="about btn pointer">
                    {t("buttons.contact")}
                  </button>
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
