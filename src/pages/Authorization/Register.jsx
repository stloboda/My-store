import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import RegisterCss from "./Register.module.css";
import SigninCss from "./SignIn.module.css";

function Register() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className={SigninCss.authContainer}>
      <form className={SigninCss.authLogin} onSubmit={handleSubmit}>
        <label className={SigninCss.authLabel} htmlFor="name">
          Name
        </label>
        <input
          className={SigninCss.authInput}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="name"
          placeholder="Enter your name"
          id="name"
          name="name"
        />
        <label className={SigninCss.authLabel} htmlFor="email">
          Email
        </label>
        <input
          className={SigninCss.authInput}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          id="email"
          name="email"
        />
        <label className={SigninCss.authLabel} htmlFor="password">
          Password
        </label>
        <input
          className={SigninCss.authInput}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button className={RegisterCss.registerBtn} type="submit">
          Register
        </button>
        <button className={RegisterCss.signBtn}>
          <NavLink to="/signin">Already have an account? Sign In</NavLink>
        </button>
      </form>
    </div>
  );
}

export default Register;
