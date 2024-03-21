import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LoginForm from './LoginForm'

const Login = () => {
  return (
   <Routes>
     <Route index element={<LoginForm />}/>
   </Routes>
  )
}

export default Login