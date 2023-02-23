import { Dark_Chart } from "../../SVG_PNG/SVG_PNG";
import robot from "../Images/Droid-v2-Riyahd-Cassiem-transformed.png"






function Grid_Content() {



    return (
        <section className="About_Page_Grid_Content">
            <article className="About_Page_Left_Side">
                <img src={robot} className="About_Page_Robot" />
            </article>

            <article className="About_Page_Right_Side">
                <p className="About_Title_Headline">About Me</p>

                <div>
                    Undergraduate Student with 1 year of experience in computer science, seeking a Junior Full Stack developer position to utilize 
                    my skills and passion for programming to contribute to the success of a dynamic and innovative organization.
                    <br />
                    <br />
                    I am a quick learner and always eager to expand my skill set. I am passionate about web development and have a good 
                    understanding of front-end technologies 

                    <span> 
                        <span> </span>
                        Such as HTML, CSS, JavaScript, React.js and  back-end technologies such as Node.js, Express.js and MongoDB.
                    </span>

                </div>

                <div className="SVG_Chart_Container">
                    {Dark_Chart}
                </div>

            </article>
        </section>
    )
}




export { Grid_Content };