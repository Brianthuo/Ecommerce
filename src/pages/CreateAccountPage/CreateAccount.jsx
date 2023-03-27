import React from 'react'
import './CreateAccount.scss'
import {Link} from 'react-router-dom'


const CreateAccount = () => {
  return (
    <div className='Create-account'>
    <div className="form">
        <h2>Create Account</h2>
        <form action="">
            <input type="text" placeholder='Enter your name' />
            <input type="text" placeholder='Enter your phone number' />
            <input type="text" placeholder='Enter your Email' />
            <button>Create account</button>
        </form>
        <hr />
        <div className="links">
            <Link to='/' className='other-links'>Already have an account?Login</Link>
           
        </div>

    </div>

    </div>
  )
}

export default CreateAccount