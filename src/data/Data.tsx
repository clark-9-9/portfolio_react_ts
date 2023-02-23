import { nanoid } from "nanoid";
import CV from "../components/Images/CV.pdf"

import { 
    logoElectron, keypad,logoSlack,
    home, informationCircle, person, mail, document, grid

} from 'ionicons/icons';



interface Links_Types {
    id: string;
    icon: string;
    page: string;
    class: string;
    scrollTo: string;
    CV?: string;
};



const Links: Links_Types[] = [
    {
        id: nanoid(),
        icon: home,
        page:"home",
        class:"Home_Link",
        scrollTo: "#Home_Section"
    }, 
    {
        id: nanoid(),
        icon: informationCircle,
        page:"about",
        class:"About_Link",
        scrollTo: "#About_Section"
    }, 
    {
        id: nanoid(),
        icon: person,
        page:"works",
        class:"Works_Link",
        scrollTo: "#Works_Section"
    }, 
    {
        id: nanoid(),
        icon: mail,
        page:"contacts",
        class:"Contacts_Link",
        scrollTo: "#Contats_Section"
    }, 
    {
        id: nanoid(),
        icon: document,
        page:"resume",
        class:"Resume_Link",
        scrollTo: "#Resume_Section",
        CV: CV
    }, 
    {
        id: nanoid(),
        icon: grid,
        page:"dashboard",
        class:"Dashboard_Link",
        scrollTo: "#Dashboard_Section"
    }, 
];




export{ Links };