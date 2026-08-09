import React from "react";
import StatCard from "../Components/StatCard";

export default function DashboardHome() {
  return (
    <div className="page">
      <section className="hero-card">
        <h2>Welcome to your Travel Dashboard</h2>
        <p>Plan, track, and manage all your travel activities from a single place.</p>
      </section>

      <section className="stats-grid">
        <StatCard title="Upcoming Trips" value="04" icon="🧳" />
        <StatCard title="Total Bookings" value="12" icon="✅" />
        <StatCard title="Saved Trips" value="08" icon="❤️" />
        <StatCard title="Active Alerts" value="03" icon="🔔" />
      </section>

      <section className="content-grid">
        <div className="panel">
          <h3>Upcoming Trips</h3>
          <ul className="trip-list">
            <li>Goa, India — 12 Aug 2026</li>
            <li>Dubai, UAE — 25 Sep 2026</li>
            <li>Paris, France — 10 Oct 2026</li>
          </ul>
        </div>

        <div className="panel">
          <h3>Saved Trips</h3>
          <ul className="trip-list">
            <li>Manali Winter Package</li>
            <li>Kerala Backwaters</li>
            <li>Bali Beach Holiday</li>
          </ul>
        </div>
      </section>
    </div>
  );
}