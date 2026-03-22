"use client";

import { useState } from "react";
import ContractorConnect from "../contractorConnect/page";
import TrellisSequencer from "../trellisSequencer/page";
import LoopIn from "../loopIn/page";
import Warble from "../warble/page";

import ProjectNav from "@/components/ProjectNav"
import Sidebar from "@/components/Sidebar";
import projects  from "@/app/data/projectsData";


export default function ProjectPage(){

    const [activeProject, setActiveProject] = useState("Contractor Connect");

    const currentProject = projects.find(p => p.title === activeProject);

    return(
        <main className="section-container" id="projects-container">
  
            <ProjectNav setActive={setActiveProject} active={activeProject} />

            <div className="project-layout" style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
                
                {/* Left Side */}
                <aside className="project-sidebar-container">
                    <Sidebar 
                        title="Project Contents" 
                        sections={currentProject?.sections || []}
                        repo={currentProject?.github} 
                        prefix={activeProject === "Contractor Connect" ? "cc" : "trellis"} /* account for file prefixes */
                    />
                    
                </aside>
            

                {/* Right Side */}
                <section className="project-main-content" style={{ flex: 1 }}>
                    <h1 className="section-title">{activeProject}</h1>

                    {/* Project Tags */}
                    {currentProject?.tags && (
                        <div className="project-tags" style={{ marginBottom: '2rem' }}>
                            <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Tech Stack:</span>
                            {currentProject.tags.map(tag => (
                                <span key={tag} className="tag-badge">{tag}</span>
                            ))}
                        </div>
                    )}

                   <div className="project-content-area">
                        {currentProject ? (
                            <currentProject.component 
                                techStack={currentProject.techStack} 
                                tags={currentProject.tags} 
                            />
                        ) : (
                            <p>Select a project</p>
                        )}
                    </div>

    
                    <div className="project-grid">
                        {projects.map((project, index) => (
                            <div 
                                className="project-container" 
                                key={index} 
                                onClick={() => {
                                    setActiveProject(project.title);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                style={{ cursor: 'pointer' }}
                            >
                                <img className="project-img" src={project.image} alt={project.title} />
                                <h2 className="project-title">{project.title}</h2>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags?.map(tag => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}
