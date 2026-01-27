import Link from 'next/link';

const NavBar = () => {
    return(
        <nav>
            <div>
                <Link href="/">Eric Laudrum 2</Link>
            </div>
            <div>
                <Link href='/projects'>Projects</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
            </div>
        </nav>
    );
};

export default NavBar;