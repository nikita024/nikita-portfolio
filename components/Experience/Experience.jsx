import React from 'react'
import { experienceData } from './ExperienceData'

const Experience = () => {
    return (
        <div className="section-box mt-4" id="experience">
            <div className="row">
                <div className="col-12 col-md-12 col-xl-12">
                    <h6 className="title-heading mb-3" data-backdrop-text={experienceData.mainData.title}>{experienceData.mainData.title}</h6>
                    <h1>{experienceData.mainData.title2}</h1>
                    <p>{experienceData.mainData.description}</p>
                </div>
            </div>
            <div className="mt-4 mt-lg-5">
                <ul className="services-list">
                    {experienceData.experiences.map((item, index) => (
                        <li key={index} className="services-item">
                            <div className="services-number">
                                <h6 className="font-family-mono fw-semi-bold stroke-text display-6">{item.jobTitle}</h6>
                                <h6 className="mono-heading">{item.date}</h6>
                            </div>
                            <div className="services-title icon-xl">
                                {/* <i className={item.bootstrapIcon}></i> */}
                                <h6 className="company-heading">{item.title}</h6>
                            </div>
                            <div>
                                <p>{item?.description}</p>
                            </div>
                            {item?.project && (
                                <div className='mt-4'>
                                    <span className='fw-bold'>Project: </span> {item.project}
                                </div>
                            )}
                            {item?.training && (
                                <div className='mt-4'>
                                    <span className='fw-bold'>Training: </span> {item.training}
                                </div>
                            )}
                            <div className='mt-4 fw-bold fs-5'>
                                Responsibilities
                            </div>
                            {item?.responsibilities && item?.responsibilities.map((responsibility, index) => (
                                <li key={index} className='tasks-list'>{responsibility}</li>
                            ))}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Experience