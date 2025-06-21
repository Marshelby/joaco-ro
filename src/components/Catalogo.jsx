import './Catalogo.css'
import { useEffect, useState } from 'react'
import ColorThief from 'color-thief-browser'
import imgDetergente from '../assets/productos/detergente-matic-3l.png'

const productosIniciales = [
  {
    id: 1,
    nombre: 'Detergente Matic 3L',
    precioUnidad: '$3.500',
    precioMayor: '$3.200',
    imagen: imgDetergente
  },
  {
    id: 2,
    nombre: 'Cloro Gel 1L',
    precioUnidad: '$1.200',
    precioMayor: '$1.000',
    imagen: ''
  },
  {
    id: 3,
    nombre: 'Aromatizante Lavanda',
    precioUnidad: '$1.000',
    precioMayor: '$900',
    imagen: ''
  }
]

function ProductoCard({ producto }) {
  const [colorFondo, setColorFondo] = useState('#ffffff')
  const [colorTexto, setColorTexto] = useState('#000000')

  useEffect(() => {
    if (producto.imagen) {
      const img = new Image()
      img.crossOrigin = 'Anonymous'
      img.src = producto.imagen
      img.onload = () => {
        const color = ColorThief.getColor(img)
        const [r, g, b] = color
        const backgroundColor = `rgb(${r}, ${g}, ${b})`
        setColorFondo(backgroundColor)

        // Luminosidad (YIQ) para elegir color de texto
        const yiq = (r * 299 + g * 587 + b * 114) / 1000
        const textColor = yiq >= 150 ? '#000000' : '#ffffff'
        setColorTexto(textColor)
      }
    }
  }, [producto.imagen])

  return (
    <div
      className="producto-card"
      style={{ backgroundColor: colorFondo, color: colorTexto }}
    >
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
        <button style={{ backgroundColor: colorTexto === '#ffffff' ? '#ffffff22' : '#222', color: colorTexto }}>
          🛍️ Agregar al pedido
        </button>
      </a>
    </div>
  )
}

function Catalogo() {
  return (
    <section id="catalogo" className="catalogo">
      <h2>Catálogo de Productos</h2>
      <p className="catalogo-subtitulo">
        🛒 Elige tus productos por unidad o por mayor (desde 4 unidades)
      </p>
      <div className="catalogo-grid">
        {productosIniciales.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  )
}

export default Catalogo
