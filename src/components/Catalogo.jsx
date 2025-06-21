// src/components/Catalogo.jsx
import React from "react";
import "../assets/Catalogo.css";
import { FaCartPlus } from "react-icons/fa";

import detergenteImg from "../assets/productos/detergente-matic-3l.png"; // ✅ Ruta corregida

const productos = [
  {
    nombre: "Detergente Matic 3L",
    precioUnidad: "$3.500",
    precioMayor: "$3.200",
    imagen: detergenteImg,
    fondo: "#eafbe5", // verde claro personalizado
  },
  {
    nombre: "Cloro Gel 1L",
    precioUnidad: "$1.200",
    precioMayor: "$1.000",
    imagen: null,
    fondo: "#f1f1f1",
  },
  {
    nombre: "Aromatizante Lavanda",
    precioUnidad: "$1.000",
    precioMayor: "$900",
    imagen: null,
    fondo: "#f1f1f1",
  },
];

const Catalogo = () => {
  return (
    <section className="catalogo">
      <h2 className="catalogo-titulo">Catálogo de Productos</h2>
      <p className="catalogo-subtitulo">
        <FaCartPlus className="icono-carro" /> Elige tus productos por unidad o
        por mayor (desde 4 unidades)
      </p>
      <div className="catalogo-grid">
        {productos.map((producto, index) => (
          <div
            className="producto-card"
            key={index}
            style={{ backgroundColor: producto.fondo }}
          >
            <div className="producto-imagen">
              {producto.imagen ? (
                <img src={producto.imagen} alt={producto.nombre} />
              ) : (
                <div className="imagen-placeholder">Imagen</div>
              )}
            </div>
            <h3 className="producto-nombre">{producto.nombre}</h3>
            <p className="producto-precio">
              Por unidad: <strong>{producto.precioUnidad}</strong>
            </p>
            <p className="producto-precio">
              Por mayor (4+): <strong>{producto.precioMayor}</strong>
            </p>
            <button className="btn-agregar" disabled>
              <FaCartPlus /> Agregar al pedido
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalogo;
