import React from 'react';
import items from './Skills.json'
import skill from './skill.svg'

const Skills = () => {

    return (
        <div id='Skills' className='my-10'>
            <h2 className='font-semibold text-left text-4xl'>Skills</h2>
            <section className='container mx-auto grid grid-cols-1 md:grid-cols-2  justify-center items-center '>
                <div>
                    <img src={skill} alt="" srcset="" />
                </div>
                <div>
                    <ul className='flex flex-wrap justify-center max-w-[450px] mx-auto'>
                        {items.map((skill) => (
                            <li key={skill.id} className='m-2 btn btn--plain'>
                                {skill.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Skills;