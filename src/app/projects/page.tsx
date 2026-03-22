"use client";

import { useState } from "react";
import ProjectNav from "@/components/ProjectNav";
import Sidebar from "@/components/Sidebar";
import projects from "@/app/data/projectsData";

export default function ProjectPage() {
    const [activeProject, setActiveProject] = useState("Contractor Connect");
    const currentProject = projects.find(p => p.title === activeProject);

    return (
        /* Replaces .projectsContainer */
        <main className="block max-w-[1400px] mx-auto p-8 bg-transparent min-h-screen">
            <ProjectNav setActive={setActiveProject} active={activeProject} />

            {/* Replaces .projectLayout */}
            <div className="flex flex-col lg:flex-row gap-12 mt-8 items-start">
                
                {/* Replaces .projectSidebarContainer */}
                <aside className="w-full lg:w-[280px] lg:sticky lg:top-[100px] shrink-0">
                    <Sidebar 
                        title="Project Contents" 
                        sections={currentProject?.sections || []}
                        repo={currentProject?.github} 
                        prefix={activeProject === "Contractor Connect" ? "cc" : "trellis"}
                    />
                </aside>

                {/* Replaces .projectMainContent */}
                <section className="flex-1 min-w-0">
                    {/* Replaces .projectHeader */}
                    <div className="mb-12 border-b border-black/10 pb-8 flex flex-col lg:flex-row justify-between lg:items-end gap-4">
                        <h1 className="text-[2.5rem] font-bold text-[#171717] leading-tight">
                            {activeProject}
                        </h1>

                        {/* Project Tags */}
                        {currentProject?.tags && (
                            <div className="flex flex-wrap gap-[10px] items-center">
                                <span className="font-bold mr-[10px]">Tech Stack:</span>
                                {currentProject.tags.map(tag => (
                                    <span key={tag} className="bg-black/5 px-3 py-1 rounded-[15px] text-[0.85rem] border border-black/10 text-[#8c8456] font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Replaces .projectContentArea */}
                    <div className="mb-20">
                        {currentProject ? (
                            <currentProject.component 
                                techStack={currentProject.techStack} 
                                tags={currentProject.tags} 
                            />
                        ) : (
                            <p>Select a project</p>
                        )}
                    </div>

                    {/* Replaces .projectGrid */}
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(325px,1fr))] gap-8 pt-12 border-t-2 border-black/5">
                        {projects.map((project, index) => (
                            <div 
                                className="flex flex-col bg-[#f0f8ff6f] p-6 rounded-[20px] border border-black/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_#2a769c] hover:border-[#2a769c] cursor-pointer" 
                                key={index} 
                                onClick={() => {
                                    setActiveProject(project.title);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                            >
                                <img 
                                    className="w-full h-[180px] object-cover rounded-[10px] border-[5px] border-white/40 mb-6" 
                                    src={project.image} 
                                    alt={project.title} 
                                />
                                <h2 className="text-[1.8rem] mb-3 text-[#171717]">{project.title}</h2>
                                <p className="text-[0.95rem] leading-relaxed text-[#444] mb-6 grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags?.map(tag => (
                                        <span key={tag} className="bg-black/5 px-3 py-1 rounded-[15px] text-[0.8rem] border border-black/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}