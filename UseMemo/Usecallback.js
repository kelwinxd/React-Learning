import React from 'react'

const Usecallback = () => {
  
  const [num, setNum] = React.useState([0])
  let Div = 1;

     function Click() {
        setNum([...num, num + 1 ])
     }
   
 
   
    return (
    <>
<ul>

    {num.map((num) => <li key={num}>{num}</li>)}
</ul>

<button onClick={Click}>Add</button>

<div >{Div}</div>
    
    </>
  )
}

export default Usecallback