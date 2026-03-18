interface SidebarProps {
  title: string;
  sections: string[];
  prefix?: string;
}


export default function Sidebar({ title, sections, prefix }: SidebarProps) {


     return(

        <div className="left-sidebar" id="project-toc">

            <h2 className="section-title">{title}</h2>

            <div className="resume-nav" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {sections?.map((section) => {
                    const slug = section.toLowerCase().replace(/\s+/g, "-");
                    const anchor = prefix ? `${prefix}_${slug}` : slug;

                    return (
                        <a
                        key={section}
                        className="resume-link"
                        href={`#${anchor}`}
                        style={{ fontSize: "0.9rem", color: "#555" }}
                        >
                            {section}
                        </a>
                    );
                })}
      </div>
    </div>
  );
}