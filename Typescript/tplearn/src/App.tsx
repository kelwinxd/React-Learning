import React from 'react'
import Button from './Button'

const App = () => {
  const [total, setTotal] = React.useState(0)
  
  function Add(){
    setTotal((total) => total +=1)
  }


  
  return (
    <div>
      <p>Total: {total}</p>
      <Button onClick={Add} width='4rem'>
        Add
      </Button>

    </div>
  )
}

export default App