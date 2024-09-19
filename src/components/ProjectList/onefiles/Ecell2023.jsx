import React, {useState} from 'react';
import '../../../styles/AllProj.css';
import ec1 from '../../../assets/ec-23-1.png';
import ec2 from '../../../assets/ec-23-2.png';
import ec3 from '../../../assets/ec-23-3.png';
import ec4 from '../../../assets/ec-23-4.png';

const projects = [
    {
        name: 'Social media education project',
        src: ec1,
        description: 'There is a lack of awareness on our campus on basic startup-related topics. By making the basic management concepts easy and understandable by everyone, We hope to make starting up accessible to everyone. \n As such we are using different social media and experimenting with different forms of content to reach as many students as possible and to enable them to understand complex business topics. We have received positive feedback from various stakeholders including college students, professional managers from the industry and the luminaries we highlight in our posts. \n The following are some of the examples of how we leveraged social media and meme culture to teach the basics of business management and entrepreneurship.',
        link: '#',
    },
    {
        name: 'E-cell founders program',
        src: ec2 ,
        description: 'There are a lot of founders within E-Cell, This is a guided preincubation program where the members help each other to ensure their accountability. Apart from that members who are a part of this program will get access to exclusive resources like mentorship, VC investments, etc. Our Main objective with this program is to help grow several startups within E-Cell. \n One of our startups in this program already received an investment offer from an angel investor and another startup started making revenue. 3 of the Startups in this program are ready to raise funds and will soon be meeting investors to pitch. \n  We are planning to have a demo day for these startups and several top VC firms have shown interest in attending the demo day and considering the startups for investment. This includes CampusFunds, Strongher Ventures and Beej Network.',
        link: '#',
    },
    {
        name: 'Alumni connect initiatives',
        src: ec3 ,
        description: 'We had an opportunity to connect with several of the distinguished alumnus who took time in their busy schedule to mentor and guide the would-be startup founders. \n We had a session with Mr Sudharshan Chandra Babu (2016 Batch) who runs his own AI + Blockchain startup. He discussed the intricacies of running a startup and how to acquire customers. We also had an opportunity to learn about the present and the future of AI and Machine Learning where he highlighted the bleeding edge projects being developed in this field. \n We had a session with Vishnubharat Boopathy who shared his experience on product and sales strategy working in one of the largest tech startups in India. He spoke about the importance of personal branding and solopreneurship. Both of the aforementioned sessions were closed doors open only to active startup founders. \n We also had an open to all session with Mr Prasanna Shankar (Former CTO of Rippling Labs) in January 2023. He shared his life journey as a story to all those present. He then went on to discuss how he started all his startups along with Rippling. Furthermore, the current trends in the tech industry were also discussed. The session finally concluded with an open to all Q&A session.',
        link: '#',
    },
    {
        name: 'Headstart',
        src: ec4 ,
        description: 'Headstart is a pre-incubation program for the students of NIT Trichy to provide them with mentorship and support for a period of 6-8 weeks and enable them to develop a solid business model and a minimally viable prototype. This program is envisioned as a program to provide a startup experience to the students and to enable them to build from 0 to 1. We provided them with resources, mentorship, and opportunity for them to take their startup to the next level. \n We partnered with Wadhwani Foundation to provide them with weekly sessions on various facets of entrepreneurship including business model development, building an MVP, approaching customers and clients etc. We also provided them with one on one mentorship to personally help them build their startup. \n In Partnership with Scalix by LetsVenture, We organized a session onStartup Fundraising exclusive for Headstart Participant on March 28th2023 where a distinguished venture capitalist explained the process ofraising funds. The participants also got access to the Scalix community app through which they will be able to raise funds for their startups if required.',
        link: '#',
    }
];

const Ecell2023 = () => {
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
                <h1>E-CELL 2023</h1>
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

export default Ecell2023