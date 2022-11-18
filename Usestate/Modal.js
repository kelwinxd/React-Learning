import React from 'react'

const Modal = ({modal, setModal}) => {
 
 if(modal === true) 
    {return (
    <>
    <div>
        <p>Model Aberto mano</p>
        <button onClick={() => setModal(false)}>Fechar</button>
    </div>
    </>
  )}
  return null
}

export default Modal
