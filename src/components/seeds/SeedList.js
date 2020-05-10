import React from 'react';
import SeedSummary from './SeedSummary';
import { Card } from 'react-bootstrap';

const SeedList = ({ seeds }) => {
    return (
        <div className="seed-list section">
            {/* If there is a seeds than map through it, if not, dont bother. */}
            {seeds && seeds.map(seed => {
                return (
                    <Card style={{ width: '350px', margin: '30px' }} key={seed.id}>
                        <SeedSummary seed={seed} />
                    </Card>
                )
            })}
        </div>
    )
}
export default SeedList;