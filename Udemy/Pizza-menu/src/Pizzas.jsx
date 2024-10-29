import React from 'react'
import DataPizza from './data.json'
import "./App.css"

const Pizzas = () => {

 
    
  return (
    <div className='pizzas'>
        
      
      
      
      
         {DataPizza.map((item) => (
      <div key={item.name} className='pizza'>
          <img src={item.photo} alt="" />
          <div className="pizza-detail">
          <p>{item.name}</p> 
      
      <p className='ing'>{item.ingredients}</p>
          </div>
        
        
        
        </div>
      
    ))}
      
       
    </div>
  )
}

export default Pizzas