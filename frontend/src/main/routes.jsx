import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Dashboard from '../dashboard/dashboard'
import Goal from '../goal/goal'
import Login from '../login/loginPage'

export default function Routes() {
    return (
        <BrowserRouter>
            
            <Route path="/" exact component={Login} />
            <Route path="/goal" exact component={Goal} />
        </BrowserRouter>
    )
}