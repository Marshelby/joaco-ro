import './Navbar.css'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Joaco <span>Ro</span></h2>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#hero" onClick={toggleMenu}>Inicio</a></li>
        <li><a href="#catalogo" onClick={toggleMenu}>Catálogo</a></li>
        <li><a href="#destacados" onClick={toggleMenu}>Destacados</a></li>
        <li><a href="#como-comprar" onClick={toggleMenu}>¿Cómo comprar?</a></li>
        <li><a href="#testimonios" onClick={toggleMenu}>Testimonios</a></li>
        <li><a href="#consejos" onClick={toggleMenu}>Consejos</a></li>
        <li><a href="#contacto" onClick={toggleMenu}>Contacto</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
