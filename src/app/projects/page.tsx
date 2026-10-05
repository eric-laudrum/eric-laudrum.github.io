"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProjectNav from "@/components/ProjectNav";
import Sidebar from "@/components/Sidebar";
import projects from "@/components/Data/ProjectsData";
import styles from "./page.module.css";

function ProjectContent() {
    const searchParams = useSearchParams();
    const tabParam = searchParams.get("tab");

    const [activeProject, setActiveProject] = useState(tabParam || "Trellis");

    useEffect(() => {
        if (tabParam) {
            setActiveProject(tabParam);
        }
    }, [tabParam]);

    const currentProject = projects.find(p => p.title === activeProject);

    const projectPrefixes: Record<string, string> = {
        "Trellis": "trellis",
        "Warble": "warble"
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeProject]);

    return (
        <main className={styles.projectsContainer}>
            <ProjectNav setActive={setActiveProject} active={activeProject} />

            <div className={styles.projectLayout}>
                <aside className={styles.projectSidebarContainer}>
                    <Sidebar
                        title="Project Contents"
                        sections={currentProject?.sections || []}
                        repo={currentProject?.github}
                        prefix={projectPrefixes[activeProject] || activeProject.toLowerCase().replace(/\s+/g, '')}
                    />
                </aside>

                <section className={styles.projectMainContent}>
                    <div className={styles.projectContentArea}>
                        {currentProject && (
                            <currentProject.component
                                website={currentProject.website}
                                techStack={currentProject.tags}
                            />
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
}

export default function ProjectPage() {
    return (
        <Suspense fallback={<div>Loading projects...</div>}>
            <ProjectContent />
        </Suspense>
    );
}