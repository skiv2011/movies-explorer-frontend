import Form from "../Form/Form";
import { useFormValidation } from "../../utils/useFormValidation";
import "./Login.css";

function Login({ onLogin, formError, isSubmiting }) {
  const logForm = useFormValidation({ email: "", password: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    onLogin({
      email: logForm.values.email,
      password: logForm.values.password,
    });
  };

  return (
    <main>
      <section className="login">
        <div className="login__container">
          <Form
            header="Рады видеть!"
            askText="Ещё не зарегистрированы?"
            askLinkText="Регистрация"
            askLink="/signup"
            submitBtnText="Войти"
            onSubmit={onSubmit}
            formError={formError}
            isValid={logForm.isValid}
            isSubmiting={isSubmiting}
          >
            <label className="form__label">
              E-mail
              <input
                className={
                  logForm.errors.email
                    ? "form__input form__input-error"
                    : "form__input"
                }
                placeholder="pochta@yandex.ru|"
                type="email"
                required
                name="email"
                value={logForm.values.email}
                onChange={(e) => logForm.handleChange(e)}
                noValidate
              />
            </label>
            <span className="form__input-text-error">
              {logForm.errors.email}
            </span>
            <label className="form__label">
              Пароль
              <input
                className={
                  logForm.errors.password
                    ? "form__input form__input-error"
                    : "form__input"
                }
                type="password"
                placeholder="Ваш пароль"
                required
                name="password"
                value={logForm.values.password}
                onChange={(e) => logForm.handleChange(e)}
                noValidate
              />
            </label>
            <span className="form__input-text-error">
              {logForm.errors.password}
            </span>
          </Form>
        </div>
      </section>
    </main>
  );
}

export default Login;
