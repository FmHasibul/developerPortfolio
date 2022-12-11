import React from 'react';
import datas from './Projects.json'
import { Link } from 'react-router-dom'

const Project = () => {
    return (

        <div id='Projects' className='my-14'>
            <h1 className="text-4xl text-left my-10 text-orange-300 font-semibold">Recent Project</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {datas.map((data) => (
                    <div className="mx-auto ">
                        <div className="  card-compact bg-base-100 shadow-2xl">
                            <figure>
                                <img className='h-40' src={data.image} alt="Shoes" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title font-bold">{data.projectsName}</h2>
                                <p className='text-xl'>{data.details}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`details/${data.id}`}><button className="btn btn-md">Veiw Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;