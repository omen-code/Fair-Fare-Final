import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <hr color="yellow" />
      <h2>FairFare</h2>
      <p>Contact Us Online:</p>
      <div className="social-icons">
        <a href="https://www.instagram.com/fair_fare.official/profilecard/">
          <img src="insta_logo.jpg" alt="Instagram Logo" />
        </a>
        <a href="#">
          <img src="facebook_logo.png" alt="Facebook Logo" />
        </a>
        <a href="#">
          <img src="x_logo.png" alt="X Logo" />
        </a>
      </div>
      <a href="tc.html">Terms & Conditions</a>
      <p>&copy; 2024 FairFare. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
