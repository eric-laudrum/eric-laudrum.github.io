import ContractorConnect from "../contractor-connect/page";
import TrellisSequencer from "../trellis-sequencer/page";

export default function ProjectPage(){
    const projects = [
        {
            title: "Contractor Connect",
            description: "An online bidding platform for home improvement projects.",
            tags: ["PHP", "PHPUnit"],
            link: "https://contractorconnect.cc/",
            image: "/assets/contractor-connect.jpg",
        }, 
                {
            title: "Trellis",
            description: "A real-time 16-step sequencer built with Node.js, Socket.io, and Tone.js.",
            tags: ["Node.js", "Socket.io", "Tone.js"],
            image: "/assets/trellis-sequencer.jpg",
            link: "#",
        },
        {
            title: "Adventure Club",
            description: "A full-stack application for a seniors outdoor recreation group.",
            tags: ["MongoDB", "Express", "React", "Node.js"],
            image: "/assets/",
            link: "#"
        }, 
        {
            title: "Producer Showcase",
            description: "An online marketplace for audio files: instrumental and foley.",
            tags: ["MongoDB", "Express", "React", "Node.js"],
            image: "/assets/",
            link: "#"
        }, 

    ];

    return(
        <main className="section-container">
            <h1 className="section-title">Projects</h1>


            <ContractorConnect/>
            <TrellisSequencer />


            <div className="project-grid">
                { projects.map(( project, index ) => (
                    
                    <div className="project-container" key={ index }>
                        <a className="project-link"
                            href = {project.link} >     

                            {/* Title */}
                            <img className="project-img" src={project.image} alt="contractor connect"/>
                            
                            <h2 className="project-title">{ project.title }</h2>

                            {/* Description */}
                            <p className="project-description">{ project.description }</p>

                            <div className="project-tags">
                                { project.tags.map( tag => (
                                    <span key={ tag }>{ tag }</span>
                                ))}
                            </div>

                        </a>
                    </div>
                    
                ))}
            </div>

        </main>
    )
}
