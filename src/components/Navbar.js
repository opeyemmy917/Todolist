import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <nav className='nav-bar'>
    <Link to={"/"} className='navbar-brand'>Logo</Link>
    <ul className='nav'>
        <li className='nav-item'>
            <Link to="todo" className='nav-link' >Todo</Link>

        </li>
        <li className='nav-item'>
            <a href='About' className='nav-link' >About</a>

        </li>
        <li className='nav-item'>
        <a href='about' className='nav-link' >Todo</a>


        </li>
        <li className='nav-item'>
        <a href='about' className='nav-link' >Todo</a>
        </li>
    </ul>

  </nav>
  )
}

export default Navbar