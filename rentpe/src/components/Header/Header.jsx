import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Category</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="filter-button">
          <button onClick={toggleFilters}>Filter</button>
          {showFilters && (
            <div className="filter-options">
              <label>
                Category:
                <select>
                  <option value="all">All</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="commercial">Commercial</option>
                </select>
              </label>
              <label>
                Rent:
                <select>
                  <option value="all">Any</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </label>
              <label>
                Location:
                <input type="text" placeholder="Enter location" />
              </label>
              <label>
                Price:
                <input type="number" placeholder="Max price" />
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
