import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); // For demo purposes

  // Function to toggle the hamburger menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      {/* Left Section: Amazon Logo */}
      <div className="navbar-logo">
        <a href="/" className="logo-link">
          <img src="./images/logo.png" alt="Amazon Logo" className="logo" />
        </a>
      </div>

      {/* Center Section: Search Bar */}
      <div className="navbar-search">
        <select className="search-category">
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="grocery">Grocery</option>
          <option value="home">Home</option>
        </select>
        <input type="text" className="search-input" placeholder="Search for products, brands, and more" />
        <button className="search-button">Search</button>
      </div>

      {/* Right Section: Account, Language/Currency, Cart */}
      <div className={`navbar-right ${isMenuOpen ? 'open' : ''}`}>
        <div className="navbar-item">
          <a href="/signin">Hello, Sign In</a>
        </div>
        <div className="navbar-item">
          <a href="/orders">Returns & Orders</a>
        </div>
        <div className="navbar-item">
          <a href="/cart">
            <span>Cart ({cartCount})</span>
          </a>
        </div>
        <div className="navbar-item">
          <a href="/language">Language</a>
        </div>
        <div className="navbar-item">
          <a href="/currency">Currency</a>
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span>☰</span>
      </div>
    </nav>
  );
};

export default Navbar;
