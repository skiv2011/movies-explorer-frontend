import React, { useState } from "react";
import FormButtons from "../FormAuth/FormButtons/FormButtons";
import FormLabel from "../FormAuth/FormLabel/FormLabel";
import FormHeader from "../FormAuth/FormHeader/FormHeader";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("pochta@yandex.ru");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="login__container">
        <FormHeader />
        <main className="login__main">
          <form className="login__form">
            <div className="login__inputs">
              <FormLabel
                value={email}
                setValue={setEmail}
                span={"E-mail"}
                placeholder={"Введите e-mail"}
              />
              <FormLabel
                value={password}
                setValue={setPassword}
                span={"Пароль"}
                placeholder={""}
                type="password"
              />
            </div>
            <FormButtons />
          </form>
        </main>
      </div>
    </div>
  );
}

export default Login;
