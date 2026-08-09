import React from "react";

const bookings = [
  { id: "TRV001", destination: "Goa", date: "12 Aug 2026", status: "Confirmed" },
  { id: "TRV002", destination: "Dubai", date: "25 Sep 2026", status: "Cancelled" },
  { id: "TRV003", destination: "Paris", date: "10 Oct 2026", status: "Confirmed" },
];

export default function Bookings() {
  return (
    <div className="page">
      <div className="panel">
        <h2>My Bookings</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Booked ID</th>
                <th>Destination</th>
                <th>Travel Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.id}</td>
                  <td>{booking.destination}</td>
                  <td>{booking.date}</td>
                  <td>
                    <span className={booking.status === "Confirmed" ? "status confirmed" : "status cancelled"}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}