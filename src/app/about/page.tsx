'use client';

import styles from './page.module.css';
import Link from "next/link";

export default function AboutPage() {
    return (
        <section id={styles.aboutSection}>
            <div className={styles.aboutCard}>
                <div className={styles.leftSide}>
                    <div className={styles.aboutBody}>
                        <div className={styles.mainText} id="about">
                            <ul className={styles.paragraphList}>
                                <li className={styles.aboutParagraphHeader}>
                                    Full Stack Developer
                                </li>
                                <li>

                                </li>
                                <li className={styles.aboutParagraph}>
                                    I'm Eric, full-stack developer and open source creator.
                                </li>
                                <li className={styles.aboutParagraph}>
                                    The first thing I programmed was a drum machine.
                                </li>
                                <li className={styles.aboutParagraph}>
                                    Coming from a place of strong customer care and collaboration, I work from the
                                    principle that no role is too small and no person is insignificant.
                                </li>
                                <Link className={styles.contactButton} href='/contact'>Get in touch!</Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.rightSide}>
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
        </section>
    );
}