import React, { useState } from "react";
import { useApp } from "../../../context/AppContext";
import "./Maniobras.css";

const ListaOrdenes = ({ onVerDetalle }) => {
  const { ordenes = [] } = useApp();
  const [filtro, setFiltro] = useState("");

  const filtroStr = filtro.trim();


  const ordenesFiltradas = ordenes
    .filter((o) => {
      if (!filtroStr) return true; 
      return o.id?.toString().startsWith(filtroStr);
    })
    .sort((a, b) => b.id - a.id); 

  return (
    <div className="maniobra-container">
      <h3>Lista de Órdenes</h3>

      <input
        className="maniobra-buscador"
        type="text"
        placeholder="Buscar por ID de orden (prefijo)..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      <ul className="maniobra-list">
        {ordenesFiltradas.map((o) => (
          <li key={o.id} className="maniobra-item">
            <div>
              <span><strong>ID:</strong> {o.id}</span><br />
              <span><strong>Fecha:</strong> {o.fecha}</span><br />
              <span>
                <strong>Estado:</strong>{" "}
                <span style={{ color: o.isEntregado ? "green" : "red" }}>
                  {o.isEntregado ? "Entregado" : "No Entregado"}
                </span>
              </span>
            </div>
            <button
              className="maniobra-button"
              onClick={() => onVerDetalle(o)}
            >
              Ver detalle
            </button>
          </li>
        ))}
      </ul>

      {ordenesFiltradas.length === 0 && (
        <p>No se hallaron coincidencias.</p>
      )}
    </div>
  );
};

export default ListaOrdenes;
