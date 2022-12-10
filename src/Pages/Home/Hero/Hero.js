import { motion } from 'framer-motion';
import React from 'react';
import Typewriter from "typewriter-effect";
import whitebg from '../../../assets/img/whitebg.jpg'
import whitebg2 from '../../../assets/img/whitebg2.jpg'



const Hero = () => {
    return (
        <div className='w-screen h-screen flex bg-no-repeat bg-cover bg-center  justify-center items-center cover-full bg-origin-border'
            style={{ backgroundImage: `url(${whitebg2})`, }}>
            <div className=" md:w-2/3 md:h-2/3  flex justify-center items-center">
                <div className="md:w-2/3 md:h-2/3  bg-blue-00">
                    <motion.h1
                        className="text-xl relative text-deep-orange-500 capitalize -ml-16 font-bold "
                        initial={{ x: -500, scale: 0.5 }}
                        animate={{ x: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        hi i'm
                    </motion.h1>
                    <motion.h1
                        className="text-5xl ml-5 relative text-orange-500 font-bold capitalize"
                        initial={{ x: 1500, scale: 0.5 }}
                        animate={{ x: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Sayem Molla
                    </motion.h1>
                    <p className="py-6 px-5 text-green-00 font-bold">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("MERN Stack Web Developer with the ability to learn and collaborate in rapidly changing environments and compositions.")
                                    .stop()
                                    .pauseFor(1000)
                                    .typeString("Worked through JavaScript, Node.Js, React.Js, MongoDB, and Express.js.")
                                    .stop()
                                    .start();
                            }}
                        />
                    </p>
                    <div className='flex relative justify-center items-center '
                    >
                        <motion.button className='px-8 py-3 rounded-full bg-orange-500'
                            whileHover={{ scale: 1.2 }}
                            onHoverStart={e => { }}
                            onHoverEnd={e => { }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            My Resume
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;