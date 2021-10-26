import React from "react";

import logo from "../../assets/memetopia_logo.png";
import "./style/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-section navbar-info">
        <div className="navbar-icon">
          <img src={logo} alt="Memetopia"></img>
        </div>
        <div className="navbar-section-categories">
          <a href="#">
            <span className="navbar-category">Memes</span>
          </a>
          <a href="#">
            <span className="navbar-category">Gifs</span>
          </a>
          <a href="#">
            <span className="navbar-category">Classics</span>
          </a>
          <a href="#">
            <span className="navbar-category">Hot!</span>
          </a>
        </div>
        <div className="navbar-upload"></div>
        <div className="navbar-login navbar-button">
          <button>Login</button>
        </div>
        <div className="navbar-register navbar-button">
          <button>Register</button>
        </div>
        <div className="navbar-user"></div>
      </div>
      <div className="navbar-section navbar-search">
        <input type="text" className="searchbar"></input>
      </div>
    </div>
  );
}

export default Navbar;
