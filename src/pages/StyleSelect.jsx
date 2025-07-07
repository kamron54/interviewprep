import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function StyleSelect() {
  const navigate = useNavigate()
  const styles = [
    { key: 'ethical', title: '🧠 Ethical', description: 'Practice ethical decision-making questions' },
    { key: 'motivation', title: '🚀 Motivation', description: 'Show your passion for dentistry' },
    { key: 'communication', title: '🗣️ Communication', description: 'Demonstrate how clearly you speak' },
    { key: 'all', title: '🧪 All-Inclusive', description: 'Get a mix of question types' },
  ]

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Choose Your Interview Style</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {styles.map((style) => (
          <div key={style.key} className="bg-white shadow-md rounded-lg p-6 text-left">
            <h3 className="text-xl font-bold mb-2">{style.title}</h3>
            <p className="mb-4">{style.description}</p>
            <button
              onClick={() => navigate('/interview', { state: { style: style.key } })}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Start
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}