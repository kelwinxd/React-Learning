import React, { useEffect } from 'react'
import {StorageContext} from './GlobalContext'
import Products from './Products'

const App = () => {
  

  return (
    <StorageContext>
      <Products />
    </StorageContext>
  )
}

export default App