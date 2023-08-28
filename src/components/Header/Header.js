import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ place, isLogged }) {
  return (
    <header className={`header header_place_${place}`}>
      <Link to="/" className="header__logo" />
      <Navigation isLogged={isLogged} />
    </header>
  );
}

export default Header;
