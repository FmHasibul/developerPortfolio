import React from 'react';

const Aboutme = () => {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-400">
                        Hey, You are visiting Hasib's Portfolio.
                        <br className="hidden lg:inline-block" />I'm passionate for Building responsive user-friendly
                        websites
                    </h1>
                    <p className="mb-8 leading-relaxed"></p>
                    <div className="flex justify-center">
                        <a
                            href="#contactME"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                        >
                            Hire Me
                        </a>

                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <h2 className="text-3xl font-semibold text-green-400 mb-10">Here are some  info You might wanna know</h2>

                    <p>
                        Building state-of-the-art, easy-to-use, user-friendly websites is
                        truly a passion of mine and I am confident I would be an
                        excellent addition to your company. I am expertise in React JS,
                        JavaScript, HTML5, CSS3, and associated frameworks, in addition to
                        other fundamental front-end abilities.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Aboutme;