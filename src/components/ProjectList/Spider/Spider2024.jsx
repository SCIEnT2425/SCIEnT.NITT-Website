import React, {useState} from 'react';
import '../../../styles/AllProj.css';
import spi1 from '../../../assets/spi-24-1.png';
import spi2 from '../../../assets/spi-24-2.png';
import spi3 from '../../../assets/spi-24-3.png';

const projects = [
    {
        name: 'Spider robotic arm',
        src: spi1,
        description: 'Spider Robotic arm is the ultimate teleoperation companion! With 6 DOF and a innovative load transfer mechanism, its ready to tackle any task. Integrated with Spiders language model for seamless interaction.',
        link: '#',
    },
    {
        name: 'UHUGV',
        src: spi2 ,
        description: 'UHUGV, or Unmanned Hybrid Underground Vehicle, is an amphibious robot designed to navigate seamlessly across both land and underwater environments. This versatile robot incorporates a track drive mechanism for efficient movement on marshy terrains, while its underwater motion is inspired by the locomotion of fin ray fish. UHUGV showcases the integration of cutting-edge technology and bio-mimicry, presenting new possibilities for exploration, research, and practical applications in diverse domains.',
        link: '#',
    },
    {
        name: '90nm 8T Subthreshold SRAM Design',
        src: spi3 ,
        description: 'A 90nm 8T subthreshold SRAM design uses eight transistors per bit cell to enable ultra-low power memory operation, ideal for energy-efficient applications. It operates in the subthreshold region, where the supply voltage is below the transistors threshold voltage, balancing power efficiency with stability.',
        link: '#',
    }
];

const Spider2024 = () => {
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
                <h1>SPIDER 2024</h1>
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

export default Spider2024