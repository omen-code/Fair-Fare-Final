import React from "react";
import "./Navbar.css";

const Navbar = () => {
    const openMenu = () => {
        document.getElementById("sideMenu").style.left = "0";
      };
    
      const closeMenu = () => {
        document.getElementById("sideMenu").style.left = "-100%";
      };
  return (
    <div>
    <header className="half-ellipse-header">
      <div className="menu-icon" onClick={openMenu}>
        &#9776;
      </div>
      <div className="logo">
        <h2>FairFare</h2>
        <p>Your Favourite Riding Partner</p>
      </div>
      <nav className="nav-links">
        <a href="profile_html.html">Profile</a>
        <a href="wallet.html">Wallet</a>
        <a href="login_html.html">Logout</a>
      </nav>
    </header>

    <div className="side-menu" id="sideMenu">
        <a href="#" onClick={closeMenu}>
          &#8592;Back
        </a>
        <a onClick={() => setShowSavedLocations(true)}>Saved Locations</a>
        <a href="wallet.html">Wallet</a>
        <a href="settings.html">Settings</a>
        <a href="fairfare_about.html">About Us</a>
        <a href="login_html.html">Logout</a>
      </div>
    </div>
    
  );
};

export default Navbar;
