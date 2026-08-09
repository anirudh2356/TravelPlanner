import "./Train.css";

function Train() {
  return (
    <div className="train-container">

      {/* Banner */}
      <img
        className="train-banner"
        src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=80"
        alt="Train Banner"
      />

      {/* Heading */}
      <h1 className="train-title">🚆 Train Booking</h1>

      {/* Search Section */}
      <div className="train-search">

        <div className="input-group">
          <label>From Station</label>
          <input type="text" placeholder="Enter source station" />
        </div>

        <div className="input-group">
          <label>To Station</label>
          <input type="text" placeholder="Enter destination station" />
        </div>

        <div className="input-group">
          <label>Journey Date</label>
          <input type="date" />
        </div>

        <div className="input-group">
          <label>Class</label>
          <select>
            <option>Sleeper (SL)</option>
            <option>3AC (3A)</option>
            <option>2AC (2A)</option>
            <option>1AC (1A)</option>
          </select>
        </div>

        <div className="input-group">
          <label>&nbsp;</label>
          <button>Search Trains</button>
        </div>

      </div>

      {/* Train Cards */}
      <div className="train-list">

        {/* Rajdhani */}
        <div className="train-card">
          <img
            src="/images/rajdhani.png"
            alt="Rajdhani Express"
          />
          <h3>Rajdhani Express</h3>
          <p>🚆 Train No: 12951</p>
          <p>📍 Hyderabad → Delhi</p>
          <p>🕒 06:00 PM – 08:30 AM</p>
          <p className="price">💰 ₹1,250</p>
          <button>Book Now</button>
        </div>

        {/* Shatabdi */}
        <div className="train-card">
          <img
            src="/images/shatabdi.png"
            alt="Shatabdi Express"
          />
          <h3>Shatabdi Express</h3>
          <p>🚆 Train No: 12026</p>
          <p>📍 Pune → Mumbai</p>
          <p>🕒 07:00 AM – 10:30 AM</p>
          <p className="price">💰 ₹850</p>
          <button>Book Now</button>
        </div>

        {/* Duronto */}
        <div className="train-card">
          <img
            src="/images/duronto.png"
            alt="Duronto Express"
          />
          <h3>Duronto Express</h3>
          <p>🚆 Train No: 12213</p>
          <p>📍 Bengaluru → Chennai</p>
          <p>🕒 09:00 PM – 04:30 AM</p>
          <p className="price">💰 ₹980</p>
          <button>Book Now</button>
        </div>

      </div>

    </div>
  );
}

export default Train;