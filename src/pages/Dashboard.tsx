import { useState } from "react";
import { Side_Bar } from "../components/dashboard_page/Side_Bar";
import { Dashboard_Center } from "../components/dashboard_page/Dashboard_Center";


function Dashboard() {

    const[Background, setBackground] = useState<string>("#EAF1FF");


    return (
        <section style={{ backgroundColor: Background }} className="Dashboard_Page_Section">
            <Side_Bar />
            
            <Dashboard_Center 
                Background_State={{ Background, setBackground }} 
            />
        </section>
    )
}



export { Dashboard };