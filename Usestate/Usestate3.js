import React from 'react'





const Usestate3 = () => {

    const [count, setCount] = React.useState(1)
    const [item, setItem] = React.useState(['item'])
   //funcão que adiciona texto e contagem conforme clica
   
    function Click(){
    setCount(count + 1)
    setItem([...item, 'item' + (count +1)])
    
    }
    



  return (
    <>
   <span>{item.map((it) => (
    <span key={it}>{it}</span>
   ))}</span>
   
    <button onClick={Click}>{count}</button>




    </>
  )
}

export default Usestate3