import Link from 'next/link';
import styles from './page.module.css';

const NavBar = () => {
    return(
        <nav>
            <div className={styles.navBar}>

                <Link className={styles.navLink} href='/projects'>Projects</Link>

                <Link className={styles.navLink} href='/about'>About</Link>

                <Link className={styles.navLink} href='/contact'>Contact</Link>
            </div>
        </nav>
    );
};

export default NavBar;