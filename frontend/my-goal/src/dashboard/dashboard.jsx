import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import {getGoals} from './dashboardActions'

import logo from '../assets/logo.png';
import add from '../assets/add.png';

import '../../node_modules/font-awesome/css/font-awesome.min.css'
import './dashboard.css';

class Dashboard extends Component {

    componentWillMount() {
        this.props.getGoals();
    }

    render() {
        const goals = this.props.goals;
        console.log(this.props.goals);
        return (
            <div className="main-container">
                <Link to="/">
                    <img src={logo} alt="myGoals" />
                </Link>
                <div>
                    {
                        goals.length > 0 ? (
                            <ul>
                                {
                                    goals.map(goal => (
                                        <li>
                                            <strong>
                                                {goal.description}
                                            </strong>
                                            <div>
                                                <i className="fa fa-calendar"></i> {goal.dueDate}
                                            </div>
                                            <div className="moneyIcon">
                                                <i className="fa fa-usd"></i>
                                                <div>
                                                    <p>${goal.total}</p>
                                                    <p>$</p>
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
                        <img src={add} alt="Add" height="60" width="60" />
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    goals : state.dashboard.goals
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({getGoals}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);