import { useState } from "react";
import { useApp } from "../../../context/AppContext";
import "./Maniobras.css";

const AdminCategorias = () => {
  const { categorias, setCategorias } = useApp();
  const [nuevaCategoria, setNuevaCategoria] = useState("");

  const agregarCategoria = () => {
    const nombre = nuevaCategoria.trim();
    if (!nombre) return;
    if (categorias.includes(nombre)) {
      alert("La categoría ya existe");
      return;
    }
    setCategorias([...categorias, nombre]);
    setNuevaCategoria("");
  };

  const eliminarCategoria = (cat) => {
    setCategorias(categorias.filter((c) => c !== cat));
  };

  return (
    <div className="maniobra-container">
      <h3>Gestionar categorías</h3>

      {/* Input + Botón */}
      <div className="maniobra-form">
        <label>Nueva categoría</label>
        <input
          type="text"
          placeholder="Ej: Pulseras"
          value={nuevaCategoria}
          onChange={(e) => setNuevaCategoria(e.target.value)}
        />
        <button className="maniobra-button" onClick={agregarCategoria}>
          Agregar
        </button>
      </div>

      {/* Lista de categorías */}
      <ul className="maniobra-list">
        {categorias.map((cat) => (
          <li key={cat}>
            {cat}
            <button onClick={() => eliminarCategoria(cat)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCategorias;
