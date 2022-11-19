import React from "react";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import logo from "../assets/images/Logo.png";
import global from "../assets/images/global.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <img src={logo} alt="logo" width={130} className="logo" />
      <div className="copyright">
        <p>
          {" "}
          <span>&copy;</span> 2022 HNG. All Rights duly Reserved
        </p>
      </div>
      <div className="language">
        <img src={global} alt="global" width={24} />
        <span>English (US)</span>
      </div>
      <div className="social-icons">
        <img src={facebook} alt="facebook" width={20} />
        <img src={instagram} alt="instagram" width={20} />{" "}
        <img src={twitter} alt="twitter" width={20} />
      </div>
    </div>
  );
};

export default Footer;
