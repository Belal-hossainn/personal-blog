import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='signIn'>
      <h1>Sign In</h1>
      <form action="">
        <input type="text" id="" placeholder='user name' />
        <input type="password" id="" placeholder='password' />
        <button>Sign In</button>
        <span>Don't have an account? <Link to="/signup">Sign Up</Link></span>
      </form>


    </div>
  )
}

export default SignIn