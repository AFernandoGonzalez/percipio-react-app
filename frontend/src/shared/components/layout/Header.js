import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <Link to='/' className='nav-link'>
            <span className="navbar-brand mb-0 h1">Mern Stack Percipio</span>
          </Link>
          <Link to='/' className='nav-link'>
            <span className="navbar-brand mb-0 h1">Home</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Header