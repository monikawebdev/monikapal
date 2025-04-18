import React, { useState } from 'react';
import { Github, Linkedin, Mail, Monitor, Layers, Code } from 'lucide-react';
import foxdash from "./assets/foxdash.png";
import ecommerce from "./assets/ecommerce.png";
import taskmanager from "./assets/taskmanager.png";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      title: "FoxDash",
      image: foxdash,
      description: "A developer dashboard for all your needs",
      tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Redux", "Cloudinary", "Google Calendar", "Google Auth", "GitHub Auth"],
    },
    {
      title: "E-Commerce Platform",
      image: ecommerce, // Adding the e-commerce image
      description: "Built a full-stack e-commerce platform using React, Node.js, and MongoDB",
      tags: ["React", "Node.js", "MongoDB", "Redux"],
    },
    {
      title: "Task Management App",
      image: taskmanager, // Adding the taskmanager image
      description: "Created a Kanban-style task management application",
      tags: ["React", "TypeScript", "Material-UI", "Redux"],
    }
  ];

  const skills = [
    "React", "JavaScript", "TypeScript", "Node.js", 
    "Tailwind CSS", "Redux", "GraphQL", "Git",
    "Responsive Design", "UI/UX Design", "REST APIs", "MongoDB"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Monika Pal</h1>
          <div className="flex gap-4">
            <a href="https://github.com/monikawebdev" className="hover:text-blue-200 transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/monikapaldevs" className="hover:text-blue-200 transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:monikapal0216@gmail.com" className="hover:text-blue-200 transition-colors"><Mail size={20} /></a>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold mb-6">Frontend Developer & Designer</h2>
            <p className="text-xl mb-8">Creating beautiful, responsive, and user-friendly web experiences</p>
            <a href='https://github.com/monikawebdev' className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              View My Work
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Services Section */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center">What I Do</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Monitor className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Frontend Development</h4>
              <p className="text-gray-600">Building responsive and performant web applications</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Layers className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">UI/UX Design</h4>
              <p className="text-gray-600">Creating intuitive and beautiful user interfaces</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Code className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Clean Code</h4>
              <p className="text-gray-600">Writing maintainable and scalable code</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gray-200 md:h-48">
                  {project.image && <img src={project.image} alt={project.title} className="w-full h-full object-cover" />}
                </div>
                <div className="p-6 pt-12">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-md transition-shadow">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Let's Work Together</h3>
          <p className="text-gray-600 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Get in Touch
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h4 className="text-xl font-bold mb-2">Monika Pal</h4>
              <p className="text-gray-400">Building the future of the web</p>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/monikawebdev" className="hover:text-blue-400 transition-colors"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/monikapaldevs" className="hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
              <a href="mailto:monikapal0216@gmail.com" className="hover:text-blue-400 transition-colors"><Mail size={24} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;