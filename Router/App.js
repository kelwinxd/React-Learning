import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Header from './Header'
import Cont from './Cont';
import Error from './Error';
import Login from './Login';
//npm install history react-router-dom@next
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='cont' element={<Cont />} />
      <Route path='*' element={<Error />}  />
      <Route path='login' element={<Login />} />

    </Routes>
    
    
    </BrowserRouter>
    
    
    </>
  )
}

export default App
