import React from 'react'
const Get = ({get, setGet}) => {
    if(get === true) {
   return (
   
       <>
       <div style={{backgroundColor:'blue', display:'flex', width:'100px',height:'80px', zIndex:'2', padding:'1rem'}}>
         <button style={{color:'red', paddingRight:'50px', width:'10px',height:'10px'}} onClick={() => setGet(false)}>X</button>
          <p>Cadastro incorreto!</p>
   
       </div>
       
       </>
   )
   
   
   
    }
    return null
   
   
   
   }
export default Get
