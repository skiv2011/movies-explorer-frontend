import "./AboutMe.css";
import studentPhoto from "../../images/student__photo.png";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe () {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__content">
        <h2 className="section-title">Студент</h2>
        <div className="about-me__wrapper">
          <div className="about-me__info">
            <h3 className="about-me__name">Павел</h3>
            <p className="about-me__position">Фронтенд-разработчик</p>
            <p className="about-me__text">
              Я живу в небольшом городке Батайске, пригороде Ростова-на-Дону.
              Работаю пожарным и совмещаю свою работу с работой специалиста в
              Яндексе. Учусь с удовольствием всему новому, стараюсь постигнуть неизведанное.
            </p>
            <a
              href="https://github.com/skiv2011"
              className="about-me__social"
              target="_blank" rel="noreferrer"
            >
              Github
            </a>
          </div>
          <img src={studentPhoto} alt="Павел" className="about-me__photo" />
        </div>
        <Portfolio />
      </div>
    </section>
  );
};

export default AboutMe;
