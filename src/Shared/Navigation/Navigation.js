import React from 'react';
// import { useState, useEffect } from "react";
import {
    Typography,
    Avatar
} from "@material-tailwind/react";
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"


const Navigation = () => {

    const navList = (
        <ul className="flex flex-row items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <motion.Link
                    // initial={{ scale: 0 }}
                    // whileHover={{ scale: 0.1 }}
                    // whileTap={{ scale: 0.9 }}
                    to='/home' className="flex items-center text-white font-bold tracking-wide">
                    Home
                </motion.Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to='/skills' className="flex items-center text-white font-bold tracking-wide">
                    Skills
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to='/' className="flex items-center text-white font-bold tracking-wide">
                    Projects
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to='/' className="flex items-center text-white font-bold tracking-wide">
                    Contact
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to='/' className="flex items-center text-white font-bold tracking-wide">
                    Blog
                </Link>
            </Typography>
        </ul>
    );


    return (
        <motion.div
            initial={{ y: 250, scale: 0.5 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mx-auto bg-gradient-to-r from-orange-600 to-deep-orange-500 z-50  max-w-fit fixed bottom-0 rounded-full inset-x-0 py-4 px-6 md:px-8 md:py-5">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="container relative mx-auto flex items-center justify-end ">
                <Link to='/' className='absolute -left-5'>
                    <Avatar src={logo} alt="avatar" variant="circular" />
                </Link>
                <div
                    className='flex ml-10 items-center justify-end'>
                    <div className="block">{navList}</div>
                </div>
            </motion.div>
        </motion.div>
    );
};
export default Navigation;
