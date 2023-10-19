// import html from "../asset/Images/HTML.png";
// import css from "../asset/Images/css-3-logo-023C1A7171-seeklogo.com.png";
// import js from "../asset/Images/javascript-logo-transparent-logo-javascript-images-3.png";
// import ts from "../asset/Images/ts.png";
// import react from "../asset/Images/reactjs-logo.png";
// import node from "../asset/Images/nodejs-1-logo.png";
// import express from "../asset/Images/express.png";
// import mongodb from "../asset/Images/mongodb.png";
// import github from "../asset/Images/github.png";
// import java from "../asset/Images/Java.png";

import html from "../asset/skill_images/html-icon.png";
import css from "../asset/skill_images/css-icon.png";
import js from "../asset/skill_images/javascript-programming-language-icon.png";
import ts from "../asset/skill_images/typescript-programming-language-icon.png";
import react from "../asset/skill_images/react-js-icon.png";
import node from "../asset/skill_images/node-js-icon.png";
import express from "../asset/skill_images/express-js-icon.png";
import mongodb from "../asset/skill_images/mongodb-icon.png";
import git from "../asset/skill_images/git-icon.png";
import github from "../asset/skill_images/github-icon.png";
import java from "../asset/skill_images/java-programming-language-icon.png";
import api from "../asset/skill_images/api-svgrepo-white-com.png";
// import api from "../asset/skill_images/api-svgrepo-com.png";
import network from "../asset/skill_images/Mediamodifier-Design-Template-Computer-Network.png";
// import network from "../asset/skill_images/computer-internet-network-icon.png";


interface Skills_Types {
    name: string;
    logo: string;
}


const Skills_Data: Skills_Types[] = [
    {
        name: "HTML",
        logo: html
    },
    {
        name: "CSS",
        logo: css
    },
    {
        name: "JavaScript",
        logo: js
    },
    {
        name: "TypeScript",
        logo: ts
    },
    {
        name: "React",
        logo: react
    },
    {
        name: "Node Js",
        logo: node
    },
    {
        name: "Express Js",
        logo: express
    },
    {
        name: "MongoDB",
        logo: mongodb
    },
    {
        name: "Git",
        logo: git
    },
    {
        name: "Github",
        logo: github
    },
    {
        name: "Java",
        logo: java
    },
    {
        name: "API",
        logo: api
    },
    {
        name: "Network",
        logo: network
    },
]



export { Skills_Data };