import styles from './about.module.css'

export default function AboutPage(){

     return(
        <>
        <main className={styles.sectionContainer} id="about-section">
            <div className="mainProfile">

                <h1 className={styles.aboutTitle}>
                    Hi, I’m Eric
                </h1>


                <div className={styles.leftSide}>


                    {/* Headshot */}
                    <img 
                        className={styles.headshotImg}
                        src="assets/screenshots/eric-headshot.jpg" 
                        alt="no image"
                        width={300}
                        height={300}
                        
                    />
                    
                    <div className={styles.mainText} id="about">           
                        <ul>
                            <li className={styles.aboutParagraph}>
                                    
                                A full-stack developer who turns complex ideas into simple, intuitive products that work cleanly and feel effortless to use. 
                                My first insight into coding came from an unexpected place, pushing buttons on a sequencer to make music, using the same logic, patterns, and workflow that now guide how I build software. 
                            </li>

                             <li className={styles.aboutParagraph}>
                                I work across object-oriented programming (Java, C#, Python), 
                                mobile apps (iOS Swift, Android Java/Kotlin), 
                                full-stack web development (React, Node.js, ASP.NET, Spring Boot, MERN/MEAN), 
                                and databases (SQL, PostgreSQL, MongoDB). 
                                
                            </li>
                             <li className={styles.aboutParagraph}>
                                My background in sociology shapes how I think about people and data, bringing a human approach to my code. 
                                I believe that good design looks invisible, and the best tools are the ones you have available.

                            </li>


                        </ul>
                            
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}
