import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sachindu D Weerakkodi</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300 transform hover:scale-110">
                <Github size={24} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300 transform hover:scale-110">
                <Linkedin size={24} />
              </a>
            </li>
            <li>
              <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-white transition duration-300 transform hover:scale-110">
                <Mail size={24} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header