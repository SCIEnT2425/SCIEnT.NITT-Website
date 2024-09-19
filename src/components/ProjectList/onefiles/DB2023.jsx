import React, { useState } from 'react';
import '../../../styles/AllProj.css';
import db1 from '../../../assets/db-1.png';
import db2 from '../../../assets/db-2.png';
import db3 from '../../../assets/db-3.png';
import db4 from '../../../assets/db-4.png';
import db5 from '../../../assets/db-5.png';
import db6 from '../../../assets/db-6.png';

const projects = [
    {
        name: 'Question and answer generation',
        src: db1 ,
        description: 'DataByte is the data science and business analytics club at NIT Trichy. The team is dedicated to fostering a deep interest in specialized fields such as business analysis and computational finance. Through active discussions and the facilitation of advanced data handling techniques, DataByte cultivates a rich environment for students to explore and excel in these niche areas. \n This project focuses on developing AI models that can automatically generate relevant questions and accurate answers from textual data. It explores natural language processing techniques to enhance educational tools and customer support systems.',
        link: '#',
    },
    {
        name: 'AI interviewer',
        src: db2 ,
        description: 'This initiative aims to create an AI-driven interviewer that can simulate realistic interview scenarios, assess candidate responses, and provide feedback. It combines machine learning and natural language processing to assist in recruitment and skill assessment.',
        link: '#',
    },
    {
        name: 'Protecting children from hateful content',
        src: db3 ,
        description: 'This project is dedicated to building AI systems that detect and filter out hateful or inappropriate content from online platforms to protect children. It leverages sentiment analysis and content moderation algorithms to create safer digital environments',
        link: '#',
    },
    {
        name: 'Image background removal',
        src: db4 ,
        description: 'This project focuses on developing machine learning models that can accurately remove backgrounds from images, enabling applications in e-commerce, graphic design, and virtual reality. It explores computer vision techniques for seamless background extraction.',
        link: '#',
    },
    {
        name: 'India case studies',
        src: db5,
        description: 'This initiative analyzes various business and societal challenges within India using data analytics and machine learning. It provides insights into case studies across sectors like healthcare, finance, and education to drive informed decision-making.',
        link: '#',
    },
    {
        name: 'Practical DSA',
        src: db6 ,
        description: 'This project is aimed at applying data structures and algorithms (DSA) to real-world problems, enhancing coding efficiency and problem-solving skills. It offers hands-on experience with practical coding challenges to prepare for competitive programming and technical interviews.',
        link: '#',
    }
];

const DB2023 = () => {
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
                <h1>DATABYTE</h1>
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

export default DB2023