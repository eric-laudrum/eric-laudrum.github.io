import NavBar from "../NavBar/NavBar";
import Link from "next/link";
import styles from "./page.module.css";

const Header = () => {
    return(
        <>
            <div className={styles.swoop}></div>
            <div className={styles.header}>
                <h1 className={styles.headerImage}>
                    <Link className={styles.logoLink} href="/">
                        <img className={styles.headerLogo} src="/assets/images/EricLaudrum-Logo.svg"
                             alt="Eric Laudrum"/>
                    </Link>
                </h1>
                <NavBar/>
            </div>
        </>

    )
        ;
}

export default Header;