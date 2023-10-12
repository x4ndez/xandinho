import "../styles/Header.css";
import "../styles/Footer.css";

import ghLogoUrl from "../assets/img/github-icon.png";
import LILogoUrl from "../assets/img/LI-icon.png";

export default function Header() {

    return (

        <>

            <footer>

                <header>

                    <span id="logo">

                        <span>[x]4ndez</span>

                    </span>

                    <span id="urls">

                        <div><a href="https://www.linkedin.com/in/alexandernanfro/"><img id="LILogo" src={LILogoUrl} /></a></div>
                        <div><a href="https://github.com/x4ndez"><img id="GHLogo" src={ghLogoUrl} /></a></div>

                    </span>

                </header>

            </footer>

        </>

    );

}