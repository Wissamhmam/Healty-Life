import React from "react";
import { Link } from "react-router-dom";
import "../componets/footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join us to receive 
        </p>
        <p className="footer-subscription-text">
          
        </p>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            Discover accurate calorie information and personalized recipes on our platform!          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Twitter</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact</h2>
            <Link to="/">wissamhmam59@gmail.com</Link>
            <Link to="/">mahmoudsaidi@gmail.com</Link>
            <Link to="/">+216 72 554 784</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
            <i class="fa-solid fa-leaf fa-beat-fade"> </i>Healty Life
            </Link>
          </div>
          <small class="website-rights">Healty Life © 2024</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;