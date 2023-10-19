import { Fragment } from 'react';

import { HomePage } from './pages/Home_Page';
import { AboutPage } from './pages/About_Page';
import { WorksPage } from './pages/Works_Page';
import { SkillPage } from './pages/Skill_Page';
import { ContactsPage } from './pages/Contacts_Page';
import { Dashboard } from './pages/Dashboard';
import{ Routes, Route } from "react-router-dom";


 
function App() {

    return (
        <Fragment>
            <Routes>
                <Route  
                    index
                    path='/' 
                    element={
                        <Fragment>
                            <HomePage />
                            <AboutPage />
                            <WorksPage />
                            <SkillPage />
                            <ContactsPage />
                        </Fragment>
                    } 
                />

                <Route path='/projects' element={ <Dashboard /> } />
            </Routes>
        </Fragment>
    )
}


export default App;