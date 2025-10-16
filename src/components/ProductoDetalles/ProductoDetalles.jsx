import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import productos from "../../data/data";
import "./ProductoDetalles.css";
import Carrito from "../Carrito/Carrito";
import { useApp } from "../../context/AppContext"; // <-- usamos AppContext

function ProductoDetalles() {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === parseInt(id));
  const { user, agregarAlCarrito, carrito } = useApp(); // <-- extraemos del contexto

  if (!user) return <Navigate to="/login" replace />;
  if (!producto) return <h2>PÁGINA NO EXISTE</h2>;

  const [imagenSeleccionada, setImagenSeleccionada] = useState(producto.image);
  const [cantidad, setCantidad] = useState(1);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const manejarMiniaturaClick = (imagen) => setImagenSeleccionada(imagen);
  const manejarRotacion = () =>
    setImagenSeleccionada(prev => (prev === producto.image ? producto.simage : producto.image));
  const cambiarCantidad = (valor) =>
    setCantidad(prev => {
      const nuevaCantidad = prev + valor;
      if (nuevaCantidad < 1) return 1;
      if (nuevaCantidad > producto.stock) return producto.stock;
      return nuevaCantidad;
    });

  const handleAgregar = () => {
    if (cantidad > producto.stock) return alert("OUT OF STOCK");
    agregarAlCarrito(producto, cantidad); // <-- agregamos usando AppContext
    setMostrarCarrito(true);
  };

  return (
    <div className="producto-detalle">
      <div className="imagengrande">
        <div className="imagen-contenedor">
          <img src={imagenSeleccionada} alt={producto.name} className="producto-imagen" />
          <button onClick={manejarRotacion} className="rotar-boton izquierda">←</button>
          <button onClick={manejarRotacion} className="rotar-boton derecha">→</button>
        </div>

        <div className="miniaturas">
          <img src={producto.image} alt="miniatura 1" className="miniatura" onClick={() => manejarMiniaturaClick(producto.image)} />
          <img src={producto.simage} alt="miniatura 2" className="miniatura" onClick={() => manejarMiniaturaClick(producto.simage)} />
        </div>
      </div>

      <div className="producto-info">
        <h2>{producto.name}</h2>
        <p><strong>Tipo:</strong> {producto.type}</p>
        <p><strong>Categoría:</strong> {producto.category}</p>
        <p><strong>Precio:</strong> {producto.price}</p>
        <p><strong>Stock disponible:</strong> {producto.stock}</p>

        <div className="cantidad-controles">
          <button onClick={() => cambiarCantidad(-1)}>-</button>
          <span>{cantidad}</span>
          <button onClick={() => cambiarCantidad(1)}>+</button>
        </div>

        <button className="btn-agregar" onClick={handleAgregar}>Agregar al carrito 🛒</button>
      </div>

      <Carrito 
        mostrar={mostrarCarrito}
        cerrarModal={() => setMostrarCarrito(false)}
      />
    </div>
  );
}

export default ProductoDetalles;
