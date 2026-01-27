export default function ProjectPage(){
    const projects = [
        {
            title: "Adventure Club",
            description: "A full-stack application for a seniors outdoor recreation group.",
            tags: ["MongoDB", "Express", "React", "Node.js"],
            link: "#"
        }
    ];

    return(
        <main className="section-container">
            <h1 className="section-title">Projects</h1>

            <div>
                { projects.map(( project, index ) => (
                    <div key={ index }>
                        <h2>{ project.title }</h2>
                        <p>{ project.description }</p>
                        <div>
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
