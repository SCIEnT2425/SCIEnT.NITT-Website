import React, { useState } from 'react';
import '../../../styles/AllProj.css';
import rmi1 from '../../../assets/23-1.jpg';
import rmi2 from '../../../assets/23-2.jpg';
import rmi3 from '../../../assets/23-3.jpg';
import rmi4 from '../../../assets/23-4.jpg';
import rmi5 from '../../../assets/23-5.jpg';
import rmi6 from '../../../assets/23-6.jpg';
import rmi7 from '../../../assets/23-7.jpg';
import rmi8 from '../../../assets/23-8.jpg';

const projects = [
    {
        name: 'AURA',
        src: rmi1 ,
        description: 'The aerial swarm robotics project represents a significant breakthrough in multi-agent systems, designed to execute complex tasks through precise coordination and synchronization. This project involves a swarm of five drones that ensure reliable operation in diverse environments. The system is anchored by a master drone that handles task allocation, coordination, and real-time communication with the slave drones, ensuring that the entire swarm operates as a unified entity. \n The drones are designed in an X-shaped quadcopter configuration, providing stability and maneuverability. Each drone is equipped with a flight controller, integrated with IMU and GPS sensors, along with ESP32S3 as a companion microcontroller. The communication between drones is handled through the ESP-NOW protocol, ensuring robust and reliable coordination. \n For localization, the swarm uses Extended Kalman Filter (EKF) algorithm that fuses IMU and GPS data, with the potential for differential GPS integration to enhance accuracy. The control strategy revolves around continuous position updates, velocity command computations, and real-time adjustments, allowing the drones to maintain formation and avoid collisions.',
        link: '#',
    },
    {
        name: 'AURA',
        src: rmi5 ,
        description: 'The swarm robots capability to adapt and coordinate makes them ideal for various applications, including search and rescue, 3D reconstruction, and smart agriculture. \n Aerial Swarm of five autonomous drones equipped with advanced sensor fusion and real-time communication, designed for seamless coordination and precision in complex task execution across diverse environments.',
        link: '#',
    },
    {
        name: 'Medvisor',
        src: rmi2 ,
        description: 'MedVisor represents a groundbreaking advancement in healthcare technology, offering an innovative Augmented Reality (AR) solution in the form of smart glasses. Through the integration of Speech-to-Text conversion and a sophisticated Large Language Model (LLM), MedVisor empowers patients with access to precise and comprehensive answers to any medical query they may have. A voice recognition system using the Porcupine Wake Word engine and Assembly AI STT engine allows the user to ask questions, converting text to speech in real time. The text is transmitted over a socket connection to a server running locally on a smartphone, where a response is generated using the Gemini Large Language Model. By leveraging AR technology, MedVisor revolutionizes patient education by providing individuals with a dynamic and immersive learning experience. \n Through the use of smart glasses, patients can visualize organs superimposed on the human body, allowing for a deeper understanding of their medical conditions. This visual representation facilitates clearer communication between healthcare providers and patients, enabling individuals to make more informed decisions about their health and treatment options.',
        link: '#',
    },
    {
        name: 'Medvisor',
        src: rmi6 ,
        description: 'In the realm of immersive healthcare, MedVisor transforms the patient experience by offering real-time insights and visualizations of medical data directly within their field of view. This immersive approach fosters greater engagement and understanding, ultimately leading to improved patient outcomes and satisfaction. \n The applications of MedVisor extend beyond patient education, encompassing immersive healthcare experiences and enhancing surgical accuracy. MedVisor plays a pivotal role in improving surgical accuracy by providing surgeons with augmented visualizations and real-time information during procedures. By superimposing vital data onto the surgical field, MedVisor enhances situational awareness and decision-making, ultimately contributing to safer and more precise surgical interventions. In essence, MedVisor represents a transformative tool at the intersection of technology and healthcare, empowering both patients and healthcare providers with unprecedented capabilities for education, engagement, and procedural excellence.',
        link: '#',
    },
    {
        name: 'Amphibian Bot',
        src: rmi3 ,
        description: 'Amphibious four-wheeled thruster robot capable of navigating both submerged environments and remote landscapes with the combination of robust design, advanced propulsion systems, and integrated sensor technologies. \n The multi-mode locomotion bot represents a groundbreaking advancement in robotic technology, offering unparalleled adaptability for disaster response, mapping, and exploration missions. Its modular design seamlessly integrates wheels and thrusters, allowing for effortless customization with peripheral modules tailored to specific tasks. Equipped with actuators at each joint, the bot dynamically configures its thrusters for fluid navigation across diverse environments, from land to water. Its precise control system enables seamless movement in any direction, ensuring precise maneuverability during critical missions.',
        link: '#',
    },
    {
        name: 'Amphibian Bot',
        src: rmi7 ,
        description: 'Utilizing four wheels for terrestrial traversal and four thrusters powered by high torque BLDC motors, the bot effortlessly transitions between land and water. A sophisticated engagement-disengagement mechanism, coupled with servo motors, facilitates smooth transmission, enhancing efficiency and speed. Engineered to withstand the rigors of underwater exploration, the bots robust body frame ensures durability and reliability at depth. The synergy between its propulsion system, actuation system, and transition mechanisms ensures seamless operation across varied terrains. \n In conclusion, the multi-mode locomotion bot offers unmatched versatility and efficiency, revolutionizing disaster response, mapping, and exploration endeavors with its groundbreaking capabilities.',
        link: '#',
    },
    {
        name: 'Soft robotics',
        src: rmi4 ,
        description: 'A soft robotic gripper project employing SMAs or Pneumatic Control for object manipulation tasks like pick-and-place and harvesting operations. \n For actuation using SMAs: The soft robotic gripper employs Shape Memory Alloys (SMAs) for actuation, enabling precise manipulation tasks like pick-and-place operations in manufacturing, delicate handling in food packaging, and efficient harvesting in agriculture. \n Controlled by SMA phase transitions triggered by thermal or mechanical stimuli, the grippers compliant design facilitates adaptive grasping of objects, ensuring versatility in dynamic environments. Integrated sensors provide real-time feedback for optimized performance, while computer vision algorithms enable object detection, enhancing the grippers adaptability and utility across various industries. \n Furthermore, the soft robotic gripper surpasses conventional rigid grippers by providing gentler handling, precise control, and adaptability to variable object shapes and sizes, thereby reducing product damage and enhancing operational efficiency.',
        link: '#',
    },
    {
        name: 'Soft robotics',
        src: rmi8 ,
        description: 'For pneumatic actuation: The anthropomorphic soft gripper integrates a biomimetic design with a compliant silicone structure, enabling precise force modulation and adaptability in manipulation tasks. Each fingers control is governed by a pneumatic system, facilitating real-time adjustments of grip strength based on feedback from integrated pressure sensors. This data informs adaptive control strategies, empowering the gripper to dynamically tailor its grasp to diverse object characteristics, surpassing the limitations of conventional rigid grippers. \n This innovative fusion of biomimetic design and pneumatic control ensures safe human interaction and enables the gripper to delicately handle objects with precision. With its ability to adapt to varying object shapes and sizes, the anthropomorphic soft gripper represents a significant advancement in robotic manipulation technology, offering enhanced versatility and control in intricate environments.',
        link: '#',
    }
];

const RMI2023 = () => {
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
                <h1>RMI 2023</h1>
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

export default RMI2023