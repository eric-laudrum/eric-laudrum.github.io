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


          <FeaturedProjects/>


          <div className={styles.futureSection}>

              <h2 className={styles.featuredTitle}>things I'm working on</h2>

              <ul className={styles.futureThings}>
                  <li className={styles.futureThing} id={styles.title}>Volunteering my time with CivicTech ....</li>
                  <li className={styles.futureThing}>One Million Neighbours</li>
                  <li className={styles.futureThing}>Contributed to map and data visualization</li>
              </ul>

              <ul className={styles.futureThings}>
                  <li className={styles.futureThing} id={styles.title}>Trellis features</li>
                  <li className={styles.futureThing}>Socket.io</li>
                  <li className={styles.futureThing}>Chat</li>
                  <li className={styles.futureThing}>Hold</li>
                  <li className={styles.futureThing}>Loop</li>
              </ul>

              <ul className={styles.futureThings}>
                  <li className={styles.futureThing} id={styles.title}>Building website for trinket</li>
              </ul>

          </div>

          <h2 className={styles.featuredTitle}>Get in touch! I'd love to work together.</h2>
      </main>
  );
}
