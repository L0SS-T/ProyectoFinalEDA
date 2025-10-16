import React from "react";
import { useApp } from "../../../context/AppContext";
import "./Maniobras.css";

const DetalleUsuario = ({ usuario, onVolver, onVerDetalle }) => {
  const { ordenes = [] } = useApp();

  if (!usuario) return <p>Usuario no seleccionado</p>;

  const ordenesUsuario = ordenes
    .filter((o) => o.userId === usuario.id)
    .slice(0, 10);

  return (
    <div className="maniobra-container">
      <h3>Detalle de Usuario</h3>

      <div className="maniobra-info">
        <p><strong>ID:</strong> {usuario.id}</p>
        <p><strong>Nombre:</strong> {usuario.nombre} {usuario.apellido}</p>
        <p><strong>Correo:</strong> {usuario.correo}</p>
      </div>

      <h4>Órdenes recientes:</h4>
      {ordenesUsuario.length ? (
        <ul className="maniobra-list">
          {ordenesUsuario.map((orden) => (
            <li key={orden.id}>
              <span>
                Orden #{orden.id} - {new Date(orden.fecha).toLocaleString()}
                
              </span>
              <button
              className="maniobra-button"
              onClick={() => onVerDetalle(orden)}
            >
              Ver detalle
            </button>
              
            </li>
          ))}
        </ul>
      ) : (
        <p>No tiene órdenes.</p>
      )}

      <button className="maniobra-button" onClick={onVolver}>
        Volver
      </button>
    </div>
  );
};

export default DetalleUsuario;
