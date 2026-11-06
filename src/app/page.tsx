/* -- app/page.tsx -- */
import styles from "@/app/page.module.css";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import AboutPage from "@/app/about/page";
import Ongoing from "@/components/Ongoing/Ongoing";

import Link from "next/link";

export default function Home() {
    return (
        <main className={styles.sectionContainer}>
            <div className={styles.heroSection}>
                <div className={styles.paragraphList}>
                    <p className={`${styles.subHeader} ${styles.pre}`}>I build technology that brings <span>people and ideas together</span></p>
                    <h1 className={styles.heroText}>Let's build your <span>next big idea.</span></h1>
                    <p className={`${styles.subHeader} ${styles.post}`}>Whether it's building a collaborative tool for musicians, making everyday tasks easier, or bringing an online business to life, I love turning an idea into something tangible. I'm naturally curous, always eager to learn, and believe the best solutions start with understanding the people they're build for.</p>
                </div>
            </div>




            <AboutPage />

            <FeaturedProjects />

            <Ongoing />


            <h2 className={styles.contactFooter}>
                <Link className={styles.contactButton} href='/contact'>Get in touch! </Link>
                I'd love to work together.
            </h2>
        </main>
    );
}