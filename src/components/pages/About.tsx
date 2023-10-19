import { Dark_Chart } from "../../svg/SVG_PNG";
import illustration from "../../svg/undraw_ideas_re_7twj.svg";



function About() {

    return (
        <section className="About_Page_Grid_Content">
            <article className="About_Page_Left_Side">
                {/* <img src={robot} className="About_Page_Robot" alt=""/> */}
                <img src={illustration} className="About_Page_Robot" alt=""/>
            </article>

            <article className="About_Page_Right_Side">
                <p className="About_Title_Headline">About Me</p>

                <div>
                    Recent computer science graduate with nearly 2 years of experience seeking a challenging Software Engineer position to leverage programming skills and contribute to the success of an innovative and forward-thinking organization. 
                    A quick learner with a deep passion for full-stack development, I bring proficiency in a range of technologies and a dedicated work ethic to every project. Eager to tackle complex problems, collaborate with cross-functional teams,
                    and stay at the forefront of technology trends to drive excellence in software engineering.
                </div>

                <div className="SVG_Chart_Container">
                    {Dark_Chart}
                </div>
            </article>
        </section>
    )
}




export { About };