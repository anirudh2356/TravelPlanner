import "./Hotel.css";

function Hotel() {
  return (
    <div className="hotel-container">

      {/* Banner */}
      <img
        className="hotel-banner"
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80"
        alt="Hotel Banner"
      />

      {/* Heading */}
      <h1 className="hotel-title">🏨 Hotel Booking</h1>

      {/* Search Section */}
      <div className="hotel-search">
        <div className="input-group">
          <label>City / Hotel</label>
          <input type="text" placeholder="Search city or hotel" />
        </div>

        <div className="input-group">
          <label>Check-in</label>
          <input type="date" />
        </div>

        <div className="input-group">
          <label>Check-out</label>
          <input type="date" />
        </div>

        <div className="input-group">
          <label>Guests</label>
          <input type="number" min="1" defaultValue="1" />
        </div>

        <div className="input-group">
          <label>&nbsp;</label>
          <button>Search Hotels</button>
        </div>
      </div>

      {/* Hotel Cards */}
      <div className="hotel-list">

        <div className="hotel-card">
          <img
            src="/images/hotel1.jpg"
            alt="Taj Mahal Palace"
          />
          <h3>Taj Mahal Palace</h3>
          <p>📍 Mumbai</p>
          <p>⭐ Rating: 4.8</p>
          <p className="price">💰 ₹5,499 / night</p>
          <button>Book Now</button>
        </div>

        <div className="hotel-card">
          <img
            src="/images/hotel2.jpg"
            alt="ITC Kohenur"
          />
          <h3>ITC Kohenur</h3>
          <p>📍 Hyderabad</p>
          <p>⭐ Rating: 4.7</p>
          <p className="price">💰 ₹4,999 / night</p>
          <button>Book Now</button>
        </div>

        <div className="hotel-card">
          <img
            src="/images/hotel3.jpg"
            alt="The Oberoi Bengaluru"
          />
          <h3>The Oberoi Bengaluru</h3>
          <p>📍 Bengaluru</p>
          <p>⭐ Rating: 4.9</p>
          <p className="price">💰 ₹6,299 / night</p>
          <button>Book Now</button>
        </div>

      </div>
    </div>
  );
}

export default Hotel;