import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ setSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuActive, setMenuActive] = useState(false); // State to track menu toggle

  // Handle search input change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setSearch(e.target.value);
  };

  // Toggle menu visibility on small screens
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">📽️TrailerMovies</a>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Links */}
      <ul className={`navLinks ${menuActive ? 'active' : ''}`}>
        <li><a href="/" className="navLink">Home</a></li>
        <li><a href="/about" className="navLink">About</a></li>
        <li><a href="/contact" className="navLink">Contact</a></li>
      </ul>

      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search movies..."
          className="searchInput"
        />
      </div>
    </nav>
  );
};

export default Navbar;
