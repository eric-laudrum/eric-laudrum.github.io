"use client";

import React from 'react';
import Badge from '@/components/Badge';
import { ProjectComponentProps } from '@/components/Data/ProjectsData';
import styles from './page.module.css';

export default function TrellisSequencer({ techStack }: ProjectComponentProps) {
    return (
        <div className={styles.sectionContainer}>
            <div className={styles.videoContainer}>
                <iframe
                    src="https://www.youtube.com/embed/xl6ijl_q9w4"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                >
                </iframe>
            </div>

            <div className={styles.projectContainer}>
                <div className={styles.leftContainer}>
                    <a className={styles.websiteLink} href={"https://trellis-sequencer-client-beta.vercel.app/"} >Visit website</a>
                    <h4 className={styles.projectTagline}>
                        A real-time web sequencer
                    </h4>

                    <p className={styles.projectDescription}>
                        The Trellis sequencer was designed to foster collaboration and creativity.
                        Multiple users can work on the same sequencer in perfect lock-step.

                    </p>
                    <p className={styles.listHeader}>
                        Features
                    </p>
                    <ul>
                        <li className={styles.listItem}>Sample Chopping</li>
                        <li className={styles.listItem}>Hold-sound</li>
                        <li className={styles.listItem}>Record from Mic</li>
                        <li className={styles.listItem}>Upload audio samples</li>
                        <li className={styles.listItem}>Tap BPM</li>
                        <li className={styles.listItem}>Real time waveform visualizer</li>
                        <li className={styles.listItem}>Room Chat</li>
                        <li className={styles.listItem}>Choke Groups</li>

                    </ul>

                </div>

                <div className={styles.rightContainer}>
                    <div className={styles.projectImageContainer}>
                        <img
                            className={styles.projectImage}
                            src="/assets/screenshots/trellis-sequencer.jpg"
                            alt="Trellis About"
                        />
                    </div>
                </div>
            </div>

            <hr style={{margin: "3rem 0"}}/>

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
                            <strong>React:</strong> Manages the 16-step grid and updates the
                            screen instantly when users place a beat.
                        </li>
                        <li className={styles.listItem}>
                            <strong>Web Audio API:</strong> Handles the audio timing to ensure the
                            music never cuts out, even under heavy browser load.
                        </li>
                        <li className={styles.listItem}>
                            <strong>Node.js & Socket.io:</strong> Syncs changes instantly
                            between all connected users without relying on heavy audio streaming.
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    );
}