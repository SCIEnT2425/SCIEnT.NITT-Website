import React,{useState} from 'react';
import '../../../styles/AllProj.css';
import ev1 from '../../../assets/ev-23-1.png';

const projects = [
    {
        name: 'AUTO SELECTION OF AVAILABLE PHASE IN 3- PHASE SUPPLY SYSTEM',
        src: ev1,
        description: "EVER is a team of NIT Trichy students dedicated to developing Electric Vehicles and promoting Electric Mobility. The team provides a real-world work environment with the goal of racing homegrown EVs in student-level competitions. EVER is more than just a racing team; it's a community. The projects offer a platform to showcase and test innovative ideas and technologies. \n This project aims at delivering a system that provides uninterrupted power supply to the load even in the absence of any phase in a three phase supply system. In this system auto selection is achieved by using a set of relays interconnected in such a way that if one of the relays is feeding to the load remains energized always.",
        link: '#',
    }
];

const Ever2023 = () => {
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
                <h1>EVER-NITT 2023</h1>
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

export default Ever2023