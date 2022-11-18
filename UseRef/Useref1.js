import React from 'react'

const Useref1 = () => {
  
  const [comentario, setComentario] = React.useState([])
  const [input, setInput] = React.useState('')
  const InputElement = React.useRef()
  
  function Hclick(){
    setComentario([...comentario, input])
    setInput('')
    InputElement.current.focus()
  }
  
    return (
   <>
   
   <ul>
    {comentario.map((comentario) => <li key={comentario}>{comentario}</li>)}
   </ul>
   <input type="text" value={input} ref={InputElement}  onChange={({target}) => setInput(target.value)} />
   <button onClick={Hclick}>Enviar</button>
   </>
  )
}

export default Useref1