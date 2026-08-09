import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-logo">✈</div>
        <div>
          <h3>Travel Planner</h3>
          <p>User Dashboard</p>
        </div>
      </div>

      <nav className="nav-links">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
          Dashboard Home
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
          My Profile
        </NavLink>
        <NavLink to="/edit-profile" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
          Edit Profile
        </NavLink>
        <NavLink to="/bookings" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
          My Bookings
        </NavLink>
        <NavLink to="/notifications" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
          Notifications
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}