import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';
import Loader from '../ui/Loader'
import { Container, Card } from 'react-bootstrap';

const SeedDetails = (props) => {
    const { seed } = props;

    if (seed) {
        return (
            <Container className="seed-container">
                <Card>
                    <Card.Header>{seed.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>{seed.content}</p>
                            <footer className="blockquote-footer">
                                Posted by {seed.authorFirstName} {seed.authorLastName}
                                <cite title="Source Title">{moment(seed.createdAt.toDate()).calendar()}</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </Container>
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