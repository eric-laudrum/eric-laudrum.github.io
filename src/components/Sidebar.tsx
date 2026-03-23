interface SidebarProps {
  title: string;
  sections: string[];
  prefix?: string;
  repo?: string;
  repoText?: string;
  resumeUrl?: string; // Add this
}

export default function Sidebar({ title, sections, prefix, repo, repoText, resumeUrl }: SidebarProps) {
  return (
    <div className="left-sidebar" id="project-toc">
      <h2 className="section-title">{title}</h2>

      <div className="sidebar-nav" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {sections?.map((section) => {
          const slug = section
            .toLowerCase()
            .replace(/&/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');

          const anchor = prefix ? `${prefix}_${slug}` : slug;

          return (
            <a key={section} className="github-link" href={`#${anchor}`}>
              {section}
            </a>
          );
        })}

        {/* --- Add Resume Download Link --- */}
        {resumeUrl && (
          <div >
            <a 
              href={resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              download
              className="github-link"
              
            >
              📄 Download Resume PDF
            </a>
          </div>
        )}

        {/* GitHub Account / Repository */}
        {repo && (
          <div className="repo-link-container">
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