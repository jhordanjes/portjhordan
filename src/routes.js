import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Project from './pages/Project';
import NotFound from './Components/Notfound';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/project" component={Project} />
            <Route path="/" component={NotFound} />
        </Switch>
    )
}