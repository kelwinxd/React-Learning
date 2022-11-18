import React from 'react'
import Home from './Home';
import Header from './Header';
import Produto from './Produto';


const App = () => {
 const {pathname} = window.location
  let Page;

  if(pathname === '/produto'){
    Page = Produto
  } else {
    Page = Home
  }
 
 
 
    return (
   <>
   <section>
    <Header />
    <Page />
    
   </section>
   
   </>
  )
}

export default App
