import styles from "./page.module.css";
import ProjectData from "../Data/ProjectsData";
import Link from "next/link";

export default function FeaturedProjects() {
    return (
        <div className={styles.featuredAlbums}>
            <h3 className={styles.sectionTitle}>Featured Projects</h3>

            <div className={styles.albumScroll}>
                {ProjectData.map((project, index) => (
                    <Link
                        key={index}
                        className={styles.navLink}
                        href={`/projects?tab=${encodeURIComponent(project.title)}`}
                    >
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
                ))}
            </div>
        </div>
    );
}