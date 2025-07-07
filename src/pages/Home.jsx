import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6">Interview Prep</h1>
      <p className="mb-8">Choose your interview type to begin:</p>
      <div className="space-x-4">
        <button onClick={() => navigate('/styles')} className="bg-blue-600 text-white px-6 py-3 rounded">
          Dental
        </button>
        <button disabled className="bg-gray-400 text-white px-6 py-3 rounded opacity-50 cursor-not-allowed">
          Medical (Coming Soon)
        </button>
        <button disabled className="bg-gray-400 text-white px-6 py-3 rounded opacity-50 cursor-not-allowed">
          Grad School (Coming Soon)
        </button>
      </div>
    </div>
  )
}