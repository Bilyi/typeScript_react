import * as React from 'react';
import Header from '../layouts/header';

import { MainProps } from '../interfaces/interfaces';
import Footer from '../layouts/footer';

const Main = ({ children, ...rest }: MainProps) => {
    return (
        <React.Fragment>
            <Header path={rest.location.pathname}/>
            <div className="page-container">
                {children}
            </div>
            <Footer/>
        </React.Fragment>
    )
};

export default Main;