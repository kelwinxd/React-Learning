import React from 'react'

const Produto = ({dados}) => {
 
 const [api, setApi] = React.useState(null)
 const [load, setLoad] = React.useState(null)

 React.useEffect(() => {
    setLoad(true)
   
       fetch(`https://ranekapi.origamid.dev/json/api/produto/${dados}`).then((response) => response.json()).then((json) => setApi(json))

       setLoad(false)
 }, [dados])
 
 if(api === null) return null
    return (


    <div>
        {load && <p>carregando</p>}
   

 
 {!load && api &&  <div><h1>{api.nome}</h1> <p>{api.preco}</p></div>}
 
 
 </div>
    
  )
}

export default Produto