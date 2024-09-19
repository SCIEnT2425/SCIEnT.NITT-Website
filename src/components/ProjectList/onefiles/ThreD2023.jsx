import React, {useState} from 'react';
import '../../../styles/AllProj.css';
import td1 from '../../../assets/3d-23-1.jpg';
import td2 from '../../../assets/3d-23-2.jpg';
import td3 from '../../../assets/3d-23-3.jpg';
import td4 from '../../../assets/3d-23-4.jpg';

const projects = [
    {
        name: 'VTOL',
        src: td1,
        description: 'We have analysed and categorised existing VTOL solutions. Using this knowledge we are in the design phase of our own VTOL aircraft with the major objectives of payload operations (point to point delivery/drop zone delivery) and surveillance operations (Search and rescue, Mapping, Land monitoring, filming/photography, photogrammetry etc.). \n  We aim to achieve these objectives by making our aircraft efficient in hover, transition and horizontal flight combined.',
        link: '#',
    },
    {
        name: 'VKAT (Von Karman Aeroelastic Turbine)',
        src: td2 ,
        description: 'We designed a bladeless turbine using the principles of Fluid-Structure Interaction to extract clean energy from the Vortex-Induced Vibration of a bluff body in a low-velocity fluid (Von Karman Effect). We determined the ideal dimensions and working conditions of the bluff body by fluid simulation. \n We designed the method of energy extraction and the final product with multiple smaller units to scale up the energy output',
        link: '#',
    },
    {
        name: 'Mid Flight Reconfiguration Drone',
        src: td3,
        description: 'The main limitations of a drone is the flight time of the drone, ie the time taken for the power source (usually a battery) to reduce from its full capacity to the minimum required to land the drone without any damage. Any alteration or modification that is imparted in the drone is done so keeping in mind to solely increase this parameter called flight time. \n The drone that we have proposed here also has a similar goal. The proposed drone would be one that can be configured between a quad(4 rotors) , hexa(6 rotors) and octa(8 rotors). These varying configurations would enable the drone to carry payloads of varying capacity and accordingly increase flight time.',
        link: '#',
    },
    {
        name: 'Stationary glider',
        src: td4 ,
        description: 'The primary Aim of the project is to build a vertical Take-off and Landing (VTOL) craft specifically targeted for usage in the military purposes of surveillance and transportation of medical goods.In this project we seek to eliminate the standard limitations faced by existing UAVs and to extend the boundaries of its usage. \n Unlike other VTOLs this product is detachable and detachable which helps in de-centralised manufacturing. This Product uses only a pair of motors which cut downs the power consumption.',
        link: '#',
    }
];

const ThreD2023 = () => {
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
                <h1>3D Aerodynamics 2023</h1>
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

export default ThreD2023