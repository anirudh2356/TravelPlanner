import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>🌍 Travel Planner</h2>
          <p>
            Discover amazing destinations across India.
            Book Flights, Hotels, Trains, Buses and Holiday Packages
            at the best prices.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Flights</li>
            <li>Hotels</li>
            <li>Trains</li>
            <li>Buses</li>
            <li>Holidays</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 Hyderabad, India</p>
          <p>📧 support@travelplanner.com</p>
          <p>📞 +91 9876543210</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#" title="Facebook">
              <FaFacebook />
            </a>

            <a href="#" title="Instagram">
              <FaInstagram />
            </a>

            <a href="#" title="X (Twitter)">
              <FaXTwitter />
            </a>

            <a href="#" title="LinkedIn">
              <FaLinkedin />
            </a>

          </div>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Travel Planner. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;