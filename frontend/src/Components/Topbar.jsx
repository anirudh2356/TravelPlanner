import React from "react";

export default function Topbar({ darkMode, setDarkMode }) {
  return (
    <header className="topbar">
      <div>
        <h1>Welcome back, Traveler 👋</h1>
        <p>Manage your trips, profile, and settings in one place.</p>
      </div>

      <div className="topbar-actions">
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <div className="user-chip">SS</div>
      </div>
    </header>
  );
}