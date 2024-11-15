import React, { useEffect, useState } from 'react'




const UserLS = (key:string,initial:string) : [string, React.Dispatch<React.SetStateAction<string>>] => {

   const [state, setState] = useState(() => {
    const verify = window.localStorage.getItem(key)
    return verify ? verify : initial
   })

   useEffect(() => {
    window.localStorage.setItem(key,state)
   },[state,key])
    

  return [state, setState] as const
}

export default UserLS