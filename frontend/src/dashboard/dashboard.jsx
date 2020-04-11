import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'

import { getGoals, removeGoal } from './dashboardActions'

import logo from '../assets/logo.png';

import '../../node_modules/font-awesome/css/font-awesome.min.css'
import './dashboard.css';

class Dashboard extends Component {

    componentWillMount() {
        this.props.getGoals();
    }

    getPercentage(raised, total) {
        return (raised / total) * 100;
    }

    getImage(image) {
        if (image) {
            return image;
        } else {
            return "https://cdn.pocket-lint.com/r/s/970x/assets/images/149132-laptops-review-macbook-pro-13-inch-2019-review-business-as-usual-image1-mjmo9napgu-jpg.webp"
        }
    }

    deleteGoal(goal) {
        this.props.removeGoal(goal);
        this.props.getGoals();
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
                                                {/* <img className="card-img-top" src="{goal.image}" alt="img"/> */}
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
                                                        <div className="removeButton">
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