import React from 'react'
import './header.scss'
import logo from '../../static/logo.png'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
      <header>
        <Link to="/">
          <img src={logo} alt="Centauri" />
        </Link>
        <div className="acts">
          <Link to="/signup">Sign up</Link>
          <Link to="/signin">Sign in</Link>
        </div>
      </header>
  )
}

export default Header