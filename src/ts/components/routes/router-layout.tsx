import * as React from 'react';
import { Route } from 'react-router-dom';
import Main from './main';

import { LayoutRouteProps } from '../interfaces/interfaces';

const LayoutRoute = ({ component: Component , ...rest }: LayoutRouteProps) => {
    return (
        <Route {...rest} render={matchProps => (
            <Main {...matchProps}>
                <Component {...matchProps} />
            </Main>
        )} />
    )
};

export default LayoutRoute;