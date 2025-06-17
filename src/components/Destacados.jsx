import './Destacados.css'

const destacados = [
  {
    id: 101,
    nombre: 'Pack Lavado Familiar',
    descripcion: 'Incluye detergente, suavizante y cloro gel',
    precio: '$7.990',
    imagen: '/assets/default.jpg',
  },
  {
    id: 102,
    nombre: 'Combo Multiuso x3',
    descripcion: '3 limpiadores multiuso con aroma a elección',
    precio: '$3.500',
    imagen: '/assets/default.jpg',
  },
]

function Destacados() {
  return (
    <section id="destacados" className="destacados">
      <h2>Productos Destacados</h2>
      <div className="destacados-grid">
        {destacados.map((item) => (
          <div className="destacado-card" key={item.id}>
            <img
              src={item.imagen}
              alt={item.nombre}
              onError={(e) => {
                e.target.onerror = null
                e.target.src = '/assets/default.jpg'
              }}
            />
            <h3>{item.nombre}</h3>
            <p>{item.descripcion}</p>
            <p className="precio">{item.precio}</p>
            <a
              href={`https://wa.me/56967215364?text=Hola, me interesa el producto destacado: ${item.nombre}`}
              target="_blank"
              rel="noreferrer"
            >
              <button>Pedir ahora</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Destacados
