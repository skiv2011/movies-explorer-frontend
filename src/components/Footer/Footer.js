import './Footer.css';
import {Link} from 'react-router-dom';

function Footer () {
    return (
        <footer className='footer'>
            <p className="footer__header">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <hr className="footer__line" />
      <div className="footer__credits">
        <p className="footer__item footer__item_year">&copy; {new Date().getFullYear()}</p>
        <Link className="footer__item footer__item_pract" to="https://practicum.yandex.ru">Яндекс.Практикум</Link>
        <Link className="footer__item footer__item_git" to="https://github.com/skiv2011">GitHub</Link>
      </div>
      </footer>
    );
}

export default Footer;
