// src/components/MatchDetails.js

import React from 'react';
import './assets/styles/MatchDetails.css';

function MatchDetails() {
  return (
    <div className="match-details">
      <div className="team">
        <h2>Team A</h2>
        <p>Formation: 4-4-2</p>
      </div>
      <div className="team">
        <h2>Team B</h2>
        <p>Formation: 4-3-3</p>
      </div>
    </div>
  );
}

export default MatchDetails;
