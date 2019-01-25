import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Mobile from './components/Mobile';
import MobileProgress from './components/MobileProgress';
import TaskPage from './components/TaskPage';


export default (
    <Switch>
        <Route component={Mobile} path="/" exact/>
        <Route component={MobileProgress} path="/progress" />
        <Route component={TaskPage} path="/overarching-task/:id"/>
    </Switch>
)