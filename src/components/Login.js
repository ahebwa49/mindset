import React from "react";
//import "./style.css";

class Login extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Login </h2>
          <form noValidate action="http://localhost:4000/login" method="post">
            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email" name="username" noValidate />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" noValidate />
            </div>
            <div className="submit">
              <button type="submit">Login</button>
            </div>
          </form>
          <div>
            <button>
              {/*eslint-disable-next-line*/}
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="http://localhost:4000/auth/github"
              >
                Login with Github
              </a>
            </button>
          </div>
          <br />
          <div>
            New to mindset? Create an account{" "}
            <a href="http://localhost:3000/register">here</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
