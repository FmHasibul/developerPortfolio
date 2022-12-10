import React from 'react';
import items from './Skills.json'

const Skills = () => {

    return (
        <div className='my-10'>
            <h2 className='font-semibold text-left text-4xl'>Skills</h2>
            <section className='container mx-auto'>
                <ul className='flex flex-wrap justify-center max-w-[450px] mx-auto'>
                    {items.map((skill) => (
                        <li key={skill.id} className='m-2 btn btn--plain'>
                            {skill.name}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Skills;