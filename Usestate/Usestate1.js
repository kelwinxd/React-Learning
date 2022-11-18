
import React from 'react'
import ButtonModal from './ButtonModal'
import Modal from './Modal'


const Usestate1 = () => {
    const [ativo, setAtivo] = React.useState(false)
    const [hobbie, setHobbie] = React.useState({gostos: 'basca'})
    
    function Hclick() {
        setAtivo(!ativo)
        setHobbie({...hobbie, dificuldades: 'timidez'})
    }
     const [modal, setModal] = React.useState(false)

    return (
     <>
     <p>{hobbie.gostos}</p>
     <p>{hobbie.dificuldades}</p>
     <button onClick={Hclick}>{ativo ? 'Botão Ativo' : 'Botão Inativo'}</button>
      <Modal modal={modal} setModal={setModal}/>
     <ButtonModal setModal={setModal}/>
     
     
     </>
     
        
    );
}

export default Usestate1
