'use client';
import { useState} from 'react';
import styles from './aboutPage.module.css';
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

                        <div className={styles.projectAbout}>
                            <h1 className={styles.subTitle}>Title</h1>
                            <p>This is another paragraph but this one talks about the project that goes here.</p>    
                        </div>
                    )}

                    {activeTab === 'projects' && (
                        <>
                            <img className={styles.smallPhoto} src="/assets/screenshots/trellis-sequencer.jpg" alt="Project" />
                            <div className={styles.projectAbout}>
                                <h1 className={styles.subTitle}>Selected Projects</h1>
                                <p>This is where your project details live.</p>
                                <Link className={styles.linkButton} href='/projects'>See My Work</Link>
                            </div>
                        </>
                    )}

                    {activeTab === 'ai' && (
                        <div className={styles.projectAbout}>
                            <h1 className={styles.subTitle}>AI & Data</h1>
                            <p>Identifying bias and drawing real-world insights.</p>
                        </div>
                    )}
                                       
                </div>            
            </div>
        </main>
    );
}