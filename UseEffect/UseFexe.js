import React from 'react'
import Produto from './Produto'



const UseFexe = () => {

const [dados, setDados] = React.useState(null)

//Essa função resgata o ultimo dado do localstorage e reutiliza quando der refresh
React.useEffect(() => {
    const DadoLocal = window.localStorage.getItem('Dado')
    if(DadoLocal !== null) setDados(DadoLocal)
}, [])


//Registra e guarda o valor do dado no localstorage
React.useEffect(() =>{
    if(dados !== null) window.localStorage.setItem('Dado', dados)
}, [dados])



function Hclick({target}){
   setDados(target.innerText)
}


  
    return (
   <>
   <h1>Preferencias: {dados}</h1>

<button style={{margin:'20px'}} onClick={Hclick}>notebook</button>
<button onClick={Hclick}>smartphone</button>
<Produto dados={dados} />
  
   
   </>
  )
}

export default UseFexe