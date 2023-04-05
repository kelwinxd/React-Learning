import Prod from './Prod';

import React from 'react' 

const Testefetch = () => {
 
 const [dados, setDados] = React.useState(null);

async function Hclick(event){
const response = await fetch(
`./teste.json/${event.target.innerText}`)
const json = await response.json();
setDados(json)



  
}
 
 
 
  return (
   <>
<button onClick={Hclick}> Click</button>

{dados && <Prod dados={dados}/>}
   </>


  )
}

export default Testefetch