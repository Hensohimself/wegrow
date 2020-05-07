import React from 'react';
import moment from 'moment';

const SeedSummary = ({ seed }) => {
    return (
        <div className="card z-depth-0 seed-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{seed.title}</span>
                <p>Posted by { seed.authorFirstName } {seed.authorLastName}</p>
                <p className="grey-text">{moment(seed.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}
export default SeedSummary;