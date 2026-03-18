interface SidebarProps {
  title: string;
  sections: string[];
}

export default function Sidebar({ title, sections }: SidebarProps) {

     return(

        <div className="left-sidebar" id="project-toc">

            <h2 className="section-title">{title}</h2>

            <div className="resume-nav" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {sections?.map((section) => (
                <a
                    key={section}
                    className="resume-link"
                    href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
                    style={{ fontSize: "0.9rem", color: "#555" }}
                >
                    {section}
                </a>
                ))}
            </div>
        </div>


     )
}