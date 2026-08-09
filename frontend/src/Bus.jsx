import "./Bus.css";

function Bus() {
  return (
    <div className="bus-container">

      {/* Banner */}
      <img
        className="bus-banner"
        src="/images/bus-banner.jpg"
        alt="Bus Banner"
      />

      {/* Heading */}
      <h1 className="bus-title">🚌 Bus Booking</h1>

      {/* Search Section */}
      <div className="bus-search">

        <div className="input-group">
          <label>From City</label>
          <input type="text" placeholder="Enter source city" />
        </div>

        <div className="input-group">
          <label>To City</label>
          <input type="text" placeholder="Enter destination city" />
        </div>

        <div className="input-group">
          <label>Journey Date</label>
          <input type="date" />
        </div>

        <div className="input-group">
          <label>Bus Type</label>
          <select>
            <option>Normal Bus</option>
            <option>AC Seater</option>
            <option>AC Sleeper</option>
            <option>Volvo Multi Axle</option>
          </select>
        </div>

        <div className="input-group">
          <label>&nbsp;</label>
          <button>Search Buses</button>
        </div>

      </div>

      {/* Bus Cards */}
      <div className="bus-list">

        <div className="bus-card">
          <img src="/images/bus1.jpg" alt="APSRTC Super Luxury" />
          <h3>🚌 APSRTC Super Luxury</h3>
          <p>📍 Hyderabad → Warangal</p>
          <p>🕒 07:30 AM – 11:30 AM</p>
          <p className="price">💰 ₹450</p>
          <button>Book Now</button>
        </div>

        <div className="bus-card">
          <img src="/images/bus2.jpg" alt="AC Seater Bus" />
          <h3>❄️ AC Seater</h3>
          <p>📍 Hyderabad → Vijayawada</p>
          <p>🕒 09:00 AM – 02:00 PM</p>
          <p className="price">💰 ₹850</p>
          <button>Book Now</button>
        </div>

        <div className="bus-card">
          <img src="/images/bus3.jpg" alt="AC Sleeper Bus" />
          <h3>🛏️ AC Sleeper</h3>
          <p>📍 Hyderabad → Bengaluru</p>
          <p>🕒 10:00 PM – 07:00 AM</p>
          <p className="price">💰 ₹1,450</p>
          <button>Book Now</button>
        </div>

        <div className="bus-card">
          <img src="/images/bus4.jpg" alt="Volvo Multi Axle" />
          <h3>⭐ Volvo Multi Axle</h3>
          <p>📍 Hyderabad → Chennai</p>
          <p>🕒 09:30 PM – 08:00 AM</p>
          <p className="price">💰 ₹1,850</p>
          <button>Book Now</button>
        </div>

      </div>

    </div>
  );
}

export default Bus;