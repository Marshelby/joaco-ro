import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-texto">
        <span className="hero-badge">⭐ Más de 100 clientes felices</span>
        <small className="hero-subtitulo">🚚 Envíos rápidos en Quilpué</small>
        <h1 className="fadeIn">Tu limpieza, al mejor precio 🧼</h1>
        <p>Productos confiables y listos para tu hogar o negocio.</p>
        <p className="hero-frase">🧴 Calidad garantizada – Retiro en local y entregas el mismo día</p>
        <a
          href="https://wa.me/56967215364?text=Hola%20Joaco%20Ro!%20Quiero%20hacer%20un%20pedido%20de%20productos%20de%20limpieza."
          target="_blank"
          rel="noreferrer"
        >
          <button className="hero-button">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="icono-wsp" />
            Pedir por WhatsApp
          </button>
        </a>
      </div>
      <div className="hero-imagen">
        <img
          src="https://cdn.pixabay.com/photo/2017/01/04/14/37/cleaning-1958800_1280.jpg"
          alt="Productos de limpieza Joaco Ro"
        />
      </div>
    </section>
  )
}

export default Hero
