import React from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

import "./style/register.css";

function Register() {
  return (
    <div className="register-back">
      <div className="register-overlay"></div>
      <RegisterForm />
    </div>
  );
}

export default Register;
