import React from 'react'
import videoTest from './video.mp4'
import './style.css'

const VideoExe = () => {

  const video = React.useRef<HTMLVideoElement>(null)
  const [videoplay,setPlay] = React.useState<boolean>(true)
  const [statevid,setStateVid] = React.useState<boolean>(true)
  
  function controlPlay() : void{
    setPlay((p) => !p)
    if(videoplay === true){
      video.current?.play()
    }else {
      video.current?.pause()

    }
   
  }

  function skipTime():void{
    if(video.current){
      video.current.currentTime += 2
    }
  }

  function changeSpeed(speed:number){
    if(video.current){
      video.current.playbackRate = speed
    }
         
  }

  return (
   <>
   <div className="container">
    <div className="btns">
      
    <button onClick={() => controlPlay()}>{statevid ? "Play" : "Pause"}</button> 
    <button onClick={()=>skipTime()}>+2</button>
    <button onClick={() => changeSpeed(1)}>1x</button>
    <button onClick={() => changeSpeed(2)}>2x</button>
    </div>
  
   <video src={videoTest} width={800} controls ref={video} onPlay={() => setStateVid(false)} onPause={() => setStateVid(true)}></video>
   </div>
 
   </>
  )
}

export default VideoExe