import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main/Main';
import Home from '../../Pages/Home/Home';
import Skills from '../../Pages/Skills/Skills';




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
        ]
    }
])

const Router = () => {
    return (
        <div>

        </div>
    );
};

export default Router;