import React from 'react';
import '../styles/Catalogo.css';
import titulo from '../assets/catalogofinal.png';
import detergenteMatic from '../assets/productos/detergente_matic_sin_fondo.png';

const productos = [
  {
    nombre: 'Detergente Matic 3L',
    imagen: detergenteMatic,
    alt: 'Detergente Matic 3L',
    precioUnidad: '$3.500',
    precioMayor: '$3.200',
    claseExtra: 'imagen-detergente',
  },
  {
    nombre: 'Cloro Gel 1L',
    imagen: '', // Coloca ruta válida si la tienes
    alt: 'Cloro Gel 1L',
    precioUnidad: '$1.200',
    precioMayor: '$1.000',
  },
  {
    nombre: 'Aromatizante Lavanda',
    imagen: '', // Coloca ruta válida si la tienes
    alt: 'Aromatizante Lavanda',
    precioUnidad: '$1.000',
    precioMayor: '$900',
  },
];

function Catalogo() {
  return (
    <div className="catalogo-container">
      <img src={titulo} alt="Catálogo de productos" className="titulo-seccion" />
      <p className="subtitulo">
        🛒 Elige tus productos por unidad o por mayor (desde 4 unidades)
      </p>
      <div className="catalogo-productos">
        {productos.map((producto, index) => (
          <div className="tarjeta-producto" key={index}>
            <img
              src={producto.imagen}
              alt={producto.alt}
              className={`imagen-producto ${producto.claseExtra || ''}`}
            />
            <h3 className="nombre-producto">{producto.nombre}</h3>
            <p className="precio">Por unidad: {producto.precioUnidad}</p>
            <p className="precio">Por mayor (4+): {producto.precioMayor}</p>
            <button className="boton-agregar">🛍 Agregar al pedido</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;
