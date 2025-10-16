// src/pages/Checkout/Checkout.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import "./Checkout.css";

const Checkout = () => {
  const { user, carrito, vaciarCarrito, confirmarOrden } = useApp();
  const navigate = useNavigate();

  const [direccion, setDireccion] = useState("");
  const [metodoEnvio, setMetodoEnvio] = useState("normal");
  const [metodoPago, setMetodoPago] = useState("tarjeta");
  const [datosPago, setDatosPago] = useState({ tarjeta: "", cvv: "", vencimiento: "" });

  if (!user) {
    navigate("/login");
    return null;
  }

  const subtotal = carrito.reduce((acc, p) => {
    const precio = parseFloat(p.price.replace(/[^0-9.]/g, "")) || 0;
    return acc + precio * p.quantity;
  }, 0);

  const handleCompletarOrden = () => {
    if (!direccion) return alert("Ingrese la dirección de envío");
    if (metodoPago === "tarjeta" && (!datosPago.tarjeta || !datosPago.cvv || !datosPago.vencimiento)) {
      return alert("Complete los datos de la tarjeta");
    }

    // Registrar la orden
    confirmarOrden();

    // Vaciar carrito (ya lo hace confirmarOrden)
    vaciarCarrito();

    alert("Orden completada 🎉");
    navigate("/"); // redirige a inicio
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-form">
        <h3>Dirección de envío</h3>
        <input
          type="text"
          placeholder="Dirección"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />

        <h3>Método de envío</h3>
        <select value={metodoEnvio} onChange={(e) => setMetodoEnvio(e.target.value)}>
          <option value="normal">Normal</option>
          <option value="express">Express</option>
        </select>

        <h3>Método de pago</h3>
        <select value={metodoPago} onChange={(e) => setMetodoPago(e.target.value)}>
          <option value="tarjeta">Tarjeta de crédito</option>
          <option value="qr">Código QR</option>
        </select>

        {metodoPago === "tarjeta" && (
          <div className="pago-tarjeta">
            <input
              type="text"
              placeholder="Número de tarjeta"
              value={datosPago.tarjeta}
              onChange={(e) => setDatosPago({ ...datosPago, tarjeta: e.target.value })}
            />
            <input
              type="text"
              placeholder="CVV"
              value={datosPago.cvv}
              onChange={(e) => setDatosPago({ ...datosPago, cvv: e.target.value })}
            />
            <input
              type="text"
              placeholder="Vencimiento MM/AA"
              value={datosPago.vencimiento}
              onChange={(e) => setDatosPago({ ...datosPago, vencimiento: e.target.value })}
            />
          </div>
        )}

        {metodoPago === "qr" && (
          <div className="pago-qr">
            <img src="/assets/qr.png" alt="Código QR" />
          </div>
        )}
      </div>

      <div className="checkout-resumen">
        <h3>Resumen del pedido</h3>
        {carrito.map((p) => (
          <div key={p.id} className="resumen-item">
            <p>{p.name} x {p.quantity}</p>
            <p>${(parseFloat(p.price.replace(/[^0-9.]/g, "")) * p.quantity).toFixed(2)}</p>
          </div>
        ))}
        <h4>Total: ${subtotal.toFixed(2)}</h4>
      </div>

      <button className="btn-completar" onClick={handleCompletarOrden}>Completar Orden</button>
    </div>
  );
};

export default Checkout;
