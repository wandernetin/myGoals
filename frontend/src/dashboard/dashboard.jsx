import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Form } from 'react-bootstrap';

import { getGoals, removeGoal } from './dashboardActions'

import logo from '../assets/logo.png';

import '../../node_modules/font-awesome/css/font-awesome.min.css'
import './dashboard.css';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            currentGoalId: '',
            amount: ''
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleOpen(id) {
        this.setState({show: true,
          currentGoalId: id
         });
    }

    componentWillMount() {
        this.props.getGoals();
    }

    deleteGoal(goal) {
        this.props.removeGoal(goal);
        this.props.getGoals();
    }

    getImage(image) {
        if (image) {
            return image;
        } else {
            return "https://cdn.pocket-lint.com/r/s/970x/assets/images/149132-laptops-review-macbook-pro-13-inch-2019-review-business-as-usual-image1-mjmo9napgu-jpg.webp"
        }
    }

    getPercentage(raised, total) {
        return (raised / total) * 100;
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    async onSaveMoneySubmit(event) {
        let res = await axios.put('http://localhost:3333/goals', {
            currentGoalId: this.state.currentGoalId,
            amount: this.state.amount
        });
        this.props.getGoals();
        console.log(res);
    }

    render() {
        const goals = this.props.goals;
        return (
            <div className="main-container">
                <Link to="/">
                    <div className="logo">
                        <img src={logo} alt="myGoals" />
                    </div>
                </Link>
                <div>
                    {
                        goals.length > 0 ? (
                            <ul>
                                {
                                    goals.map(goal => (
                                        <li key={goal._id}>
                                            <div className="card">
                                                <img className="card-img-top" src={this.getImage(goal.image)} alt="img" />
                                                <div className="card-body">
                                                    <strong className="card-title">
                                                        {goal.description}
                                                    </strong>
                                                    <div className="card-text">
                                                        <div>
                                                            <i className="fa fa-calendar"></i> {new Intl.DateTimeFormat('en-AU').format(new Date(goal.date))}
                                                        </div>
                                                        <div className="moneyIcon">
                                                            <i className="fa fa-usd"></i> Total: {goal.valueTotal}
                                                            <p><i className="fa fa-usd"></i> Raised: {goal.raised}</p>
                                                        </div>
                                                        <ProgressBar now={this.getPercentage(goal.raised, goal.valueTotal)} />
                                                        <div className="buttonsPanel">
                                                            <Button variant="success" onClick={() => this.handleOpen(goal._id)}>Save Money</Button>
                                                            <Button variant="danger" onClick={() => this.deleteGoal(goal)}>Remove</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        ) : (
                                <div className="empty"> Done :(</div>
                            )
                    }
                </div>
                <div className="add-button">
                    <Link to="/goal">
                        <Button variant="primary">Add Goal</Button>
                    </Link>
                </div>

                <Modal show={this.state.show} onHide={() => this.handleClose()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Insert amount of money saved.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.onSaveMoneySubmit.bind(this)}>
                            <Form.Group controlId="formGroupDescription">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control type="text" name="amount" onChange={this.onChange} value={this.state.amount === null ? '' : this.state.amount} />
                            </Form.Group>
                            <div className="buttonsPanel">

                                <Button variant="primary" type="submit" >
                                    Submit
                                </Button>
                                <Button variant="secondary" onClick={() => this.handleClose()}>
                                    Close
                                </Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    goals: state.dashboard.goals
});
const mapDispatchToProps = dispatch =>
    bindActionCreators({ getGoals, removeGoal }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);