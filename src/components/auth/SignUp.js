import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from '../ui/Loader';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        userName: '',
        fullName: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        const { auth } = this.props;

        /* Avoids flicker to signup form */
        if (auth.isLoaded) {
            if (auth.uid) return <Redirect to='/' />

            return (
                <div className="container">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h5 className="grey-text text-darken-3">Sign Up</h5>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="userName">Username</label>
                            <input type="text" id="userName" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id="fullName" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Sign up</button>
                        </div>
                    </form>
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
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(SignUp)
