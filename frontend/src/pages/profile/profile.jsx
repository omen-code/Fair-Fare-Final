import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    mobile: "1234567890",
    gender: "Male",
    emergency: "1234567890",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [profilePic, setProfilePic] = useState("user_icon.png");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    setMessage("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleGenderChange = (e) => {
    setProfile({ ...profile, gender: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    setMessage("Profile updated successfully!");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedFile(file);
        setShowModal(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfirmPic = () => {
    if (selectedFile) {
      const newProfilePicURL = URL.createObjectURL(selectedFile);
      setProfilePic(newProfilePicURL);
      setShowModal(false);
      setMessage("Profile picture updated successfully!");
    }
  };

  const handleCancelPic = () => {
    setShowModal(false);
  };

  return (
    <div>
      <main className="profile-main">
        <div className="profile-head">
          <h2>
            <u>My Profile</u>
          </h2>
        </div>
        <div className="profile-info">
          <img id="profile-pic" src={profilePic} alt="Profile Picture" />
          <div className="profile-details">
            <div className="profile-item">
              <label htmlFor="name">Name:</label>
              {isEditing ? (
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                />
              ) : (
                <span id="name">{profile.name}</span>
              )}
            </div>
            <div className="profile-item">
              <label htmlFor="email">Email:</label>
              {isEditing ? (
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
              ) : (
                <span id="email">{profile.email}</span>
              )}
            </div>
            <div className="profile-item">
              <label htmlFor="mobile">Mobile:</label>
              {isEditing ? (
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={profile.mobile}
                  onChange={handleChange}
                />
              ) : (
                <span id="mobile">{profile.mobile}</span>
              )}
            </div>
            <div className="profile-item">
              <label htmlFor="gender">Gender:</label>
              {isEditing ? (
                <div id="gender">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={profile.gender === "Male"}
                      onChange={handleGenderChange}
                    />{" "}
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={profile.gender === "Female"}
                      onChange={handleGenderChange}
                    />{" "}
                    Female
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      checked={profile.gender === "Other"}
                      onChange={handleGenderChange}
                    />{" "}
                    Other
                  </label>
                </div>
              ) : (
                <span id="gender">{profile.gender}</span>
              )}
            </div>
            <div className="profile-item">
              <label htmlFor="emergency">Emergency Contact:</label>
              {isEditing ? (
                <input
                  type="tel"
                  id="emergency"
                  name="emergency"
                  value={profile.emergency}
                  onChange={handleChange}
                />
              ) : (
                <span id="emergency">{profile.emergency}</span>
              )}
            </div>
            <br />
            <div className="button-container">
              <button
                id="edit-pic-btn"
                className="btn"
                style={{ display: isEditing ? "inline" : "none" }}
                onClick={() => document.getElementById("fileInput").click()}
              >
                Edit Profile Picture
              </button>
              <button
                id="edit-btn"
                className="btn"
                onClick={isEditing ? handleSave : handleEdit}
              >
                {isEditing ? "Save" : "Edit"}
              </button>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        <div className="message" id="message">
          {message}
        </div>
      </main>

      {showModal && (
        <div id="modal" className="modal">
          <div className="profile-modal-content">
            <span className="close" id="close" onClick={handleCancelPic}>
              &times;
            </span>
            <h3>Confirm Profile Picture</h3>
            <img
              id="preview"
              src={URL.createObjectURL(selectedFile)}
              alt="Profile Preview"
            />
            <div className="profile-modal-buttons">
              <button
                id="confirm-btn"
                className="btn"
                onClick={handleConfirmPic}
              >
                Confirm
              </button>
              <button id="cancel-btn" className="btn" onClick={handleCancelPic}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
