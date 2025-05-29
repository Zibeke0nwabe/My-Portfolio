import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Myinfo from './components/Myinfo';
import FeaturedProjects from './components/FeaturedProjects';
import Services from './components/Services';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';


const projects = [
{
  "id": "1",
  "title": "Agent Trainer — AI-Powered Customer Simulation",
  "description": "A deeply personal AI-powered training tool for call center agents, designed to simulate real-life voice and chat scenarios using Gemini API.",
  "detailedDescription": "Agent Trainer is a full-stack web application designed to help call center agents practice real-life customer service scenarios in a risk-free environment. Built during a difficult time when I was struggling with low confidence and communication challenges due to my English accent, the platform became both a personal lifeline and a practical solution. It simulates customer interactions using AI, allowing agents to improve their listening, speaking, and problem-solving skills under realistic conditions.",
  "image": "images/agenttrainer.png",
  "images": [
    "images/agenttrainer.png",
    "images/agenttrainerLogin (1).png",
    "images/agenttrainerCall.png",
    "images/agenttrainerChat.png"
  ],
  "video": "videos/agenttrainer.mp4",
  "tools": [
    "HTML", "CSS", "JavaScript", "Embedded JS", "Gemini API (LLM)", 
    "Web Speech API (voice)", "Node.js", "Express", "MongoDB", "TailwindCSS"
  ],
  "website": "https://www.agenttrainer.onrender.com/",
  "github": "https://github.com/Zibeke0nwabe/agentTrainer",
  "experience": "I began developing Agent Trainer in December, during my early days working as a call center agent. I was often criticized for my strong accent and struggled with confidence. This project gave me hope—it helped me understand how to turn real-world struggles into functional, meaningful solutions. It taught me the value of research, empathy, and iterative development under real pressure.",
  "challenges": "Built mostly at night after 10–12 hour shifts with limited resources and free-tier tools, Agent Trainer was my attempt to improve the industry from the inside. I pitched the project to management, hoping to move into a development role. While early feedback was positive, I never received a final response and still don’t know why. This setback was tough to process, but it also reinforced the reality that even the best ideas sometimes go unrecognized. Despite that, I’m proud of what I created.",
  "motivationForReact": "Agent Trainer was born from the emotional weight of being shouted at and belittled by customers while trying my best in a high-pressure environment. The fear of underperforming was real, and I needed a way to protect my mental health while still striving to improve. The system was designed to fill the gap between theoretical training and real-world application—giving agents the chance to practice calls with dynamic, AI-driven responses that react based on tone, timing, and language. It emphasizes listening skills, empathy, and confidence—everything I wish I had when I started."
}
,
{
  "id": "2",
  "title": "Ekhaya Smart Scholars — Online Application System",
  "description": "A full-stack educational application platform designed to help learners submit applications securely, with email confirmations and admin review tools.",
  "detailedDescription": "Ekhaya Smart Scholars is a full-stack web application built to support students in applying to educational programs online. Developed as an improved version of Esgela, it was created in collaboration with a fellow call center agent who was inspired by my earlier projects. While the design was requested to remain similar to Esgela, the system expands with new features like subscription handling, contact forms, and admin controls. It allows for a complete application process, from user submission to acceptance or rejection with automated email notifications.",
  "image": "images/essHeor.png",
  "images": [
    "images/essHeor.png",
    "images/essLogin.png",
    "images/essAbout.png",
    "images/essTeam.png",
    "images/essFooter.png"
  ],
  "video": "videos/ess.mp4",
  "tools": [
    "HTML", "CSS", "JavaScript", "Embedded JS",
    "Node.js", "Express", "MongoDB",
    "TailwindCSS", "JWT", "NodeMailer"
  ],
  "website": "https://ekhayasmartscholars.onrender.com/",
  "github": "https://github.com/Zibeke0nwabe/ESS_project",
  "experience": "After facing setbacks with Agent Trainer, this project gave me a fresh sense of purpose. I collaborated with a fellow agent who shares a passion for improving lives through education. Together, we built Ekhaya Smart Scholars—a platform aimed at providing accessible, secure, and functional online applications. It allowed me to apply my previous experience to real-world features like authentication, admin dashboards, and email notifications, while also regaining confidence in my path as a developer.",
  "challenges": "Ekhaya was developed during the same late-night hours as Agent Trainer, while working full-time in a call center. Balancing project demands with client feedback—especially the request to keep the layout similar to Esgela—presented both creative and technical constraints. The biggest challenge was implementing dual email flows (for users and admins), maintaining database security with JWT, and building a subscriber system that required conditional email confirmation and storage.",
  "motivationForReact": "This project was not just about writing code—it was about moving forward after feeling stuck. While Agent Trainer didn’t get the feedback I hoped for, I realized that I didn’t need validation to keep building. With Ekhaya, I focused on helping others and staying true to my goal of creating useful, meaningful software. The project reminded me that I am a developer, with or without recognition. It also reinforced the importance of empathy-driven development—understanding user needs and building tools that reflect their reality."
} ,
{
  "id": "3",
  "title": "Esgela Online Applications — Part 1 Application System",
  "description": "A full-stack application for streamlining student applications with secure login, dynamic student ID generation, and automated email notifications.",
  "detailedDescription": "Esgela is a full-stack web platform built to manage student applications in a streamlined and secure way. Applicants receive a unique 8-digit student number starting with '24', which they can use along with their ID and password to log in. This platform focuses on simplifying the submission and review process while allowing users to track their application status. The goal of this first phase was to establish a reliable backend system that will integrate directly with the learning platform planned for Part 2.",
  "image": "images/esgelaHome.png",
  "images": [
    "images/esgelaHTML.png",
    "images/esgelaLogin.png",
    "images/esgelaAbout.png",
    "images/esgelaHome.png"
  ],
  "video": "videos/esgelaPortal.mp4",
  "tools": [
    "HTML", "CSS", "JavaScript", "Embedded JS",
    "Node.js", "Express", "MongoDB",
    "TailwindCSS", "JWT", "NodeMailer"
  ],
  "website": "https://esgela.onrender.com/",
  "github": "https://github.com/Zibeke0nwabe/esgela",
  "experience": "Esgela was my first major project focused on education. It helped me understand the fundamentals of building secure, user-friendly application systems. The project taught me how to design custom authentication logic, including handling dynamic student ID generation and conditional login methods. It also served as a strong foundation for future expansion into a full learning management platform.",
  "challenges": "Designing a dual-login system that accepted both national ID and dynamically generated student numbers required creative logic and rigorous backend checks. Managing password states—both temporary and final—and integrating email notifications added complexity. Additionally, balancing these tasks with long working hours made development even more demanding.",
  "motivationForReact": "Esgela was born from a desire to make quality education accessible, especially to those who can't afford traditional systems. After completing Part 1, the goal was to extend the platform into a full learning system using the MERN stack—my core expertise. We started building the learning platform (Part 2) using AceEditor to let students write and preview code directly in the browser. Students accepted into the application system receive a new password via email for the learning platform, separate from their application credentials. While development is currently paused due to work constraints and focus on other projects like Agent Trainer and Ekhaya, I remain committed to Esgela’s mission. I still plan to build a hybrid bootcamp—online and on-site, and fully free for learners."
}
  ,  
{
  "id": "4",
  "title": "Esgela Online Applications — Part 2 Application System",
  "description": "A full-stack application system that enables students to apply online, receive a unique student number, and track application status through a secure login.",
  "detailedDescription": "Esgela is a secure and dynamic online application system built to help students easily apply to academic programs. Upon applying, users receive a unique 8-digit student number starting with '24', which they can use along with their ID or email and a temporary password to log in and check the status of their application. The platform simplifies the application review process for admins while keeping users informed with automated email updates.",
  "image": "images/esgelaHeror.png",
  "images": [
    "images/esgelaHTML.png",
    "images/esgelaLogin.png",
    "images/esgelaAbout.png",
    "images/esgelaHome.png"
  ],
  "video": "videos/esgelaPortal.mp4",
  "tools": [
    "HTML", "CSS", "JavaScript", "Embedded JS",
    "Node.js", "Express", "MongoDB",
    "TailwindCSS", "JWT", "NodeMailer"
  ],
  "website": "https://www.tiktok.com/@onwabezibeke/video/7504344608940346679?is_from_webapp=1&sender_device=pc&web_id=7502623371319494199",
  "github": "https://github.com/Zibeke0nwabe/Full-stack-websites",
  "experience": "Esgela was the first platform I developed specifically for online applications. It was a major learning curve that helped me understand how to manage authentication, unique ID generation, and real-time email communication. This project helped lay the technical foundation for future platforms like Ekhaya and the upcoming Esgela learning system.",
  "challenges": "Creating a flexible authentication system that supports both ID and dynamically generated student numbers required careful logic. Managing two passwords—one for application tracking and another for future learning access—was also challenging. Debugging email delivery, ensuring backend validation, and balancing security with usability were all part of the process.",
  "motivationForReact": "Esgela Part 1 was built with the vision of opening the door to free education for all. It was the first step in building an end-to-end bootcamp platform that would be accessible to underserved learners. The system empowers students to track their application status independently and prepares the ground for a future learning management system. Even though further development is paused for now, I plan to return to this project and expand it into a full online and on-campus bootcamp platform."
},
 {
  "id": "5",
  "title": "Football Fixture Generator App",
  "description": "A grassroots-inspired web app to create and manage local sports fixtures, reflecting the early stages of my development journey.",
  "detailedDescription": "The Football Fixture Generator is a web application built to manage local tournaments and generate match pairings. Designed during my early days of learning web development, this project was inspired by the frustration of seeing unfair pairings in street tournaments in Port St. Johns. Although the UI and logic were basic at the time, it marked a major milestone in turning real-life challenges into digital solutions. It uses LocalStorage for data persistence and allows users to input team names and auto-generate pairings.",
  "image": "images/ball.png",
  "images": [
    "images/ball.png",
    "images/ball2.png"
  ],
  "video": "",
  "tools": [
    "HTML", "CSS", "JavaScript", "LocalStorage"
  ],
  "website": "https://fixtureapp-e3601.web.app/",
  "github": "https://github.com/Zibeke0nwabe/HTML-CSS-JavaScript/tree/master/Football%20Fixture%20Maker",
  "experience": "This was one of my earliest web development projects and a key turning point in my learning. Even with limited skills and tools, I took an idea from my everyday life and transformed it into a functional product. It helped me understand how user input, logic, and persistence could come together to build a usable tool—laying the groundwork for everything that followed.",
  "challenges": "The most difficult part was implementing the team pairing logic and aligning it with scheduled match times. As a beginner, creating a consistent UI and managing LocalStorage logic was complex, but rewarding. The limitations were many, but so were the lessons.",
  "motivation": "Growing up watching informal tournaments where matchups were often unfair, I always imagined a tool that could randomly and fairly generate fixtures. This app was my first attempt to solve that real-world problem. It reflects where I started and shows the power of turning an idea into something real, even without advanced tools. I still plan to return to this project in the future to improve the UI and add smarter pairing features. It reminds me of how far I've come and how much further I can go."
},
];

const App = () => {
  return (
    <Router>
      <div className="font-sans">
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <About />
                <Myinfo/>
                <FeaturedProjects projects={projects} />
                <Services />
                <Footer />
              </>
            } 
          />
          <Route 
            path="/project/:id" 
            element={<ProjectDetails projects={projects} />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;