import React,{useState} from 'react';
import '../../../styles/AllProj.css';
import one1 from '../../../assets/180-23-1.png';
import one2 from '../../../assets/180-23-2.png';
import one3 from '../../../assets/180-23-3.jpg';
import one4 from '../../../assets/180-23-4.png';

const projects = [
    {
        name: 'Team everest',
        src: one1,
        description: 'About the company - Team Everest is an Indian NGO that promotes volunteerism and improves educational access for underprivileged children. They provide educational support and mentorship, empowering children from disadvantaged backgrounds. \n Engagement - Capital Budgeting, Analyze KPIs to track Beneficiaries',
        link: '#',
    },
    {
        name: 'The bill & Melinda gates foundation',
        src: one2 ,
        description: 'About the company - The Bill & Melinda Gates Foundation is a philanthropic organization striving to enhance healthcare and agriculture, reduce extreme poverty, and expand educational opportunities. \n Engagement - KPI Tracking and Evaluation framework Data Analysis',
        link: '#',
    },
    {
        name: 'Raptee energy',
        src: one3 ,
        description: 'About the company - Raptee Energy, an innovative EV startup, stole the spotlight at the recent Global Investors Meet (GIM) in Chennai,. E-bike is set to be launched in June 2024, with an aim to create a Premium yet affordable brand. \n Engagement - Branding Strategies Premium Customer Experience',
        link: '#',
    },
    {
        name: 'GalaxEye space',
        src: one4 ,
        description: "About the company - GalaxEye Space. World's first multi sensor imaging. Satellite. Technology. We are building the world's first multi sensor imaging satellite for earth observation purposes to gather unique insights. \n Engagement - Strategy for New Product launch, Competitive analysis Customer persona mapping",
        link: '#',
    }
];

const One802023 = () => {
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
                <h1>180DC 2023</h1>
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

export default One802023