import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Dashboard from '../dashboard/dashboard'
import Goal from '../goal/goal'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Dashboard} />
            <Route path="/goal" exact component={Goal} />
        </BrowserRouter>
    )
}