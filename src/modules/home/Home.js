import React, { useState } from "react";
import "./Home.css";

export default function Home() {
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
        <div className="header d__flex align__items__center pxy__30">
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#home">
                <li className="nav__items mx__15">Главная</li>
              </a>
              <a href="#about">
                <li className="nav__items mx__15">Обо мне</li>
              </a>
              <a href="#services">
                <li className="nav__items mx__15">Услуги</li>
              </a>
              <a href="#blog">
                <li className="nav__items mx__15">Мои работы</li>
              </a>
              <a href="#contact">
                <li className="nav__items mx__15">Контакты</li>
              </a>
            </ul>
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
                  <a href="#home">Главная</a>
                </li>
                <li className="sideNavbar">
                  <a href="#about">Обо мне</a>
                </li>
                <li className="sideNavbar">
                  <a href="#services">Услуги</a>
                </li>
                <li className="sideNavbar">
                  <a href="#blog">Мои работы</a>
                </li>
                <li className="sideNavbar">
                  <a href="#contact">Контакты</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">
                Добро пожаловать на мою страницу!
              </h1>
              <h2 className="home__text pz__10">Александр Бабак</h2>
              <h3 className="home__text sweet pz__10">JS/React разработчик</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
