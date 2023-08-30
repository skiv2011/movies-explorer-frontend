import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__header">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__credits">
        <p className="footer__item footer__item_year">
          &copy; {new Date().getFullYear()}
        </p>
        <nav>
          <ul className="footer__items">
            <li>
              <Link
                to={"https://practicum.yandex.ru/"}
                className="footer__item"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </Link>
            </li>
            <li>
              <Link
                to={"https://github.com/skiv2011"}
                className="footer__item"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
