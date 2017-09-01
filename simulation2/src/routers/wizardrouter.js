import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import App from '../App.js';
import StepOne from '../Wizard/StepOne/StepOne';
import StepTwo from '../Wizard/StepTwo/StepTwo';
import StepThree from '../Wizard/StepThree/StepThree';
import StepFour from '../Wizard/StepFour/StepFour';
import StepFive from '../Wizard/StepFive/StepFive';

export default (
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/StepOne' component={StepOne} />
            <Route path='/StepTwo' component={StepTwo} />
            <Route path='/StepThree' component={StepThree} />
            <Route path='/StepFour' component={StepFour} />
            <Route path='/StepFive' component={StepFive} />
        </div>
    </Router>    
)
// `/api/${user.id}`