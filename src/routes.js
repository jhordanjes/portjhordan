import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Item from './pages/Item';
import Projects from './pages/Projects'
import NotFound from './Components/Notfound';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/project" component={Item} />
            <Route path="/projects" component={Projects} />
            <Route path="/" component={NotFound} />
        </Switch>
    )
}