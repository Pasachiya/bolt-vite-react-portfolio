import React from 'react'
import { Server, Cloud, GitBranch, Database } from 'lucide-react'
import Certificates from './Certificates'

const DevOpsPortfolio: React.FC = () => {
  const skills = [
    { name: 'Cloud Orchestration', icon: <Cloud size={24} /> },
    { name: 'CI/CD Pipelines', icon: <GitBranch size={24} /> },
    { name: 'Kubernetes', icon: <Server size={24} /> },
    { name: 'Docker', icon: <Database size={24} /> },
  ]

  const projects = [
    {
      title: 'Cloud Migration Project',
      description: 'Led the migration of a large-scale application from on-premises to AWS, resulting in 40% cost reduction and improved scalability.',
      technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes'],
    },
    {
      title: 'Automated CI/CD Pipeline',
      description: 'Designed and implemented a fully automated CI/CD pipeline using Jenkins, Docker, and Kubernetes, reducing deployment time by 70%.',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Git'],
    },
    {
      title: 'Infrastructure as Code Implementation',
      description: 'Developed a comprehensive IaC solution using Terraform and Ansible, enabling rapid and consistent environment provisioning.',
      technologies: ['Terraform', 'Ansible', 'AWS', 'Azure'],
    },
  ]

  const devOpsCertificates = [
    { name: 'AWS Certified DevOps Engineer - Professional', issuer: 'Amazon Web Services' },
    { name: 'Certified Kubernetes Administrator (CKA)', issuer: 'Cloud Native Computing Foundation' },
    { name: 'Docker Certified Associate', issuer: 'Docker' },
  ]

  return (
    <div className="space-y-12 animate-fadeIn">
      <section>
        <h2 className="text-3xl font-bold mb-6">DevOps Skills</h2>
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
        <h2 className="text-3xl font-bold mb-6">DevOps Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 bg-opacity-50 p-6 rounded-lg backdrop-blur-md transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-blue-600 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Certificates certificates={devOpsCertificates} />
    </div>
  )
}

export default DevOpsPortfolio