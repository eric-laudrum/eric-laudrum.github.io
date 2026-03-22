import styles from './loopIn.module.css'

export default function LoopIn(){
    return(
        
        <div className="section-container">

            <div className="solo-project-container">

                <div className="left-container" id="loopIn_overview">
                    <h4 className={styles.projectSubtitle}>
                        Stay in the loop
                    </h4>
                    <p className={styles.projectText}>
                        Loop-In is a blog-style platform exploring the intersection of programming and music production. Beatmaking and computer programming both rely on logical structure, pattern recognition, and iterative creative problem-solving. Whether assembling lines of code (variables, functions, loops) or layering beats, samples, and effects, both disciplines involve building complex systems from smaller, organized components. Loop-In explores these parallels in depth through articles and artist features.
                    </p>
                    <p className={styles.projectText}>
                        Built as a MERN-stack application, Loop-In integrates Firebase Authentication and Cloud Storage to manage articles and events, providing a modern, scalable foundation for content creation.
                    </p>
                    <p className={styles.projectText}>
                        Future features will include: Email notifications via Formspree.io, an events calendar, and video embedding support.   
                    </p>
                </div>

                <div className="right-container">
                    <img className={styles.projectImage} src="/assets/screenshots/loopInHome.jpg" />

                </div>
            </div>
        </div>

    )
}