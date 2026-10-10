"use client";

import React from 'react';
import styles from './page.module.css';
import Badge from '@/components/Badge';

interface TrialByFireProps {
    techStack?: string[];
}

export default function TrialByFire({ techStack }: TrialByFireProps) {
    return (
        <div className={styles.sectionContainer}>
            <div className={styles.projectContainer}>
                <div className={styles.imageContainer}>
                    <div className={styles.projectImageContainer}>
                        <img
                            className={styles.projectImage}
                            src="/assets/screenshots/trialbyfire.jpeg"
                            alt="Trial By Fire Showcase"
                        />
                    </div>
                </div>


                <div className={styles.contentContainer}>

                    <a className={styles.websiteLink} href={"https://trialbyfire.ca/"}>
                        Visit website
                    </a>
                    <h4 className={styles.projectTagline}>
                        An artist store showcase featuring PayPal checkout.
                    </h4>

                    <p className={styles.projectDescription}>
                        Trial By Fire is a full-stack e-commerce application designed to showcase and sell artist
                        merchandise, offering seamless music catalog browsing and secure checkout workflows.
                    </p>
                </div>
            </div>

            <hr style={{margin: "3rem 0"}}/>

            <div className={styles.projectContainer} id="trialbyfire_technology">
                <div className={styles.contentContainer}>
                    <h2 className={styles.projectTitle}>Technology</h2>

                    <div className={styles.badgeContainer}>
                        {techStack?.map((tech) => (
                            <Badge key={tech} text={tech}/>
                        ))}
                    </div>

                    <ul>
                        <li className={styles.listItem}>
                            <strong>React, Vite & React Router:</strong> Powers the dynamic single-page application experience, admin portal views, and seamless client-side routing.
                        </li>
                        <li className={styles.listItem}>
                            <strong>Node.js, Express, MongoDB & Mongoose:</strong> Manages the robust server routing, user favorites, schema validation, and secure REST API endpoints.
                        </li>
                        <li className={styles.listItem}>
                            <strong>Cloudflare R2 & Cloudinary:</strong> Handles media uploads, high-resolution product imagery, and reliable asset delivery.
                        </li>
                        <li className={styles.listItem}>
                            <strong>PayPal SDK & JWT:</strong> Implements token-based session handling, protected routes, and fully integrated payment processing.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}