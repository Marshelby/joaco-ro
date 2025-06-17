import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Joaco Ro</h2>
      </div>
      <ul className="navbar-links">
        <li><a href="#hero">Inicio</a></li>
        <li><a href="#catalogo">Catálogo</a></li>
        <li><a href="#destacados">Destacados</a></li>
        <li><a href="#como-comprar">¿Cómo comprar?</a></li>
        <li><a href="#testimonios">Testimonios</a></li>
        <li><a href="#consejos">Consejos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
