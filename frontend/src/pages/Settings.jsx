import React, { useState } from "react";

export default function Settings() {
  const [password, setPassword] = useState("");
  const [darkToggle, setDarkToggle] = useState(false);

  const handleLogout = () => {
    alert("Logged out successfully!");
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    alert("Password changed successfully!");
    setPassword("");
  };

  return (
    <div className="page">
      <div className="panel settings-card">
        <h2>Settings</h2>

        <form onSubmit={handlePasswordChange} className="settings-form">
          <label>Change Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="primary-btn">
            Update Password
          </button>
        </form>

        <div className="toggle-row">
          <span>Dark mode toggle</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={darkToggle}
              onChange={() => setDarkToggle(!darkToggle)}
            />
            <span className="slider"></span>
          </label>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}