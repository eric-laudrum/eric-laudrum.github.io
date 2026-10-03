'use client';
import { useState} from 'react';
import styles from './page.module.css';

import projects from "@/components/Data/ProjectsData";


export default function AboutPage() {

    const [ activeTab, setActiveTab ] = useState('skills');

    const [activeProject, setActiveProject] = useState("Trellis");
    const currentProject = projects.find(p => p.title === activeProject);



    return (
        <main className={styles.sectionContainer}>

            <section className={styles.sectionContainer} id="about-section">
            
                    
                {/* Title, headshot, text */}
                <div className={styles.leftSide}>



                    <div className={styles.aboutBody}>
                        <img src="/assets/eric-nameplate.png"
                             alt="Eric Laudrum"
                            style={{width: '100px', aspectRatio: 'cover'}}
                        />

                        {/* Headshot */}
                        <div className={styles.imageWrapper}>
                            <img
                                className={styles.headshotImg}
                                src="/assets/el-headshot-01.jpeg"
                                alt="Eric Headshot"
                                width={400}
                                height={400}
                            />
                        </div>

                        {/* Text Content */}
                        <div className={styles.mainText} id="about">
                            <ul className={styles.paragraphList}>
                                <li className={styles.aboutParagraph}>Full Stack Developer | Logistics Specialist</li>
                                <li className={styles.aboutParagraph}>
                                    I'm a full-stack developer who turns complex ideas into simple, intuitive products
                                    that work cleanly and feel effortless to use.
                                </li>
                                <li className={styles.aboutParagraph}>
                                    I work across Java, C#, Python, React, and Node.js, blending technical logic with a
                                    background in sociology.
                                </li>
                                <li className={styles.aboutParagraph}>
                                    I believe that good design should be invisible, and the best tools are the ones that
                                    stay out of the user's way.
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>

                {/* --------------- Project Panels ---------------*/}
                <hr></hr>
                <h1 className={styles.sectionTitle}>Projects</h1>
                <div className={styles.projectGrid}>
                
                        {projects.map((project, index) => (
                            <div 
                                className={styles.projectCard} 
                                key={index} 
                                onClick={() => {
                                    setActiveProject(project.title);
                                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                }}
                            >
                                <img 
                                    className={styles.projectImg} 
                                    src={project.image} 
                                    alt={project.title} 
                                />
                                <p className={styles.projectDescription}>{project.description}</p>
                                
                                
                                <div className={styles.projectCardContent}>
                                    <div className={styles.tagRow}>
                                        {project.tags?.map(tag => (
                                            <span key={tag} className={styles.tagBadge}>{tag}</span>
                                        ))}
                                    </div>
                                    <h2 className={styles.projectTitle}>{project.title}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                    
            </section>
            
        </main>
    );
}