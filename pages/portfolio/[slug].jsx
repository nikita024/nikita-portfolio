
import React, { useState } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import { BackgroundImages, Header, Lightbox, PortfolioNavigation } from '@/components';
import { portfolioData } from '@/components/Portfolio/PortfolioData';
import Link from 'next/link';

const PortfolioPage = ({ project }) => {
    const [lightboxImage, setLightboxImage] = useState(null);

    const openLightbox = (image) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    return (
        <>
            <Head>
                <title>{project.projectTitle}</title>
                <meta name="description" content={project.description} />
                <meta name="keywords" content={project.keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="container">
                {/* Header */}
                <Header />
                {/* Main row */}
                <div className="row g-4 g-lg-5">
                    <div className="col-12 col-lg-4 col-xl-3">
                        <PortfolioNavigation />
                    </div>
                    <div className="col-12 col-lg-8 col-xl-9" id='portfolio'>
                        <div className="sections-wrapper">
                            <div className="section-box">
                                {/* <div className="row g-4">
                                    <div className="col-12 col-xl-6">
                                        <h6 className="mono-heading mb-2">Github:</h6>
                                        <Link href={project.github} className="link-decoration">{project.github}</Link>
                                    </div>
                                    <div className="col-12 col-xl-6">
                                        <h6 className="mono-heading mb-2">Demo:</h6>
                                        <Link href={project.demo} className="link-decoration">{project.demo}</Link>
                                    </div>
                                </div> */}
                                <div className="mt-4">
                                    <div className='d-flex align-items-center justify-content-between mb-2' style={{ gap: '20px' }}>
                                        <h1>{project.projectTitle}</h1>
                                        <div>
                                            <Link 
                                                href={project.github} 
                                                className="link-decoration me-2"
                                                target='_blank'
                                                style={{
                                                    borderRadius: '20px',
                                                    border: '1px solid black',
                                                    padding: '5px 15px',
                                                    backgroundColor: 'black',
                                                    color: 'white',
                                                    textDecoration: 'none',
                                                }}
                                            >Github</Link>
                                            <Link 
                                                href={project.demo} 
                                                className="link-decoration"
                                                target='_blank'
                                                style={{
                                                    borderRadius: '20px',
                                                    border: '1px solid black',
                                                    padding: '5px 15px',
                                                    backgroundColor: 'black',
                                                    color: 'white',
                                                    textDecoration: 'none'
                                                }}
                                            >View Demo</Link>
                                        </div>
                                    </div>
                                    <p>{project.description}</p>
                                    <ul className="list-inline-pills mt-3">
                                        {project.categories.map((item, index) => (
                                            <li key={index}>{item.name}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="row g-4 mt-2">
                                    <div className="col-12">
                                        <Image className="border-radius" src={project.mainImage} alt={project.projectTitle} placeholder="blur" />
                                    </div>
                                    {project.images.map((item, index) => (
                                        <div
                                            className="col-12 col-xl-6"
                                            key={index}
                                            onClick={() => openLightbox(item.image)}
                                        >
                                            <div className="lightbox-image-box border-radius" >
                                                <Image src={item.image} alt={project.projectTitle} placeholder="blur" />
                                                <i className="bi bi-arrows-fullscreen"></i>
                                            </div>
                                        </div>
                                    ))}
                                </div>{/* end section-box */}
                            </div>{/* end section-box */}
                            {/* end Project Content */}
                        </div>
                        {lightboxImage && (
                            <Lightbox image={lightboxImage} closeLightbox={closeLightbox} />
                        )}
                    </div>
                </div> {/* end main row */}
                {/*Background Vertical lines  */}
                <BackgroundImages />
            </div>
        </>
    )
}

export async function getStaticPaths() {
    // Generate paths for all your blog projects
    const paths = portfolioData.projects.map((project) => ({
        params: { slug: project.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const slug = params.slug;

    // Search for the blog project with the matching slug
    const project = portfolioData.projects.find((project) => project.slug === slug);

    if (!project) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            project,
        },
    };
}
export default PortfolioPage