import React from "react";
import "./Catalogo.css";

// Solo imágenes confirmadas
import tituloCatalogo from "../assets/titulos/catalogo_1200x200.png";
import detergenteImg from "../assets/productos/detergente_matic_sin_fondo.png";

const productos = [
  {
    nombre: "Detergente Matic 3L",
    precioUnidad: "$3.500",
    precioMayor: "$3.200",
    imagen: detergenteImg,
  }
];

const Catalogo = () => {
  return (
    <div className="catalogo-container">
      <img
        src={tituloCatalogo}
        alt="Catálogo de productos"
        className="catalogo-titulo-img"
      />
      <p className="subtitulo">
        🛒 Elige tus productos por unidad o por mayor (desde 4 unidades)
      </p>
      <div className="productos-grid">
        {productos.map((producto, index) => (
          <div className="producto-card" key={index}>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="producto-imagen"
            />
            <h3>{producto.nombre}</h3>
            <p className="precio-rojo"><strong>Por unidad:</strong> {producto.precioUnidad}</p>
            <p className="precio-rojo"><strong>Por mayor (4+):</strong> {producto.precioMayor}</p>
            <button className="boton-agregar">🛍️ Agregar al pedido</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
