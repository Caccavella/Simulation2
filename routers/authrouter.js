import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import Auth from '';
import Dashboard from '';
import Wizard from '';

export default (
    <Router>
        <div>
            <Route exact path='/' component={Auth} />
            <Route path='/Dashboard' component={Dashboard} />
            <Route path='/Wizard' component={Wizard} />
        </div>
    </Router>    
)