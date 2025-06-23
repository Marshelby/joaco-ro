import './ComoComprar.css'

function ComoComprar() {
  return (
    <section id="como-comprar" className="como-comprar">
      <h2>¿Cómo comprar?</h2>
      <div className="pasos-container">
        <div className="paso">
          <div className="numero">1</div>
          <div className="contenido">
            <h3>Revisa el catálogo</h3>
            <p>Explora los productos destacados y elige lo que necesites.</p>
          </div>
        </div>
        <div className="paso">
          <div className="numero">2</div>
          <div className="contenido">
            <h3>Haz tu pedido por WhatsApp</h3>
            <p>Contáctanos directamente y confirma tu pedido fácilmente.</p>
          </div>
        </div>
        <div className="paso">
          <div className="numero">3</div>
          <div className="contenido">
            <h3>Retira en tienda</h3>
            <p>Nuestro punto de retiro está ubicado en Quilpué.</p>
          </div>
        </div>
        <div className="paso">
          <div className="numero">4</div>
          <div className="contenido">
            <h3>Paga al momento</h3>
            <p>Aceptamos efectivo o transferencia al retirar.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComoComprar
