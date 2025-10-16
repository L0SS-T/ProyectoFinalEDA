import React from "react";
import { useNavigate } from "react-router-dom";
import "./Carrito.css";
import { useApp } from "../../context/AppContext";

const Carrito = ({ mostrar, cerrarModal }) => {
  const { carrito, quitarDelCarrito, agregarParaDespues } = useApp();
  const navigate = useNavigate();

  if (!mostrar) return null;

  const subtotal = carrito.reduce((acc, p) => {
    const precio = parseFloat(p.price.replace(/[^0-9.]/g, "")) || 0;
    return acc + precio * p.quantity;
  }, 0);

  const irCheckout = () => {
    cerrarModal();
    navigate("/checkout");
  };

  return (
    <div className="carrito-modal">
      <div className="carrito-contenido">
        {/* Botón X */}
        <button className="cerrar-x" onClick={cerrarModal}>
          &times;
        </button>

        <h3>Tu carrito</h3>

        {carrito.length ? (
          carrito.map((p) => (
            <div key={p.id} className="carrito-item">
              <img src={p.image} alt={p.name} className="carrito-img" />
              <div>
                <p><strong>{p.name}</strong></p>
                <p>{p.price}</p>
                <p>Cantidad: {p.quantity}</p>
                <div className="botones-item">
                  <button onClick={() => quitarDelCarrito(p.id)}>Quitar</button>
                  <button onClick={() => agregarParaDespues(p)}>Guardar para después</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos en el carrito.</p>
        )}

        <h4>Subtotal: ${subtotal.toFixed(2)}</h4>

        <div className="carrito-botones">
          <button className="confirmar-btn" onClick={irCheckout}>Ir a Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
