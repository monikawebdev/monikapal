import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Monitor,
  Layers,
  Code,
  Server,
  Globe,
  TrendingUp,
  MapPin,
  BookOpen,
} from 'lucide-react';
import foxdash from './assets/foxdash.png';
import ecommerce from './assets/ecommerce.png';
import taskmanager from './assets/taskmanager.png';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      title: 'FoxDash',
      image: foxdash,
      description: 'A developer dashboard for all your needs',
      tags: [
        'React',
        'Tailwind CSS',
        'Node.js',
        'Express',
        'MongoDB',
        'Redux',
        'Cloudinary',
        'Google Calendar',
        'Google Auth',
        'GitHub Auth',
      ],
    },
    {
      title: 'E-Commerce Platform',
      image: ecommerce,
      description: 'Built a full-stack e-commerce platform using React, Node.js, and MongoDB',
      tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
    },
    {
      title: 'Task Management App',
      image: taskmanager,
      description: 'Created a Kanban-style task management application',
      tags: ['React', 'TypeScript', 'Material-UI', 'Redux'],
    },
  ];

  const skills = [
    'React',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Tailwind CSS',
    'Redux',
    'GraphQL',
    'Git',
    'Responsive Design',
    'UI/UX Design',
    'REST APIs',
    'MongoDB',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-white text-center py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-6">
            Turning <span className="text-blue-600">Ideas</span> into{' '}
            <span className="text-blue-600">Digital Reality</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Full Stack Developer specializing in building complete web solutions from concept to deployment. From server
            setup to SEO optimization, I handle the entire development lifecycle.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#services"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              My Services
            </a>
            <a
              href="#contact"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6 text-gray-800">About</h3>
          <p className="text-gray-700 text-lg mb-6">
            I'm in full-stack web development, server configuration, and performance optimization. Currently pursuing my
            BTech in Computer Engineering at Centurion University, I combine academic knowledge with practical
            experience to deliver exceptional web solutions.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            My goal is to provide end-to-end web development services, handling everything from front-end design to
            back-end development, server setup, domain management, and SEO optimization. This comprehensive approach
            ensures clients receive a complete, hassle-free solution.
          </p>
          <ul className="flex flex-col gap-4 text-gray-700 text-lg justify-center items-center">
            <li className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <span>BTech, Computer Engineering — Centurion University (2021-2025)</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>India, Odisha</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6 text-center">Services</h3>
          <p className="text-gray-600 text-lg text-center mb-12">
            I offer comprehensive web development services covering the entire development lifecycle. From concept to
            deployment, I handle all aspects of bringing your digital ideas to life.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Code className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Full Stack Development</h4>
              <p className="text-gray-600">
                End-to-end web application development using modern technologies like React, Node.js, and MongoDB.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Layers className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">UI/UX Design</h4>
              <p className="text-gray-600">
                Creation of intuitive, responsive interfaces that provide exceptional user experiences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Server className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Server Setup & Configuration</h4>
              <p className="text-gray-600">
                Professional configuration of web servers using Nginx, Apache, or custom solutions for optimal
                performance.
              </p>
            </div>
          </div>          
        </div>
      </section>

      {/* My Development Process Section */}
      <section className="bg-blue-50 py-12 rounded-lg">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold mb-8 text-blue-600 text-center">My Development Process</h3>
          <ol className="space-y-6">
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold text-lg">1</span>
              <div>
                <h4 className="text-xl font-semibold">Discovery & Planning</h4>
                <p className="text-gray-600">
                  Understanding your requirements, goals, and timeline to create a detailed project plan.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold text-lg">2</span>
              <div>
                <h4 className="text-xl font-semibold">Design & Development</h4>
                <p className="text-gray-600">
                  Creating intuitive UI designs and developing robust, scalable code following best practices.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold text-lg">3</span>
              <div>
                <h4 className="text-xl font-semibold">Server Setup & Deployment</h4>
                <p className="text-gray-600">
                  Configuring servers, domains, SSL certificates, and deploying your application for production.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold text-lg">4</span>
              <div>
                <h4 className="text-xl font-semibold">SEO & Performance Optimization</h4>
                <p className="text-gray-600">
                  Implementing SEO best practices and optimizing performance for fast loading times.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold text-lg">5</span>
              <div>
                <h4 className="text-xl font-semibold">Maintenance & Support</h4>
                <p className="text-gray-600">
                  Providing ongoing maintenance, updates, and technical support to ensure your website runs smoothly.
                </p>
              </div>
            </li>
          </ol>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h4 className="text-xl font-bold mb-2">Monika Pal</h4>
              <p className="text-gray-400">Building the future of the web</p>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/monikawebdev" className="hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/monikapaldevs" className="hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:monikapal1602@gmail.com" className="hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;