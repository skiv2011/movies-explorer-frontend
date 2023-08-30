import Header from "../Header/Header";
import "./Main.css";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import AboutMe from "../AboutMe/AboutMe";
import Techs from "../Techs/Techs";
import NavTab from "../NavTab/NavTab";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <>
      <Header place="main" isLogged={false} />
      <main>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}

export default Main;
