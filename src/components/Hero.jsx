import './Hero.css';
import productosHero from '../assets/productos.png';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        {/* Columna izquierda: texto + CTA */}
        <div className="hero-content">
          <div className="hero-badges">
            <span className="badge badge-gold">⭐ Más de 100 clientes felices</span>
            <span className="badge badge-green">📦 Retiro inmediato</span>
            <span className="badge badge-blue">📍 Quilpué</span>
          </div>

          <h1 className="hero-title">Tu limpieza, al mejor precio</h1>
          <p className="hero-subtitle">
            Productos confiables para tu hogar o negocio. Precios al por mayor y retiro en local.
          </p>

          <a
            className="hero-cta"
            href="https://wa.me/56967215364?text=Hola%20Joaco%20Ro!%20Quiero%20hacer%20un%20pedido%20de%20productos%20de%20limpieza."
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="cta-icon"
            />
            Pedir ahora por WhatsApp
          </a>

          <p className="hero-help">Respuesta rápida • Atención personalizada</p>
        </div>

        {/* Columna derecha: visual productos (mockup premium) */}
        <div className="hero-visual">
          <div className="hero-scene" aria-hidden="true">
            <div className="hero-light"></div>

            <div className="hero-shelf">
              <div className="hero-shelf-glow"></div>
              <div className="hero-shelf-edge"></div>
            </div>

            <img
              src={productosHero}
              alt="Productos Joaco Ro"
              className="hero-products"
              loading="eager"
            />

            <div className="hero-reflection"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
