import { Fragment, useEffect, useState, ReactElement, useReducer } from 'react';
import { Links } from '../../data/Data';
import { Reducer, Intial_State, ACTION_TYPES } from '../../reducer/Home_Page_Reducer';

import { IonIcon  } from '@ionic/react';
import { keypad,logoSlack } from 'ionicons/icons';
import{ NavLink } from "react-router-dom";



function Home_Page_Navbar() {

    const[Window_Width, setWindow_Width] = useState(window.innerWidth)
    const[State, Dispatch] = useReducer(Reducer, Intial_State);
    let path = window.location.href;


    useEffect(() => {
        const handle_resize = () => setWindow_Width(window.innerWidth) 
        window.addEventListener('resize', handle_resize)
        
        return () => {
            window.removeEventListener("resize", handle_resize)
        }
    }, [])

    


    const handle_visible_menu = (): void => {
        Dispatch({ type: ACTION_TYPES.Visible_Menu })
    }

    const handle_unisible_menu = (): void => {
        Dispatch({ type: ACTION_TYPES.UnVisibility_Menu })
    }



    useEffect(() => {
        if(Window_Width > 940) {
            Dispatch({ type: ACTION_TYPES.UnVisibility_Menu })
        }
    }, [Window_Width])


    return (
        <Fragment>
            <section className='Navbar'>
                <article className='Left_Side_Nav'>
                    <div className='Slack_Box'>
                        <IonIcon class='Slack' icon={logoSlack} />
                    </div>

                    <div className="Light_Circle Light_Circle_Outside_Links_1"></div>
                    <div className="Light_Circle Light_Circle_Outside_Links_2"></div>
                    <div className="Light_Circle Light_Circle_Outside_Links_3"></div> 
                
                    
                    <nav className='Links'>
                        <div className="Light_Circle Light_Circle_Insdie_Links_1"></div>
                        <div className="Light_Circle Light_Circle_Insdie_Links_2"></div>

                        {
                            Links.map((link, i) => {
                                if(link.CV) {
                                    return (
                                        <a 
                                            key={link.id} 
                                            className={link.class}
                                        >
                                            {link.page}
                                        </a>
                                    )
                                }

                                if(link.page === "dashboard") {
                                    return (
                                        <NavLink 
                                            to='/dashboard' 
                                            key={link.id} 
                                            className={link.class}
                                        >
                                            {link.page}
                                        </NavLink>
                                    )
                                }

                                else {
                                    return (
                                        <a 
                                            key={link.id} 
                                            href={link.scrollTo} 
                                            className={link.class}
                                        >
                                            {link.page}
                                        </a>
                                    )
                                }
                            })
                        }
                    </nav>
                </article>

                <IonIcon 
                    class='Keypad_Outside' 
                    icon={keypad} 
                    onClick={handle_visible_menu}
                />
            </section>

            <Home_Page_Menu 
                handle_unisible_menu={handle_unisible_menu}
                State={State}
            />
        </Fragment>
    );
}



interface Menu_Param_Types {
    handle_unisible_menu: () => void;
    State: typeof Intial_State;
} 


function Home_Page_Menu({ handle_unisible_menu, State }: Menu_Param_Types): ReactElement {


    return (
            <section className='Menu_Box' style={State as React.CSSProperties}>
                <article className='SlackLOGO_MenuIC_Inside_Menu_Box'>
                    <div className='Slack_Box'>
                        <IonIcon class='Slack' icon={logoSlack} />
                    </div>
                    
                    <IonIcon 
                        class='Keypad_Inside' 
                        icon={keypad} 
                        onClick={handle_unisible_menu}
                    />
                </article>
                
                <article className='Menu_Links'>
                    {
                        Links.map((link, i) => {

                            if(link.CV) {
                                return (
                                    <a 
                                        key={link.id} 
                                        id={link.scrollTo} 
                                        href={link.CV} 
                                        download 
                                        className={'Menu_Link'}
                                    >
                                        <IonIcon class='Menu_Ic' icon={link.icon} />
                                        {link.page}
                                    </a>
                                )
                            }

                            if(link.page === "dashboard") {
                                return (
                                    <NavLink 
                                        to='/dashboard' 
                                        id={link.scrollTo} 
                                        key={link.id} 
                                        className={'Menu_Link'}
                                        onClick={handle_unisible_menu}
                                    >
                                        <IonIcon class='Menu_Ic' icon={link.icon} />
                                        {link.page}
                                    </NavLink>
                                )
                            }

                            else {
                                return (
                                    <a key=
                                        {link.id} 
                                        id={link.scrollTo} 
                                        href={link.scrollTo} 
                                        className={'Menu_Link'}
                                        onClick={handle_unisible_menu}
                                    >
                                        <IonIcon class='Menu_Ic' icon={link.icon} />
                                        {link.page}
                                    </a>
                                )
                            }
                        })

                    }
                </article>
            </section>
    )

}




export { Home_Page_Navbar };
