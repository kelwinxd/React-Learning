import React, { useEffect } from 'react'

function UseFetch<T>(url: RequestInfo | URL ,options?:RequestInit){

const [data,setData] = React.useState<T | null>(null)
const [load,setLoad] = React.useState(false)
const [error,setError] = React.useState(null)

useEffect(() => {
  const FetchData = async () => {
    try {
      const res = await fetch(url,options)
      const json = await res.json()
      console.log(json)
    } catch (error) {
      console.log(error)
    }
  }

  FetchData()

},[url])

  return {data,load,error}
}

export default UseFetch