import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import { skillsData } from './SkillsData';

const Skills = () => {
    const initialCounters = skillsData.skills.reduce((obj, skill) => {
        obj[skill.id] = 0;
        return obj;
    }, {});

    const [counters, setCounters] = useState({
        ...initialCounters,
        yearsOfExperience: 0,
        hoursOfWorking: 0,
        projectsDone: 0,
    });

    const targetCounters = {
        ...skillsData.skills.reduce((obj, skill) => {
            obj[skill.id] = skill.percent;
            return obj;
        }, {}),
    };

    useEffect(() => {
        const animateCounters = () => {
            const duration = 2400;
            const interval = 50;

            Object.keys(targetCounters).forEach((key) => {
                const increment = (targetCounters[key] / duration) * interval;

                let current = 0;
                const intervalId = setInterval(() => {
                    current += increment;
                    setCounters((prevCounters) => ({
                        ...prevCounters,
                        [key]: Math.min(Math.ceil(current), targetCounters[key]),
                    }));

                    if (current >= targetCounters[key]) {
                        clearInterval(intervalId);
                    }
                }, interval);
            });
        };

        animateCounters();
    }, []);

    return (
        <div className="section-box mt-4" id="skills">
            <div className="row">
                <div className="col-12 col-md-12 col-xl-12">
                    <h6 className="title-heading mb-3" data-backdrop-text={skillsData.mainData.title}>{skillsData.mainData.title}</h6>
                    <h1>{skillsData.mainData.title2}</h1>
                    <p>{skillsData.mainData.description}</p>
                </div>
            </div>
            <div className="row g-4 g-xl-5">
                <div className="col-12 col-xl-12">
                    <ul className="list-inline-pills mt-3">
                        {skillsData.skills.map((skill, index) => (
                            <li key={index}>
                                {skill.name === 'MongoDB' ? (
                                    <Image
                                        src="/images/mongodb.png"
                                        alt="MongoDB"
                                        width={16}
                                        height={12}
                                        className='pe-2'
                                        style={{ width: '30px', height: '20px' }}
                                    />
                                ) : skill.name === 'Redux' ? (
                                    <Image
                                        src="/images/redux.png"
                                        alt="Redux"
                                        width={16}
                                        height={12}
                                        className='pe-2'
                                        style={{ width: '26px', height: '18px' }}
                                    />
                                ) : skill.name === 'Tailwind' ? (
                                    <Image
                                        src="/images/tailwind.png"
                                        alt="Tailwind"
                                        width={16}
                                        height={12}
                                        className='pe-2'
                                        style={{ width: '30px', height: '25px' }}
                                    />
                                ) : (
                                    <i className={`${skill.fontawesomeIcon} pe-2`}></i>
                                )}
                                {/* <i className={`${skill.fontawesomeIcon} pe-2`}></i>  */}
                                {skill.name}
                                {/* <div className="d-inline-block font-family-mono font-small">(<span className="counter">{counters[skill.id]}</span>%)</div> */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills