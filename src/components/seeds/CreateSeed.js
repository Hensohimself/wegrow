import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSeed } from '../../store/actions/seedActions';
import { Button, Form, Container } from 'react-bootstrap';

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
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <h1>Plant a Seed</h1>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control id="title" type="text" placeholder="Enter catchy Seed Title" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Control as="textarea" id="content" placeholder="Content" rows="3" onChange={this.handleChange} />
                    <Button variant="primary" type="submit" block>
                        Create
                        </Button>
                </Form>
            </Container>
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
