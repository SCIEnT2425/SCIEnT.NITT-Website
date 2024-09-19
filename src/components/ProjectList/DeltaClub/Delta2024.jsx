import React, {useState} from 'react';
import '../../../styles/AllProj.css';
import del1 from '../../../assets/del-24-1.png';
import del2 from '../../../assets/del-24-2.jpg';

const projects = [
    {
        name: 'Time warp',
        src: del1 ,
        description: 'In a fractured cosmos, the Dimensional Traveler Ace emerges to address the imminent collapse of time, a perilous circumstance threatening chaos. Heeding the call of the Warp, Ace embarks on a rigorous quest to gather essential dimensional energy and prevent the unraveling of reality. Through adept manipulation of time and space, he navigates puzzles spanning ages, inching closer to restoring equilibrium and averting cataclysm. Welcome to TimeWarp, where civilization’s fate rests in your hands. Join the journey and act swiftly. \n Tech stack - React, Phaser3, Typescript, MantineUI, TailwindCSS, Spring boot (kotlin), MongoDB.',
        link: '#',
    },
    {
        name: 'AR hunt',
        src: del2 ,
        description: 'AR Hunt is an Augmented Reality based Android treasure hunt game that enables freshers to explore the campus by solving clues and crossing a variable set of checkpoints to discover AR objects within a time constraint. \n Tech stack - Jetpack compose, Kotlin, Golang, MySQL, ARcore, Docker.',
        link: '#',
    }
];

const Delta2024 = () => {
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
                <h1>DELTA 2024</h1>
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

export default Delta2024