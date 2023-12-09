import React from "react";
import "./footer.css";
import twitter from "../components/assets/twitter.svg"
import fb from "../components/assets/fb.svg"
import linkedin from "../components/assets/linkedin.svg"
function Footer(props) {
  return (
    <div className="footer" id={props.id}>
      <h1>
        Blu<span>ma</span>
      </h1>
      <div className="links">
        <li>
          <a href="http://linkedin.com"></a>Linkedin
          <img src={linkedin} alt="" />
        </li>
        <li>
          <a href="http://twitter.com"></a>Twitter
          <img src={twitter} alt="" />
        </li>
        <li>
          <a href="http://fb.com"></a>Facebook
          <img src={fb} alt="" />
        </li>
      </div>
      <div className="sponsors">
        
      </div>
    </div>
  );
}

export default Footer;
