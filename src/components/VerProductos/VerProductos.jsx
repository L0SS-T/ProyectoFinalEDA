import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";  
import "./VerProductos.css";

const VerProductos = () => {
  const { productos, categorias } = useApp();        
  const [orden, setOrden] = useState("");
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleCategoria = (categoria) => {
    setCategoriasSeleccionadas((prev) =>
      prev.includes(categoria)
        ? prev.filter((c) => c !== categoria)
        : [...prev, categoria]
    );
  };

  const irADetalle = (id) => {
    navigate(`/producto/${id}`);
  };

  useEffect(() => {
    const handleClickFuera = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMostrarMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickFuera);
    return () => document.removeEventListener("mousedown", handleClickFuera);
  }, []);

  // ===== FILTRAR POR CATEGORÍAS =====
  let productosFiltrados =
    categoriasSeleccionadas.length > 0
      ? productos.filter((p) => categoriasSeleccionadas.includes(p.category))
      : productos;

  // ===== ORDENAR =====
  if (orden === "precio") {
    productosFiltrados.sort(
      (a, b) =>
        parseFloat(a.price.replace("$", "")) -
        parseFloat(b.price.replace("$", ""))
    );
  } else if (orden === "nombre") {
    productosFiltrados.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <section className="productos-section">
      <div className="filtros-bar">
        <h3>Nuestros productos: </h3>

        <div className="dropdown" ref={menuRef}>
          <button
            className="boton-categorias"
            onClick={() => setMostrarMenu(!mostrarMenu)}
          >
            Categorías
          </button>

          {mostrarMenu && (
            <div className="dropdown-menu-overlay fade-in">
              {categorias.map((cat) => (  
                <label key={cat} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={categoriasSeleccionadas.includes(cat)}
                    onChange={() => toggleCategoria(cat)}
                  />
                  {cat}
                </label>
              ))}
            </div>
          )}
        </div>

        <select
          value={orden}
          onChange={(e) => setOrden(e.target.value)}
          className="select-orden"
        >
          <option value="">Ordenar por</option>
          <option value="precio">Precio</option>
          <option value="nombre">Nombre</option>
        </select>
      </div>

      <div className="productos-grid">
        {productosFiltrados.map((p) => (
          <div
            key={p.id}
            className="producto-card fade-in"
            onClick={() => irADetalle(p.id)}
          >
            <img src={p.image} alt={p.name} />
            <small>{p.category}</small>
            <h3>{p.name}</h3>
            <p className="price">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VerProductos;