import React from 'react'
import Player from './components/Player'
import {audioData} from './data.jsx'

const App = () => {

  console.log(audioData)
  return (
    <div className='min-h-screen bg-slate-500 flex items-center justify-center'>
      
      <Player />
      
      </div>
  )
}

export default App