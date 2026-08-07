import "./Flight.css";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md";

function Flight() {
  return (
    <div className="flight-page">

      {/* Banner */}
      <div className="flight-banner">
        <h1>Book Your Flight</h1>
        <p>
          Find the best domestic and international flights at the lowest prices.
        </p>
      </div>

      {/* Booking Card */}
      <div className="booking-card">

        {/* Trip Type */}
        <div className="trip-type">
          <label>
            <input type="radio" name="trip" defaultChecked />
            One Way
          </label>

          <label>
            <input type="radio" name="trip" />
            Round Trip
          </label>

          <label>
            <input type="radio" name="trip" />
            Multi City
          </label>
        </div>

        {/* Search Fields */}
        <div className="flight-search">

          <div className="field">
            <label>
              <FaMapMarkerAlt />
              From
            </label>
            <input
              type="text"
              placeholder="Enter Departure City"
            />
          </div>

          <div className="field">
            <label>
              <FaMapMarkerAlt />
              To
            </label>
            <input
              type="text"
              placeholder="Enter Destination"
            />
          </div>

          <div className="field">
            <label>
              <FaCalendarAlt />
              Departure
            </label>
            <input type="date" />
          </div>

          <div className="field">
            <label>
              <FaCalendarAlt />
              Return
            </label>
            <input type="date" />
          </div>

          <div className="field">
            <label>
              <FaUsers />
              Travellers
            </label>
            <input
              type="number"
              min="1"
              defaultValue="1"
            />
          </div>

          <div className="field">
            <label>
              <MdAirlineSeatReclineExtra />
              Class
            </label>

            <select>
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>
          </div>

        </div>

        {/* Search Button */}
        <div className="search-btn-container">
          <button className="flight-btn">
            Search Flights
          </button>
        </div>

        {/* Price Drop Protection */}
        <div className="price-protection">

          <label className="price-checkbox">

            <input type="checkbox" defaultChecked />

            <span>
              <strong>Price Drop Protection</strong>
              <br />
              You're now protected against price drops.
            </span>

          </label>

          <a href="/">View Details</a>

        </div>

      </div>

      {/* Special Fare */}
      <div className="special-fare">

        <h2>Special Fares</h2>

        <div className="fare-grid">

          <div className="fare-card">
            <h3>Regular</h3>
            <p>Best fares available</p>
          </div>

          <div className="fare-card">
            <h3>Student</h3>
            <p>Extra baggage benefits</p>
          </div>

          <div className="fare-card">
            <h3>Armed Forces</h3>
            <p>Exclusive defence fares</p>
          </div>

          <div className="fare-card">
            <h3>Senior Citizen</h3>
            <p>Special discounts</p>
          </div>

          <div className="fare-card">
            <h3>Doctor & Nurses</h3>
            <p>Healthcare benefits</p>
          </div>

          <div className="fare-card">
            <h3>GST</h3>
            <p>Business travel</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Flight;