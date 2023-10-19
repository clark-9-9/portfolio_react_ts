import { Skills_Data } from "../../data/Skills";



function Skills() {

    return (
        <section className="Skills_Box">
            <article className="Skill_Lorem_Texts_Headline">
                <p>Technical Skills</p>
            </article>

            <article className="Skill_Boxes_Container">
                {
                    Skills_Data.map((skill, i) => {
                        return (
                            <div className="Skill_Box" key={i}>
                                <img src={skill.logo} alt="" />
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