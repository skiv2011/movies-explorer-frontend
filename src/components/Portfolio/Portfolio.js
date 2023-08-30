import "./Portfolio.css";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <nav>
        <ul className="portfolio__links-list">
          <li className="portfolio__links-item">
            <Link
              to={"https://github.com/skiv2011/how-to-learn"}
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              Статичный сайт<span className="portfolio__arrow">&#8599;</span>
            </Link>
          </li>
          <li className="portfolio__links-item">
            <Link
              to={"https://github.com/skiv2011/russian-travel"}
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              Адаптивный сайт<span className="portfolio__arrow">&#8599;</span>
            </Link>
          </li>
          <li className="portfolio__links-item">
            <Link
              to={"https://github.com/skiv2011/react-mesto-api-full-gha"}
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              Одностраничное приложение
              <span className="portfolio__arrow">&#8599;</span>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;
