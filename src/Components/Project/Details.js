import React from 'react';
import projects from './Projects.json';
import { useParams } from 'react-router-dom'

const Details = () => {
    const { id } = useParams()
    const data = projects.find(project => project.id === id)
    console.log(data);
    return (
        <div>
            <div>
                <h1 className='text-4xl text-left my-4 font-semibold'> {data.projectsName}</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                <img src={data.infoImg1} alt="" srcset="" />
                <img src={data.infoImg2} alt="" srcset="" />
                <img src={data.infoImg3} alt="" srcset="" />

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div>{data.d1}</div>
                <div>{data.d2}</div>
                <div>{data.d3}</div>
            </div>
        </div>
    );
};

export default Details;