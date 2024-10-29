import React from 'react'
import videoTest from './video.mp4'
import './style.css'

const RefLesson = () => {

  const video = React.useRef<HTMLVideoElement>(null)
  return (
    <div>
      <button onClick={() => video.current?.play()}>Play</button>
      <button onClick={() => video.current?.pause()}>Pause</button>
      <video controls src={videoTest} ref={video}></video>
    </div>
  )
}

export default RefLesson