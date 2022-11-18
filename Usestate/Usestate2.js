import React from 'react'
import Get from './Get';





const Usestate2 = () => {
  
 const [get, setGet] = React.useState(false)
  
    function Letget(){
        setGet(true)
    }

  
  
    return (
    <>
    
    <Get get={get} setGet={setGet} />
    <div>{get ? 'ativo' : 'desativo'}</div>
    <button onClick={Letget}>Cadastrar</button>
    </>
  )
    }

export default Usestate2
