import NavBar from "../NavBar/NavBar";
import Link from "next/link";
import styles from "./page.module.css";

const Header = () => {
    return(
        <>
        <div className={styles.header}>
            <h1 className={styles.bannerTitle}>
                <Link className="title" href="/public">
                    <img className={styles.headerImage} src="/assets/eric-nameplate.png" alt="Eric Laudrum" />
                </Link>
            </h1>
        
            <NavBar />
        </div>
        </>

    )
;}

export default Header;