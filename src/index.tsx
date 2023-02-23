import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/Home_Page.css";
import "./styles/Dashboard.css";
import "./styles/Other_Pages.css";

import{ HashRouter } from "react-router-dom";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>
);

