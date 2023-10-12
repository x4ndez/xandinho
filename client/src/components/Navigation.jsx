import { Link } from "react-router-dom";
import "../styles/Navigation.css";

export default function Header() {

    return (

        <nav>

            <span>
                <Link to="/about">About</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
                {/* <a href="/about" id="nav-about">About Me</a>
                <a href="/portfolio" id="nav-portfolio">Portfolio</a>
                <a href="/contact" id="nav-contact">Contact</a>
                <a href="/resume" id="nav-resume">Resume</a> */}

            </span>

        </nav>

    );

}