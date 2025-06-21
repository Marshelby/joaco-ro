import './Catalogo.css'
import imgDetergente from '../assets/productos/detergente-matic-3l.png'

const productos = [
  {
    id: 1,
    nombre: 'Detergente Matic 3L',
    precioUnidad: '$3.500',
    precioMayor: '$3.200',
    imagen: imgDetergente,
  },
  {
    id: 2,
    nombre: 'Cloro Gel 1L',
    precioUnidad: '$1.200',
    precioMayor: '$1.000',
    imagen: '',
  },
  {
    id: 3,
    nombre: 'Aromatizante Lavanda',
    precioUnidad: '$1.000',
    precioMayor: '$900',
    imagen: '',
  },
  // continúa con los otros productos
]

function Catalogo() {
  return (
    <section id="catalogo" className="catalogo">
      <h2>Catálogo de Productos</h2>
      <p className="catalogo-subtitulo">🛒 Elige tus productos por unidad o por mayor (desde 4 unidades)</p>
      <div className="catalogo-grid">
        {productos.map((producto) => (
          <div className="producto-card" key={producto.id}>
            {producto.imagen ? (
              <img
                src={producto.imagen}
                alt={producto.nombre}
                style={{
                  width: '100%',
                  maxWidth: '260px',
                  height: 'auto',
                  maxHeight: '180px',
                  objectFit: 'contain',
                  margin: '0 auto 1rem',
                  display: 'block',
                  padding: '6px'
                }}
              />
            ) : (
              <div className="img-placeholder"><span>Imagen</span></div>
            )}
            <h3>{producto.nombre}</h3>
            <p className="precio-unidad">Por unidad: <strong>{producto.precioUnidad}</strong></p>
            <p className="precio-mayor">Por mayor (4+): <strong>{producto.precioMayor}</strong></p>
            <a
              href={`https://wa.me/56967215364?text=Hola, quiero comprar el producto: ${producto.nombre}`}
              target="_blank"
              rel="noreferrer"
            >
              <button>
                🛍️ Agregar al pedido
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Catalogo
