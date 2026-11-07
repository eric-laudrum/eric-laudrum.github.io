"use client";

import React from 'react';
import Badge from '@/components/Badge';
import { ProjectComponentProps } from '@/components/data/ProjectsData';
import styles from "@/components/LinkList/page.module.css";

export default function LinkList({ techStack }: ProjectComponentProps) {{
    return (
        <div className={styles.sectionContainer}>

            <div className={styles.fullImageContainer}>
                <img src={'/assets/images/LinkList-BigHero.jpg'}/>
            </div>
            <div className={styles.imageContainer} style={{marginTop: '20px'}}>
                <img
                    className={styles.projectImage}
                    src="/assets/images/LinkList-AllSceens.png"
                    alt="LinkList About"
                />
            </div>

            <div className={styles.projectContainer}>


                <div className={styles.leftContainer}>
                    <a className={styles.websiteLink} href={"https://link-list.vercel.app/"}>Visit website</a>
                    <h4 className={styles.projectTagline}>
                        A smarter grocery list
                    </h4>

                    <p className={styles.projectDescription}>
                        Link list was developed to keep your grocery list organized, and all in one place.

                    </p>
                    <p className={styles.listHeader}>
                        Features
                    </p>
                    <ul>
                        <li className={styles.listItem}>Real-time updating</li>
                        <li className={styles.listItem}>Check off items with a swipe</li>
                        <li className={styles.listItem}>Share your list and keep updated</li>
                        <li className={styles.listItem}>Organize your list so it makes sense for you</li>

                    </ul>

                </div>
            </div>

            <hr style={{margin: "4rem 0 2rem"}}/>

            <div className={styles.projectContainer} id="trellis_technology">
                <div className={styles.leftContainer}>
                    <h2 className={styles.projectTitle}>Tech</h2>

                    <div className={styles.badgeContainer}>
                        {techStack?.map((tech) => (
                            <Badge key={tech} text={tech}/>
                        ))}
                    </div>

                    <ul>
                        <li className={styles.listItem}>
                            <strong>React:</strong> Manages the list and updates
                        </li>

                        <li className={styles.listItem}>
                            <strong>Node.js & Socket.io:</strong> Syncs changes instantly between all connected users.
                        </li>
                    </ul>
                </div>
            </div>

            <hr style={{margin: "4rem 0 0"}}/>


        </div>
    );
}
}