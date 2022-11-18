import React from "react";
import logo from "../assets/images/Logo.png";
import arrowdown from "../assets/images/arrow-down.png";
import search from "../assets/images/searchIcon.png";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <img src={logo} alt="" width={130} />
      <div className="navlinks-container">
        <ul>
          <li>Home</li>
          <li className="link-arrow">
            Teams <img src={arrowdown} alt="" width={20} />
          </li>
          <li>FAQ's</li>
          <li>About HNG</li>
        </ul>
        <div className="search">
          <img src={search} alt="" width={24} />

          <input
            type="text"
            placeholder="Search about HNG, teams and mentors"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
