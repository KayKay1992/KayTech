import React from "react";
import "./Navbar.css";
import logo from "../../assets/kaytechLogo.png";

function Navbar() {
  return (
    <div>
      <nav className="nav-dark">
        <div className="nav-brand">
          <img src={logo} alt="" />
        </div>
        <ul className="nav-links open">
          <li>Home</li>
          <li>Courses</li>
          <li>Contact</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Testimonials</li>
        </ul>
        <div className="menu-icon open">
          <div className="menu-icons">
            <span className="icon"></span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
