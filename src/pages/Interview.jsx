import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import VideoRecorder from '../components/VideoRecorder'

const questionBank = {
  ethical: [
    "You see a student cheating during an exam. What do you do?",
    "Should dentists treat patients who refuse to disclose medical history?"
  ],
  motivation: [
    "Why do you want to become a dentist?",
    "What excites you most about dental school?"
  ],
  communication: [
    "Explain flossing to a 5-year-old.",
    "How would you calm a nervous patient?"
  ],
  all: [
    "Why do you want to become a dentist?",
    "You see a student cheating during an exam. What do you do?",
    "Explain flossing to a 5-year-old."
  ]
}

export default function Interview() {
  const location = useLocation()
  const navigate = useNavigate()
  const style = location.state?.style || 'ethical'
  const questions = questionBank[style]
  const [step, setStep] = useState(0)
  const [videos, setVideos] = useState([])

  const handleRecordingComplete = (videoUrl) => {
    setVideos([...videos, { question: questions[step], videoUrl }])
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      navigate('/review', { state: { videos: [...videos, { question: questions[step], videoUrl }] } })
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-semibold mb-4">Mock Interview</h2>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-2xl text-center">
        <h3 className="text-lg mb-4"><strong>Question {step + 1}:</strong> {questions[step]}</h3>
        <VideoRecorder onRecordingComplete={handleRecordingComplete} />
      </div>
    </div>
  )
}