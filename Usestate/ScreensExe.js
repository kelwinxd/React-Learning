import React from 'react'
import noteimg from './note.jpg'
import celimg from './cel.png'

const ScreensExe = ({note, smart}) => {
 

const style = {
    width: '500px',
    height: '500px'
}

 if(note === true) {
    return (
    <>
    <br></br>
    <img style={style} src={noteimg}></img>
    <p>Notebook</p>
    </>
  )
}

if(smart === true){
    return (
        <>
        <br></br>
        <img style={style} src={celimg}></img>
        <p >Smartphone</p>
        </>
    )
}
}
export default ScreensExe