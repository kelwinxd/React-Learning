import React from 'react'
import Pizzas from './Pizzas'
import './App.css'


const App = () => {
  const hour = new Date().getHours()
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour <= closeHour
  console.log(isOpen)
  return (
    <>
   <div className='container'>
   <Pizzas />
   <p className={isOpen ? 'green' : 'red'}>{isOpen ? "Open" : "Closed"}</p>
   </div>
    </>
  )
}

export default App