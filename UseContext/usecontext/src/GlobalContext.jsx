import React, { useEffect } from "react"

export const GlobalContext = React.createContext()

export const StorageContext = ({children}) => {
    const [data, setData] = React.useState(null)

    useEffect(()=>{
        fetch("https://ranekapi.origamid.dev/json/api/produto/").then(data => data.json()).then(res => setData(res))
        
    },[])

      return (
<GlobalContext.Provider value={{data}}>
         {children}
        </GlobalContext.Provider>
      )
        
}

