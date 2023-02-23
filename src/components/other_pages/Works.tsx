import Flash from "../Images/logo-with-shadow.png"
import { Fields } from "../../data/Field_Boxes";


function Works(): React.ReactElement {


    return (
        <section className="Works_Experience">
            <article className="Expertise_Lorem_Texts_Headline">
                <p>Expertise Area</p>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
            </article>

            <article className="Experience_Field_Container">
                {
                    Fields.map((Field, i) => {
                        return (
                            <div className="Experience_Field" key={i}>
                                <div className="Headline_Of_Experience_Field">
                                    <img src={Flash} className="Flash_Icon" />
                                    <p>{Field.Field_Title}</p>
                                </div>    
                                
                                <p className="Field_Texts">
                                    {Field.Field_Text}
                                </p>
                            </div>
                        )
                    })
                }
            </article>
        </section>
    )
}



export { Works };