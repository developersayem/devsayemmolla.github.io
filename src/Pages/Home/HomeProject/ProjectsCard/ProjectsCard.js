import React from 'react';
import { motion } from 'framer-motion';
import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const ProjectsCard = ({ project }) => {
    const { photo, name, link, type } = project
    return (
        <motion.div
            transition={{
                delay: 0.5,
                x: { duration: 1 },
                default: { ease: "linear" }
            }}
        >
            <Card className="">
                <CardHeader floated={false} className="h-50">
                    <img
                        className='w-full h-full'
                        src={photo} alt="" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        {name}
                    </Typography>
                    <Typography color="blue" className="font-medium" textGradient>
                        {type}
                    </Typography>
                </CardBody>
                <div className='flex justify-center'>
                    <a href={link} target="_blank" rel="noreferrer">
                        <Button color='deep-orange' variant="gradient">Live Review</Button>
                    </a>
                </div>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <Typography
                        as="a"
                        href="#facebook"
                        variant="lead"
                        color="blue"
                        textGradient
                    >
                        <i className="fab fa-facebook" />
                    </Typography>
                </CardFooter>
            </Card>
        </motion.div >
    );
};

export default ProjectsCard;