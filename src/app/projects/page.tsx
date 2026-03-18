"use client";

import { useState } from "react";
import ContractorConnect from "../contractor-connect/page";
import TrellisSequencer from "../trellis-sequencer/page";
import ProjectNav from "@/components/ProjectNav"


export default function ProjectPage(){

    const [activeProject, setActiveProject] = useState("Contractor Connect");

    const projects = [
    {
        title: "Contractor Connect",
        description: "An online bidding platform for home improvement projects.",
        tags: ["PHP", "PHPUnit"],
        image: "/assets/contractor-connect.jpg",
        component: <ContractorConnect />,
    },
    {
        title: "Trellis",
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

            <h1 className="section-title">{activeProject}</h1>

            {/* Only render selected project */}
            <div className="project-content-area">
                {currentProject ? currentProject.component : <p>Select a project</p>}
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
        </main>
    )
}
