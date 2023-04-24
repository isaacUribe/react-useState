import React from 'react'
import { Link } from 'react-router-dom'
import home from "./../../../public/home2.png"

const Header = () => {
  return (
    <header className='menu'>
        <img src={home} alt="logo" />
        <nav className='nav'>
            <Link to={'/'} className='link'>Home</Link>
            <Link to={'/usuarios'} className='link'>Usuarios</Link>
        </nav>
    </header>
  )
}

export default Header