import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Bienvenido a Joaco Ro</h1>
        <p>Artículos de limpieza confiables, ¡a un precio justo!</p>
        <a href="https://wa.me/56967215364" target="_blank" rel="noreferrer">
          <button className="hero-button">Haz tu pedido por WhatsApp</button>
        </a>
      </div>
    </section>
  )
}

export default Hero
