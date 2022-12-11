import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main/Main';
import ContactME from '../../Pages/Home/ContactME/ContactME';
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
            {
                path: '/contact',
                element: <ContactME></ContactME>
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