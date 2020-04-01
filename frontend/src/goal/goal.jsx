import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios';


import { saveGoal } from './goalActions'


class Goal extends Component {

    constructor(props) {
        super(props);
        this.state = {description: '',
        date: '',
        valueTotal: '',
        raised: '',
        priority: '',
        completed: '',
        image: ''
      };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(event) {
        axios.post('http://localhost:3333/goals', {
                description: this.state.description,
                date: this.state.date,
                valueTotal: this.state.valueTotal,
                raised: this.state.raised,
                priority: this.state.priority,
                completed: this.state.completed === '' ? false : true

        }).then(function (response) {
            console.log(response);
        });
    }

    render() {
        return (
            <div>
                <Form onSubmit={ this.onSubmit.bind( this ) }>
                    <Form.Group controlId="formGroupDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" onChange={this.onChange} value={this.state.description === null ? '' : this.state.description} />
                    </Form.Group>
                    <Form.Group controlId="formGroupDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="text" name="date" onChange={this.onChange} value={this.state.date === null ? '' : this.state.date}/>
                    </Form.Group>

                    <Form.Group controlId="formGroupValueTotal">
                        <Form.Label>Value Total</Form.Label>
                        <Form.Control type="text" name="valueTotal" onChange={this.onChange} value={this.state.valueTotal === null ? '' : this.state.valueTotal} />
                    </Form.Group>
                    <Form.Group controlId="formGroupRaised">
                        <Form.Label>Raised</Form.Label>
                        <Form.Control type="text" name="raised" onChange={this.onChange} value={this.state.raised === null ? '' : this.state.raised} />
                    </Form.Group>
                    <Form.Group controlId="formGroupRaised">
                        <Form.Label>Priority</Form.Label>
                        <Form.Control type="text" name="priority" onChange={this.onChange} value={this.state.priority === null ? '' : this.state.priority} />
                    </Form.Group>
                    <Form.Group controlId="formGroupCompleted">
                        <Form.Label>Completed</Form.Label>
                        <Form.Check type="checkbox" name="completed" onChange={this.onChange} value={this.state.completed === null ? false : true} />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>
    bindActionCreators({ saveGoal }, dispatch);
export default connect(mapDispatchToProps)(Goal);
