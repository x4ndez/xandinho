import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

export default function Header() {

    return (

        <nav>

            <span>
                <NavLink to="/about" id="navAbout">About</NavLink>
                <NavLink to="/portfolio" id="navPortfolio">Portfolio</NavLink>
                <NavLink to="/contact" id="navContact">Contact</NavLink>
                <NavLink to="/resume" id="navResume">Resume</NavLink>
            </span>

        </nav>

    );

}