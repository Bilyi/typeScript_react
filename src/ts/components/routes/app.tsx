import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from '../home/home';
import LayoutRoute from './router-layout';
import PageNotFound from '../layouts/page-not-found';
import List from '../list/list';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <LayoutRoute exact path='/' component={Home}/>
                <LayoutRoute path='/movies' component={List}/>
                <LayoutRoute path='/series' component={List}/>
                <LayoutRoute component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
    )
};

export default App;