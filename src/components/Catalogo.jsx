import React from "react";
import "./Catalogo.css";
import detergenteImage from "../assets/productos/detergente-matic-3l.png";
import tituloCatalogo from "../assets/titulos/catalogo-productos.png"; // nueva línea

const productos = [
  {
    nombre: "Detergente Matic 3L",
    precioUnidad: "$3.500",
    precioMayor: "$3.200",
    imagen: detergenteImage,
    fondo: "#e6f9ec"
  },
  {
    nombre: "Cloro Gel 1L",
    precioUnidad: "$1.200",
    precioMayor: "$1.000",
    imagen: null,
    fondo: "#ffffff"
  },
  {
    nombre: "Aromatizante Lavanda",
    precioUnidad: "$1.000",
    precioMayor: "$900",
    imagen: null,
    fondo: "#ffffff"
  },
];

function Catalogo() {
  return (
    <div className="catalogo-container">
      {/* Reemplazamos el título por imagen */}
      <img src={tituloCatalogo} alt="Catálogo de productos" className="titulo-imagen" />
      
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
            <h3 className="producto-nombre">{producto.nombre}</h3>
            <p className="producto-precio">Por unidad: <strong>{producto.precioUnidad}</strong></p>
            <p className="producto-precio">Por mayor (4+): <strong>{producto.precioMayor}</strong></p>
            <button className="boton-agregar">🧺 Agregar al pedido</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;
