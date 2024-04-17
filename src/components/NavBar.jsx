import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
       <Link to="/" className="logo"><h1>Panello</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/Contacto">Contacto</Link></li>
            <li><Link className="menu-link" to="/Descarga">Descarga</Link></li>
            <li><Link className="menu-link" to="/Nosotros">Nosotros</Link></li>
            <li><Link className="menu-link" to="/Login">Login</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar