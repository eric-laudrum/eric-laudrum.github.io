/* -- Home Page -- */
import styles from "@/app/page.module.css";

import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import AboutPage from "@/app/about/page";


export default function Home() {
  return (
    <main
        className={styles.sectionContainer}
        id={styles.homePage}>

        {/* Text Content */}
        <div className={styles.mainText}>
            <ul className={styles.paragraphList}>

                <li className={styles.aboutTitle}>Lets make something</li>


                <AboutPage />


            </ul>
        </div>
      
        <FeaturedProjects />
    </main>
  );
}
