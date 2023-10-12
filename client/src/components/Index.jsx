import { useState, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

export default function Layout() {

    useEffect(() => {

        const elFooter = document.querySelector("footer");

        document.addEventListener("scroll", () => {

            if (window.scrollY >= 100) {

                elFooter.style.opacity = "1";
                navLogo.style.opacity = "1";


            } else if (window.scrollY <= 99) {

                elFooter.style.opacity = "0";
                navLogo.style.opacity = "0";

            }

        });

    }, []);

    return (

        <>
            <div id="index">
                <Header />
                <Main />
                <Footer />
            </div>
        </>

    );

}