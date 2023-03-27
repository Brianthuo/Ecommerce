import React from 'react'
import './LoginPage.scss'
// import advert from '../../Assets/juice.mp4'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookF} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='Login'>
    <div className="form">
        <h2>Login</h2>
        <form action="">
            <input type="text" placeholder='Email or Phonenumber' />
            <input type="password" placeholder='password' />
            <Link to='/HomePage' className='login-button'>Login with E-mail</Link>
        </form>
        <hr />
        <div className="buttons">
            <button className='facebook' > <FaFacebookF className='icon'/>  Continue with facebook</button>
            <button className='google' > <FcGoogle className='icon'/> Continue with Google</button>
        </div>
        <div className="links">
          <Link to='/Create Account' className='other-links'>Create account</Link>
            <p>Forgot Password</p>
        </div>

    </div>

    </div>
  )
}

export default LoginPage