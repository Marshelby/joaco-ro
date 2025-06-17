import './Contacto.css'

function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <h2>Contacto</h2>
      <div className="contacto-info">
        <div className="contacto-item">
          <h3>📍 Dirección</h3>
          <p>Local en Quilpué (retiro en tienda)</p>
        </div>
        <div className="contacto-item">
          <h3>📞 WhatsApp</h3>
          <a
            href="https://wa.me/56967215364"
            target="_blank"
            rel="noreferrer"
          >
            +56 9 6721 5364
          </a>
        </div>
        <div className="contacto-item">
          <h3>🕓 Horario</h3>
          <p>Lunes a lunes desde las 10:00 hrs</p>
        </div>
        <div className="contacto-item">
          <h3>📱 Redes sociales</h3>
          <p>
            Instagram: <a href="https://instagram.com" target="_blank" rel="noreferrer">@joacoro</a><br />
            Facebook: <a href="https://facebook.com" target="_blank" rel="noreferrer">Joaco Ro</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contacto
