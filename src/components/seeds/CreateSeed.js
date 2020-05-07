import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSeed } from '../../store/actions/seedActions';

class CreateSeed extends Component {

    state = {
        title: '',
        content: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createSeed(this.state);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">

                    <h5 className="grey-text text-darken-3">Plant Seed</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Seed Content</label>
                        <textarea className="materialize-textarea" id="content" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        /* Dispatches the custom action "createSeed" to run asyncronous code before the actual dispatch -> src/store/actions/seedActions */
        createSeed: (seed) => dispatch(createSeed(seed))
    }
}

export default connect(null, mapDispatchToProps)(CreateSeed)
