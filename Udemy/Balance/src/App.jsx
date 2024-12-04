import React from 'react'
import Friendlist from './components/Friendlist';

import './App.css'
import Dash from './components/Dash';


const users = [
  {
    id: 1,
    name: "Alice Johnson",
    image: "https://i.pravatar.cc/50?img=1",
    balance: -10.75
  },
  {
    id: 2,
    name: "Bob Smith",
    image: "https://i.pravatar.cc/50?img=2",
    balance: 120.30
  },
  {
    id: 3,
    name: "Charlie Brown",
    image: "https://i.pravatar.cc/50?img=3",
    balance: 0
  },

];


const App = () => {
  return (
    <div className='app'>
      <Friendlist item={users} />
     
       <Dash />

    </div>
  )
}

export default App