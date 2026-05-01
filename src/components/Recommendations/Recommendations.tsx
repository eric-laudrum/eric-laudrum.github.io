"use client";

import React from 'react';
import styles from '@/components/Recommendations/Recommendations.module.css'

export default function Recommendations() {
    return (
        <div className={styles.sectionContainer} id="recommendations">
            <h2 className={styles.sectionTitle}>Recommendations</h2>

            <div className={styles.recommendationGrid}>
                {/* Letter 1 */}
                <div className={styles.recCard}>
                    <div className={styles.recInfo}>
                        <h4 className={styles.recName}>Hilary Hayes</h4>
                        <p className={styles.recWorkplace}>Intuit</p>
                    </div>
                    
                    <a 
                        href="/assets/pdf/letter_of_rec-1.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.pdfLink}
                    >
                        <img 
                            src="/assets/screenshots/rec1-thumb.jpg" 
                            alt="Recommendation Letter Thumbnail" 
                            className={styles.pdfThumbnail}
                        />
                        <span className={styles.viewLabel}>View Full PDF</span>
                    </a>
                </div>

            </div>
        </div>
    );
}