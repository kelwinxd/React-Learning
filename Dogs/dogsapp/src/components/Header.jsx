import React from 'react';
import {Link} from 'react-router-dom'
import styles from './Header.module.css'
import logoHome from '../assets/logoHome.svg'
import user from '../assets/user.svg'


const Header = () => {
  return (
    <div className={styles.header} >
      <nav className={styles.nav}>
      <Link to="/"><img src={logoHome} alt="Logo" style={{width:"3rem"}}/></Link>
      <Link to="/login" style={{marginRight:".8rem"}} className={styles.user}>Login <img src={user} alt="" srcset="" style={{width:"2rem"}}/></Link>
      </nav>
    
    </div>
    
  );
}

export default Header;
