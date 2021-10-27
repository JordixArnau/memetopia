import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { register } from "../../api/api";

import "./style/registerform.css";

function RegisterForm() {
  const [confirmPass, setConfirmPass] = useState(false);
  const [pass, setPass] = useState({ password: "", confirmation: "" });

  const history = useHistory();

  useEffect(() => {
    passConfirmation();
  }, [pass]);

  function passConfirmation() {
    if (pass.password === pass.confirmation) {
      setConfirmPass(true);
    } else {
      setConfirmPass(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const userData = {
      userName: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };

    history.push("../");

    try {
      await register(userData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="register">
      <h2>Register</h2>
      <form
        name="register-form"
        className="register-form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="input-data">
          <label>
            Username
            <input
              type="text"
              name="userName"
              placeholder="Choose a username"
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="Please, a real email..."
              required
            />
          </label>
        </div>

        <div className="input-pass-group">
          <label>
            Password
            <input
              value={pass.password}
              onChange={(e) => setPass({ ...pass, password: e.target.value })}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
              name="password"
              type="password"
              required
            />
          </label>
          <label>
            Repeat password
            <input
              value={pass.confirmation}
              onChange={(e) =>
                setPass({ ...pass, confirmation: e.target.value })
              }
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
              name="confirmation"
              type="password"
              className={confirmPass ? "is-valid" : "not-valid"}
              required
            />
          </label>
        </div>
        <div className="input-pass-message">
          The password must have 8 characters or more, 1 uppercase letter, 1
          lowercase letter and 1 number.
        </div>

        <div className="input-button-group">
          <button onClick={() => history.push("../")}>Go back!</button>
          <button type="submit" disabled={!confirmPass}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
