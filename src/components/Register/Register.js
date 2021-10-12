import React from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Register.css";
const Register = () => {
  const { signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/shop";
  const handleGoogleSignin = () => {
    signInWithGoogle().then((result) => {
      history.push(redirect_url);
    });
  };
  return (
    <div className="register-field">
      <div>
        <h1>Register</h1>
        <form>
          <input type="text" name="" id="" placeholder="Your Name" />
          <br />
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <input type="password" placeholder="Re-enter Password" />
          <br />
          <br />
          <input type="submit" value="Submit" className="btn-regular" />
        </form>
        <h4>-----------Or----------</h4>
        <button onClick={handleGoogleSignin} className="btn-regular">
          Sign in with google
        </button>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
