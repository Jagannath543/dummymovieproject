import React from 'react';
import './Footer.css';  

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section 1: About */}
        <div className="footer-section about">
          <h3>About TMDB</h3>
          <p>
            TMDB is a movie database platform created by me, providing users with
            up-to-date movie information, ratings, and trailers.
          </p>
        </div>

        {/* Section 2: Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Section 3: Social Media */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i> {/* Font Awesome Icon */}
            </a>
            <a href="https://github.com/Jagannath543" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> {/* Font Awesome Icon */}
            </a>
            <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> {/* Font Awesome Icon */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
