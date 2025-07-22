import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaMobileAlt,
  FaCode, // ✅ Added
} from 'react-icons/fa';

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiSocketdotio,
  SiMysql,
  SiTypescript,
} from 'react-icons/si'; // ✅ SiVisualstudioCode removed

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.jpg"; 
import project8 from "../assets/project8.png";
import project9 from "../assets/project9.png";

export const projects = [
  {
    title: "Let's Chat - Real Time Chat & Video Call",
    description: "Full-featured real-time chat app with message reactions, friend system, video calls, built using MERN, Tailwind CSS, and DaisyUI.",
    tech: [FaReact, FaNodeJs, SiMongodb, SiSocketdotio, SiExpress],
    gradient: 'from-emerald-400 to-cyan-400',
    github: 'https://github.com/Arya4546/lets-chat',
    live: 'https://let-s-chat-six.vercel.app',
    image: project6,
  },
  {
    title: 'Interview prep AI',
    description: 'A full-stack web application that uses Gemini API to generate role-based technical interview questions and answers.',
    tech: [FaReact, FaNodeJs, SiTailwindcss, SiMongodb],
    gradient: 'from-purple-400 to-pink-400',
    github: 'https://github.com/Arya4546/interview-prep-AI',
    live: 'https://interview-prep-snowy.vercel.app/',
    image: project9,
  },
  {
    title: 'School Management Software',
    description: 'Multi-role CRUD system for school, supporting admins, teachers, students, with Node.js, Express & SQL Server.',
    tech: [FaReact, SiExpress, FaDatabase, SiExpress, SiTailwindcss],
    gradient: 'from-blue-400 to-purple-400',
    github: 'https://github.com/Arya4546/school-management-software',
    live: 'https://github.com/Arya4546/school-management-software',
    image: project7,
  },
  {
    title: "Hospital Management System",
    description: "Multi-role CRUD system for cancer hospitals, supporting admins, doctors, patients. Node.js backend with Express & SQL Server.",
    tech: [FaHtml5, FaCss3Alt, FaJs, FaNodeJs, SiExpress, FaDatabase],
    github: 'https://github.com/Arya4546/hospital-management-system',
    live: 'https://github.com/Arya4546/hospital-management-system',
    gradient: 'from-orange-400 to-red-400',
    image: project4,
  },
  {
    title: "DevHub—your mate for code, people & AI",
    description: "A full-stack platform where devs can share projects, get AI help, report bugs, connect, and chat in real time.",
    tech: [FaReact, FaNodeJs, SiMongodb, SiSocketdotio, SiExpress],
    github: 'https://github.com/Arya4546/DevHub',
    live: 'https://dev-hub-blush.vercel.app',
    gradient: 'from-orange-400 to-red-400',
    image: project8,
  },
  {
    title: "Visitor Management System",
    description: "Secure visitor logging system with admin panel, real-time logs, and authentication.",
    tech: [FaReact, FaNodeJs, SiExpress, SiMongodb],
    github: 'https://github.com/Arya4546/Visitor-Management-System',
    live: 'https://vms-frontend-snowy.vercel.app',
    gradient: 'from-blue-400 to-purple-400',
    image: project1,
  }
];
