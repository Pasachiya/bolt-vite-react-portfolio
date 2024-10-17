import React from 'react'
import { Award } from 'lucide-react'

interface Certificate {
  name: string
  issuer: string
}

interface CertificatesProps {
  certificates: Certificate[]
}

const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Certificates</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {certificates.map((cert, index) => (
          <div key={index} className="bg-gray-700 bg-opacity-50 p-4 rounded-lg backdrop-blur-md flex items-center space-x-4 transition duration-300 transform hover:scale-105">
            <Award size={32} className="text-yellow-400" />
            <div>
              <h3 className="font-semibold">{cert.name}</h3>
              <p className="text-sm text-gray-300">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certificates