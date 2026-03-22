import styles from './about.module.css';

export default function AboutPage() {
    return (
        <main className={styles.sectionContainer} id="about-section">

            <div className={styles.threeColumnGrid}>
                {/* COLUMN 1 */}
                <div className={styles.column}>
                    <div className={styles.photoRow}>
                        <img src="/assets/screenshots/about-photos-04.png" alt="Eric 1" className={styles.fullWidthPhoto} />
                    
                    </div>
                    <div className={styles.contentBox}>
                        <h2>About Me</h2>
                        <p className={styles.aboutParagraph}>
                            I’m a full-stack developer in my final semester of a 3-year Computer Programming & Analysis program at George Brown Polytechnic, with a Bachelor of Arts in Sociology from Toronto Metropolitan University. This combination allows me to approach building software with both technical skill and a strong understanding of user experience. I come equipped with an above average understanding of data and statistics, making me highly capable of identifying bias and drawing real-world insights that can improve design.
                        </p>
                        <h2>Technical Skills</h2>
                        <p className={styles.aboutParagraph}>
                            My experience spans Java, C#, Python, and full-stack development with React, Node.js, ASP.NET, and Spring Boot, along with mobile development for iOS and Android and databases like SQL, PostgreSQL, and MongoDB.
                        </p>
                    </div>
                </div>

                {/* COLUMN 2 */}
                <div className={styles.column}>
                    <img src="/assets/screenshots/about-photos-05.png" alt="Project Preview" className={styles.fullWidthPhoto} />
                    <div className={styles.contentBox}>
                        <h2>Selected Projects</h2>
                        <p className={styles.aboutParagraph}>
                            One of the main projects I’ve developed is Contractor Connect, a full-stack web application built in a team of five. The platform connects homeowners with local contractors through project posting, structured bidding, and simple dashboards. On this team I played a key role in shaping both the product and the team workflow. I led the design of our prototype, focusing on creating a clean, intuitive interface. I took ownership of quality assurance, creating and running tests to ensure the application functioned reliably. I led discussions around collaboration and workflow, helping establish best practices for using version control so we could work on the same codebase efficiently, track changes clearly, and avoid conflicts.
                        </p>
                        <p className={styles.aboutParagraph}>
                            I’m currently developing a series of projects that explore the intersection of music production and programming. These include Trellis, a real-time 16-step sequencer built to address latency in online collaboration; Warble, an e-commerce platform for selling sound packs and individual samples; and Loop-In, a blog-style platform focused on the relationship between coding and music production.
                        </p>
                    </div>
                </div>

                {/* COLUMN 3 */}
                <div className={styles.column}>
                    <img src="/assets/screenshots/about-photos-06.png" alt="AI Work" className={styles.fullWidthPhoto} />
                    <div className={styles.contentBox}>
                        <h2>AI & Data Annotation</h2>
                        <p className={styles.aboutParagraph}>
                            Alongside my development work, I train and evaluate AI models through data annotation, using prompt engineering and structured evaluation to improve output quality. I test model behavior using APIs and CLI tools, identify edge cases, and flag gaps in logic or data. This work has strengthened my attention to detail and given me a practical understanding of how AI systems perform in real-world use.
                        </p>
                        <h3>Get in touch</h3>
                        <p className={styles.aboutParagraph}>
                            I’m currently seeking opportunities to contribute to a thoughtful, collaborative team and build products that make a real impact.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}