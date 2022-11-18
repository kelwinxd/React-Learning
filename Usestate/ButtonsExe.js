import React from 'react'

const ButtonsExe = ({setNote, setSmart}) => {
  
  function Bnote(){
       setNote((noteb) => !noteb)
       setSmart(false)
  }

  function Bsmart () {
   setSmart((cel) => !cel)
   setNote(false)

  }

  const Bstyle = {
    margin: '20px'
  }
  return (
    <>
    <button style={Bstyle} onClick={Bnote}>Notebook</button>
    <button style={Bstyle} onClick={Bsmart}>Smartphone</button>
    </>
  )
}








export default ButtonsExe