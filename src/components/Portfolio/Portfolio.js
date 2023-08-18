import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links-list">
        <li className="portfolio__links-item">
          <a
            href="https://github.com/skiv2011/how-to-learn"
            className="portfolio__link"
            target="_blank"
          >
            Статичный сайт<span className="portfolio__arrow">&#8599;</span>
          </a>
        </li>
        <li className="portfolio__links-item">
          <a
            href="https://github.com/skiv2011/russian-travel"
            className="portfolio__link"
            target="_blank"
          >
            Адаптивный сайт<span className="portfolio__arrow">&#8599;</span>
          </a>
        </li>
        <li className="portfolio__links-item">
          <a
            href="https://github.com/skiv2011/react-mesto-api-full-gha"
            className="portfolio__link"
            target="_blank"
          >
            Одностраничное приложение<span className="portfolio__arrow">&#8599;</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
