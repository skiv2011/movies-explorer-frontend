import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="not-found">
      <section>
        <div className="not-found__wrapper">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__description">Страница не найдена</p>
        </div>
        <Link to="/" className="not-found__link">
          Назад
        </Link>
      </section>
    </main>
  );
}

export default NotFound;
