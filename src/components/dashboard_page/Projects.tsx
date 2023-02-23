import { Projects_Data } from "../../data/Projects";
import { IonIcon } from '@ionic/react';
import { SVG, Activity_Data_SVG, Chart_SVG } from "../../SVG_PNG/SVG_PNG";

import { 
    ellipsisHorizontal, aperture, chatbubbles
} from 'ionicons/icons';




function Projects() {

    

    return (
        <section className="Projects_Activity_Grid">

            <article className="Projects_Container">
                <div className="Dashboard_HeadLine">
                    <p>Projects</p>

                    <div>
                        {SVG}
                        <button>Do Event</button>
                    </div>
                </div>

                <Projects_Grid />
            </article>

            <Activity_Data_Container />
        </section>
    )
}



function Projects_Grid() {

    return (
        <div className="Projects_Grid">
            {
                Projects_Data.map((project, i) => {
                    return (
                        <section className="Each_Project" key={i}>
                            <article className="Top_Of_Project">
                                <span>
                                    <p>
                                        {
                                            project.Project_Title.length >= 20
                                            ? project.Project_Title.slice(0, 20) + " ... "
                                            : project.Project_Title
                                        }
                                    </p>
                                    <IonIcon id="Dots" icon={ellipsisHorizontal} />
                                </span>

                                <p className="Project_Text">
                                    {
                                        project.Text
                                    }
                                </p>   
                            </article>


                            <article className="Bottom_Of_Project">
                                <div className="Progress_and_Percentage_Container">
                                    <p>{project.Finished}</p>

                                    <span className="Progress_Background">
                                        <span  
                                            className="Progress_Bar"
                                            style={{ width: project.Finished }}
                                        >
                                        </span>
                                    </span>
                                </div>
                                

                                <div className="People_Comments_Picture_Container">
                                    <span className="People_Container">
                                        {
                                            project.People.map((person, i) => {
                                                return (
                                                    <div className="People" key={i}>
                                                        {person.Profile}
                                                    </div>
                                                )
                                            })
                                        }
                                    </span>

                                    <span className="Comments_Picture">
                                        <div>
                                            <IonIcon id="Image" icon={aperture} />
                                            <p>{project.Project_Img.length}</p>
                                        </div>
                                        
                                        <div>
                                            <IonIcon id="Comments" icon={chatbubbles} />
                                            <p>{project.Comments.length}</p>
                                        </div>
                                    </span>
                                </div>

                            </article>
                        </section>
                    )
                })
            }
        </div>

    )

}




function Activity_Data_Container() {

    return (
        <section className="Activity_Data_Container">
            <article>
                <div className="Top_Of_Activity_Data">
                    <span>
                        <div>
                            <p id="Activity">Activity</p>
                            <p id="Fast_and_Efficient">Fast and Efficient</p>
                        </div>

                        <p id="Percentage">90%</p>
                    </span>

                    {Activity_Data_SVG}
                </div>



                <div className="Bottom_Of_Activity_Data">
                    <p>Projects</p>

                    <div className="Tech_Used_Container">

                        <div className="Tech">
                            <label>HTML / CSS</label>

                            <span className="Progress_Background_Tech">
                                <span 
                                    className="Progress_Bar_Tech"
                                    style={{ width: "90%" }}
                                ></span>
                            </span>
                        </div>

                        <div className="Tech">
                            <label>JavaScript / React / TypeScript</label>

                            <span className="Progress_Background_Tech">
                                <span 
                                    className="Progress_Bar_Tech"
                                    style={{ width: "90%" }}
                                ></span>
                            </span>
                        </div>

                        <div className="Tech">
                            <label>Node JS / Express JS</label>

                            <span className="Progress_Background_Tech">
                                <span 
                                    className="Progress_Bar_Tech"
                                    style={{ width: "60%" }}
                                ></span>
                            </span>
                        </div>

                        <div className="Tech">
                            <label>Mongo DB / Mongoose</label>

                            <span className="Progress_Background_Tech">
                                <span 
                                    className="Progress_Bar_Tech"
                                    style={{ width: "60%" }}
                                ></span>
                            </span>
                        </div>

                    </div>
                </div>
            </article>


            <article>
                {Chart_SVG}
            </article>
        </section>
    )
}



export { Projects };
