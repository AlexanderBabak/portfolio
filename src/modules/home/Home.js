/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../utils/i18next";
import "./Home.css";

export default function Home() {
  const [colorLang, setColorLang] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLangHandler = (lang, isTrue) => {
    i18n.changeLanguage(lang);
    setColorLang(isTrue);
  };

  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
  const [show, setShow] = useState(false);

  return (
    <div className="home" id="home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30 justify__content__space__between">
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#home">
                <li className="nav__items mx__15">{t("nav.home")}</li>
              </a>
              <a href="#about">
                <li className="nav__items mx__15">{t("nav.about")}</li>
              </a>
              <a href="#blog">
                <li className="nav__items mx__15">{t("nav.portfolio")}</li>
              </a>
              <a href="#services">
                <li className="nav__items mx__15">{t("nav.services")}</li>
              </a>
              <a href="#contact">
                <li className="nav__items mx__15">{t("nav.contact")}</li>
              </a>
            </ul>
          </div>
          <div className="language pb__15">
            <a
              onClick={() => changeLangHandler("en", false)}
              className="pointer"
            >
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="17px"
                viewBox="0 0 120 100"
                enable-background="new 0 0 122.879 101.527"
              >
                <g>
                  <path
                    d="M9.942,0h102.986c2.727,0,5.213,1.118,7.016,2.918c1.811,1.808,2.936,4.294,2.936,7.023v81.643 c0,2.729-1.123,5.217-2.934,7.026c-1.803,1.799-4.287,2.916-7.018,2.916H9.942c-2.72,0-5.202-1.117-7.009-2.918l-0.024-0.024 C1.113,96.778,0,94.301,0,91.585V9.942c0-2.72,1.117-5.202,2.917-7.009l0.024-0.024C4.749,1.113,7.226,0,9.942,0L9.942,0z M27.965,33.362h28.78v7.436H38.749v5.537h16.677v7.099H38.749v6.856h18.52v7.875H27.965V33.362L27.965,33.362L27.965,33.362z M61.673,33.362h10.036l13.047,19.221V33.362h10.158v34.803H84.756L71.783,49.047v19.108h-10.11V33.362L61.673,33.362 L61.673,33.362z M112.928,7.95H9.942c-0.555,0-1.052,0.219-1.404,0.572L8.522,8.538C8.169,8.89,7.95,9.387,7.95,9.942v81.643 c0,0.555,0.219,1.052,0.572,1.404l0.016,0.016c0.352,0.353,0.85,0.572,1.404,0.572h102.986c0.561,0,1.066-0.225,1.428-0.587 c0.354-0.354,0.574-0.851,0.574-1.405V9.942c0-0.552-0.221-1.049-0.576-1.403C113.99,8.176,113.484,7.95,112.928,7.95L112.928,7.95 z"
                    fill={colorLang ? "grey" : "white"}
                  />
                </g>
              </svg>
            </a>
            <a
              onClick={() => changeLangHandler("ru", true)}
              className="pointer"
            >
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="17px"
                viewBox="0 0 120 100"
                enable-background="new 0 0 122.88 101.527"
              >
                <g>
                  <path
                    d="M9.942,0h102.986c2.727,0,5.213,1.118,7.016,2.918c1.811,1.808,2.936,4.294,2.936,7.023v81.643 c0,2.729-1.123,5.217-2.935,7.026c-1.802,1.799-4.286,2.916-7.017,2.916H9.942c-2.72,0-5.202-1.117-7.009-2.918l-0.024-0.023 C1.113,96.779,0,94.302,0,91.585V9.942c0-2.72,1.117-5.202,2.917-7.009l0.024-0.024C4.749,1.112,7.226,0,9.942,0L9.942,0z M85.345,33.372h10.747v20.735c0,2.048-0.328,3.994-0.964,5.817c-0.636,1.833-1.646,3.423-3.012,4.798 c-1.365,1.366-2.806,2.329-4.303,2.882c-2.085,0.767-4.602,1.159-7.528,1.159c-1.693,0-3.545-0.121-5.537-0.355 c-2.002-0.234-3.676-0.701-5.022-1.412c-1.348-0.702-2.572-1.702-3.686-2.993c-1.122-1.3-1.88-2.638-2.291-4.013 c-0.664-2.207-1.001-4.171-1.001-5.883V33.372h10.746v21.222c0,1.898,0.523,3.376,1.571,4.442c1.058,1.066,2.507,1.609,4.378,1.609 c1.842,0,3.292-0.524,4.34-1.581c1.048-1.048,1.571-2.534,1.571-4.461V33.372H85.345L85.345,33.372z M26.789,68.174V33.372h17.92 c3.321,0,5.864,0.28,7.614,0.86c1.758,0.57,3.18,1.627,4.255,3.17c1.076,1.543,1.609,3.433,1.609,5.659 c0,1.927-0.412,3.602-1.244,4.995c-0.813,1.412-1.955,2.544-3.404,3.422c-0.917,0.553-2.18,1.011-3.779,1.376 c1.282,0.43,2.208,0.851,2.797,1.28c0.393,0.281,0.963,0.898,1.721,1.834c0.749,0.935,1.244,1.655,1.497,2.16l5.228,10.055h-12.14 l-5.743-10.615c-0.729-1.375-1.375-2.273-1.945-2.685c-0.776-0.533-1.665-0.805-2.637-0.805h-0.945v14.095H26.789L26.789,68.174 L26.789,68.174z M37.582,47.513h4.546c0.486,0,1.439-0.159,2.852-0.477c0.711-0.141,1.301-0.506,1.74-1.095 c0.458-0.589,0.683-1.263,0.683-2.029c0-1.123-0.355-1.993-1.066-2.591c-0.711-0.608-2.048-0.907-4.021-0.907h-4.733V47.513 L37.582,47.513L37.582,47.513z M112.929,7.95H9.942c-0.555,0-1.052,0.22-1.404,0.572L8.522,8.538 C8.169,8.89,7.951,9.387,7.951,9.942v81.643c0,0.555,0.219,1.053,0.572,1.404l0.016,0.016c0.352,0.353,0.85,0.572,1.404,0.572 h102.986c0.561,0,1.065-0.225,1.428-0.586c0.354-0.354,0.573-0.852,0.573-1.406V9.942c0-0.552-0.221-1.05-0.575-1.403 C113.991,8.175,113.485,7.95,112.929,7.95L112.929,7.95z"
                    fill={colorLang ? "white" : "grey"}
                  />
                </g>
              </svg>
            </a>
          </div>
          {/* Toogle Menu */}
          <div className="toggle__menu">
            <svg
              onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar">
                  <a href="#home" onClick={() => setShow(!show)}>
                    {t("nav.home")}
                  </a>
                </li>
                <li className="sideNavbar">
                  <a href="#about" onClick={() => setShow(!show)}>
                    {t("nav.about")}
                  </a>
                </li>
                <li className="sideNavbar">
                  <a href="#blog" onClick={() => setShow(!show)}>
                    {t("nav.portfolio")}
                  </a>
                </li>
                <li className="sideNavbar">
                  <a href="#services" onClick={() => setShow(!show)}>
                    {t("nav.services")}
                  </a>
                </li>
                <li className="sideNavbar">
                  <a href="#contact" onClick={() => setShow(!show)}>
                    {t("nav.contact")}
                  </a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">{t("home.welcome")}</h1>
              <h2 className="home__text pz__10">{t("home.name")}</h2>
              <h3 className="home__text sweet pz__10">{t("home.develop")}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
