import React, { useEffect } from "react";
import "./confirmation.css";

const Confirmation = () => {
  useEffect(() => {
    generateDetails();
  }, []);

  const generateDetails = () => {
    const modes = [
      {
        name: "Auto",
        image: "taxiauto.png",
      },
      {
        name: "Bike",
        image: "taxibike.webp",
      },
      {
        name: "Cab Mini",
        image: "minicar.jpg",
      },
      {
        name: "Cab",
        image: "car picture.png",
      },
    ];

    const services = ["Uber", "Ola", "Rapido"];
    const logos = {
      Uber: "uber_icon.jpg",
      Ola: "ola_icon.jpg",
      Rapido: "rapido_icon.jpg",
    };

    const comparisonSection = document.querySelector(".comparison-section");

    // Populate transport options
    modes.forEach((mode, index) => {
      document.getElementById(`mode${index}`).innerHTML = `
        <img src="${mode.image}" alt="${mode.name}" class="ride-image">
        <h3>${mode.name}</h3>
      `;

      // Populate comparison section for this mode
      services.forEach((service) => {
        const comparisonPrice = Math.floor(Math.random() * 200) + 50;
        const comparisonETA = Math.floor(Math.random() * 15) + 1;

        const card = document.createElement("div");
        card.classList.add("comparison-card");
        card.innerHTML = `
          <img src="${logos[service]}" alt="${service} Logo" class="service-logo">
          <p>Price: ₹${comparisonPrice}</p>
          <p>ETA: ${comparisonETA} min</p>
        `;
        comparisonSection.appendChild(card);
      });
    });
  };

  return (
    <div>
      <h3>Choose Your Preferred Ride</h3>
      <div className="container">
        {/* Transport Options Section */}
        <div className="transport-options">
          <div id="mode0" className="ride-option"></div>
          <div id="mode1" className="ride-option"></div>
          <div id="mode2" className="ride-option"></div>
          <div id="mode3" className="ride-option"></div>
        </div>

        {/* Comparison Section */}
        <div className="comparison-section"></div>
      </div>
    </div>
  );
};

export default Confirmation;
