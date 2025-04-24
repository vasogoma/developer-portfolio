import project1Img from '../assets/png/Project1.png'
import project2Img from '../assets/png/Project2.png'
import project3Img from '../assets/png/Project3.png'
//import project4Img from '../assets/png/Project4.png'
//import project5Img from '../assets/png/Project5.png'
import project1Vid from '../assets/videos/KaneAbel.mp4'
import project3Vid from '../assets/videos/VRGame.mp4'

export const projectsData = [
    {
        id: 1,
        projectName: 'Kane and Abel: AIs that play Super Smash Bros',
        projectDesc: 'This project aimed to create two AI agents capable of playing Super Smash Bros for Nintendo 64. These agents competed against each other, each assigned a random character at the start of their game. The first AI employed a self-play league of Deep Q Learning agents, which were initially trained against the game’s AI and later refined through self-play. The second AI followed a rule-based policy.',
        tags: ['Python', 'Reinforcement Learning' ,'Artificial Intelligence', 'Deep Q Learning'],
        code: 'https://github.com/vasogoma/retro',
        demo: project1Vid,
        image: project1Img
    },
    {
        id: 2,
        projectName: 'Doggocop Station',
        projectDesc: 'This IoT project focuses on creating the Doggocop Station, a smart system that automates the care and health monitoring of pets. It tracks feeding, water intake, and weight, and provides personalized health reports using NFC tags and a dashboard',
        tags: ['Arduino', 'C++','Python', 'Flask', 'SQLite'],
        code: '',
        demo: '',
        image: project2Img
    },
    {
        id: 3,
        projectName: 'Dog Grooming VR Game',
        projectDesc: 'The Dog Grooming VR Game is a virtual reality experience where players can groom and care for cartoon dogs through various interactive tasks such as washing, soaping, drying, and styling. ',
        tags: ['Unity', 'C#', 'VR'],
        code: 'https://github.com/vasogoma/Dog-Grooming',
        demo: project3Vid,
        image: project3Img
    },
    /*
    {
        id: 4,
        projectName: '',
        projectDesc: '',
        tags: [''],
        code: '',
        demo: '',
        image: ""
    },
    {
        id: 5,
        projectName: '',
        projectDesc: '',
        tags: [],
        code: '',
        demo: '',
        image: ""
    },*/
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/