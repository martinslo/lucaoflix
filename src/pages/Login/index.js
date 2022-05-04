import React, { useState } from "react";
import "./login.css";
import { login } from "../../services/login.service";

function Login() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setError("")
    setLoading(true);
    console.log("handleSubmit");
    const email = e.target.email.value;
    const password = e.target.password.value;
    const { user, error } = await login(email, password);
    if (error || !user) setError(error);
    else {
      console.log(user)
    }
    setLoading(false);
  };

  const formClassName = `login__form form ${error ? "form--error" : ""}`;
  const brandClassName = `brand ${loading ? "brand--animation" : ""}`;

  return (
    <div className="login">
      <img
        className={brandClassName}
        height={64}
        src="/lucasflix.png"
        alt="LucasFlix"
      />
      {loading && <div>Fazendo o login...</div>}
      <form className={formClassName} onSubmit={handleSubmit}>
        <input
          className="form__input"
          type="email"
          name="email"
          id="email"
          placeholder="E-MAIL"
        />
        <input
          className="form__input"
          type="password"
          name="password"
          id="password"
          placeholder="SENHA"
        />

        <div>{error}</div>
        <button
          disabled={loading}
          className="button button--primary"
          type="submit"
          name="submit"
          id="submit"
        >
          ENTRAR
        </button>
      </form>
    </div>
  );
}

/*
BEM

Block: login
Element: login__form
Modifier: login__form--has-error

*/

export default Login;
