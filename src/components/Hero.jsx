import './Hero.css'
import productosHero from '../assets/productos.png'
import logoJoacoRo from '../assets/joacoro-logo.png'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-texto">
        <span className="hero-badge">⭐ Más de 100 clientes felices</span>
        <small className="hero-subtitulo">📦 Stock disponible para retiro inmediato</small>
        <h1 className="fadeIn">Tu limpieza, al mejor precio 🧼</h1>
        <p>Productos confiables y listos para tu hogar o negocio.</p>
        <p className="hero-frase">🧴 Productos al por mayor y retiro en local</p>
        <a
          href="https://wa.me/56967215364?text=Hola%20Joaco%20Ro!%20Quiero%20hacer%20un%20pedido%20de%20productos%20de%20limpieza."
          target="_blank"
          rel="noreferrer"
        >
          <button className="hero-button">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="icono-wsp"
            />
            Pedir por WhatsApp
          </button>
        </a>
        <p className="hero-info-extra">📍 Estamos en Quilpué – atención personalizada</p>
      </div>
      <div className="hero-imagen">
        <img
          src={logoJoacoRo}
          alt="Joaco Ro Logo"
          className="hero-logo"
        />
        <img
          src={productosHero}
          alt="Productos Joaco Ro"
        />
      </div>
    </section>
  )
}

export default Hero
