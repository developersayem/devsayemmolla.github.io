import { motion } from 'framer-motion';
import React from 'react';

const Skills = () => {
    return (
        <motion.div className='w-screen h-screen flex justify-center items-center bg-deep-orange-400 cover-full bg-origin-border'
            initial={{ x: 1500, scale: 0.5 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1
                className="text-5xl  ml-5 bg-gradient-to-r from-orange-500 via-yellow-900 to-deep-orange-500  bg-clip-text text-transparent font-bold capitalize"

            >
                Skills
            </h1>
        </motion.div>
    );
};

export default Skills;