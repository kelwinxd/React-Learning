import React from 'react'
import ButtonsExe from './ButtonsExe'
import ScreensExe from './ScreensExe'


const StateExe = () => {
  
  
  
  const [note, setNote] = React.useState(false)
  const [smart, setSmart] = React.useState(false)


    return (
    <>
    <div style={{textAlign:'center', margin:'50px'}}>
    <ButtonsExe setNote={setNote} setSmart={setSmart} /> 

    <ScreensExe note={note} smart={smart}/> 
    </div>

    
    
    </>
  )
}

export default StateExe