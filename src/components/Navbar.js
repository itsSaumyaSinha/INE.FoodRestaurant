import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ handleOrderNowClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Tastyeats
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutus" className="nav-links">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contactus" className="nav-links">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/menu" className="nav-links">Menu</Link>
          </li>
        </ul>
        <div className="navbar-search">
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="search-button">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="navbar-buttons">
          <Link to="/login" className="btn--outline">Log In</Link>
          <Link to="/signup" className="btn--outline">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

