import React, { useEffect } from 'react'

type Usertypes = {
    name: string,
    age: number,
    gender?:string
}

function user(){
  return {
    name:'kelwin',
    age:26,
  
  }
}


const User = () => {

    
const [data,setData] = React.useState<null | Usertypes>(null)

    useEffect(() => {
      setData(user())
    },[])
  return (
    <div>
      
      {data !== null && <div> <p>{data.name}</p> <p>{data.age}</p></div>}
    
    </div>
  )
}

export default User