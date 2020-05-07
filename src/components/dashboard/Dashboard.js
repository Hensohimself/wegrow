import React, { Component } from 'react';
import Notifications from './Notifications';
import SeedList from '../seeds/SeedList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
    render() {
        const { seeds } = this.props;

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <SeedList seeds={seeds} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        seeds: state.firestore.ordered.seeds,
    }
}

export default compose(
    connect(mapStateToProps),
    /* Connects Component to Firestore and listens to the given collection */
    firestoreConnect([
        { collection: 'seeds' }
    ])
)(Dashboard);