import React, { useEffect, useState } from "react";
import "./Home.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Home = () => {
  const [showSavedLocations, setShowSavedLocations] = useState(false);



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
          const pick_lat = coordinates[0].latitude;
          const pick_long = coordinates[0].longitude;
          const dst_lat = coordinates[1].latitude;
          const dst_long = coordinates[1].longitude;

          const message = `Ride from ${pickup} to ${destination} is being processed.\nPickup Coordinates: ${pick_lat}, ${pick_long}\nDestination Coordinates: ${dst_lat}, ${dst_long}`;
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
      const { lat, lng } = data.results[0].geometry;
      return { latitude: lat, longitude: lng };
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    if (document.getElementById("map")._leaflet_id) return;

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
      

      

      {!showSavedLocations && (
        <main className="main-content">
          <div className="input-container">
            <label htmlFor="pickup">Enter Pickup Location:</label>
            <input
              type="text"
              id="pickup"
              placeholder="Enter your pickup location"
            />
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
      )}
    </div>
  );
};

export default Home;
