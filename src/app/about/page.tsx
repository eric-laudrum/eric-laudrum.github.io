import styles from './About.module.css';

export default function AboutPage() {
    return (
        <main className={styles.sectionContainer} id="about-section">

            <div className={styles.imageBar}>

                <img src="/assets/screenshots/about-photos-04.png" alt="developer photos" className={styles.fullWidthPhoto} />

                <img src="/assets/screenshots/about-photos-06.png" alt="abstract static image" className={styles.fullWidthPhoto} />

            </div>

            <div className={styles.textColumns}>
                <div className={styles.textColumn}>
                    <p className={styles.quote}>
                        <strong>
                           I Believe That Good Design Looks Invisible, And The Best Tools Are The Ones You Have Available. 
                        </strong>
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

        </main>
    );
}