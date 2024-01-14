import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Nav from './Nav'
import './App.css'
import Singles from './Singles'



const App = () => {
  return (
<BrowserRouter>
    <Nav />
    
  <Routes >
   
    <Route path='/' element={<Home />}/>
    <Route path='about' element={<About />}/>
    <Route path='singles/:id/*' element={<Singles />}/>
    



  </Routes>

</BrowserRouter>
  )
}

export default App