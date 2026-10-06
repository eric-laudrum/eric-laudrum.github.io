import styles from "./page.module.css";
import ProjectData from "../Data/ProjectsData";
import Link from "next/link";

interface FeaturedProjectsProps {
    excludeTitle?: string;
}

export default function FeaturedProjects({ excludeTitle }: FeaturedProjectsProps) {
    const displayProjects = ProjectData.filter(
        (project) => project.title !== excludeTitle
    );

    return (
        <div className={styles.featuredAlbums}>
            <h3 className={styles.sectionTitle}>More Projects</h3>

            <div className={styles.albumScroll}>
                {displayProjects.map((project, index) => {
                    const slug = project.title.toLowerCase().replace(/\s+/g, '-');

                    return (
                        <Link key={index} className={styles.navLink} href={`/projects/${slug}`}>
                            <div className={styles.projectCard}>
                                <div className={styles.projectImageWrapper}>
                                    <img
                                        src="./assets/img"
                                        className={styles.projectImage}
                                        alt={project.title}
                                    />
                                </div>
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <p className={styles.projectDescription}>{project.description}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}