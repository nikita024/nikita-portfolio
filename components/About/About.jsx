import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import { aboutData } from './AboutData';

const About = () => {

    return (
        <div className="section-box" id="about">

            <div className="row g-4 g-xl-5">
                <div className="col-12 col-xl-4">
                    <div className="hero-avatar">
                        <Image src={aboutData.mainData.heroAvatar} alt="hero-avatar" placeholder="blur" />
                        <div className="hero-avatar-text">
                            <Typewriter
                                options={{
                                    strings: aboutData.mainData.typewriter,
                                    cursor: '_',
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    deleteSpeed: 15
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-8">
                    <h2 className="title-heading mb-4" data-backdrop-text={aboutData.mainData.title}>{aboutData.mainData.title2}</h2>
                    <h1>{aboutData.mainData.jobTitle}</h1>
                    <p className="mt-1">{aboutData.mainData.description}</p>
                </div>
            </div>
        </div>
    )
}

export default About