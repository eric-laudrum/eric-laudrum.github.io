"use client";

import { useState } from "react";
import ContractorConnect from "../contractor-connect/page";
import TrellisSequencer from "../trellis-sequencer/page";
import ProjectNav from "@/components/ProjectNav"
import Sidebar from "@/components/Sidebar";


export default function ProjectPage(){

    const [activeProject, setActiveProject] = useState("Contractor Connect");

    const projects = [
    {
        title: "Contractor Connect",
        sections: ["Summary", "Plan", "Vision", "Requirements", "Diagrams", "Prototype", "StatusReport"],
        description: "An online bidding platform for home improvement projects.",
        tags: ["PHP", "PHPUnit"],
        image: "/assets/contractor-connect.jpg",
        component: <ContractorConnect />,
    },
    {
        title: "Trellis",
        sections: ["Overview", "Architecture", "Demo"],
        description: "A real-time 16-step sequencer built with Node.js, Socket.io, and Tone.js.",
        tags: ["Node.js", "Socket.io", "Tone.js"],
        image: "/assets/trellis-sequencer.jpg",
        component: <TrellisSequencer />,
    },
    ]

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
                    />
                </aside>
            

                {/* Right Side */}
                <section className="project-main-content" style={{ flex: 1 }}>
                    <h1 className="section-title">{activeProject}</h1>

                    <div className="project-content-area">
                        {currentProject ? currentProject.component : <p>Select a project</p>}
                    </div>

                    {/* Grid view below the active project */}
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
