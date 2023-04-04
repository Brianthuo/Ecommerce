import React from 'react'
import './Navbar.scss'
import {RiShoppingCartLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-list">
        <ul>
            
           <li><Link to='/' className='link'>OurProducts</Link></li>
           <li><Link to='/Create Account' className='link'>signUp</Link></li>
           <li><Link to='/login' className='link'>Login</Link></li>
    
           
        </ul>
        <ul>
            <li><RiShoppingCartLine/></li>
        </ul>
        </div>
    </div>
  )
}

export default navbar