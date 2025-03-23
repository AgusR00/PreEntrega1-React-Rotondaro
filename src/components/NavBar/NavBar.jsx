import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='navbar'>



            <div className='menu-container'>
                <Link to='/' className='logo'><h1>Electro-Mania</h1></Link>
                <ul className='menu'>
                    <li><Link to="/" className='menu-link'>Inicio</Link></li>
                    <li><Link to="/productos/Celulares" className='menu-link'>Celulares</Link></li>
                    <li><Link to="/productos/Auriculares" className='menu-link'>Auriculares</Link></li>
                    <li><Link to="/productos/Monitores" className='menu-link'>Monitores</Link></li>
                    <li><Link to="/productos/Cargadores" className='menu-link'>Cargadores</Link></li>
                    <li><Link to="/contacto" className='menu-link'>Contacto</Link></li>
                </ul>
            </div>



        </nav>
    )
}

export default NavBar