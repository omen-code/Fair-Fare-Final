import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Navbar.css";

const Navbar = () => {
  const openMenu = () => {
    document.getElementById("sideMenu").style.left = "0";
  };

  const closeMenu = () => {
    document.getElementById("sideMenu").style.left = "-100%";
  };

  return (
    <div className="nav-main">
      <header className="half-ellipse-header">
        <div className="menu-icon" onClick={openMenu}>
          &#9776;
        </div>
        <div className="logo">
          <h2>FairFare</h2>
        </div>

        <nav className="nav-links">
          <Link to="/profile">Profile</Link>
          <Link to="/wallet">Wallet</Link>
          <Link to="/login">Logout</Link>
        </nav>
      </header>
      <p>Your Favourite Riding Partner</p>
      <div className="side-menu" id="sideMenu">
        <a href="#" onClick={closeMenu}>
          &#8592;Back
        </a>
        <Link to="/saved-locations">Saved Locations</Link>

        <Link to="/about">About Us</Link>
        <Link to="/login">Logout</Link>
      </div>
    </div>
  );
};

export default Navbar;
