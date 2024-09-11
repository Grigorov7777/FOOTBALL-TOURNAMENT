// src/components/PlayerList.js
import React from 'react';
import './assets/styles/PlayerList.css'; // Import your CSS file if needed

// Example player data
const players = [
  { ID: 1, TeamNumber: 1, Position: 'GK', FullName: 'Manuel Neuer', TeamID: 1 },
  { ID: 2, TeamNumber: 2, Position: 'DF', FullName: 'Antonio Rüdiger', TeamID: 1 },
  { ID: 3, TeamNumber: 3, Position: 'DF', FullName: 'David Raum', TeamID: 1 },
  { ID: 4, TeamNumber: 4, Position: 'DF', FullName: 'Jonathan Tah', TeamID: 1 },
  { ID: 5, TeamNumber: 5, Position: 'MF', FullName: 'Pascal Groß', TeamID: 1 },
  { ID: 6, TeamNumber: 6, Position: 'DF', FullName: 'Joshua Kimmich', TeamID: 1 },
  { ID: 7, TeamNumber: 1, Position: 'FW', FullName: 'Timo Werner', TeamID: 1 },
  { ID: 8, TeamNumber: 2, Position: 'MF', FullName: 'Scott McTominay', TeamID: 2 },
  { ID: 9, TeamNumber: 2, Position: 'DF', FullName: 'Kieran Tierney', TeamID: 2 },
  { ID: 10, TeamNumber: 3, Position: 'FW', FullName: 'Dominik Szoboszlai', TeamID: 3 },
  
];

function PlayerList() {
  return (
    <div className="player-list">
      <h2>Player List</h2>
      <ul>
        {players.map(player => (
          <li key={player.ID}>
            <span>{player.FullName}</span> - <span>{player.Position}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerList;
