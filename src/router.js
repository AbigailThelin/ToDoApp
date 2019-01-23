import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import MobileProgress from './components/MobileProgress'
import MobileAddTask from './components/MobileAddTask';


export default (
    <Switch>
        <Route component={Home} path="/" exact/>
        <Route component={MobileProgress} path="/progress" />
        <Route component={MobileAddTask} path="/add" />
        {/* <Route component={MobileCompleted} path="/completed" /> */}
    </Switch>
)