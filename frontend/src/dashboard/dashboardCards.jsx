import React, { Component, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Form } from 'react-bootstrap';

import { getGoals, removeGoal } from './dashboardActions'

import logo from '../assets/logo.png';

import '../../node_modules/font-awesome/css/font-awesome.min.css'
import './dashboard.css';


class Dashboard extends Component {

}