import {Link, useLocation} from 'react-router-dom'
import './App.css'
const Nav = () => {

   const location = useLocation()
  return (
    <div className='links'>
<Link  to="/"  className={location.pathname === '/' ? 'active-link' : 'no-active'}>Home</Link>
<Link to="about" className={location.pathname === '/about' ? 'active-link' : 'no-active'}>About</Link>



    </div>
  )
}

export default Nav