import React from "react";
import { useApp } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const ListadoOrdenesPage = () => {
  const { user, ordenes, guardarParaDespues } = useApp();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  const misOrdenes = ordenes.filter((o) => o.userId === user.id);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Mis Órdenes</h2>
      {misOrdenes.length ? (
        misOrdenes.map((orden) => (
          <div
            key={orden.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <p><strong>ID de Orden:</strong> {orden.id}</p>
            <p><strong>Fecha:</strong> {new Date(orden.fecha).toLocaleString()}</p>
            <p><strong>Método de pago:</strong> {orden.metodoPago || "No especificado"}</p>
            <p><strong>Método de envío:</strong> {orden.metodoEnvio || "No especificado"}</p>
            <p><strong>Productos:</strong></p>
            <ul>
              {orden.productos.map((p) => (
                <li key={p.id}>
                  Producto ID: {p.id}, Cantidad: {p.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No tienes órdenes aún.</p>
      )}

      <h2>Guardar para después</h2>
      {guardarParaDespues.length ? (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "8px",
            backgroundColor: "#fff3cd",
          }}
        >
          <ul>
            {guardarParaDespues.map((p) => (
              <li key={p.id}>
                {p.name} — Cantidad: {p.quantity}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No tienes productos guardados para después.</p>
      )}
    </div>
  );
};

export default ListadoOrdenesPage;
