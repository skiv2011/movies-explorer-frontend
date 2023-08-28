import React from "react";
import "./FormHeader.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../images/logo.svg";

function FormHeader() {
  const location = useLocation();
  return (
    <header className="form-header">
      <Link to={"/"}>
        <img src={logo} alt="Логотип проекта" className="form-header__logo" />
      </Link>
      <h1 className="form-header__title">
        {location.pathname === "/signup" ? "Добро пожаловать!" : "Рады видеть!"}
      </h1>
    </header>
  );
}

export default FormHeader;
