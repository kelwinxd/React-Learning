import React from 'react'
import Button from './Button'
import Input from './Input'

const App = () => {
  const [total, setTotal] = React.useState(0)

  //Exercice1
  const [date,setDate] = React.useState('')
  
  function Add(){
    setTotal((total) => total +=1)
  }


  
  return (
    <div>
      <h1>Aula 1</h1>
      <p>Total: {total}</p>
      <Button onClick={Add} width='5rem' font='1.5rem'>
        Add
      </Button>

<h1>Exercicio 1</h1>
         <h2>Data da viagem: {date}</h2>
        <Input label='Nome' id='name'/>
        <Input label='Data da Viagem' id='viagem' value={date} onChange={(event) => setDate(event.currentTarget.value)} type='date'/>
    </div>
  )
}

export default App