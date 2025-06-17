import './Testimonios.css'

const testimonios = [
  {
    id: 1,
    nombre: 'Carla R.',
    mensaje: 'Siempre compro en Joaco Ro. Los productos son buenos y el trato excelente. ¡Recomendado!',
    imagen: '/assets/default.jpg',
  },
  {
    id: 2,
    nombre: 'Eduardo M.',
    mensaje: 'Precios súper convenientes y buena atención. Retiro rápido en el local.',
    imagen: '/assets/default.jpg',
  },
  {
    id: 3,
    nombre: 'Javiera T.',
    mensaje: 'Me encantaron los packs promocionales. Compré para todo el mes y salió muy económico.',
    imagen: '/assets/default.jpg',
  },
]

function Testimonios() {
  return (
    <section id="testimonios" className="testimonios">
      <h2>Lo que dicen nuestros clientes</h2>
      <div className="testimonios-grid">
        {testimonios.map((item) => (
          <div className="testimonio-card" key={item.id}>
            <img
              src={item.imagen}
              alt={`Foto de ${item.nombre}`}
              onError={(e) => {
                e.target.onerror = null
                e.target.src = '/assets/default.jpg'
              }}
            />
            <p className="mensaje">“{item.mensaje}”</p>
            <h4>{item.nombre}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonios
