import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Dashboard from '../dashboard/dashboard'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Dashboard} />
        </BrowserRouter>
    )
}