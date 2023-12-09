import React from "react";
import BlumaLogo from "./Button&Search/BlumaLogo";
import SearchBar from "./Button&Search/SearchBar";
import { NavLink } from "react-router-dom";
import SignUpBtn from "./Button&Search/SignUpBtn";
import SignInBtn from "./Button&Search/SignInBtn ";
import { useState } from "react";
import Notification from "./notification/Notification";
import "./navbar.css"
import Hambuger from "./Button&Search/hambuger";

function NavBar() {
  const [isloggedIn, setIsLoggedIn] = useState(false);


  return (
   <div className="nav-bar-wrapper">
     <div className="nav-bar">
      <BlumaLogo />
      <SearchBar />
      <div className="links">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/post">Post</NavLink>
      </div>
      <div className="notification-login">
        {isloggedIn ? (
          <>
            <Notification/>
          </>
        ) : (
          <div className="check-in">
            <SignUpBtn />
            <SignInBtn />
          </div>
        )}
      </div>
      <Hambuger/>
    </div>
   </div>
  );
}

export default NavBar;
