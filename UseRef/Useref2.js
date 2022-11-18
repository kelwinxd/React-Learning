import React from 'react'

const Useref2 = () => {
  const [cesta, setCesta] = React.useState(0)
  const [noti, setNoti] = React.useState(null)
  const TimeoutRef = React.useRef

  function Hclick(){
    setCesta(cesta + 1)
    setNoti('Item Adicionado')
    //O ref aqui limpa os clicks anteriores pra não agendar novos timeouts, se clicar 100 vezes, depois de 2 segundos a noti some como se fosse uma
    clearTimeout(TimeoutRef.current)
    TimeoutRef.current =  setTimeout(() => {setNoti(null)}, 2000)
  }
  
  
    return (
    <>
    <div>
      
      
      <button onClick={Hclick}>Cesta {cesta}</button>

      <br></br>
      <p>{noti}</p>


    </div>
    
    
    </>
  )
}

export default Useref2