import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from '../ui/Loader';
import { signUp } from '../../store/actions/authActions';
import { Button, Form, Container, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }

    render() {
        const { auth, authError } = this.props;

        /* Avoids flicker to signup form */
        if (auth.isLoaded) {
            if (auth.uid) return <Redirect to='/' />

            return (
                <div className="login-page">
                    <Form>
                        <Container className="login-form-container">
                            <Form.Group controlId="formGroupHeader">
                                <h1 className="text-center">Sign Up</h1>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control id="email" type="email" placeholder="Email Address" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control id="firstName" type="text" placeholder="First Name" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control id="lastName" type="text" placeholder="Last Name" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control id="password" type="password" placeholder="Password" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="formGroupLogin">
                                <Button variant="primary" onClick={this.handleSubmit} block>Sign Up</Button>
                                {authError ? <Alert variant="danger">{authError}</Alert> : null}
                                <div className="h-divider"></div>
                            </Form.Group>
                            <Form.Group controlId="formGroupNoAccount" className="text-center">
                                <Form.Label>Already have an account?</Form.Label>
                                <Link to='/signin'>Login</Link>
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
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
