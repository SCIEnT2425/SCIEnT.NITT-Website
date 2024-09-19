import React, {useState} from 'react';
import '../../../styles/AllProj.css';
import dc1 from '../../../assets/dc-24-1.png';
import dc2 from '../../../assets/dc-24-2.png';
import dc3 from '../../../assets/dc-24-3.png';
import dc4 from '../../../assets/dc-24-4.png';

const projects = [
    {
        name: 'Ioniflow',
        src: dc1,
        description: 'Ioniflow is a novel EV battery thermal management solution that optimizes performance and lifetime by leveraging an emerging cooling technology.',
        link: '#',
    },
    {
        name: 'LeProC',
        src: dc2 ,
        description: 'Designed with precision grooves and fortified with surface treatments, our clamp for radiator to engine pipes ensures secure locking mechanisms for advanced reliability.',
        link: '#',
    },
    {
        name: 'Neogenesis',
        src: dc3 ,
        description: 'It aims to capture excess carbon emissions from air in urban areas. It uses Selective Pressure Swing Adsorption.',
        link: '#',
    },
    {
        name: 'REC-Tube',
        src: dc4 ,
        description: 'It is a semi automated rubber recycling machine that transformers discarded bicycle inner tubes into practical products such as pouches.',
        link: '#',
    }
];

const DC2024 = () => {
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
                <h1>DC 2024</h1>
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

export default DC2024