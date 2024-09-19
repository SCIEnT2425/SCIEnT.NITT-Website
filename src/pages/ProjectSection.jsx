import React, { useState } from 'react';
import '../styles/ProjectSection.css';
import Footer from '../components/footer'
const projects = [
    {
        name: 'SPIDER',
        years: [
            { year: 2024, link: '/spider2024' },
            { year: 2023, link: '/spider2023' },
            { year: 2022, link: '/spider2022' }
        ],
    },
    {
        name: 'E-CELL',
        years: [
            { year: 2023, link: '/Ecell2023' }
        ],
    },
    {
        name: 'GRAPHIQUE',
        years: [
            { year: 2023, link: '/GRAPHIQUE/2023' },
            { year: 2022, link: '/GRAPHIQUE/2022' },
            { year: 2021, link: '/GRAPHIQUE/2021' },
            { year: 2020, link: '/GRAPHIQUE/2020' },
        ],
    },
    {
        name: 'SIGMA',
        years: [
            { year: 2023, link: '/SIGMA2023' },
            { year: 2022, link: '/SIGMA2022' }
        ],
    },
    {
        name: 'EVER',
        years: [
            { year: 2023, link: '/EVER2023' }
        ],
    },
    {
        name: 'DELTA',
        years: [
            { year: 2024, link: '/Delta2024' },
            { year: 2023, link: '/Delta2023' },
            { year: 2022, link: '/Delta2022' },
            { year: 2021, link: '/Delta2021' }
        ],
    },
    {
        name: '180 DC',
        years: [
            { year: 2023, link: '/One802023' }
        ],
    },
    {
        name: '3D AERODYNAMICS',
        years: [
            { year: 2023, link: '/3D2023' }
        ],
    },
    {
        name: 'FORCE HYPERLOOP',
        years: [
            { year: 2024, link: '/Fhl2023' }
        ],
    },
    {
        name: 'MAXIMUS',
        years: [
            { year: 2023, link: '/MAXIMUS/2023' },
            { year: 2022, link: '/MAXIMUS/2022' },
            { year: 2021, link: '/MAXIMUS/2021' },
            { year: 2020, link: '/MAXIMUS/2020' },
        ],
    },
    {
        name: 'RMI',
        years: [
            { year: 2023, link: '/RMI2023' },
            { year: 2022, link: '/RMI2022' },
            { year: 2021, link: '/RMI2021' },
            { year: 2020, link: '/RMI2020' },
        ],
    },
    {
        name: 'PSI',
        years: [
            { year: 2023, link: '/Psi2023' }
        ],
    },
    {
        name: 'DESIGNERS CONSORTIUM',
        years: [
            { year: 2024, link: '/DC2024' },
            { year: 2023, link: '/DC2023' },
            { year: 2022, link: '/DC2022' }
        ],
    },
    {
        name: 'NAKSHATRA',
        years: [
            { year: 2023, link: '/NAKSHA/2023' },
            { year: 2022, link: '/NAKSHA/2022' },
            { year: 2021, link: '/NAKSHA/2021' },
            { year: 2020, link: '/NAKSHA/2020' },
        ],
    },
    {
        name: 'DATABYTE',
        years: [
            { year: 2023, link: '/DB2023' }
        ],
    }
];

const ProjectSection = () => {

    return (
        <>
        <div className="project-section">
            <h2>PROJECTS</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <select
                            onChange={(e) => {
                                if (e.target.value) {
                                    window.location.href = e.target.value;
                                    e.target.value = ""; 
                                }
                            }}
                            defaultValue=""
                        >
                            <option value="" disabled>{project.name}</option> 
                            {project.years.map((yearData, yearIndex) => (
                                <option key={yearIndex} value={yearData.link}>
                                    {yearData.year}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}


            </div>
        </div>
        <Footer />
        </>
    );
};

export default ProjectSection;