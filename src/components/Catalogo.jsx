import React from "react";
import "./Catalogo.css";

// Imágenes confirmadas
import tituloCatalogo from "../assets/titulos/catalogo_1200x200.png";
import detergenteImg from "../assets/productos/detergente_matic_sin_fondo.png";
import cloroGelImg from "../assets/productos/clorogel.png";
import cloroLavandaImg from "../assets/productos/cloro.png";
import lavalozasImg from "../assets/productos/lavalozas.png";
import suavizanteImg from "../assets/productos/suave.png";
import desengrasanteImg from "../assets/productos/desengrasante.png";
import limpiaVidriosImg from "../assets/productos/limpia.png"; // 🆕

const productos = [
  {
    nombre: "Detergente Matic 3L",
    precioUnidad: "$3.500",
    precioMayor: "$3.200",
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
    precioUnidad: "$1.300",
    precioMayor: "$1.100",
    imagen: cloroLavandaImg,
  },
  {
    nombre: "Lavalozas Amarillo 1L",
    precioUnidad: "$1.200",
    precioMayor: "$1.000",
    imagen: lavalozasImg,
  },
  {
    nombre: "Suavizante Suave 1L",
    precioUnidad: "$1.300",
    precioMayor: "$1.100",
    imagen: suavizanteImg,
  },
  {
    nombre: "Desengrasante Cocina",
    precioUnidad: "$1.600",
    precioMayor: "$1.400",
    imagen: desengrasanteImg,
  },
  {
    nombre: "Limpia Vidrios 500ml", // 🆕
    precioUnidad: "$1.000",
    precioMayor: "$850",
    imagen: limpiaVidriosImg,
  },
  {
    nombre: "Aromatizante Lavanda",
    precioUnidad: "$1.000",
    precioMayor: "$900",
  },
  {
    nombre: "Desinfectante Floral",
    precioUnidad: "$1.300",
    precioMayor: "$1.100",
  },
  {
    nombre: "Limpia Pisos Lavanda",
    precioUnidad: "$1.500",
    precioMayor: "$1.300",
  },
  {
    nombre: "Jabón Líquido 1L",
    precioUnidad: "$1.400",
    precioMayor: "$1.200",
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
                className="producto-imagen"
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
