import React, { ReactElement } from 'react'
import robot from "../Images/Renato-Michell-Gonzalez-transformed.png"
import { NavLink } from 'react-router-dom'



function Home_Page_Center():ReactElement {


    return (
        <section className='Home_Page_Center_Grid'>

            <article className='Home_page_Center_Left_Side'>
                <div className='Home_Page_Text_Btns_Container'>

                    <div className='Introduction_Texts'>
                        <p>welcome</p>

                        <p>
                            Hello My Name is <span id="Name">Clark EL</span> and Im am a self-taught Full-Stack
                            Developer, Also Im 1st Year of CS in University  
                        </p>
                    </div>

                    <div className='Home_page_Btns'>
                        <NavLink to='/dashboard'>let's go</NavLink>
                        <a href='#About_Section'>next</a> 
                    </div>

                </div>
            </article>


            <article className='Home_page_Center_Right_Side'>
                <div className='Home_Page_Image_Heart_Container'>
                    <img  src={robot} className='Robot' />

                    <div className='Center_Light_Circle Light_Circle_1'></div>
                    <div className='Center_Light_Circle Light_Circle_2'></div>
                    <div className='Long_Line'></div>
                </div>
            </article>

        </section>
    )
}








export  { Home_Page_Center }