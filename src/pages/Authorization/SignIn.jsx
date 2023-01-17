import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SigninCss from "./SignIn.module.css";

function SingIn() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className={SigninCss.authContainer}>
      <form className={SigninCss.authLogin} onSubmit={handleSubmit}>
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
        <button className={SigninCss.signBtn} type="submit">
          Sing in
        </button>
        <button className={SigninCss.registerBtn}>
          <NavLink to="/register">Don't have an account? Register</NavLink>
        </button>
      </form>
    </div>
  );
}

export default SingIn;
