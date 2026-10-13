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
    imagePrimary: string;
    imageFeatured: string;
    github: string;
    website?: string;
    component: React.ComponentType<ProjectComponentProps>;
}

const projects: Project[] = [
    /* ------------------ Trellis ------------------ */
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
        imagePrimary: "/assets/screenshots/trellis-sequencer.jpg",
        imageFeatured: "/assets/screenshots/trellis-square.jpeg",

        github: "https://github.com/eric-laudrum/trellis-sequencer",
        website: "https://trellis-sequencer.vercel.app",
        component: Trellis,
    },
    /* ------------------ Warble ------------------ */
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
        imagePrimary: "/assets/screenshots/warbleHome.jpg",
        imageFeatured: "/assets/screenshots/warble-square.jpeg",
        github: "https://github.com/eric-laudrum/warble",
        website: "https://warble-music.onrender.com",
        component: Warble,
    },
    /* ------------------ TrialByFire ------------------ */
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
        imagePrimary: "/assets/screenshots/trialbyfire.jpeg",
        imageFeatured: "/assets/screenshots/trialbyfire.jpeg",
        github: "https://github.com/eric-laudrum/trial-by-fire",
        component: TrialByFire,
    },

    /* ------------------ Trinket Magazine ------------------ */
    {
        title: "Trinket Magazine",
        sections: ["Overview", "Tech Stack", "Architecture & Design", "Roadmap"],
        description: "Digital publication platform and online magazine.",
        tags: ["React", "TypeScript", "Node.js", "Express"],
        imagePrimary: "/assets/screenshots/trinketmag.jpg",
        imageFeatured: "/assets/screenshots/trinketmag.jpg",
        github: "https://github.com/eric-laudrum/trinket-magazine",
        component: Trinket,
    },
];

export default projects;