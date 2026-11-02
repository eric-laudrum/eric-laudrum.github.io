/* -- Home Page -- */
import styles from "@/app/page.module.css";

import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import AboutPage from "@/app/about/page";


export default function Home() {
  return (
    <main className={styles.sectionContainer} id={styles.homePage}>

        {/* Text Content */}
        <div className={styles.heroSection}>
            <ul className={styles.paragraphList}>

                <p className={styles.subHeader} id={styles.pre}>I like to make things</p>
                    <li className={styles.heroText}>Let's build your <span>next big idea.</span></li>

                    <p className={styles.subHeader} id={styles.post}>web, mobile, and desktop solutions
                        designed to fix real challenges. have something in mind?</p>


            </ul>
        </div>

        <AboutPage/>

        <FeaturedProjects />
    </main>
  );
}
