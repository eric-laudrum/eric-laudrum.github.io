'use client';
import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Link from "next/link";
import styles from "./page.module.css";

const Header = () => {
    const [scrollAmount, setScrollAmount] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Remove Math.min completely. Let it track scroll endlessly.
            setScrollAmount(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Now all three points respond to the scroll, moving the entire shape upwards
    const leftSideY = 100 - (scrollAmount * 0.15);
    const rightSideY = 70 - (scrollAmount * 0.15);

    // The curve moves up the fastest, causing the inversion
    const curveControlY = 120 - (scrollAmount * 0.35);

    return(
        <>
            <div className={styles.swoopContainer}>
                <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className={styles.swoopSvg}
                >
                    <path
                        /* Replaced the hardcoded '100' at the end with ${leftSideY} */
                        d={`M 0 0 L 100 0 L 100 ${rightSideY} Q 50 ${curveControlY} 0 ${leftSideY} Z`}
                        fill="#d0e4e2"
                    />
                </svg>
            </div>

            <div className={styles.header}>
                <h1 className={styles.headerImage}>
                    <Link className={styles.logoLink} href="/">
                        <img className={styles.headerLogo} src="/assets/images/EricLaudrum-Logo.svg" alt="Eric Laudrum"/>
                    </Link>
                </h1>
                <NavBar/>
            </div>
        </>
    );
}

export default Header;