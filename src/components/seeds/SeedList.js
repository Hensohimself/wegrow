import React from 'react';
import SeedSummary from './SeedSummary';
import { Link } from 'react-router-dom';

const SeedList = ({ seeds }) => {
    return (
        <div className="seed-list section">
            {/* If there is a seeds than map through it, if not, dont bother. */}
            {seeds && seeds.map(seed => {
                return (
                    <Link to={'/seed/' + seed.id} key={seed.id}>
                        <SeedSummary seed={seed} />
                    </Link>

                )
            })}
        </div>
    )
}
export default SeedList;