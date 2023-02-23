import { Fragment } from "react";
import { Home_Page_Navbar } from "../components/home_page/Navbar";
import { Home_Page_Center } from "../components/home_page/Center";




function Home_Page() {

    return (
        <section id="Home_Section" className="Home_Page_Section">

            <Home_Page_Navbar />
            <Home_Page_Center />

        </section>
    )

}

export  { Home_Page }





