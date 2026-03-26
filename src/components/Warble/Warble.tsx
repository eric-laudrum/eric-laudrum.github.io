"use client";

import React from 'react';
import styles from './Warble.module.css';
import Badge from '@/components/Badge';

interface WarbleProps {
    techStack?: string[];
}

export default function Warble({ techStack }: WarbleProps) {
    return (
        <div className={styles.sectionContainer}>
            
            {/* --- Overview --- */}
            <div className={styles.projectContainer} id="warble_overview">
                <div className={styles.leftContainer}>
                    <h4 className={styles.projectTagline}>
                        Professional E-commerce for Sound Designers
                    </h4>
                    <p className={styles.projectDescription}>
                        Warble (AudioShowcase) is a high-performance e-commerce platform engineered for the distribution of high-fidelity instrumental samples and foley sounds. 
                    </p>
                    <p style={{ marginTop: "1rem" }}>
                        Unlike generic storefronts, Warble features a custom audio engine that manages complex metadata including BPM, Key, and Sample Rate, providing producers with the technical precision required for professional music production.
                    </p>
                </div>

                <div className={styles.rightContainer}>
                    <img 
                        className={styles.projectImage} 
                        src="/assets/screenshots/warbleHome.jpg" 
                        alt="Warble Home" 
                    />
                </div>
            </div>

            <hr style={{ margin: "3rem 0" }} />

            {/* --- Tech Stack --- */}
            <div className={styles.projectContainer} id="warble_tech-stack">
                <div className={styles.leftContainer}>
                    <h2 className={styles.projectTitle}>Tech Stack</h2>
                    
                    <div className={styles.badgeContainer}>
                        {techStack?.map((tech) => (
                            <Badge key={tech} text={tech} />
                        ))}
                    </div>
                    
                    <ul>
                        <li><strong>Spring Boot 3.4 & Java 17:</strong> A robust, type-safe backend providing an enterprise-grade REST API.</li>
                        <li><strong>Spring Security & JWT:</strong> Implements stateless, token-based authentication for secure user sessions and role-based access control.</li>
                        <li><strong>PostgreSQL & JPA:</strong> Relational data persistence with Spring Data JPA for consistent and reliable transaction management.</li>
                        <li><strong>Cloudinary API:</strong> Offloads heavy audio and artwork assets to specialized cloud storage to ensure rapid global delivery.</li>
                    </ul>
               </div>
            </div>

            <hr style={{ margin: "3rem 0" }} />

            {/* --- Architecture & Design  --- */}
            <div className={styles.projectContainer} id="warble_architecture-design">
                <div className={styles.leftContainer}>
                    <h2 className={styles.projectTitle}>Architecture & Design</h2>
                    <p className={styles.projectDescription}>
                        The system utilizes a Monolithic-SPA hybrid architecture. While the React frontend handles the dynamic UI, the Spring Boot container serves the static assets and manages internal routing.
                    </p>
                    <ul>
                        <li><strong>Service-Oriented Logic:</strong> Business logic is decoupled from the controller layer, allowing for automated data seeding and isolated testing of the audio metadata engine.</li>
                        <li><strong>Security-First Data Flow:</strong> All requests are intercepted by a custom JWT filter chain, ensuring that sensitive operations like file access are strictly authorized at the server level.</li>
                    </ul>
                </div>
            </div>

            <hr style={{ margin: "3rem 0" }} />

            {/* --- Roadmap --- */}
            <div className={styles.projectContainer} id="warble_roadmap">
                <div className={styles.leftContainer}>
                    <h2 className={styles.projectTitle}>Roadmap</h2>
                    <ul>
                        <li><strong>Docker Orchestration:</strong> Refining the Docker Compose environment to manage multi-container deployments across development and staging environments.</li>
                        <li><strong>Advanced Search & Filters:</strong> Implementing full-text search capabilities to allow users to filter samples by multiple concurrent musical parameters (e.g., Genre + BPM + Mood).</li>
                        <li><strong>Railway Deployment:</strong> Finalizing the CI/CD pipeline to automate deployments to Railway with integrated PostgreSQL and secret management.</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}