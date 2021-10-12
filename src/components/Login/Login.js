import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-field">
      <div>
        <h1>Login</h1>
        <form>
          <input type="email" name="email" id="" placeholder="Your email" />
          <br />
          <input type="password" name="password" placeholder="password" />
          <br />
          <br />
          <input type="submit" value="Submit" className="btn-regular" />
        </form>
        <p>
          New to ema john? <Link to="register">Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
