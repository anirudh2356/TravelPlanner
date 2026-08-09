import React, { useState } from "react";

const initialNotifications = [
  "Your trip to Goa is confirmed.",
  "Your Dubai booking has been cancelled.",
  "New discount available for Bali packages.",
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAllAsRead = () => {
    setNotifications([]);
  };

  return (
    <div className="page">
      <div className="panel">
        <div className="section-header">
          <h2>Notifications</h2>
          <button className="secondary-btn" onClick={markAllAsRead}>
            Mark as read
          </button>
        </div>

        {notifications.length === 0 ? (
          <p>No new notifications.</p>
        ) : (
          <ul className="notification-list">
            {notifications.map((note, index) => (
              <li key={index} className="notification-item">
                {note}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}