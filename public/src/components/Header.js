// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';  // For navigation links
import './assets/styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">Football Tournament</Link>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/matches">Matches</Link></li>
            <li><Link to="/teams">Teams</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
