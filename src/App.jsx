import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

function App() {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">TravelPlanner</div>

        <ul className="nav-links">
          <li>
            <Link to="/flights" className="nav-link">
              Flights
            </Link>
          </li>

          <li>
            <Link to="/hotels" className="nav-link">
              Hotels
            </Link>
          </li>

          <li>
            <Link to="/trains" className="nav-link">
              Trains
            </Link>
          </li>

          <li>
            <Link to="/buses" className="nav-link">
              Buses
            </Link>
          </li>

          <li>
            <Link to="/holidays" className="nav-link">
              Holidays
            </Link>
          </li>
        </ul>

        <button
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Next Journey</h1>

          <p>
            Book Flights, Hotels, Trains, Buses and Holiday Packages
            across India with the best deals and hassle-free booking.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <h2>Book Your Trip</h2>

        <div className="search-box">
          <div className="input-box">
            <label>From</label>
            <input
              type="text"
              placeholder="Enter Departure City"
            />
          </div>

          <div className="input-box">
            <label>To</label>
            <input
              type="text"
              placeholder="Enter Destination"
            />
          </div>

          <div className="input-box">
            <label>Departure Date</label>
            <input type="date" />
          </div>

          <div className="input-box">
            <label>Travellers</label>
            <input
              type="number"
              min="1"
              defaultValue="1"
            />
          </div>

          {/* Search Button */}
          <button
            type="button"
            className="search-btn"
          >
            Search
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;