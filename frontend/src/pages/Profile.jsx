import React, { useState } from "react";

export default function Profile() {
  const [profileImage, setProfileImage] = useState(
    "https://i.pravatar.cc/150?img=12"
  );

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  return (
    <div className="page">
      <div className="panel profile-card">

        {/* Profile Picture */}
        <label htmlFor="profile-upload">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-pic"
          />
        </label>

        {/* Choose New Picture */}
        <input
          id="profile-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />

        <p className="change-photo-text">
          Click photo to change
        </p>

        {/* Your existing information */}
        <h2>Sameer Sharma</h2>
        <p>sameers@email.com</p>

        <div className="profile-details">
          <p>
            <strong>Phone No.:</strong> +91 987 654 3210
          </p>

          <p>
            <strong>Address:</strong> 221B, Baker Street, Mumbai
          </p>
        </div>

      </div>
    </div>
  );
}