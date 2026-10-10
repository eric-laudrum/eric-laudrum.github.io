import React from 'react';

import Trellis from "../Trellis/Trellis";
import Warble from "../Warble/Warble";
import TrialByFire from "../TrialByFire/TrialByFire";
import Trinket from "../Trinket/Trinket";

export interface ProjectComponentProps {
    techStack?: string[];
    website?: string;
}

export interface Project {
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
        sections: [
            "Overview",
            "Frontend Core & UI",
            "Audio Engine & Timing",
            "Real-Time Collaboration & Backend",
            "State Management & Performance"
        ],
        description: "A 16-step audio sequencer for real-time collaborative music production on the web.",
        tags: [
            "React",
            "JavaScript (ES6+)",
            "Web Audio API",
            "Socket.io",
            "Node.js",
            "Express",
            "CSS"
        ],
        image: "/assets/screenshots/trellis-sequencer.jpg",
        github: "https://github.com/eric-laudrum/trellis-sequencer",
        website: "https://trellis-sequencer.vercel.app",
        component: Trellis,
    },
    {
        title: "Warble",
        sections: [
            "Overview",
            "Backend & Database Core",
            "Frontend Tooling & Routing",
            "Authentication, State & Integrations"
        ],
        description: "An online marketplace for audio samples and foley sounds.",
        tags: [
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose",
            "React",
            "Vite",
            "React Router",
            "JWT",
            "Cloudflare R2"
        ],
        image: "/assets/screenshots/warbleHome.jpg",
        github: "https://github.com/eric-laudrum/warble",
        website: "https://warble-music.onrender.com",
        component: Warble,
    },
    {
        title: "Trial By Fire",
        sections: [
            "Overview",
            "Frontend Core & UI",
            "Backend & Database",
            "Asset Storage & Content Delivery",
            "E-Commerce & Authentication",
            "Hosting & Infrastructure"
        ],
        description: "An artist store showcase featuring PayPal checkout.",
        tags: [
            "React",
            "Vite",
            "React Router",
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose",
            "Cloudflare R2",
            "Cloudinary",
            "PayPal SDK",
            "JWT"
        ],
        image: "/assets/screenshots/trialbyfire.jpeg",
        github: "https://github.com/eric-laudrum/trial-by-fire",
        component: TrialByFire,
    },
    {
        title: "Trinket Magazine",
        sections: ["Overview", "Tech Stack", "Architecture & Design", "Roadmap"],
        description: "Digital publication platform and online magazine.",
        tags: ["React", "TypeScript", "Node.js", "Express"],
        image: "/assets/screenshots/trinketmag.jpg",
        github: "https://github.com/eric-laudrum/trinket-magazine",
        component: Trinket || Warble,
    },
];

export default projects;