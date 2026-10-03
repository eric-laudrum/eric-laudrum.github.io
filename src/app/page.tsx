/* -- Home Page -- */
import styles from "@/app/page.module.css";

import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";


export default function Home() {
  return (
    <main
        className={styles.sectionContainer}
        id={styles.homePage}>

        {/* Text Content */}
        <div className={styles.mainText}>
            <ul className={styles.paragraphList}>

                <li className={styles.aboutTitle}>Lets make something</li>


                <li className={styles.aboutParagraph}>
                    I'm a full-stack developer who turns complex ideas into simple, intuitive products
                    that work cleanly and feel effortless to use.
                </li>
                <li className={styles.aboutParagraph}>
                    I work across Java, C#, Python, React, and Node.js, blending technical logic with a
                    background in sociology.
                </li>


            </ul>
        </div>
      
        <FeaturedProjects />
    </main>
  );
}
