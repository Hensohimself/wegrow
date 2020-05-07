import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';
import Loader from '../ui/Loader'

const SeedDetails = (props) => {
    const { seed } = props;

    if (seed) {
        return (
            <div className="conatiner section seed-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{seed.title}</span>
                        <p>{seed.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {seed.authorFirstName} {seed.authorLastName}</div>
                        <div>{moment(seed.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <Loader />
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        /* Fetches just the requested Seed */
        seed: state.firestore.data.seeds && state.firestore.data.seeds[id],
    };
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'seeds' }
    ])
)(SeedDetails)