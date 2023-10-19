/* eslint-disable jsx-a11y/anchor-is-valid */
// import { TopOfDashboard } from './Top_Of_Dashboard';
// import { Projects } from './Projects';
import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { searchOutline, logoGithub, home } from 'ionicons/icons';
import { projectsData } from '../../data/Projects';
import { NavLink } from 'react-router-dom';



function MainDashboard() {
    const[searchInput, setSearchInput] = useState<string>("");  
    
    return (
        <section className="Main_Dashboard">
            <DashboardHeader setSearchInput={setSearchInput}/>
            <DashboardContent searchInput={searchInput} />
        </section>
    )   
}

interface DashboardHeaderProps {
    setSearchInput: React.Dispatch<React.SetStateAction<string>>
}

function DashboardHeader({ setSearchInput }: DashboardHeaderProps) {
    const[openCloseSearchInput, setOpenCloseSearchInput] = useState<boolean>(true);
    const repositories = "https://github.com/clark-9-9?tab=repositories";

    return (
        <section className='Dashboard_Header'>
            <NavLink to="/" className='Link_Btn'>
                <IonIcon  icon={home} />
            </NavLink>

            <NavLink to={repositories} className='Link_Btn'>
                <IonIcon  icon={logoGithub} />
            </NavLink>

            <article  style={{ maxWidth: openCloseSearchInput ? "40px" : "280px" }}>
                <div 
                    className='Search_Icon_Container' 
                    onClick={() => setOpenCloseSearchInput(!openCloseSearchInput)}
                >
                    <IonIcon className='Search_Icon' icon={searchOutline} />
                </div>

                <input 
                    type="text" 
                    placeholder='search for project'
                    onChange={(e) => setSearchInput(e.target.value)} 
                />
            </article>            
        </section>
    )
}


interface DashboardContentProps {
    searchInput: string
}

function DashboardContent({ searchInput }: DashboardContentProps) {

    const filteredProjects = projectsData.filter((project) => {
        return project.title.toLowerCase().includes(searchInput.toLowerCase());
    });
      
    
    return (
        <section className='Dashboard_Content'>
            <article className='Projects_Container'>
                <h3>Projects</h3>
                
                <ul className='Projects'>
                    {
                        filteredProjects.map((project, i) => {
                            return (
                                <li className='Each_Project' key={i}>
                                    <header className='Project_Header'>
                                        <span className='Titles'>{project.title}</span>
                                        <a href={project.link} className='Source_Code'>
                                            <IonIcon icon={logoGithub} />
                                        </a>
                                    </header>

                                    <p className='Description'>{project.description}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </article>
        </section>
    )
}


export { MainDashboard };