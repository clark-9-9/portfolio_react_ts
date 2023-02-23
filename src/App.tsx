import { Fragment, useEffect } from 'react';

import { Home_Page } from './pages/Home_Page';
import { About_Page } from './pages/About_Page';
import { Works_Page } from './pages/Works_page';
import { Skill_Page } from './pages/Skill_Page';
import { Contacts_Page } from './pages/Contacts_Page';
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
                            <Home_Page />
                            <About_Page />
                            <Works_Page />
                            <Skill_Page />
                            <Contacts_Page />
                        </Fragment>
                    } 
                />

                <Route path='/dashboard' element={ <Dashboard /> } />
            </Routes>
        </Fragment>
    )
}




export default App;



