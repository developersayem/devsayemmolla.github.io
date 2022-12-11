import { motion } from 'framer-motion';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Typewriter from "typewriter-effect";
import resume from '../../../assets/resume/Sayem-Molla-Resume.pdf'



const Hero = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        setInterval(() => setShow(true), 25000);
    }, []);
    return (
        <div className=' w-full h-screen flex justify-center items-center '
        >
            <div className=" md:w-2/3 md:h-2/3  flex justify-center items-center">
                <div className="md:w-2/3 md:h-2/3">
                    <motion.h1
                        className="text-xl underline decoration-pink-500 text-indigo-500 capitalize ml-5 md:-ml-16 font-bold "
                        initial={{ x: -500, scale: 0.5 }}
                        animate={{ x: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        hi i'm
                    </motion.h1>
                    <motion.h1
                        className="text-5xl  ml-5 bg-gradient-to-r from-orange-500 via-yellow-900 to-deep-orange-500  bg-clip-text text-transparent font-bold capitalize"
                        initial={{ x: 1500, scale: 0.5 }}
                        animate={{ x: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Sayem Molla
                    </motion.h1>
                    <div className="py-6 px-5  text-green-00 font-bold">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("MERN Stack Web Developer with the ability to learn and collaborate in rapidly changing environments and compositions.")
                                    .typeString("Worked through JavaScript, Node.Js, React.Js, MongoDB, and Express.js.")
                                    .stop()
                                    .start()
                            }}
                        />
                    </div>
                    <div className='flex relative justify-center items-center '
                    >
                        {show ?
                            <motion.a href={resume} download
                                className='px-8 py-3 rounded-lg bg-deep-orange-500 text-white uppercase font-bold'
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                                onHoverStart={e => { }}
                                onHoverEnd={e => { }}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                            >
                                My Resume
                            </motion.a> : <></>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Hero;