import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import styles from "./page.module.css";

export default function ProjectsPage() {
    return (
        <main className={styles.projectsContainer}>
            <FeaturedProjects />
        </main>
    );
}