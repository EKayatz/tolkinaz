import React from "react";

function Footer() {
  return (
    <footer className="footer cutter-big">
      <div className="footer__container container">
        <h1 className="footer__title">Tolkin</h1>

        <ul className="footer__social">
          <a
            href="https://www.youtube.com/c/TolkinLoL"
            className="home__social-link"
          >
            <i className="bx bxl-youtube"></i>
          </a>
          <a
            href="https://www.twitch.tv/tolkinlol"
            className="home__social-link"
          >
            <i className="bx bxl-twitch"></i>
          </a>
          <a
            href="https://twitter.com/TolkinLoL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            className="home__social-link"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/tolkinlol/?hl=de"
            className="home__social-link"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </ul>

        <span className="footer__copy">Elias Kayatz</span>
      </div>
    </footer>
  );
}

export default Footer;
