'use client';
import { useState} from 'react';
import styles from './about.module.css';
import Link from 'next/link';


export default function AboutPage() {

    const [ activeTab, setActiveTab ] = useState('skills');

    const tabData = {
        skills: {
            title: "Technical Skills",
            content: "React, Next.js, Node.js",
            image: '/assets/screenshots/warbleHome.jpg',
        },
        projects: {
            title: "Selected Projects",
            content: "Building full-stack apps with sociology in mind",
            image: '/assets/screenshots/trellis-sequencer.jpg',
        },
        ai: {
            title: "AI & Data",
            content: "Identifying bias and drawing real-world insights",
            image: '/assets/screenshots/loopInHome.jpg',
        }

    }

    return (
        <main className={styles.sectionContainer} id="about-section">

            {/* Photos */}
            <div className={styles.imageBar}>

                <img src="/assets/screenshots/about-photos-04.png" alt="developer photos" className={styles.fullWidthPhoto} />

                <img src="/assets/screenshots/about-photos-06.png" alt="abstract static image" className={styles.fullWidthPhoto} />

            </div>

            {/* Quote & About me */}
            <div className={styles.textColumns}>
                <div className={styles.textColumn}>
                    <p className={styles.quote}>
                   
                        I Believe That Good Design Looks Invisible, And The Best Tools Are The Ones You Have Available. 
                   
                    </p>
                </div>

                <div className={styles.textColumn}>
                    <p className={styles.text}>
                     
                        I’m a full-stack developer in my final semester of a 3-year Computer Programming & Analysis program at George Brown Polytechnic, 
                        with a Bachelor of Arts in Sociology from Toronto Metropolitan University. 
                        This combination allows me to approach building software with both technical skill and a strong understanding of user experience. 
                        I come equipped with an above average understanding of data and statistics, 
                        making me highly capable of identifying bias and drawing real-world insights that can improve design.
                    
                    </p>
                </div>
            </div>

            {/* Project Preview */}
            <div className={styles.projectBar}>

                <div className={styles.badgeRow}>
                    
                    <button 
                        className={`${styles.setActiveButton} ${activeTab === 'skills' ? styles.active : ''}`}
                        onClick={() => setActiveTab('skills')}
                    >
                        Technical Skills
                    </button>


                    <button 
                        className={`${styles.setActiveButton} ${activeTab === 'projects' ? styles.active : ''}`}
                        onClick={() => setActiveTab('projects')}
                    >
                        Selected Projects
                    </button>


                    <button 
                        className={`${styles.setActiveButton} ${activeTab === 'ai' ? styles.active : ''}`}
                        onClick={() => setActiveTab('ai')}
                    >
                        AI & Data Annotation
                    </button>

                </div>


                <div className={styles.projectRow}>

                    { activeTab === 'skills' &&(

                        <>
                            <img className={styles.smallPhoto} src="/assets/screenshots/trellis-sequencer.jpg" alt="Project" />

                            <div className={styles.projectAbout}>
                                <h1 className={styles.subTitle}>Title</h1>
                                <p>
                                    My experience spans Java, C#, Python, and full-stack development with React, Node.js, ASP.NET, and Spring Boot, 
                                    along with mobile development for iOS and Android and databases like SQL, PostgreSQL, and MongoDB.
                                </p>    
                            </div>
                        </>
                    )}

                    {activeTab === 'projects' && (
                        <>
                            <img className={styles.smallPhoto} src="/assets/screenshots/trellis-sequencer.jpg" alt="Project" />
                            <div className={styles.projectAbout}>
                                <h1 className={styles.subTitle}>Selected Projects</h1>
                                <p>
                                    One of the primary projects I have been developing is <strong>Contractor Connect</strong> - a platform that connects homeowners with local contractors through project posting, structured bidding, and simple dashboards. 
                                    This is a full-stack web application that has been build with a team of five developers. 
                                </p>
                                <p>
                                    On this team I played a key role in shaping both the product and the team workflow. 
                                    I led the design of our prototype, focusing on creating a clean, intuitive interface. 
                                    I took ownership of quality assurance, creating and running tests to ensure the application functioned reliably. 
                                    I led discussions around collaboration and workflow, helping establish best practices for using version control so we could work on the same codebase efficiently, 
                                    track changes clearly, and avoid conflicts.
                                </p>
                                <p>
                                    I’m currently developing a series of projects that explore the intersection of music production and programming. 
                                    These include 
                                    <ul className={styles.projectList}>
                                        <li className={styles.projectPoint}>
                                            Trellis, a real-time 16-step sequencer built to address latency in online collaboration; 
                                        </li>
                                        <li className={styles.projectPoint}>
                                            Warble, an e-commerce platform for selling sound packs and individual samples; and 
                                        </li>
                                        <li className={styles.projectPoint}>
                                            Loop-In, a blog-style platform focused on the relationship between coding and music production.
                                        </li>
                                    </ul>
                        

                                </p>
                                <Link className={styles.linkButton} href='/projects'>See My Work</Link>
                            </div>
                        </>
                    )}

                    {activeTab === 'ai' && (
                        <>
                            <img className={styles.smallPhoto} src="/assets/screenshots/trellis-sequencer.jpg" alt="Project" />

                            <div className={styles.projectAbout}>
                            
                            <h1 className={styles.subTitle}>AI & Data</h1>

                            <p>
                                Alongside my development work, I train and evaluate AI models through data annotation, 
                                using prompt engineering and structured evaluation to improve output quality. 
                                I test model behavior using APIs and CLI tools, identify edge cases, and flag gaps in logic or data. 
                                This work has strengthened my attention to detail and given me a practical understanding of how AI systems perform in real-world use.
                            </p>

                        </div>
                        </>
                        
                    )}
                                       
                </div>            
            </div>
        </main>
    );
}