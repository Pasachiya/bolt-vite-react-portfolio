import React, { useState } from 'react'
import { Code, Cloud } from 'lucide-react'
import Header from './components/Header'
import Footer from './components/Footer'
import DevOpsPortfolio from './components/DevOpsPortfolio'
import WebDevPortfolio from './components/WebDevPortfolio'

function App() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {!selectedRole ? (
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              Welcome to Sachindu D Weerakkodi's Portfolio
            </h1>
            <p className="text-xl text-center">
              Are you looking for a DevOps Engineer or a Web Developer?
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => setSelectedRole('devops')}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Cloud size={24} />
                <span>DevOps Engineer</span>
              </button>
              <button
                onClick={() => setSelectedRole('webdev')}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Code size={24} />
                <span>Web Developer</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-8">
            {selectedRole === 'devops' ? <DevOpsPortfolio /> : <WebDevPortfolio />}
            <button
              onClick={() => setSelectedRole(null)}
              className="mt-8 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-300 ease-in-out"
            >
              Back to Selection
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App