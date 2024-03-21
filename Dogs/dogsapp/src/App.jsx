import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login/Login'
import './App.css'


const App = () => {
  return (

<BrowserRouter>
<Header />
<Routes>
  <Route index element={<Home />} />
  <Route path='/login/*' element={<Login />}/>
  
</Routes>
</BrowserRouter>
  )
}

export default App