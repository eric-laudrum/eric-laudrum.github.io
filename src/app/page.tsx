/* -- app/page.tsx -- */
import styles from "@/app/page.module.css";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import AboutPage from "@/app/about/page";
import Link from "next/link";

export default function Home() {
    return (
        <main className={styles.sectionContainer}>
            <div className={styles.heroSection}>
                <div className={styles.paragraphList}>
                    <p className={`${styles.subHeader} ${styles.pre}`}>I like to make things</p>
                    <h1 className={styles.heroText}>Let's build your <span>next big idea.</span></h1>
                    <p className={`${styles.subHeader} ${styles.post}`}>web, mobile, and desktop solutions designed to fix real challenges. have something in mind?</p>
                </div>
            </div>

            <AboutPage />
            <FeaturedProjects />

            <div className={styles.futureSection}>
                <h2 className={styles.featuredTitle}>things I'm working on</h2>

                <ul className={styles.futureThings}>
                    <li className={`${styles.futureThing} ${styles.title}`}>Volunteering my time with CivicTech ....</li>
                    <li className={styles.futureThing}>One Million Neighbours</li>
                    <li className={styles.futureThing}>Contributed to map and data visualization</li>
                </ul>

                <ul className={styles.futureThings}>
                    <li className={`${styles.futureThing} ${styles.title}`}>Trellis features</li>
                    <li className={styles.futureThing}>Socket.io</li>
                    <li className={styles.futureThing}>Chat</li>
                    <li className={styles.futureThing}>Hold</li>
                    <li className={styles.futureThing}>Loop</li>
                </ul>
            </div>

            <h2 className={styles.contactFooter}>
                <Link className={styles.contactButton} href='/contact'>Get in touch! </Link>
                I'd love to work together.
            </h2>
        </main>
    );
}