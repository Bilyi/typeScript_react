import * as React from 'react';
import { NavLink } from 'react-router-dom'

import { HomeProps } from '../interfaces/interfaces';

const Home = (location: HomeProps) => {
    console.log(location);
    return (
        <div className="links-wrapper">
            <NavLink className="link" to="/movies">Movies</NavLink>
            <NavLink className="link" to="/series">Series</NavLink>
        </div>
    )

};

export default Home;