import React from "react";
import BlumaLogo from "../../components/Button&Search/BlumaLogo";

function SignUp() {
  return (
    <div>
      <BlumaLogo />
      <div className="sign-up-container">
        <div className="image-container">image</div>
        <div className="main">
          <div className="swap-btns">
            <button>Login</button>
            <button>Sign in</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default SignUp;
