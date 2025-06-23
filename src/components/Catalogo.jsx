import React from "react";
import "./Catalogo.css";
import detergenteImage from "../assets/productos/detergente_matic_sin_fondo.png";
import tituloCatalogo from "../assets/titulos/catalogo_1200x200.png";

const productos = [
  {
    nombre: "Detergente Matic 3L",
    precioUnidad: "$3.500",
    precioMayor: "$3.200",
    imagen: detergenteImage,
    fondo: "#edf4ff"
  },
  {
    nombre: "Cloro Gel 1L",
    precioUnidad: "$1.200",
    precioMayor: "$1.000",
    imagen: null,
    fondo: "#edf4ff"
  },
  {
    nombre: "Aromatizante Lavanda",
    precioUnidad: "$1.000",
    precioMayor: "$900",
    imagen: null,
    fondo: "#edf4ff"
  },
];

function Catalogo() {
  return (
    <div className="catalogo-container">
      <img src={tituloCatalogo} alt="Catálogo de productos" className="titulo-imagen" />
      <p className="catalogo-subtitulo">
        🛒 Elige tus productos por unidad o por mayor (desde 4 unidades)
      </p>

      <div className="tarjetas-producto">
        {productos.map((producto, index) => (
          <div
            key={index}
            className="tarjeta"
            style={{ backgroundColor: producto.fondo }}
          >
            {producto.imagen ? (
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="imagen-producto"
              />
            ) : (
              <div className="imagen-placeholder">Imagen</div>
            )}
            <h3 className="nombre-producto">{producto.nombre}</h3>
            <p className="precio">Por unidad: <span className="precio-unidad">{producto.precioUnidad}</span></p>
            <p className="precio">Por mayor (4+): <span className="precio-mayor">{producto.precioMayor}</span></p>
            <button className="boton-agregar">🧺 Agregar al pedido</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;
