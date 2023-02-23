import { useEffect } from "react";
import space from "../Images/Olivia Black_ Photo.jpg";


function Contacts() {



    // useEffect(() => {
    //     window.location.href = "#Home_Section"
    //     console.log(window.location.href)
    // })

    return (
        <section className="Conatcts_Container">
            <p id="Contacts_Headline">Contacts</p>

            <article className="Contacts_Box">

                <img src={space} className="Space" />

                <div className="Right_Side_Contact">
                    <span className="Contacts_Input">
                        <label htmlFor="Name">Your Name</label>
                        <input type="text"/>
                    </span>

                    <span className="Contacts_Input">
                        <label htmlFor="Email">Your Email</label>
                        <input type="text"/>
                    </span>

                    <span className="Contacts_Input">
                        <label htmlFor="title">Title</label>
                        <input type="text"/>
                    </span>

                    <span className="Contacts_Input">
                        <label htmlFor="Discription">Discription</label>
                        <textarea  />
                    </span>

                    <button className="Send_Btn">send</button>
                </div>

            </article>
        </section>
    )
}


export { Contacts };