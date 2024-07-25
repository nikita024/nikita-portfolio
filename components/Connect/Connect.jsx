import React, { useState, useEffect } from 'react';
import { connectData } from './ConnectData';
import Link from 'next/link';

const Connect = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: '',
    });

    const [submitStatus, setSubmitStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '', subject: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Error fetching data", error);
            setSubmitStatus('error');
        } finally {
            setLoading(false);
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000); // Hide message after 5 seconds
        }
    };

    return (
        <div className="section-box mt-4" id="contact">
            <div className="row">
                <div className="col-12 col-md-10 col-xl-8">
                    <h6 className="title-heading mb-3" data-backdrop-text={connectData.mainData.title}>{connectData.mainData.title2}</h6>
                    <h1>{connectData.mainData.title3}</h1>
                    <p>{connectData.mainData.description}</p>
                    <ul className="list-inline-pills mt-4">
                        <li><a href={`tel:${connectData.mainData.phone}`}>Phone: {connectData.mainData.phone}</a></li>
                        <li><a href={`mailto:${connectData.mainData.email}`}>Email: {connectData.mainData.email}</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-4 mt-lg-5">
                <div className="contact-form">
                    <form method="post" id="contactform" onSubmit={handleSubmit}>
                        <div className="row gx-3 gy-0">
                            <div className="col-12 col-md-6">
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="E-Mail" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                        </div>
                        <input  
                            type="text" 
                            id="subject" 
                            name="subject" 
                            placeholder="Subject" 
                            value={formData.subject}
                            onChange={handleChange}
                            required 
                        />
                        <textarea 
                            name="message" 
                            id="message" 
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        <button className="button button-md button-dark" type="submit">Send Message</button>
                    </form>
                    {loading && <div className="loader"></div>}
                    <div className="submit-result mt-4">
                        {submitStatus === 'success' && (
                            <span id="success">Thank you! Your message has been sent.</span>
                        )}
                        {submitStatus === 'error' && (
                            <span id="error">Something went wrong. Please try again!</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connect;
