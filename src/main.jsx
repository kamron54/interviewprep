import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import StyleSelect from './pages/StyleSelect'
import Interview from './pages/Interview'
import Review from './pages/Review'
import { InterviewProvider } from './state/InterviewContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InterviewProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/styles" element={<StyleSelect />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </Router>
    </InterviewProvider>
  </React.StrictMode>
)