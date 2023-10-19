import React, { ReactElement } from 'react'
import robot from "../../asset/Images/Renato-Michell-Gonzalez-transformed.png";
import { NavLink } from 'react-router-dom'



function HomePageCenter():ReactElement {


    return (
        <section className='Home_Page_Center_Grid'>

            <article className='Home_page_Center_Left_Side'>
                <div className='Home_Page_Text_Btns_Container'>

                    <div className='Introduction_Texts'>
                        <p>welcome</p>

                        <p>
                            Hello my name is <strong>Clark EL</strong>, Im am a self-taught Software Engineer 
                            and I study for Computer Science  
                        </p>
                    </div>

                    <div className='Home_page_Btns'>
                        <NavLink to='/projects'>let's go</NavLink>
                        <a href='#About_Section'>next</a> 
                    </div>

                </div>
            </article>


            <article className='Home_page_Center_Right_Side'>
                <div className='Home_Page_Image_Heart_Container'>
                    <img  src={robot} className='Robot' alt='' />

                    <div className='Center_Light_Circle Light_Circle_1'></div>
                    <div className='Center_Light_Circle Light_Circle_2'></div>
                    <div className='Long_Line'></div>
                </div>
            </article>

        </section>
    )
}








export  { HomePageCenter }