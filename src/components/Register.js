import React from "react";
//import "./style.css";

const Register = () => {
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h2>Register </h2>
        <form noValidate action="http://localhost:4000/register" method="post">
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" name="username" noValidate />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" noValidate />
          </div>
          <div className="submit">
            <button type="submit">Register</button>
          </div>
        </form>
        <br />
        <div>
          Have an account already? Login{" "}
          <a href="http://localhost:3000/login">here</a>
        </div>
      </div>
    </div>
  );
};
export default Register;
