import { IonIcon  } from '@ionic/react';
import { 
    logoGoogle, 
    logoGithub,
    logoLinkedin,
} from "ionicons/icons";



function Contacts() {
    return (
        <section className="Contacts_Contanier">
            <article>
                <p>Contacts</p> 
            </article>

            <article className="Accounts_Container">
                <a href="mailto:job.email.0101@gmail.com">
                    <IonIcon class='Account' icon={logoGoogle} />
                </a>
                <a href="https://www.linkedin.com/in/clark-el-a472a7257/">
                    <IonIcon class='Account' icon={logoLinkedin} />
                </a>
                <a href="https://github.com/clark-9-9"> 
                    <IonIcon class='Account' icon={logoGithub} />
                </a>
            </article>
        </section>
    )
}

export { Contacts };