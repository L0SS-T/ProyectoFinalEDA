import React, { useState } from "react";
import "./Catalogo.css";
import productos from "../../data/data";

function Carrusel({ titulo, productos }) {
  const [indice, setIndice] = useState(0);
  const total = productos.length;

  const siguiente = () => setIndice((indice + 3) % total);
  const anterior = () => setIndice((indice - 3 + total) % total);

  const visibles = productos.slice(indice, indice + 3);
  if (visibles.length < 3) {
    visibles.push(...productos.slice(0, 3 - visibles.length));
  }

  return (
    <div className="catalogo-carrusel">
      <h2 className="catalogo-titulo">{titulo}</h2>
      <div className="catalogo-carrusel-contenido">
        <button className="catalogo-btn" onClick={anterior}>⬅</button>

        <div key={indice} className="catalogo-productos fade-in">
          {visibles.map((item) => (
            <div key={item.id} className="catalogo-producto-card">
              <div className="catalogo-imagen-container">
                <img src={item.image} alt={item.name} />
                <div className="catalogo-overlay"></div>
              </div>
              <div className="catalogo-info-producto">
                <div className="catalogo-linea-dorada"></div>
                <h3>{item.name}</h3>
                <p>{item.category}</p>
                <span className="catalogo-precio">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="catalogo-btn" onClick={siguiente}>➡</button>
      </div>
    </div>
  );
}

export default function Catalogo() {
  const lujo = productos.filter((p) => p.type === "de lujo");
  const artesanal = productos.filter((p) => p.type === "artesanal");
  const casual = productos.filter((p) => p.type === "casual");

  return (
    <div className="catalogo-page">
      <div className="catalogo">
        <Carrusel titulo="Colección de Lujo" productos={lujo} />
        <Carrusel titulo="Colección Artesanal" productos={artesanal} />
        <Carrusel titulo="Colección Casual" productos={casual} />
      </div>
    </div>
  );
}
