import React, { useEffect } from 'react'

const Data = () => {

    useEffect(() => {
        fetch("https://data.origamid.dev/vendas/")
    },[])
  return (
    <div>
        
    </div>
  )
}

export default Data