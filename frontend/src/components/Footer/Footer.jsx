import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <hr color="yellow" />
      <h2>FairFare</h2>
      <p>Contact Us Online:</p>
      <div className="social-icons">
        <a href="https://www.instagram.com/fair_fare.official/profilecard/">
          Instagram
        </a>
        <a href="#">Facebook</a>
        <a href="#">X</a>
      </div>
      <Link to="/terms-and-conditions">Terms & Conditions</Link>

      <p>&copy; 2024 FairFare. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
