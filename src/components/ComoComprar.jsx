import './ComoComprar.css'

function ComoComprar() {
  return (
    <section id="como-comprar" className="como-comprar">
      <h2>¿Cómo comprar?</h2>
      <div className="pasos-container">
        <div className="paso">
          <span>1️⃣</span>
          <h3>Elige tus productos</h3>
          <p>Revisa el catálogo o destacados y selecciona lo que necesitas.</p>
        </div>
        <div className="paso">
          <span>2️⃣</span>
          <h3>Haz tu pedido por WhatsApp</h3>
          <p>Escríbenos directamente con los productos seleccionados.</p>
        </div>
        <div className="paso">
          <span>3️⃣</span>
          <h3>Retira en local</h3>
          <p>Nos encontramos en Quilpué. Solo retiro en tienda física.</p>
        </div>
        <div className="paso">
          <span>4️⃣</span>
          <h3>Paga en el momento</h3>
          <p>Aceptamos efectivo o transferencia al momento del retiro.</p>
        </div>
      </div>
    </section>
  )
}

export default ComoComprar
