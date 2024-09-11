// src/components/TeamDetails.js

import React from 'react';
import PlayerList from './PlayerList.js';  // Import the PlayerList component
import './assets/styles/TeamDetails.css';

function TeamDetails() {
  return (
    <div className="team-details">
      <h1>Team A Roster</h1>
      <ul className="roster">
        <li className="roster-item">Manuel Neuer - GK</li>
        <li className="roster-item">Antonio Rüdiger - DF</li>
        <li className="roster-item">David Raum - DF</li>
        <li className="roster-item">Pascal Groß - MF</li>
      </ul>
    </div>
  );
}

export default TeamDetails;
