import React, { useEffect, useState } from "react";
import { useApp } from "../../../context/AppContext";
import "./Maniobras.css";

const DetalleOrden = ({ orden, onVolver }) => {
  const { ordenes = [] } = useApp();
  const { toggleEstadoOrden } = useApp(); 
  const { productos = []} = useApp();
  const [ordenActual, setOrdenActual] = useState("orden");

  useEffect(() => {
    const nueva = ordenes.find((o) => o.id === orden.id);
    if (nueva) setOrdenActual(nueva);
  }, [ordenes, orden.id]);

  if (!orden) return <p>No se ha seleccionado ninguna orden.</p>;

 const productosConInfo = Array.isArray(ordenActual.productos)
  ? ordenActual.productos.map((p) => {
      const precio = parseFloat(String(p.price).replace("$", "")) || 0;
      const total = precio * p.quantity;
      return { id: p.id, nombre: p.name, cantidad: p.quantity, categoria: p.category, total };
    })
  : [];


return (
    <div className="detalle-orden">
      <h3>Detalle de Orden #{ordenActual.id}</h3>
      <p><strong>Usuario:</strong> {ordenActual.nombreUsuario}</p>
      <p><strong>Fecha:</strong> {new Date(ordenActual.fecha).toLocaleString()}</p>
      <p>
        <strong>Estado:</strong>{" "}
        <span style={{ color: ordenActual.isEntregado ? "green" : "red" }}>
          {ordenActual.isEntregado ? "Entregado" : "No Entregado"}
        </span>
      </p>
     <p><strong>Monto total:</strong> ${Number(ordenActual.total || 0).toFixed(2)}</p>

      <h4>Productos</h4>
      <table className="tabla-productos" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>ID</th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Nombre</th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Categoría</th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Cantidad</th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {productosConInfo.map((p) => (
            <tr key={p.id}>
              <td style={{ padding: "6px 8px" }}>{p.id}</td>
              <td style={{ padding: "6px 8px" }}>{p.nombre}</td>
              <td style={{ padding: "6px 8px" }}>{p.categoria}</td>
              <td style={{ padding: "6px 8px" }}>{p.cantidad}</td>
              <td style={{ padding: "6px 8px" }}>${Number(p.total || 0).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "15px" }}></div>

      <button className="maniobra-button" onClick={() => toggleEstadoOrden(ordenActual.id)}>
        Cambiar Estado
      </button>

      <button className="maniobra-button" onClick={onVolver} style={{ marginLeft: "10px" }}>
        Volver
      </button>
    </div>
  );
};

export default DetalleOrden;
