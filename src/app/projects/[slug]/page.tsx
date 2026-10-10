import { notFound } from "next/navigation";
import projects from "@/components/Data/ProjectsData";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import styles from "../page.module.css";

interface SingleProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.title.toLowerCase().replace(/\s+/g, "-"),
    }));
}

export default async function SingleProjectPage({ params }: SingleProjectPageProps) {
    const { slug } = await params;

    const currentProject = projects.find(
        (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
    );

    if (!currentProject) {
        return notFound();
    }

    const ProjectComponent = currentProject.component;

    return (
        <main className={styles.projectsContainer}>
            <section className={styles.projectMainContent}>
                <div className={styles.projectContentArea}>
                    <h1 className={styles.projectTitle}>{currentProject.title}</h1>
                    <ProjectComponent
                        website={currentProject.website}
                        techStack={currentProject.tags}
                    />
                </div>
            </section>

            <section className={styles.bottomFeaturedSection}>
                <FeaturedProjects excludeTitle={currentProject.title} />
            </section>
        </main>
    );
}