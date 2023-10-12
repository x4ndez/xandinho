import { useState, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

export default function Layout() {

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