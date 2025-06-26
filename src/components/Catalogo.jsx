import React from "react";
import "./Catalogo.css";

// Imágenes confirmadas
import tituloCatalogo from "../assets/titulos/catalogo_1200x200.png";
import detergenteImg from "../assets/productos/detergente_matic_sin_fondo.png";
import cloroGelImg from "../assets/productos/clorogel.png";
import cloroLavandaImg from "../assets/productos/cloro.png";
import lavalozasImg from "../assets/productos/lavalozas.png";
import suavizanteImg from "../assets/productos/suavefinal.png";
import desengrasanteImg from "../assets/productos/desengrasante.png";
import limpiaVidriosImg from "../assets/productos/limpia.png";
import escobaImg from "../assets/productos/escoba.png";
import detergente5LImg from "../assets/productos/matic.png";

const productos = [
  {
    nombre: "Detergente Matic 3L",
    precioUnidad: "$3.000",
    precioMayor: "$2.500",
    imagen: detergenteImg,
  },
  {
    nombre: "Cloro Gel 1L",
    precioUnidad: "$1.200",
    precioMayor: "$1.000",
    imagen: cloroGelImg,
  },
  {
    nombre: "Cloro Gel Lavanda 1L",
    precioUnidad: "$1.200",
    precioMayor: "$1.000",
    imagen: cloroLavandaImg,
  },
  {
    nombre: "Lavalozas Amarillo 1L",
    precioUnidad: "$2.800",
    precioMayor: "$2.000",
    imagen: lavalozasImg,
  },
  {
    nombre: "Suavizante Suave 1L",
    precioUnidad: "$2.000",
    precioMayor: "$2.000",
    imagen: suavizanteImg,
  },
  {
    nombre: "Desengrasante Cocina",
    precioUnidad: "$1.200",
    precioMayor: "$1.000",
    imagen: desengrasanteImg,
  },
  {
    nombre: "Limpia Vidrios 500ml",
    precioUnidad: "$1.200",
    precioMayor: "$1.000",
    imagen: limpiaVidriosImg,
  },
  {
    nombre: "Escoba de madera",
    precioUnidad: "$2.500",
    precioMayor: "$2.200",
    imagen: escobaImg,
  },
  {
    nombre: "Detergente Matic 5L",
    precioUnidad: "$11.000",
    precioMayor: "$11.000",
    imagen: detergente5LImg,
  },
  {
    nombre: "Shampoo Frozen",
    precioUnidad: "$2.000",
    precioMayor: "$1.800",
    imagen: null,
  },
  {
    nombre: "Saco Sarro",
    precioUnidad: "$2.000",
    precioMayor: "$1.700",
    imagen: null,
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
        🌟 Explora nuestro catálogo: compra por unidad o aprovecha precios especiales por mayor (desde 4 unidades).
      </p>
      <div className="productos-grid">
        {productos.map((producto, index) => (
          <div className="producto-card" key={index}>
            {producto.imagen && (
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className={`producto-imagen ${producto.nombre.includes("Suavizante") ? "suavizante-ajustada" : ""}`}
              />
            )}
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
