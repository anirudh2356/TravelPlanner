import React from "react";

export default function Profile() {
  return (
    <div className="page">
      <div className="panel profile-card">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Profile"
          className="profile-pic"
        />
        <h2>Sameer Sharma</h2>
        <p>sameers@email.com</p>

        <div className="profile-details">
          <p><strong>Phone No.:</strong> +1 987 654 3210</p>
          <p><strong>Address:</strong> 221B, Baker Street, London</p>
        </div>
      </div>
    </div>
  );
}