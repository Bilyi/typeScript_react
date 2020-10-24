import * as React  from 'react';
import { NavLink } from 'react-router-dom';

import { HeaderProps } from '../interfaces/interfaces';

const Header = ({ path }: HeaderProps) => {
    const pageName: string = path === '/' ? 'titles' : path === '/series' || path === '/movies' ?
        path.replace('/', '') : 'not_found';
    return (
        <div className="header">
            <div className="header-title left-padding">
                <h1>DEMO streaming</h1>
                <div className="header-buttons">
                    <a className="login-btn" href="#">Log in</a>
                    <a className="btn subscribe-btn" href="#">Start your free trial.</a>
                </div>
            </div>
            <div className="header-subtitle left-padding">
                <h3>{pageName === 'not_found' ? 'Page not found' : `Popular ${pageName}`}</h3>
                { path !== '/' && <NavLink className="btn back-btn" exact to="/">Back home</NavLink> }
            </div>
        </div>
    );
};

export default Header;