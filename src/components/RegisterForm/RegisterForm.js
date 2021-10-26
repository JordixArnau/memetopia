import React from "react";

import "./style/registerform.css";

function RegisterForm() {
  return (
    <div className="register">
      <h2>Register</h2>
      <form name="register-form" className="register-form">
        <label>
          Username
          <input></input>
        </label>
        <label>
          <input></input>
        </label>
        <div className="input-pass-group">
          <label>
            <input></input>
          </label>
          <label>
            <input></input>
          </label>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
