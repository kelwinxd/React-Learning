import React from 'react'

const Friend = ({info}) => {
  return (
    <div className='card'>
       
        <div className="infos">
        <img src={info.image} alt="" />
        <div className="main">
        <p>{info.name}</p>
        {info.balance < 0 && (
          <p className='red result'>You owe to {info.name} {info.balance}$</p>
        )}

        {info.balance > 0 && (
          <p className='green result'>{info.name} owes {info.balance}$ to you</p>
        )}

        
        {info.balance === 0 && (
          <p className='result'>{info.name} and you are even</p>
        )}    

        
        </div>
        
       
        </div>
        <button>Select</button>
    
    </div>
  )
}

export default Friend