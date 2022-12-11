import React, { useState, useEffect } from 'react';
import CardSkeleton from './ProjectsCard/CardSkeleton/CardSkeleton';
import ProjectsCard from './ProjectsCard/ProjectsCard';


const HomeProject = () => {

    const [projects, setProjects] = useState([])
    const [show, setShow] = useState(false)
    useEffect(() => {
        fetch('https://portfolio-server-side-three.vercel.app/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
                setShow(true)
            })
    }, [])



    return (
        <div className='w-full my-20 lg:my-0 lg:h-screen'>
            <div className='mb-16'>
                <h1 className='text-orange-500 text-4xl font-bold text-center'>Projects</h1>
            </div>
            {
                show ? <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mx-10'>
                    {
                        projects.map(project =>
                            <ProjectsCard
                                key={project._id}
                                project={project}
                            ></ProjectsCard>)
                    }
                </div> :
                    <div className='grid text-black grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mx-10'>
                        {
                            projects.map(project => <CardSkeleton></CardSkeleton>)
                        }
                    </div>
            }
        </div>
    );
};

export default HomeProject;