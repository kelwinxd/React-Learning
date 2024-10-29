import React, { useEffect } from 'react'
import Input from './Input'
import './style.css'

type Vendas ={
    id:string,
    nome:string,
    status:string
}

const Sells = () => {

    const [inicio,setInicio] = React.useState("2024-10-03")
    const [final,setFinal] = React.useState("2024-10-11")
    const [data,setData] = React.useState<null | Vendas[]>(null)

    useEffect(() => {

        if(inicio !== "" && final !== ""){
            fetch(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`).then((res) => res.json()).then((json) => setData(json as Vendas[]))
        }
          
    },[inicio,final])

    
  return (
    <div className='container'>
      <div className="dates">
      <Input label='Inicio' setState={setInicio} value={inicio}/>
        <Input label='Final' setState={setFinal} value={final}/>

      </div>
      <div className="list">
      <ul style={{listStyle:"none"}}>{data !== null && data.map((v) => (
            <li key={v.id}>{v.nome}: <span style={{color: v.status === "pago" ? "green" : v.status === "falha" ? "red" : "blue"}}>{v.status}</span></li>
           ))}</ul>
      </div>
          
    </div>
  )
}

export default Sells