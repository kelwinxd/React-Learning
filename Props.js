
import React from 'react';
// Propriedade usando argumentos
const TitulocomProps = (props) => {
 return <h1>{props.texto}</h1>
}
// Propriedade já usando os elementos
const TituloDes = ({cor, texto}) => {
      return <h1 style={{color: cor}}>{texto}</h1>
}

const Children = ({peso, alinha, textao, children}) => {
  return <h2 style={{fontSize : peso, textAlign: alinha}}>{textao}, {children}</h2>
}


function Props() {
 
  

  return (  
    <>
    
    <div>
      <TitulocomProps texto="Meu título 1 com Props"/>
      <TitulocomProps texto="Meu título 2 com Props"/>
      <TituloDes cor="blue" texto="Titulo Desestruturado"/>
      <Children peso="50px" alinha="center" textao="Dio è fedele, ti amo, Dio potente">
        <p>prova di testo</p>
      </Children>
    </div>
    
    
    






    </>
  );

}

 
 
 



export default Props;
