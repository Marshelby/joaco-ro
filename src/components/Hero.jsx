import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-texto">
        <small className="hero-subtitulo">✨ Limpieza profesional en Quilpué</small>
        <h1>Tu limpieza, al mejor precio 🧼</h1>
        <p>Productos confiables y listos para tu hogar o negocio.</p>
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
          src="https://cdn.pixabay.com/photo/2017/05/01/09/56/cleaning-2276395_1280.jpg"
          alt="Productos de limpieza Joaco Ro"
        />
      </div>
    </section>
  )
}

export default Hero
