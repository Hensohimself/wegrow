import React from 'react';
import SignedInLinks from './SignedInLinks';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';


const Navigationbar = (props) => {
    const { profile } = props;
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">we grow</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <SignedInLinks profile={profile} />
            </Navbar.Collapse>
        </Navbar>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}


/* Connects this component with firebase */
export default connect(mapStateToProps)(Navigationbar);