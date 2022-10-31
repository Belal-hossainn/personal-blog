import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='signIn'>
      <h1>Sign In</h1>
      <form action="">
        <input required type="text" id="" placeholder='name' />
        <input required type="email" id="" placeholder='email' />
        <input required type="password" id="" placeholder='password' />
        <button>Sign Up</button>
        <span>already have an account? <Link to="/signin">Sign In</Link></span>
      </form>


    </div>
  )
}

export default SignUp