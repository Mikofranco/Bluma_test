import React from "react";
import BlumaLogo from "../../components/Button&Search/BlumaLogo";
import { Link, NavLink } from "react-router-dom";
import "./signin.css";

function SignIn() {
  return (
    <div className="sign-in">
      <nav className="nav-bar">
        <BlumaLogo />
      </nav>
      <main>
        <div className="container">
          <div className="image-area">{/* <img src={} alt="" /> */}</div>
          <div className="log-section">
            <div className="btns">
              
            </div>
            <div className="login-area">
              <form>
                <input type="email" />
                <input type="password" />
                <button className="login-btn">Login</button>
                Create account <Link>Register here</Link>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignIn;
