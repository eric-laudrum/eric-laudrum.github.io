"use client";

import React from 'react';
import styles from './page.module.css';
import Badge from '@/components/Badge';

interface WarbleProps {
    techStack?: string[];
}

export default function Warble({ techStack }: WarbleProps) {
    return (
        <div className={styles.sectionContainer}>
            <div className={styles.projectContainer}>
                <div className={styles.imageContainer}>
                    <div className={styles.projectImageContainer}>
                        <img
                            className={styles.projectImage}
                            src="/assets/screenshots/warbleHome.jpg"
                            alt="Warble About"
                        />
                    </div>
                </div>

                <div className={styles.contentContainer}>
                    <a className={styles.websiteLink} href={"https://warbleaudio.vercel.app/"}>Visit
                        website</a>
                    <h4 className={styles.projectTagline}>
                        Professional E-commerce for Sound Designers
                    </h4>

                    <p className={styles.projectDescription}>
                        Warble is an e-commerce platform engineered for the distribution of instrumental samples and
                        foley sounds.
                    </p>
                </div>
            </div>

            <hr style={{margin: "3rem 0"}}/>

            <div className={styles.projectContainer} id="warble_technology">
                <div className={styles.contentContainer}>
                    <h2 className={styles.projectTitle}>Technology</h2>

                    <div className={styles.badgeContainer}>
                        {techStack?.map((tech) => (
                            <Badge key={tech} text={tech}/>
                        ))}
                    </div>

                    <ul>
                        <li className={styles.listItem}>
                            <strong>Interactive Storefront (React & Vite):</strong> Powers the dynamic UI and fast client-side navigation for browsing albums and audio samples.
                        </li>
                        <li className={styles.listItem}>
                            <strong>Backend Engine (Node.js & MongoDB):</strong> Manages the decoupled e-commerce logic, user account favorites, and catalog data.
                        </li>
                        <li className={styles.listItem}>
                            <strong>Secure Asset Delivery (Cloudflare R2 & JWT):</strong> Ensures that heavy, high-fidelity audio files are stored securely and only accessible to authorized users.
                        </li>
                    </ul>
                </div>
            </div>

            <hr style={{margin: "3rem 0"}}/>

            <div className={styles.projectContainer} id="warble_roadmap">
                <div className={styles.contentContainer}>
                    <h2 className={styles.projectTitle}>Roadmap</h2>

                    <ul>
                        <li className={styles.listItem}><strong>Advanced Search & Filters:</strong> Implementing full-text search capabilities to allow users to filter samples by multiple concurrent musical parameters.</li>
                        <li className={styles.listItem}><strong>Render Deployment:</strong> Finalizing the deployment pipeline to host the API with integrated MongoDB Atlas connections.</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}