'use client';

import styles from './page.module.css';
import FeaturedProjects from '../../components/FeaturedProjects/FeaturedProjects';
import Link from "next/link";

export default function AboutPage() {
    return (
        <>
        <main className={styles.sectionContainer} id={styles.aboutSection}>


            <div className={styles.aboutCard}>

                <div className={styles.leftSide}>
                    <div className={styles.aboutBody}>


                        {/* Text Content */}
                        <div className={styles.mainText} id="about">
                            <ul className={styles.paragraphList}>
                                <li className={styles.aboutParagraphHeader}>
                                    Full Stack Developer
                                </li>
                                <li className={styles.aboutParagraph}>
                                    I build tailored web, mobile, and desktop solutions designed to fix real issues.
                                    With a background in sociology, my approach is deeply community-oriented. I believe
                                    technology should make people's lives easier.
                                </li>
                                <li className={styles.aboutParagraph}>
                                    If a tool is missing, create it. Recently I have been focusing on React development,
                                    but will always use the tools best suited to the task.
                                </li>
                                <li className={styles.aboutParagraph}>
                                    Coming from a place of strong customer care and collaboration, I work from the
                                    principle that no
                                    role is too small and no person is insignificant.
                                </li>
                                <Link className={styles.contactButton} href='/contact'>Get in touch!</Link>
                            </ul>

                        </div>

                    </div>
                </div>
                <div className={styles.rightSide}>
                    {/* Headshot */}
                    <div className={styles.imageWrapper}>
                        <img
                            className={styles.headshotImg}
                            src="/assets/el-headshot-01.jpeg"
                            alt="Eric Headshot"
                            width={400}
                            height={400}
                        />
                    </div>
                </div>


            </div>


        </main>
        </>
    );
}