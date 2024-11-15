import React, { useEffect } from 'react'
import VideoTest from './video.mp4'
import UserLS from './UserLS'
import './style.css'


const VideoH = () => {

    const video = React.useRef<HTMLVideoElement>(null)
    const [volume,setVolume] = UserLS("volume","0")

    useEffect(() => {
         if(!video.current) return
         const n = Number(volume)
         if(n>=0 && n <=1) video.current.volume = n

    },[volume])

  return (
    <div className='container'>
        {volume}
         <button onClick={() => setVolume("0")}>0</button>
        <button onClick={() => setVolume("0.5")}>50</button>
        <button onClick={() => setVolume("1")}>100</button>
        <video src={VideoTest} controls ref={video}></video>
    </div>
  )
}

export default VideoH