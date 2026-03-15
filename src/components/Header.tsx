import NavBar from "./NavBar";
import Link from "next/link";

const Header = () => {
    return(
        <>
        <div className="header">
            <h1 className="banner-title">
                <Link className="title" href="/">Eric Laudrum</Link>
            </h1>
        
            <NavBar />
        </div>
        </>

    )
;}

export default Header;