import html from "../components/Images/HTML.png";
import css from "../components/Images/css-3-logo-023C1A7171-seeklogo.com.png";
import js from "../components/Images/javascript-logo-transparent-logo-javascript-images-3.png";
import ts from "../components/Images/ts.png";
import react from "../components/Images/reactjs-logo.png";
import node from "../components/Images/nodejs-1-logo.png";
import express from "../components/Images/express.png";
import mongodb from "../components/Images/mongodb.png";
import github from "../components/Images/github.png";
import java from "../components/Images/Java.png";



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
        name: "Git and Github",
        logo: github
    },
    {
        name: "Java",
        logo: java
    },
]



export { Skills_Data };