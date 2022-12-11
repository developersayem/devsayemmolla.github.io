import React from 'react';
import ContactME from './ContactME/ContactME';
import Hero from './Hero/Hero';
import HomeProject from './HomeProject/HomeProject';

const Home = () => {
    return (
        <div className='w-screen'>
            <Hero></Hero>
            <HomeProject></HomeProject>
            <ContactME></ContactME>
        </div>
    );
};

export default Home;