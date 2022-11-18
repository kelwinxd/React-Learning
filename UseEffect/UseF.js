import React from 'react'

const UseF = () => {
  const [dados, setDados] = React.useState(0);

  const [api, setApi] = React.useState(null);

  const div = document.getElementById('div')
  React.useEffect(
    () => {
        div.innerText = "Eaiiiii" + dados;
    }, [dados, div]
  )

  React.useEffect(
() => {

fetch('https://ranekapi.origamid.dev/json/api/produto/notebook').then((response) => response.json()).then((json) => setApi(json))}, []



  )
  
  
    return (
   <>
   <div>
   
   {api && ( <div>
      <h1>{api.nome}</h1>
      <p>{api.preco}</p>

    </div>
    )}
   
   
    
    <button onClick={() => setDados(dados + 1)}>{dados}</button></div>
   
   
   
   </>
  )
}

export default UseF