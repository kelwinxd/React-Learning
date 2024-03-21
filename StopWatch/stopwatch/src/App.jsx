import React, { useState} from 'react'
import { useRef } from 'react'

const App = () => {

    const [isRunning, setIsRunning] = useState(false)
    const [elapse, SetElapse] = useState(0)
    const intervalIdRef = useRef(null)
    const startTimeRef = useRef(0)
    function start(){
      setIsRunning(true)
      startTimeRef.current = Date.now() - elapse
    }

    function reset(){

    }

    function stop()
{

}    
    console.log(startTimeRef)

  return (
    <div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App