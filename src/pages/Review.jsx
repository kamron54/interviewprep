import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Review() {
  const location = useLocation()
  const navigate = useNavigate()
  const videos = location.state?.videos || []

  return (
    <div className="min-h-screen p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Your Interview Review</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {videos.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded shadow-md">
            <h4 className="text-lg font-semibold mb-2">Question {i + 1}</h4>
            <p className="text-sm text-gray-700 mb-2 italic">"{item.question}"</p>
            <video src={item.videoUrl} controls className="mb-4 w-full bg-black rounded" />
            <p className="text-sm text-gray-700 italic">
              Feedback: Well-structured and thoughtful response. Great job!
            </p>
          </div>
        ))}
        <div className="text-center mt-8">
          <button onClick={() => navigate('/')} className="bg-blue-600 text-white px-6 py-2 rounded">
            Return to Home
          </button>
        </div>
      </div>
    </div>
  )
}