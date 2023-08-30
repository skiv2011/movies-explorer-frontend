import "./AboutMe.css";
import studentPhoto from "../../images/student__photo.jpg";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <hr className="about-me__line"></hr>
      <div className="about-me__wrapper">
        <div className="about-me__info">
          <h3 className="about-me__name">Павел</h3>
          <p className="about-me__position">Фронтенд-разработчик</p>
          <p className="about-me__description">
            Я живу в небольшом городке Батайске, пригороде Ростова-на-Дону.
            Работаю пожарным и совмещаю свою работу с работой специалиста в
            Яндексе. Учусь с удовольствием всему новому, стараюсь постигнуть
            неизведанное.
          </p>
          <a
            href="https://github.com/skiv2011"
            className="about-me__social"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={studentPhoto} alt="Павел" className="about-me__photo" />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
