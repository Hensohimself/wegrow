import React from 'react';

const SeedSummary = ({ seed }) => {
    return (
        <div className="card z-depth-0 seed-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{seed.title}</span>
                <p>Posted by { seed.authorFirstName } {seed.authorLastName}</p>
                <p className="grey-text">3rd May, 3pm</p>
            </div>
        </div>
    )
}
export default SeedSummary;