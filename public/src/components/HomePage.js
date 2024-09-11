// src/components/HomePage.js

import React from 'react';
import './assets/styles/HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <div className="bracket">
        <div className="match">
          <span>Team A vs Team B</span>
          <span>Score: 2-1</span>
        </div>
        <div className="match">
          <span>Team C vs Team D</span>
          <span>Score: 3-0</span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
