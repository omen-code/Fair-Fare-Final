import React, { useEffect } from "react";
import "./css/App.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const App = () => {
  const openMenu = () => {
    document.getElementById("sideMenu").style.left = "0";
  };

  const closeMenu = () => {
    document.getElementById("sideMenu").style.left = "-100%";
  };

  const getRide = async () => {
    const pickup = document.getElementById("pickup").value;
    const destination = document.getElementById("destination").value;

    if (pickup && destination) {
      try {
        const coordinates = await Promise.all([
          getCoordinates(pickup),
          getCoordinates(destination),
        ]);

        if (coordinates[0] && coordinates[1]) {
          const message = `Ride from ${pickup} to ${destination} is being processed.`;
          alert(message);
          const url = `confirmation.html?pickup=${encodeURIComponent(
            pickup
          )}&destination=${encodeURIComponent(destination)}`;
          window.location.href = url;
        }
      } catch (error) {
        alert("Error processing your ride request.");
      }
    } else {
      alert("Please enter both pickup and destination locations.");
    }
  };

  const getCoordinates = async (address) => {
    const apiKey = "e2166e5815c945c4a8d964b3e4d0c1b0";
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
      address
    )}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results.length === 0) throw new Error("No results found.");
      return data.results[0].geometry;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    const map = L.map("map").setView([12.9716, 77.5946], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: "map_icon.png",
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });

    L.marker([12.9716, 77.5946], { icon: customIcon })
      .addTo(map)
      .bindPopup("Your Location")
      .openPopup();
  }, []);

  return (
    <div className="App">
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
        <a href="profile_html.html">My Profile</a>
        <a href="address.html">Saved Locations</a>
        <a href="wallet.html">Wallet</a>
        <a href="settings.html">Settings</a>
        <a href="fairfare_about.html">About Us</a>
        <a href="login_html.html">Logout</a>
      </div>

      <main className="main-content">
        <div className="input-container">
          <label htmlFor="pickup">Enter Pickup Location:</label>
          <input type="text" id="pickup" placeholder="Enter your pickup location" />
          <label htmlFor="destination">Enter Destination:</label>
          <input
            type="text"
            id="destination"
            placeholder="Enter your destination"
          />
        </div>
        <div className="map-placeholder">
          <div id="map"></div>
        </div>
        <button onClick={getRide}>Get Ride</button>
      </main>

      <footer>
        <hr color="yellow" />
        <h2>FairFare</h2>
        <p>Contact Us Online:</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/fair_fare.official/profilecard/">
            <img src="insta_logo.jpg" alt="Instagram Logo" />
          </a>
          <a href="#"><img src="facebook_logo.png" alt="Facebook Logo" /></a>
          <a href="#"><img src="x_logo.png" alt="X Logo" /></a>
        </div>
        <a href="tc.html">Terms & Conditions</a>
        <p>&copy; 2024 FairFare. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
