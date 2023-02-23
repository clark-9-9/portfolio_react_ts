import { IonIcon  } from '@ionic/react';
import { 
    menuOutline, searchOutline, logoSlack, sunny, moon
} from 'ionicons/icons';

import profile from "../Images/Upgrades - Photo Edit [OC].jpg";


interface Top_Of_Dashboard_Types {
    Background_State: {
        Background: string,
        setBackground: (color: string) => void
    };
}


function Top_Of_Dashboard({ Background_State }: Top_Of_Dashboard_Types) {

    const{ Background, setBackground  } = Background_State;

    const handle_change_mode = () => {
        Background === "#EAF1FF" 
        ? setBackground("#1B1F40") 
        : setBackground("#EAF1FF")
    }

    const color1 = Background === "#1B1F40" ? "#ffffff" : "rgba(0, 0, 0, 0.6)";
    const color2 = Background === "#1B1F40" ? "#ffffff" : "rgba(0, 0, 0, 0.4)";
    

    return (
       <section className="Top_Of_Dashboard">
            <article id="Top_Of_Dashboard_Slack_Box" className='Slack_Box'>
                <IonIcon class='Slack' icon={logoSlack} />
            </article>

            <article className='Menu_and_Search_Box'>
                <IonIcon 
                    style={{ color: color1 }} 
                    id='Menu_Outline' 
                    icon={menuOutline} 
                />

                <div className='Search_and_Icon'>
                    <IonIcon id='Search_Outline' icon={searchOutline} />
                    <input type="search" />
                </div>
            </article>
            
            <article className='Profile_and_Light_Dark_Mode'>
                <IonIcon 
                    onClick={handle_change_mode} 
                    id='Moon' icon={moon}
                    style={{ color: color2 }} 
                />
                <span 
                    id='Seperate_Vertical_Line' 
                    style={{ backgroundColor: color2 }} 
                ></span>

                <div className='Profile_and_Name' style={{ color: color1 }} >
                    <img id='Profile_Image' src={profile}  />
                    <p>Clark</p>
                </div>
            </article>
       </section>
    )
}


export { Top_Of_Dashboard };
