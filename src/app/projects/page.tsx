"use client";

import { useState } from "react";
import ProjectNav from "@/components/ProjectNav";
import Sidebar from "@/components/Sidebar";
import projects from "@/app/data/projectsData";
import styles from "./projects.module.css";

export default function ProjectPage() {
    const [activeProject, setActiveProject] = useState("Contractor Connect");
    const currentProject = projects.find(p => p.title === activeProject);

    return (
        <main className={styles.projectsContainer}>
            <ProjectNav setActive={setActiveProject} active={activeProject} />

            <div className={styles.projectLayout}>
                <aside className={styles.projectSidebarContainer}>
                    <Sidebar 
                        title="Project Contents" 
                        sections={currentProject?.sections || []}
                        repo={currentProject?.github} 
                        prefix={activeProject === "Contractor Connect" ? "cc" : "trellis"}
                    />
                </aside>

                <section className={styles.projectMainContent}>
                    <div className={styles.projectHeader}>
                        <h1 className={styles.sectionTitle}>{activeProject}</h1>
                        {currentProject?.tags && (
                            <div className={styles.projectTags}>
                                <span style={{fontWeight: 'bold', marginRight: '10px'}}>Tech Stack:</span>
                                {currentProject.tags.map(tag => (
                                    <span key={tag} className={styles.tagBadge}>{tag}</span>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className={styles.projectContentArea}>
                        {currentProject && (
                            <currentProject.component 
                                techStack={currentProject.techStack} 
                                tags={currentProject.tags} 
                            />
                        )}
                    </div>

                    <div className={styles.projectGrid}>
                        {projects.map((project, index) => (
                            <div 
                                className={styles.projectCard} 
                                key={index} 
                                onClick={() => {
                                    setActiveProject(project.title);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                            >
                                <img 
                                    className={styles.projectImg} 
                                    src={project.image} 
                                    alt={project.title} 
                                />
                                <h2 className={styles.projectTitle}>{project.title}</h2>
                                <p className={styles.projectDescription}>{project.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}