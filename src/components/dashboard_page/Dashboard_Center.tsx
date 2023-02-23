import { Top_Of_Dashboard } from './Top_Of_Dashboard';
import { Projects } from './Projects';
import { useState } from "react";


interface Top_Of_Dashboard_Types {
    Background_State: {
        Background: string,
        setBackground: (color: string) => void
    };
}


function Dashboard_Center({ Background_State }: Top_Of_Dashboard_Types) {


    return (
        <section className="Dashboard_Center">
            <Top_Of_Dashboard 
                Background_State={Background_State}
            />
            <Projects />
        </section>
    )   
}

export { Dashboard_Center };