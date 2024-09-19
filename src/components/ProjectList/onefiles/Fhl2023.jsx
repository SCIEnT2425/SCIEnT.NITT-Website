import React, { useState } from 'react';
import '../../../styles/AllProj.css';
import fhl1 from '../../../assets/pic1.jpg';

const projects = [
    {
        name: 'name1',
        src: fhl1,
        description: 'Force Hyperloop is the official Hyperloop team of the National Institute of Technology, Tiruchirappalli (NIT Trichy). Driven by innovation and the vision to revolutionize transportation in India, the team consists of dedicated students from various disciplines. With a focus on cutting-edge technology, interdisciplinary collaboration, and hands-on experience, Force Hyperloop is at the forefront of developing high-speed transportation solutions. \n The team actively participates in global competitions and research initiatives, pushing the boundaries of engineering and design to make sustainable, energy-efficient, and rapid transit systems a reality in India.',
        link: '#',
    }
];

const Fhl2023 = () => {
    const [currentProject, setCurrentProject] = useState(0);

    const nextProject = () => {
        setCurrentProject((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentProject((prevIndex) =>
            (prevIndex - 1 + projects.length) % projects.length
        );
    };

    return (
        <div className="project-slider-container">
            <div className="project-title">
                <h1>Force hyperloop</h1>
            </div>
            <div className='row'>
                <button className="slider-button-left" onClick={prevProject}>
                    {'<'}
                </button>
                <div className="project-box">
                    <img className='image-slider'
                        src={projects[currentProject].src}
                        alt={projects[currentProject].name}
                    />
                    <div className='column'>
                        <h2 className="project-name">{projects[currentProject].name}</h2>
                        <div className="project-description">
                            {projects[currentProject].description.split('\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <button className="slider-button-right" onClick={nextProject}>
                    {'>'}
                </button>
            </div>
        </div>
    );
}

export default Fhl2023