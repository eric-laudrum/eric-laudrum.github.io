export default function ProjectPage(){
    const projects = [
        {
            title: "Adventure Club",
            description: "A full-stack application for a seniors outdoor recreation group.",
            tags: ["MongoDB", "Express", "React", "Node.js"],
            link: "#"
        }, 
        {
            title: "Producer Showcase",
            description: "An online marketplace for audio files: instrumental and foley.",
            tags: ["MongoDB", "Express", "React", "Node.js"],
            link: "#"
        }, 
        {
            title: "Wordland",
            description: "An android based mobile app game where users traverse to an end goal with scrabble moves.",
            tags: ["AndroidStudio", "Kotlin"],
            link: "#"
        },
        {
            title: "Huedoku",
            description: "An android based mobile app sudoku game where users can customize tile colours",
            tags: ["AndroidStudio", "Kotlin"],
            link: "#"
        }, 
    ];

    return(
        <main className="section-container">
            <h1 className="section-title">Projects</h1>

            <div className="project-grid">
                { projects.map(( project, index ) => (
                    <div className="project-container" key={ index }>
                        
                        <img className="project-img" src="img.jpg" alt="no image"/>
                        {/* Title */}
                        <h2 className="project-title">{ project.title }</h2>

                        {/* Description */}
                        <p className="project-description">{ project.description }</p>
                        <div className="project-tags">
                            { project.tags.map( tag => (
                                <span key={ tag }>{ tag }</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </main>
    )
}
