import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {

    return (
        <Nav className="ml-auto">
            <NavLink className="nav-link" to='/create'>New Seed</NavLink>
            <NavLink className="nav-link" to='/' onClick={props.signOut}>Logout</NavLink>
            <Navbar.Text>
                Signed in as: <a href="#login">{props.profile.firstName} {props.profile.lastName}</a>
            </Navbar.Text>
        </Nav>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);