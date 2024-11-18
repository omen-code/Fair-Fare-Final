import React, { useState } from "react";
import "./SavedLocations.css";

const SavedLocations = () => {
  const [addressFields, setAddressFields] = useState([]);
  const [savedAddresses, setSavedAddresses] = useState([]);

  const addAddressField = () => {
    setAddressFields([
      ...addressFields,
      { id: Date.now(), type: "", address: "" },
    ]);
  };

  const handleInputChange = (id, field, value) => {
    setAddressFields((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const saveAddress = (id) => {
    const field = addressFields.find((item) => item.id === id);
    if (!field.type || !field.address) {
      alert("Both address type and address are required!");
      return;
    }
    setSavedAddresses((prev) => [...prev, field]);
    setAddressFields((prev) => prev.filter((item) => item.id !== id));
  };

  const deleteAddress = (index) => {
    setSavedAddresses((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="saved-locations-container">
      <header>
        <h2>FairFare</h2>
      </header>
      <div className="app-container">
        <p>Saved Locations</p>
        <div className="address-section">
          {addressFields.map((field) => (
            <div className="address-input-group" key={field.id}>
              <input
                type="text"
                placeholder="Address Type (e.g., Cafe, Gym)"
                value={field.type}
                onChange={(e) =>
                  handleInputChange(field.id, "type", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Enter Address"
                value={field.address}
                onChange={(e) =>
                  handleInputChange(field.id, "address", e.target.value)
                }
              />
              <button onClick={() => saveAddress(field.id)}>&#10003;</button>
            </div>
          ))}
        </div>
        <button className="add-button" onClick={addAddressField}>
          + Add Address
        </button>
        <div className="address-container">
          {savedAddresses.map((item, index) => (
            <div className="address-item" key={index}>
              <span>{item.type}: {item.address}</span>
              <button className="delete-button" onClick={() => deleteAddress(index)}>
                &#x2716;
              </button>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <div className="foot">
          <hr color="yellow" />
          <h2>FairFare</h2>
          <p>Contact Us Online:</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/fair_fare.official/">
              <img src="insta_logo.jpg" alt="Instagram" />
            </a>
            <img src="facebook_logo.png" alt="Facebook" />
            <img src="x_logo.png" alt="X" />
          </div>
          <a href="tc.html">Terms & Conditions</a>
          <p>&copy; 2024 FairFare. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SavedLocations;