import React from 'react';

import bannerImg from '../../asset/undraw_freelancer_re_irh4.svg'
import Typewriter from "typewriter-effect";

const Banner = () => {
    return (
        <div>
            <div>
                <div className=" flex p-10">

                    <div className="flex items-center text-center w-1/2 lg:text-left">
                        <div>
                            <h1 className="text-5xl font-bold">Hasibul Hasan</h1>

                            <div className="font-semibold text-orange-500 text-4xl">
                                <Typewriter

                                    onInit={(typewriter) => {

                                        typewriter
                                            .typeString("Junior Web developer")


                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString("Welcomes You")
                                            .start();
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center   shadow-2xl ">
                        <img src={bannerImg} className="w-4/5 bg-transparent" alt="" srcset="" />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Banner;