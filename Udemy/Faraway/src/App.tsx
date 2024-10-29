import React from 'react'
import Logo from './components/Logo'
import Form from './components/Form'
import List from './components/List'

const initialItems = [
  {
    id:1,
    description:"Passports",
    quantity:2,
    packed:false
  },
  {
    id:1,
    description:"Passports",
    quantity:2,
    packed:false
  },

]

const App = () => {
  return (
    <div>
      <Logo />
      <Form />
      <List>
        <ul>
          {initialItems.map((i) => (
            <li key={i.id}>{i.description}</li>
          ))}
        </ul>
      </List>
    </div>
    
  )
}

export default App