import {useParams, NavLink, Routes, Route} from 'react-router-dom'
import Eights from './pages/Eights'
import Nines from './pages/Nines'
import TwoEight from './pages/twoEight'
import TwoThree from './pages/twoThree'
import {Helmet} from 'react-helmet'



const Singles = () => {
      
    
      
    const params = useParams()
    const locations = ['/singles/classic/eights', '/singles/classic/nines', '/singles/modernrock/twoeight', '/singles/modernrock/twothree']
    const description = {
      classic:"Classic rock has left a lasting legacy in the history of music, influencing a variety of genres and continuing to be appreciated by multiple generations.",
      modern:"Modern rock is a musical genre that has evolved from the roots of classic rock, incorporating a variety of influences and styles. Characterized by sonic diversity, modern rock encompasses subgenres such as alternative rock, indie rock, pop rock, and others.",
    }


  return (
    <>
    <div className="singles">
      <Helmet>
        <title>Singles {params.id} </title>
      </Helmet>
    <h1 style={{textTransform:'capitalize'}}>{params.id}</h1>

    <p style={{fontSize:'1.5rem'}}>{params.id == 'classic' ? description.classic : description.modern}</p>
    <div>
   {params.id == 'classic' ? 
   <div className='linkSingle'>  <NavLink to="eights" className={location.pathname === locations[0] ? 'activeSingle' : 'no-active'}>80s</NavLink>
     <NavLink to="nines"  className={location.pathname === locations[1] ? 'activeSingle' : 'no-active'}>90s</NavLink></div>
      : <div className='linkSingle'>  <NavLink to="twoeight" className={location.pathname === locations[2] ? 'activeSingle' : 'no-active'}>Until 2008</NavLink>
     <NavLink to="twothree" className={location.pathname === locations[3] ? 'activeSingle' : 'no-active'}>2023</NavLink></div>}
    </div>
    
     
     <Routes>
     <Route path='eights' element={<Eights />}/>
    <Route path='nines' element={<Nines />}/>
    <Route path='twoeight' element={<TwoEight />}/>
    <Route path='twothree' element={<TwoThree />}/>
     </Routes>

    </div>
    
    
    </>
  )
}

export default Singles