import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import logo from '../assets/logo.png';
import add from '../assets/add.png';

import '../../node_modules/font-awesome/css/font-awesome.min.css'
import './dashboard.css';

class Dashboard extends Component {
    render() {
        return (
            <div className="main-container">
                <Link to="/">
                    <img src={logo} alt="myGoals" />
                </Link>
                <div>
                    <ul>
                        <li>
                            <strong>
                                Sydney holidays
                            </strong>
                            <div>
                                <i className="fa fa-calendar"></i> 20/12/2019
                            </div>
                            <div className="moneyIcon">
                                <i className="fa fa-usd"></i>
                                <div>
                                    <p>$1,500.00</p>
                                    <p>$0.00</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <strong>
                                Sydney holidays
                            </strong>
                            <div>
                                <i className="fa fa-calendar"></i> 20/12/2019
                            </div>
                            <div className="moneyIcon">
                                <i className="fa fa-usd"></i>
                                <div>
                                    <p>$1,500.00</p>
                                    <p>$0.00</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <strong>
                                Sydney holidays
                            </strong>
                            <div>
                                <i className="fa fa-calendar"></i> 20/12/2019
                            </div>
                            <div className="moneyIcon">
                                <i className="fa fa-usd"></i>
                                <div>
                                    <p>$1,500.00</p>
                                    <p>$0.00</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <strong>
                                Sydney holidays
                            </strong>
                            <div>
                                <i className="fa fa-calendar"></i> 20/12/2019
                            </div>
                            <div className="moneyIcon">
                                <i className="fa fa-usd"></i>
                                <div>
                                    <p>$1,500.00</p>
                                    <p>$0.00</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <strong>
                                Sydney holidays
                            </strong>
                            <div>
                                <i className="fa fa-calendar"></i> 20/12/2019
                            </div>
                            <div className="moneyIcon">
                                <i className="fa fa-usd"></i>
                                <div>
                                    <p>$1,500.00</p>
                                    <p>$0.00</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <strong>
                                Sydney holidays
                            </strong>
                            <div>
                                <i className="fa fa-calendar"></i> 20/12/2019
                            </div>
                            <div className="moneyIcon">
                                <i className="fa fa-usd"></i>
                                <div>
                                    <p>$1,500.00</p>
                                    <p>$0.00</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="add-button">
                    <Link to="/">
                        <img src={add} alt="Add" height="60" width="60" />
                    </Link>
                </div>
            </div>
        )
    }
}

export default Dashboard;