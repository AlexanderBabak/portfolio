import React from "react";
import { ReactComponent as FacebookIcon } from "../../img/facebook-svgrepo-com.svg";
import { ReactComponent as InstagramIcon } from "../../img/instagram-svgrepo-com.svg";
import { ReactComponent as GitHub } from "../../img/github-svgrepo-com.svg";
import { ReactComponent as Telegram } from "../../img/telegram-svgrepo-com.svg";

function Footer() {
  return (
    <div
      className="footer d__flex align__items__center justify__content__center pz-10"
      style={{ padding: "20px 20px", zIndex: "100" }}
    >
      <a
        href="https://www.facebook.com/alexander.babak.7"
        target="_blank"
        rel="noreferrer"
        style={{ cursor: "pointer", marginRight: 10 }}
      >
        <FacebookIcon />
      </a>
      <a
        href="https://www.instagram.com/bbkshow1/"
        target="_blank"
        rel="noreferrer"
        style={{ cursor: "pointer", marginRight: 10 }}
      >
        <InstagramIcon />
      </a>
      <a
        href="https://github.com/AlexanderBabak"
        target="_blank"
        rel="noreferrer"
        style={{ cursor: "pointer", marginRight: 10 }}
      >
        <GitHub />
      </a>
      <a
        href="https://t.me/bbkshow"
        target="_blank"
        rel="noreferrer"
        style={{ cursor: "pointer", marginRight: 10 }}
      >
        <Telegram />
      </a>
    </div>
  );
}

export default Footer;
