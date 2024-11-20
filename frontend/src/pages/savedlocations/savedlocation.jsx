import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SavedLocations.css';

const SavedLocations = () => {
  const [addressFields, setAddressFields] = useState([]);
  const [savedAddresses, setSavedAddresses] = useState([]);
  const userId = 'some-user-id'; // Replace with the actual user ID

  useEffect(() => {
    // Fetch saved locations when the component mounts
    const fetchSavedLocations = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/savedLocations/${userId}`);
        setSavedAddresses(response.data);
      } catch (error) {
        console.error('Error fetching saved locations:', error);
      }
    };

    fetchSavedLocations();
  }, [userId]);

  const addAddressField = () => {
    setAddressFields([
      ...addressFields,
      { id: Date.now(), name: "", address: "", latitude: 0, longitude: 0 },
    ]);
  };

  const handleInputChange = (id, field, value) => {
    setAddressFields((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const saveAddress = async (id) => {
    const field = addressFields.find((item) => item.id === id);
    if (!field.name || !field.address) {
      alert("Both name and address are required!");
      return;
    }

    try {
      const response = await axios.post(`http://localhost:3000/savedLocations`, {
        userId,
        name: field.name,
        address: field.address,
        latitude: field.latitude,
        longitude: field.longitude,
      });

      // Update state with the new saved location
      setSavedAddresses((prev) => [...prev, response.data]);
      setAddressFields((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error saving address:', error);
      alert('Failed to save address. Please try again.');
    }
  };

  const deleteAddress = async (index) => {
    const location = savedAddresses[index];

    try {
      await axios.delete(`http://localhost:3000/savedLocations/${location._id}`);
      setSavedAddresses((prev) => prev.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Error deleting address:', error);
      alert('Failed to delete address. Please try again.');
    }
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
                placeholder="Location Name (e.g., Home, Office)"
                value={field.name}
                onChange={(e) =>
                  handleInputChange(field.id, "name", e.target.value)
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
              <span>{item.name}: {item.address}</span>
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
