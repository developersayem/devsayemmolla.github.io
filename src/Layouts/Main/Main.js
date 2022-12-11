import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className='container'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;