import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/Index.css";
import "./styles/Home_Page.css";
import "./styles/Dashboard.css";
import "./styles/Other_Pages.css";

import{ BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter basename='/portfolio_react_ts'>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

