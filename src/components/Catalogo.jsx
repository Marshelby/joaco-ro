import React from "react";
import "./Catalogo.css";
import detergenteImage from "../assets/productos/detergente-matic-3l.png";

const productos = [
  {
    nombre: "Detergente Matic 3L",
    precioUnidad: "$3.500",
    precioMayor: "$3.200",
    imagen: detergenteImage,
    fondo: "#e8f5e9", // verde suave fijo
  },
  {
    nombre: "Cloro Gel 1L",
    precioUnidad: "$1.200",
    precioMayor: "$1.000",
    imagen: null,
    fondo: "#f5f5f5",
  },
  {
    nombre: "Aromatizante Lavanda",
    precioUnidad: "$1.000",
    precioMayor: "$900",
    imagen: null,
    fondo: "#f5f5f5",
  },
];

function Catalogo() {
  return (
    <div className="catalogo-container">
      <h2 className="catalogo-titulo">Catálogo de Productos</h2>
      <p className="catalogo-subtitulo">
        🛒 Elige tus productos por unidad o por mayor (desde 4 unidades)
      </p>
      <div className="productos-grid">
        {productos.map((producto, index) => (
          <div
            key={index}
            className="tarjeta-producto"
            style={{ backgroundColor: producto.fondo }}
          >
            {producto.imagen ? (
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="producto-imagen"
              />
            ) : (
              <div className="imagen-placeholder">Imagen</div>
            )}
            <h3>{producto.nombre}</h3>
            <p>Por unidad: <strong>{producto.precioUnidad}</strong></p>
            <p>Por mayor (4+): <strong>{producto.precioMayor}</strong></p>
            <button className="boton-agregar">🧺 Agregar al pedido</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;
