import "../styles/Header.css";

import Navigation from "./Navigation.jsx";
import NavTab from "./NavTab.jsx";

export default function Header() {

    return (

        <>

            <header>
                <NavTab />
            </header>

            <div id="sticky-nav">
                <Navigation />
            </div>

        </>

    );

}