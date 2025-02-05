import React, { useState } from 'react';
import { Github, Mail, Linkedin, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const personalInfo = {
    name: "Omer Abbasi",
    title: "Full Stack Developer",
    about: "I am a skilled React Native and MERN Stack Developer with a strong background in creating dynamic mobile and web applications. I have expertise in backend integration, API development, and building scalable admin panels. I am proficient in multiple programming languages, including JavaScript, Python, PHP, and Java, and have hands-on experience with tools like Firebase, Stripe, and AWS. My academic projects showcase my ability to develop innovative solutions, such as a mobile app for connecting users with volunteers, a URL shortener, and an AI-powered virtual character platform. I hold a Bachelor's degree in Software Engineering from COMSATS University Islamabad and am passionate about continuous learning and exploring new technologies.",
    email: "omerabbace@gmail.com",
    github: "https://github.com/omerabbace",
    linkedin: "https://www.linkedin.com/in/omerabbace",
  };

  const projects = [
    {
      title: "Imaginarium",
      description: "A modernImaginarium is a web application that allows users to create and interact with unique AI-powered characters. Craft intricate character profiles, define their personalities, and engage in dynamic conversations. Unleash your creativity and build a world of your own! web application built with React and Node.js",
      technologies: ["React", "Node.js","Express", "MongoDB",  "Firebase (Authentication)", "Gemini API"],
      github: "https://github.com/omerabbace/Imaginarium.git",
      image: "/portfolio/1.PNG"

    },
    {
      title: "CommuniCare",
      description: "CommuniCare is a comprehensive platform designed to bridge the gap between individuals needing assistance and those capable of providing it. The platform offers features like financial aid, healthcare, food, shelter support, community issue reporting, volunteer engagement, and charity contributions.This project leverages the MERN stack and other modern tools to deliver a seamless experience across web and mobile platforms.",
      technologies: ["React Native","React Js (Admin Panel)", "Node.js","Express", "MongoDB",  "Firebase","Stripe", "openrouteservice", "openstreetmap" ],
      github: "https://github.com/yourusername/project3",
      image: "/portfolio/4.png"
    },
    {
      title: "Game Auction",
      description: "RetroGame Auctions is a web-based platform dedicated to video game enthusiasts, offering a place to auction and bid on physical media for retro games like PS1, PS2, and Wii titles. This project is built using HTML, CSS, and JavaScript, adhering to best coding practices and techniques.The platform allows users to start auctions, visitors to place bids, and auction creators to connect with the most appealing bidder.",
      technologies: ["HTML5", "CSS3","JavaScript", "SQL"],
      github: "https://github.com/omerabbace/GameAuction",
      image: "/portfolio/3.png"
    },
    {
      title: "Link Shortener",
      description: "Link Shortener is a web application that allows users to shorten long URLs into simple, shareable links. Built using the MERN stack (MongoDB, Express, React, Node.js), this project offers a seamless, user-friendly experience for generating, managing, and tracking shortened URLs",
      technologies: ["React", "Node.js","Express", "MongoDB"],
      github: "https://github.com/omerabbace/Link-shortner",
      image: "/portfolio/2.png"
    },
    {
      title: "Gym Management",
      description: "The Gym Management System is a web-based application designed to help gym owners manage their operations efficiently. Built with Bootstrap for the frontend and vanilla PHP for the backend, this project provides essential features like member management, payment tracking, and class scheduling in a simple and user-friendly interface.",
      technologies: ["Bootstrap", "Php","SQL", "Javascript", "CSS"],
      github: "https://github.com/omerabbace/Gym-management",
      image: "/portfolio/5.png"
    },

  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold">{personalInfo.name}</h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>

            {/* Mobile Navigation Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
              <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{personalInfo.name}</h1>
              <h2 className="text-xl md:text-2xl text-gray-600 mb-6">{personalInfo.title}</h2>
              <div className="flex space-x-4">
                <a href={personalInfo.github} className="text-gray-600 hover:text-gray-900">
                  <Github size={24} />
                </a>
                <a href={personalInfo.linkedin} className="text-gray-600 hover:text-gray-900">
                  <Linkedin size={24} />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="text-gray-600 hover:text-gray-900">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src={"/portfolio/profile1.jpg"}
                alt="Profile" 
                className="rounded-full w-64 h-64 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {personalInfo.about}
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.github}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <Github size={20} className="mr-2" />
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="text-lg text-gray-600 text-center mb-4">
              Feel free to reach out for collaborations or just a friendly hello at omerabbace@gmail.com
            </p>
            <div className="flex space-x-6">
              <a href={personalInfo.github} className="text-gray-600 hover:text-gray-900">
                <Github size={32} />
              </a>
              <a href={personalInfo.linkedin} className="text-gray-600 hover:text-gray-900">
                <Linkedin size={32} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-gray-600 hover:text-gray-900">
                <Mail size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;