import React from 'react';

import ContractorConnect from "../contractorConnect/page";
import TrellisSequencer from "../trellisSequencer/page";
import Warble from "../warble/page";
import LoopIn from "../loopIn/page";


interface Project {
    title: string;
    sections: string[];
    description: string;
    tags: string[];
    image: string;
    github: string;
    techStack?: string[];
    component: React.ComponentType<any>;
}

const projects: Project[] = [
    {
        title: "Contractor Connect",
        sections: ["Intro", "Description", "Project Summary", "Project Plan", "Project Vision", "Project Requirements", "Diagrams", "Prototype", "System Implementation", "Status Report"],
        description: "An online bidding platform for home improvement projects.",
        tags: ["PHP", "PHPUnit"],
        image: "/assets/screenshots/contractor-connect.jpg",
        github: "https://github.com/AdelAlhajHussein/contractor_connect",
        component: ContractorConnect,
    },
    {
        title: "Trellis",
        sections: ["Overview", "Tech Stack", "Architecture & Design", "Prototype", "Roadmap"],
        description: "A real-time 16-step sequencer.",
        tags: ["Node.js", "Socket.io", "Tone.js"],
        image: "/assets/screenshots/trellis-sequencer.jpg",
        github: "https://github.com/eric-laudrum/trellis-sequencer",
        techStack: ["Next.js", "TypeScript", "Tone.js", "Socket.io", "Tailwind"],
        component: TrellisSequencer,
    },
    {
        title: "Warble",
        sections: ["Overview", "Architecture", "Warble"],
        description: "description for warble.",
        tags: ["React"],
        image: "/assets/screenshots/warbleHome.jpg",
        github: "https://github.com/eric-laudrum/warble",
        component: Warble,
    },
    {
        title: "Loop-In",
        sections: ["Overview", "Architecture", "Demo"],
        description: "description for loopin.",
        tags: ["React"],
        image: "/assets/screenshots/loopInHome.jpg",
        github: "https://github.com/eric-laudrum/LoopIn",
        component: LoopIn, 
    },
];

export default projects;