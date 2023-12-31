import { useState } from "react";
import "./Register.css";
import FormLabel from "../FormAuth/FormLabel/FormLabel";
import FormButtons from "../FormAuth/FormButtons/FormButtons";
import FormHeader from "../FormAuth/FormHeader/FormHeader";

function Register() {
  const [name, setName] = useState("Виталий");
  const [email, setEmail] = useState("pochta@yandex.ru");
  const [password, setPassword] = useState("••••••••••••••");

  return (
    <div className="register">
      <div className="register__container">
        <FormHeader />
        <main className="register__main">
          <form className="register__form">
            <div className="register__inputs">
              <FormLabel
                value={name}
                setValue={setName}
                span={"Имя"}
                placeholder={"Введите имя"}
              />
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
                placeholder={"Введите пароль"}
                classError={"label__input_error"}
                errorMessage={"Что-то пошло не так..."}
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
export default Register;
