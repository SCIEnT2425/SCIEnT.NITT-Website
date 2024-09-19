import React, { useState } from 'react';
import '../../../styles/AllProj.css';
import psi from '../../../assets/WhatsApp Image 2024-09-14 at 00.17.35_91e19e9e.jpg';
import psi2 from '../../../assets/pic2.jpg';

const projects = [
    {
        name: 'ATV Electric',
        src: psi,
        description: 'We are a team of students spanning all four years of college education and all departments united by a shared love: the love for automobiles. This results in a close-knit team that is as efficient as it is excellent and we are the official motorsports team of NIT Trichy. This has led us to be part of the top teams in India and we are among the top 5 teams in Baja SAEINDIA and Enduro Student India for the past 2 years. We have also achieved multiple podium place finishes in Enduro Student India. \n SUSPENSION: The suspension and steering subsystem evaluates, analyses and designs the suspension arms, shock absorber settings, wheel mounting knuckles and the steering-related components. The suspension subsystem is needed to ensure that the maximum power and torque is transmitted to the ground. The steering subsystem gives the driver directional control. \n BRAKES: The brakes subsystem calculates, designs, and fabricates the brakes that are needed to stop the vehicle or to maintain control in the off-road driving scenario. The brakes are designed taking into account the tire pressure, wheel speed and acceleration and must completely lock the wheels as part of the technical inspection.',
        link: '#',
    },
    {
        name: 'ATV Electric',
        src: psi2 ,
        description: 'CHASIS: The chassis subsystem evaluates, designs and fabricates a tubular frame chassis that serves two purposes; it provides a stable and secure mounting for all the other components that are designed by the other subsystems and protects the driver in case of a rollover or accident. The chassis design is a fine balance between achieving the required safety conditions while also keeping weight to a minimum. \n Data Acquisition: The data acquisition (DAQ) subsystem prototypes and tests different sensors and telemetry systems that continuously monitor and evaluate the performance and condition of the vehicle. This is used during both the testing and evaluation phase and during the competition itself to maintain various parameters at the optimal working range. \n Powertrain: The powertrain subsystem is responsible for the design and the elements that put down the engine power to the road. The source is a standardized 10HP engine that is connected to the wheels through a CVT and a fixed-ratio reduction gearbox. The CVT allows the driver to concentrate fully on the track by automatically shifting and acts as a clutch at idle.',
        link: '#',
    }
];

const Psi2023 = () => {
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
                <h1>PSI 2023</h1>
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
};


export default Psi2023