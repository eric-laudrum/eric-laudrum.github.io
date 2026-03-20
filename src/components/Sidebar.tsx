interface SidebarProps {
  title: string;
  sections: string[];
  prefix?: string;
  repo?:string;
  repoText?: string;
}


export default function Sidebar({ title, sections, prefix, repo, repoText }: SidebarProps) {


     return(

        <div className="left-sidebar" id="project-toc">

            <h2 className="section-title">{title}</h2>

            <div className="sidebar-nav" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {sections?.map((section) => {
                    const slug = section.toLowerCase().replace(/\s+/g, "-");
                    const anchor = prefix ? `${prefix}_${slug}` : slug;

                    return (
                        <a key={section} className="github-link" href={`#${anchor}`}>
                            {section}
                        </a>
                    );
                })}

                {/* GitHub Account / Repository */}
                {repo && (
                    <div className="repo-link-container" style={{ marginTop: "20px", paddingTop: "10px", borderTop: "1px solid #eee" }}>
                        <a 
                            href={repo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="github-link"
                            style={{ fontWeight: "bold", color: "#2a769c" }}
                        >
                            {repoText || "GitHub Repository"} →
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}