import twitter from './twitter-fill.svg'
import github from './github-fill.svg'
import portfolio from './one.png'
import sneakers from './two.png'
const timeline =[
    {
        date:"Today",
        title : "Freelance Web Developer",
        duration : "1.5 years",
        description:"Driving digital transformation with tailored full stack solutions, revolutionizing businesses and delighting users with creativity and expertise."
    },
    {
        date:"2021",
        title : "Remote Front-end Developer",
        duration : "1 year",
        description:"Empowering enterprises with innovative full stack solutions leveraging React, Node.js, MongoDB, and more, while revolutionizing user experience with a remarkable 70% improvement."
    },
    {
        date:"2020",
        title : "React.js Developer Intern",
        duration : "6 months",
        description:"I helped build an  application for a telecom company in an Agile team setting. Our tech stack consisted of JavaSciprt, ReactJS, Firebase, Git and a handful of other languages and tools."
    },
    {
        date:"2019",
        title : "First Line of Code",
        duration : "the beginning",
        description:"I wrote my first line of real code that started this journey into digital craftsmanship that I never could've imagined, especially as someone who never saw themselves as anything other than a blue collar worker."
    },

]

const project = [{
    name:"Sneakers Commerce",
    img: sneakers,
    stack:["React","Nodejs","Tailwind"]
},
{
    name:"3D Portfolio Website",
    img: portfolio,
    stack:["React","Tailwind","Threejs"]
},
{
    name:"MERN Airbnb Clone",
    img: "https://raeef1001.netlify.app/assets/airbnb-3b00caf5.png",
    stack:["React","Nodejs","Tailwind"]
},
]

export  {
    twitter,
        github,
        timeline,
        project
}