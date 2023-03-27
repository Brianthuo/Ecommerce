import React from 'react'
import './Navbar.scss'
import {RiShoppingCartLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-list">
        <ul>
            
           <li><Link to='/HomePage' className='link'>OurProducts</Link></li>
            <li>My Account</li>
        </ul>
        <ul>
            <li><RiShoppingCartLine/></li>
        </ul>
        </div>
    </div>
  )
}

export default navbar