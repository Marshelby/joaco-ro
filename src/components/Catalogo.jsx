// Catalogo.jsx
import React from "react";
import "./Catalogo.css";
import { FaCartPlus } from "react-icons/fa";
import producto1 from "../assets/detergente_matic_3l.png";

const productos = [
  {
    id: 1,
    nombre: "Detergente Matic 3L",
    precioUnidad: 3500,
    precioMayor: 3200,
    imagen: producto1,
  },
  {
    id: 2,
    nombre: "Cloro Gel 1L",
    precioUnidad: 1200,
    precioMayor: 1000,
    imagen: null,
  },
  {
    id: 3,
    nombre: "Aromatizante Lavanda",
    precioUnidad: 1000,
    precioMayor: 900,
    imagen: null,
  },
];

const Catalogo = () => {
  return (
    <div className="catalog-container">
      <h2 className="catalog-title">Catálogo de Productos</h2>
      <p className="catalog-subtitle">
        🛒 Elige tus productos por unidad o por mayor (desde 4 unidades)
      </p>
      <div className="product-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="card">
            {producto.imagen ? (
              <img src={producto.imagen} alt={producto.nombre} />
            ) : (
              <div style={{ width: "100%", height: "120px", background: "#ddd", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                <span>Imagen</span>
              </div>
            )}
            <h3>{producto.nombre}</h3>
            <p>Por unidad: <strong>${producto.precioUnidad.toLocaleString()}</strong></p>
            <p>Por mayor (4+): <strong>${producto.precioMayor.toLocaleString()}</strong></p>
            <button disabled>
              <FaCartPlus />
              Agregar al pedido
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
