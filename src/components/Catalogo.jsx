import './Catalogo.css'

const productos = [
  {
    id: 1,
    nombre: 'Detergente Matic 3L',
    precio: '$3.500',
    imagen: '', // sin imagen por ahora
  },
  {
    id: 2,
    nombre: 'Cloro Gel 1L',
    precio: '$1.200',
    imagen: '',
  },
  {
    id: 3,
    nombre: 'Aromatizante Lavanda',
    precio: '$1.000',
    imagen: '',
  },
  // Puedes agregar más productos después
]

function Catalogo() {
  return (
    <section id="catalogo" className="catalogo">
      <h2>Catálogo de Productos</h2>
      <div className="catalogo-grid">
        {productos.map((producto) => (
          <div className="producto-card" key={producto.id}>
            <img
              src={producto.imagen || '/assets/default.jpg'}
              alt={producto.nombre}
              onError={(e) => {
                e.target.onerror = null
                e.target.src = '/assets/default.jpg'
              }}
            />
            <h3>{producto.nombre}</h3>
            <p className="precio">{producto.precio}</p>
            <a
              href={`https://wa.me/56967215364?text=Hola, quiero comprar el producto: ${producto.nombre}`}
              target="_blank"
              rel="noreferrer"
            >
              <button>Comprar</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Catalogo
