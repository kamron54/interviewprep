import React, { useEffect, useRef, useState } from 'react'

export default function VideoRecorder({ onRecordingComplete }) {
  const videoRef = useRef(null)
  const mediaRecorderRef = useRef(null)
  const [recording, setRecording] = useState(false)
  const [stream, setStream] = useState(null)

  useEffect(() => {
    const init = async () => {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      videoRef.current.srcObject = mediaStream
      setStream(mediaStream)
    }
    init()
  }, [])

  const startRecording = () => {
    let chunks = []
    const recorder = new MediaRecorder(stream)
    mediaRecorderRef.current = recorder
    recorder.ondataavailable = e => chunks.push(e.data)
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' })
      const url = URL.createObjectURL(blob)
      onRecordingComplete(url)
    }
    recorder.start()
    setRecording(true)
  }

  const stopRecording = () => {
    mediaRecorderRef.current.stop()
    setRecording(false)
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <video ref={videoRef} autoPlay muted className="w-full max-w-md rounded shadow" />
      {!recording ? (
        <button onClick={startRecording} className="bg-green-600 text-white px-4 py-2 rounded">
          Start Recording
        </button>
      ) : (
        <button onClick={stopRecording} className="bg-red-600 text-white px-4 py-2 rounded">
          Stop Recording
        </button>
      )}
    </div>
  )
}