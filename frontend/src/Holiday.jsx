import "./Holiday.css";

function Holiday() {
  return (
    <div className="holiday-container">

      {/* Banner */}
      <img
        className="holiday-banner"
        src="/images/holiday-banner.jpg"
        alt="Holiday Banner"
      />

      {/* Heading */}
      <h1 className="holiday-title">🌴 Holiday Packages</h1>

      {/* Search */}
      <div className="holiday-search">

        <div className="input-group">
          <label>Destination</label>
          <input type="text" placeholder="Enter destination" />
        </div>

        <div className="input-group">
          <label>Duration</label>
          <select>
            <option>2 Days</option>
            <option>3 Days</option>
            <option>5 Days</option>
            <option>7 Days</option>
          </select>
        </div>

        <div className="input-group">
          <label>Budget</label>
          <select>
            <option>Below ₹10,000</option>
            <option>₹10,000 - ₹20,000</option>
            <option>₹20,000 - ₹30,000</option>
            <option>Above ₹30,000</option>
          </select>
        </div>

        <div className="input-group">
          <label>&nbsp;</label>
          <button>Search Packages</button>
        </div>

      </div>

      {/* Packages */}

      <div className="holiday-list">

        <div className="holiday-card">
          <img src="/images/goa.jpg" alt="Goa" />
          <h3>🏖️ Goa Package</h3>
          <p>📍 Goa</p>
          <p>🗓️ 3 Days / 2 Nights</p>
          <p className="price">💰 ₹12,999</p>
          <button>Book Now</button>
        </div>

        <div className="holiday-card">
          <img src="/images/kerala.jpg" alt="Kerala" />
          <h3>🌿 Kerala Package</h3>
          <p>📍 Munnar & Alleppey</p>
          <p>🗓️ 5 Days / 4 Nights</p>
          <p className="price">💰 ₹18,999</p>
          <button>Book Now</button>
        </div>

        <div className="holiday-card">
          <img src="/images/kashmir.jpg" alt="Kashmir" />
          <h3>🏔️ Kashmir Package</h3>
          <p>📍 Srinagar & Gulmarg</p>
          <p>🗓️ 5 Days / 4 Nights</p>
          <p className="price">💰 ₹24,999</p>
          <button>Book Now</button>
        </div>

        <div className="holiday-card">
          <img src="/images/manali.jpg" alt="Manali" />
          <h3>❄️ Manali Package</h3>
          <p>📍 Manali</p>
          <p>🗓️ 6 Days / 5 Nights</p>
          <p className="price">💰 ₹21,999</p>
          <button>Book Now</button>
        </div>

      </div>

    </div>
  );
}

export default Holiday;