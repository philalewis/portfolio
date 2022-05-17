import React from 'react'
import '../Styles/Navbar.css'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  
  const checkIfActive = (path) => {
    return path === location.pathname.split('/')[1] ?
      'active nav-button' : 'nav-button'
  }

  return (
    <nav>
      <button
        className={checkIfActive('about')}
        onClick={() => navigate('about')}
        >About
      </button>
      <button
        onClick={() => navigate('projects')}
        className={checkIfActive('projects')}
        >Projects
      </button>
    </nav>
  )
}

export default Navbar