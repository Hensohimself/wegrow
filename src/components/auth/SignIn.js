import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions'
import { Redirect, Link } from 'react-router-dom';
import Loader from '../ui/Loader';
import { Form, Button, Container, Alert } from 'react-bootstrap';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    render() {
        const { authError, auth } = this.props;

        /* Avoids flicker to signin form until authentication is loaded */
        if (auth.isLoaded) {
            if (auth.uid) return <Redirect to='/' />

            return (
                <div className="login-page">
                    <Form>
                        <Container className="login-form-container">
                            <Form.Group controlId="formGroupHeader">
                                <h1 className="text-center">Login</h1>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control id="email" type="email" placeholder="Email Address" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control id="password" type="password" placeholder="Password" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="formGroupLogin">
                                <Button variant="primary" onClick={this.handleSubmit} block>Login</Button>
                                {authError ? <Alert variant="danger">{authError}</Alert> : null}
                            </Form.Group>
                            <Form.Group>
                                <Form.Group controlId="formGroupForgot" className="text-center">
                                    <Button href='#' variant="link">Forgot your password?</Button>
                                </Form.Group>
                                <div className="h-divider"></div>
                            </Form.Group>
                            <Form.Group controlId="formGroupNoAccount" className="text-center">
                                <Form.Label>Don't have an account?</Form.Label>
                                <Link to='/signup' >Sign Up</Link>
                            </Form.Group>
                        </Container>
                    </Form>
                </div>
            )
        } else {
            return (
                <Loader />
            )
        }

    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
