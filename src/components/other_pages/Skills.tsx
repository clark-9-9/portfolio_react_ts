import { Skills_Data } from "../../data/Skills";



function Skills() {



    return (
        <section className="Skills_Box">
            <article className="Skill_Lorem_Texts_Headline">
                <p>My Skills</p>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
            </article>

            <article className="Skill_Boxes_Container">
                {
                    Skills_Data.map((skill, i) => {
                        return (
                            <div className="Skill_Box" key={i}>
                                <img src={skill.logo} />
                                <p>{skill.name}</p>
                            </div>
                        )
                    })
                }
            </article>
        </section>
    )
}



export { Skills };