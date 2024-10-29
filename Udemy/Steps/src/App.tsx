import { useState } from 'react'
import './App.css'

const msg: string[] =  [
  "Learn React",
  "Apply for Jobs",
  "Invest your new income"
]


const App = () => {

  const [steps,setSteps] = useState<number>(1)
  const [isOpen, setIsOpen] = useState<boolean>(true)

  function nextHandle(): void {
    if(steps < msg.length){
      setSteps((s) => s + 1)
    }
     
}

function prevHandle(): void {
  if(steps > 1){
    setSteps((s) => s - 1)
  }
   
}


  return (
    <>
    <button onClick={() => setIsOpen((o) => !o)}>{isOpen ? "X" : "Open"}</button>
   {isOpen && (
 <div className="steps">
 <div className="numbers">
  <div className={`${steps >= 1 ? "active" : ""}`}>1</div>
  <div className={`${steps >= 2 ? "active" : ""}`}>2</div>
  <div className={`${steps >= 3 ? "active" : ""}`}>3</div>
 </div>
 <div className="message">{msg[steps - 1]}</div>
  
 <div className="buttons">
  <button onClick={prevHandle} disabled={steps === 1}>Previous</button>
  <button onClick={nextHandle} disabled={steps === msg.length}>Next</button>
 </div>
 <p>{steps}</p>
</div>
   )}
   

    </>
  )
}

export default App