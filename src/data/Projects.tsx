

type People_Obj = {
    Name: string, 
    Last_Name:string, 
    Email: string
    Profile: string
};

interface Projects_Types {
    Project_Title: string,
    Text: string,
    Finished: string,
    People: People_Obj[],
    Comments: People_Obj[],
    Project_Img:(object| string)[],
    
};


const Projects_Data: Projects_Types[] = 
[
    {
        Project_Title: "Web Design",
        Text:"Wireframing, mockups, clients collaboration, Making Server",
        Finished: "90%",
        People: [
            {Name: "me", Last_Name: "", Email: "", Profile: ""},
            {Name: "me", Last_Name: "", Email: "", Profile: ""},
            {Name: "me", Last_Name: "", Email: "", Profile: ""}
        ],
        Comments:[],
        Project_Img:[]
    }, 

    {
        Project_Title: "Mobile App",
        Text:"Wireframing, mockups, clients collaboration, Making Server",
        Finished: "70%",
        People: [
            {Name: "me", Last_Name: "", Email: "", Profile: ""},
            {Name: "me", Last_Name: "", Email: "", Profile: ""},
            {Name: "me", Last_Name: "", Email: "", Profile: ""}
        ],
        Comments:[],
        Project_Img:[]
    }, 

    {
        Project_Title: "Dashboard",
        Text:"Wireframing, mockups, clients collaboration, Making Server",
        Finished: "80%",
        People: [
            {Name: "me", Last_Name: "", Email: "", Profile: ""},
            {Name: "me", Last_Name: "", Email: "", Profile: ""},
            {Name: "me", Last_Name: "", Email: "", Profile: ""}
        ],
        Comments:[],
        Project_Img:[]
    }, 

    {
        Project_Title: "Job Finder",
        Text:"Wireframing, mockups, clients collaboration, Making Server",
        Finished: "90%",
        People: [
            {Name: "me", Last_Name: "", Email: "", Profile: ""},
            {Name: "me", Last_Name: "", Email: "", Profile: ""},
            {Name: "me", Last_Name: "", Email: "", Profile: ""}
        ],
        Comments:[],
        Project_Img:[]
    }, 

    {
        Project_Title: "Ecommerce Website",
        Text:"Wireframing, mockups, clients collaboration, Making Server",
        Finished: "80%",
        People: [
            {Name: "me", Last_Name: "", Email: "", Profile: ""},
            {Name: "me", Last_Name: "", Email: "", Profile: ""},
            {Name: "me", Last_Name: "", Email: "", Profile: ""}
        ],
        Comments:[],
        Project_Img:[]
    }, 

    {
        Project_Title: "Chat App",
        Text:"Wireframing, mockups, clients collaboration, Making Server",
        Finished: "90%",
        People: [
            {Name: "me", Last_Name: "", Email: "", Profile: ""},
            {Name: "me", Last_Name: "", Email: "", Profile: ""},
            {Name: "me", Last_Name: "", Email: "", Profile: ""}
        ],
        Comments:[],
        Project_Img:[]
    }, 

];


export { Projects_Data };