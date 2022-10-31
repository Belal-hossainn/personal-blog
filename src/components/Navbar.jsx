import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/img/logos.jpg';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="links">
        <Link className='link' to="/?cat=art">
          <h6>Art</h6>
          </Link>
          <Link className='link' to="/?cat=health">
          <h6>Health</h6>
          </Link>
          <Link className='link' to="/?cat=literature">
          <h6>Literature</h6>
          </Link>
          <Link className='link' to="/?cat=movie">
          <h6>Movie</h6>
          </Link>
          <Link className='link' to="/?cat=nature">
          <h6>Nature</h6>
          </Link>
          <span>logout</span>
          <span className='write'>
            <Link className='link' to="write">Write</Link>
          </span>
      </div>
      </div>
    </div>
  )
}

export default Navbar