import React, { Component } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";

import logo from '../assets/logo.png';

import "react-datepicker/dist/react-datepicker.css";
import './goal.css';

class Goal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: '',
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

    handleDateChange = selectedDate => {
        this.setState({
          date: selectedDate
        });
      };

    onSubmit(event) {
        axios.post('http://localhost:3333/goals', {
            description: this.state.description,
            date: this.state.date,
            valueTotal: this.state.valueTotal,
            raised: this.state.raised,
            priority: this.state.priority,
            completed: this.state.completed === '' ? false : true,
            image: this.state.image

        }).then(function (response) {
            console.log(response);
        });
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="main-container">
                <Link to="/">
                    <div className="logo">
                        <img src={logo} alt="myGoals"  />
                    </div>
                </Link>
                <Row>
                    <Col xl={4} lg={4} md={6} sm={12}>
                        <Form onSubmit={this.onSubmit.bind(this)}>
                            <Form.Group controlId="formGroupDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name="description" onChange={this.onChange} value={this.state.description === null ? '' : this.state.description} />
                            </Form.Group>
                            <Form.Group controlId="formGroupDate">
                                <Form.Label>Date</Form.Label>
                                <DatePicker selected={this.state.date === null ? '' : this.state.date} onChange={this.handleDateChange} />
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
                                <Form.Control as="select" name="priority" onChange={this.onChange} value={this.state.priority === null ? '' : this.state.priority}>
                                    <option>HIGH</option>
                                    <option>LOW</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formGroupCompleted">
                                <Form.Label>Completed</Form.Label>
                                <Form.Check type="checkbox" name="completed" onChange={this.onChange} value={this.state.completed === null ? false : true} />
                            </Form.Group>
                            <Form.Group controlId="formGroupImage">
                                <Form.Label>Link Image</Form.Label>
                                <Form.Control type="text" name="image" onChange={this.onChange} value={this.state.image === null ? '' : this.state.image} />
                            </Form.Group>
                            <div className="buttonsPanel">
                                <Button variant="primary" type="submit" >
                                    Submit
                                </Button>
                                <Link to="/">
                                    <Button variant="danger">Cancel</Button>
                                </Link>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Goal;
