import styles from "./page.module.css"
import ProjectData from "../Data/ProjectsData";
import Link from "next/link";

export default function FeaturedProjects() {

    return (

        <div className={styles.featuredAlbums}>
            <h3 className={styles.projectTitle}>Projects</h3>
            <div className={styles.albumScroll}>

                {ProjectData.map((project, index) => (
                    <Link className={styles.navLink} href='/projects'>

                        <div key={index} className={styles.projectCard}>

                            <div className={styles.projectImageWrapper}>
                                <img src="./assets/img" className={styles.projectImage} alt='something'></img>
                            </div>

                            <h3 className={styles.projectTitle}>{project.title}</h3>

                            <p className={styles.projectDescription}>{project.description}</p>
                        </div>


                    </Link>

                ))}
            </div>


        </div>


    )
}