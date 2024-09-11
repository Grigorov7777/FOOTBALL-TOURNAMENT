import React from 'react';
import { Link } from 'react-router-dom';

function MatchBracket({ matches }) {
    return (
        <div className="match-bracket">
            {matches.map(match => (
                <div key={match.ID} className="match">
                    <Link to={`/match/${match.ID}`}>
                        {match.ATeamID} vs {match.BTeamID} - {match.Score}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default MatchBracket;
