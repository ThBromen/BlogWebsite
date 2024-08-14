import React, { useState } from 'react'
import {Link, useSearchParams} from 'react-router-dom';
import logo from '../../images/image001.jpg';
import { FaBars } from "react-icons/fa";
import {AiOutlineClose} from 'react-icons/ai'

const Header = () => {

  const [isNavShowing, SetIsNavShowing] = useState ( window.innerWidth > 800  ? true : false)

  const closeNavHandler = () =>{
    if(window.innerWidth<800){
      SetIsNavShowing(false);
    }else{
      SetIsNavShowing(true);
    }
  }
  return (
    <nav>

     <div className='container nav__container'>
      
     <Link to="/"  className='nav__logo' onClick={closeNavHandler}>
     <img src={logo} alt="Navbar Logo" />
      </Link>
       {isNavShowing && <ul className='nav__menu'>
        <li> <Link to="/profile/rew" onClick={closeNavHandler}> QR Achiver</Link></li>
        <li> <Link to="/create" onClick={closeNavHandler}> Create Post</Link></li>
        <li> <Link to="/authors" onClick={closeNavHandler}> Authors</Link></li>
        <li> <Link to="/logout" onClick={closeNavHandler}> Logout</Link></li>
      </ul>}
      <button className='nav__toggle-btn' onClick={() => SetIsNavShowing(!isNavShowing)}>
        {isNavShowing ? <AiOutlineClose/> : <FaBars/>}
        </button>  
      </div>
    </nav>
  )
}

export default Header 