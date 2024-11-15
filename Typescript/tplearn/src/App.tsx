import React from 'react'
import Button from './lessons/Button'
import Input from './lessons/Input'
import Button2 from './lessons/Button2'
import Checkbox from './lessons/Checkbox'
import UseState1 from './lessons/UseState1'
import User from './lessons/User'
import Sells from './exercices/Sells/Sells'
import RefLesson from './lessons/RefLesson/RefLesson'
import VideoExe from './exercices/VideoHtml/VideoExe'
import VideoH from './lessons/CustomHook/VideoH'

const App = () => {
  const [total, setTotal] = React.useState(0)
  const [count, setCount] =  React.useState(0)
  const [increase,setIncrease] = React.useState(0)

  //Exercice1
  const [date,setDate] = React.useState('')
  
  function Add():void{
    setTotal((total) => total +=1)
  }


  
  return (
    <div>
      {/*
         <h1>Aula 1</h1>
      <p>Total: {total}</p>
      <Button onClick={Add} width='5rem' font='1.5rem'>
        Add
      </Button>

<h1>Exercicio 1</h1>
         <h2>Data da viagem: {date}</h2>
        <Input label='Nome' id='name'/>
        <Input label='Data da Viagem' id='viagem' value={date} onChange={(event) => setDate(event.currentTarget.value)} type='date'/>

        <h1>Exercicio 3</h1>
        <p>{count}</p>
        <Button2 count={count} setCount={setCount}>Add</Button2>

        
      <Checkbox label='Age'/>
         

      <h2>UseState TSX {increase}</h2>
      <UseState1 increase={setIncrease}>Click</UseState1>

      <User />

      <Sells />

       <RefLesson />
         <VideoExe />
      */}

       <VideoH />

     
   
    </div>
  )
}

export default App