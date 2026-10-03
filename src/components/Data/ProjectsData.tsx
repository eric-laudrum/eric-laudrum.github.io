import React from 'react';

import TrellisSequencer from "../Trellis/Trellis";
import Warble from "../Warble/Warble";


export interface ProjectComponentProps {
    techStack?: string[];
    website?: string;
}


interface Project {
    title: string;
    sections: string[];
    description: string;
    tags: string[];
    image: string;
    github: string;
    website?: string;
    component: React.ComponentType<ProjectComponentProps>;
}

const projects: Project[] = [
    {
        title: "Trellis",
        sections: ["Overview", "Tech Stack", "Architecture & Design", "Prototype", "Roadmap"],
        description: "A real-time 16-step sequencer.",
        tags: ["React", "Node.js", "Express", "Socket.io", "Tone.js", "Yjs", "MongoDB", "CORS", "MULTER"],
        image: "/assets/screenshots/trellis-sequencer.jpg",
        github: "https://github.com/eric-laudrum/trellis-sequencer",
        component: TrellisSequencer,
    },
    {
        title: "Warble",
        sections: ["Overview", "Tech Stack", "Architecture & Design", "Roadmap"],
        description: "An online marketplace for audio kits and foley sounds.",
        tags: ["Spring Boot", "React", "PostgreSQL", "JWT", "Java", "Cloudinary", "Docker"],
        image: "/assets/screenshots/warbleHome.jpg",
        github: "https://github.com/eric-laudrum/warble",
        component: Warble,
    },
    {
        title: "Trinket Magazine",
        sections: ["Overview", "Tech Stack", "Architecture & Design", "Roadmap"],
        description: "Website for ",
        tags: ["Spring Boot", "React", "PostgreSQL", "JWT", "Java", "Cloudinary", "Docker"],
        image: "/assets/screenshots/warbleHome.jpg",
        github: "https://github.com/eric-laudrum/warble",
        component: Warble,
    },

    {
        title: "Trial By Fire",
        sections: ["Overview", "Tech Stack", "Architecture & Design", "Roadmap"],
        description: "Artist website and store page",
        tags: ["Spring Boot", "React", "PostgreSQL", "JWT", "Java", "Cloudinary", "Docker"],
        image: "/assets/screenshots/warbleHome.jpg",
        github: "https://github.com/eric-laudrum/warble",
        component: Warble,
    },

];

export default projects;