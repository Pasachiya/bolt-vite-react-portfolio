import React from 'react'
import { Code, Layout, Server, Smartphone } from 'lucide-react'
import Certificates from './Certificates'

const WebDevPortfolio: React.FC = () => {
  const skills = [
    { name: 'JavaScript', icon: <Code size={24} /> },
    { name: 'React', icon: <Layout size={24} /> },
    { name: 'Node.js', icon: <Server size={24} /> },
    { name: 'Responsive Design', icon: <Smartphone size={24} /> },
  ]

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Developed a full-stack e-commerce platform with React frontend and Node.js backend, featuring real-time inventory management and secure payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Created a responsive social media analytics dashboard using React and D3.js, providing real-time data visualization for multiple platforms.',
      technologies: ['React', 'D3.js', 'CSS Grid', 'REST APIs'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Task Management App',
      description: 'Built a full-stack task management application with real-time updates, user authentication, and collaborative features.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
  ]

  const webDevCertificates = [
    { name: 'Full Stack Web Developer Nanodegree', issuer: 'Udacity' },
    { name: 'React Developer Certification', issuer: 'Meta' },
    { name: 'Advanced JavaScript Certification', issuer: 'freeCodeCamp' },
  ]

  return (
    <div className="space-y-12 animate-fadeIn">
      <section>
        <h2 className="text-3xl font-bold mb-6">Web Development Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center space-x-2 bg-gray-700 bg-opacity-50 p-4 rounded-lg backdrop-blur-md transition duration-300 transform hover:scale-105">
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Web Development Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 bg-opacity-50 rounded-lg overflow-hidden backdrop-blur-md transition duration-300 transform hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-green-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Certificates certificates={webDevCertificates} />
    </div>
  )
}

export default WebDevPortfolio