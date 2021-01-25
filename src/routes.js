import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';

export default (
    <Switch>
        <Route exact path = '/' component={Landing}/>
        <Route path= '/dash' component={Dashboard}/>
        <Route path ='/profile' component={Profile}/>
    </Switch>
)