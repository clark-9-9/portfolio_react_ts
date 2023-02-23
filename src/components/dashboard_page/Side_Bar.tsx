import { IonIcon  } from '@ionic/react';
import { 
    logoSlack, home, grid, person, mail, settings
} from 'ionicons/icons';
import { NavLink } from 'react-router-dom';




function Side_Bar() {
    return (
        <section className="Dashboard_Side_Bar">
            <article className='Slack_Box'>
                <IonIcon class='Slack' icon={logoSlack} />
            </article>

            <article className='Side_Bar_Links'>
                <NavLink to='/portfolio_react_ts' className="Side_Bar_Nav_Link">
                    <IonIcon class='Side_Bar_Link' icon={home} />
                </NavLink>

                <NavLink to='/dashboard' className="Side_Bar_Nav_Link">
                    <IonIcon class='Side_Bar_Link' icon={grid} />
                </NavLink>

                <NavLink to='' className="Side_Bar_Nav_Link">
                    <IonIcon class='Side_Bar_Link' icon={person} />
                </NavLink>

                <NavLink to='' className="Side_Bar_Nav_Link">
                    <IonIcon class='Side_Bar_Link' icon={mail} />
                </NavLink>

                <NavLink to='' className="Side_Bar_Nav_Link">
                    <IonIcon class='Side_Bar_Link' icon={settings} />
                </NavLink>
            </article>

        </section>
    )
}

export { Side_Bar };