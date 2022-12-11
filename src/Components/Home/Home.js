import React from 'react';
import Banner from '../Banner/Banner';
import Project from '../Project/Project';
import Skills from '../Skills/Skills';
import ContactMe from './ContactMe/ContactMe';

const Home = () => {
    return (
        <div>
            <Banner />
            <Skills />
            <Project />
            <ContactMe />
        </div>
    );
};

export default Home;