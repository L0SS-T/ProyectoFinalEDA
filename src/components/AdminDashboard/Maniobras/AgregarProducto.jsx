import React, { useState } from "react";
import "./Maniobras.css";

const AgregarProducto = ({ onVolver }) => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registrar producto:", { nombre, precio, imagen });
  };

  return (
    <div className="maniobra-container">
      <h3>Agregar Producto</h3>

      <form className="maniobra-form" onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label>Precio:</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />

        <label>Imagen:</label>
        <input
          type="file"
          onChange={(e) => setImagen(e.target.files[0])}
        />

        <button type="submit" className="maniobra-button">
          Guardar
        </button>
      </form>

      <button onClick={onVolver} className="maniobra-button">
        Volver
      </button>
    </div>
  );
};

export default AgregarProducto;

