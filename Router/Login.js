import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
 const nav = useNavigate()
 function Enter(){
console.log('doing login')
nav('/cont')
 }
 
    return (
    <>
    <button onClick={Enter}>Login</button>
    </>
  )
}

export default Login
