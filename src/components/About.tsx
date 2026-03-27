import styles from './About.module.css';
import GitHubStats from "../components/GitHubStats";


interface AboutProps {
    isFullPage?: boolean;
}

export default function About({ isFullPage = false }: AboutProps) {
    return (
        <section className={styles.sectionContainer} id="about-section">
           
                
                <h1 className={styles.aboutTitle}>
                    {isFullPage ? "About Me" : "Hi, I’m Eric"}
                </h1>

                <div className={styles.aboutBody}>

                    <div className={styles.leftSide}>
                    
                        {/* Headshot */}
                        <div className={styles.imageWrapper}>
                            <img 
                                className={styles.headshotImg}
                                src="/assets/screenshots/eric-headshot.jpg" 
                                alt="Eric Headshot"
                                width={300}
                                height={300}
                            />
                        </div>

                        {/* Text Content */}
                    <div className={styles.mainText} id="about">           
                        <ul className={styles.paragraphList}>
                            {isFullPage ? (
                                /* --- Full About Page Content --- */
                                <>
                                    <li className={styles.aboutParagraph}>
                                        <strong>Pattern Recognition:</strong> My approach to development is rooted in pattern recognition. 
                                        Long before I wrote my first line of code, I was navigating the constraints of hardware sequencers...
                                    </li>
                                    <li className={styles.aboutParagraph}>
                                        <strong>Engineering for Humans:</strong> With a degree in Sociology, I don't just see a "user"—I see a social actor with specific goals and frustrations...
                                    </li>
                                    <li className={styles.aboutParagraph}>
                                        <strong>Technical Philosophy:</strong> I am a firm believer in "Performance as a Feature." I work comfortably across the full stack...
                                    </li>
                                </>
                            ) : (
                                /* --- Home Page Content --- */
                                <>
                                    <li className={styles.aboutParagraph}>
                                        A full-stack developer who turns complex ideas into simple, intuitive products that work cleanly and feel effortless to use. 
                                    </li>
                                    <li className={styles.aboutParagraph}>
                                        I work across Java, C#, Python, React, and Node.js, blending technical logic with a background in sociology.
                                    </li>
                                    <li className={styles.aboutParagraph}>
                                        I believe that good design should be invisible, and the best tools are the ones that stay out of the user's way.
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>




                    </div>

             

                    <GitHubStats />
                </div>
                

               
     
        </section>
    );
}