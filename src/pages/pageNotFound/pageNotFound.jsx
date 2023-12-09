import React from "react";
import BlumaLogo from "../../components/Button&Search/BlumaLogo";
import { NavLink } from "react-router-dom";
import "./pagenotfound.css";
import Footer from "../../components/footer";

function PageNotFound() {
  return (
    <div className="page-not-found">
      <nav className="nav-bar">
        <BlumaLogo />
        <div className="links">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/product">Product</NavLink>
          <NavLink to="/post-view">view posts</NavLink>
        </div>
      </nav>
      <main>
        <div className="container">
          <h1 className="main-text">Page not found </h1>
          <h1 className="logo-icon">
            Blu<span>ma</span>
          </h1>
        </div>
      </main>
      <footer>
        {/* <Footer id="footer" /> */}
      </footer>
    </div>
  );
}

export default PageNotFound;
