import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import "./AdminDashboard.css";

import AdminCategorias from "./Maniobras/AdminCategorias";
import Resumen from "./Maniobras/Resumen";
import ListaUsuarios from "./Maniobras/ListaUsuarios";
import ListaProductos from "./Maniobras/ListaProductos";
import AgregarProducto from "./Maniobras/AgregarProducto";
import DetalleUsuario from "./Maniobras/DetalleUsuario";


import ListaOrdenes from "./Maniobras/ListaOrdenes";
import DetalleOrden from "./Maniobras/DetalleOrden";

const AdminDashboard = () => {
  const { user } = useApp();
  const [vista, setVista] = useState("resumen");
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const [ordenSeleccionada, setOrdenSeleccionada] = useState(null); 

  if (!user || user.correo !== "admin@gmail.com") {
    return <p>No tienes acceso a esta página.</p>;
  }

  const renderVista = () => {
    switch (vista) {
      case "resumen":
        return <Resumen />;
      case "usuarios":
        return (
          <ListaUsuarios
            onVerDetalle={(usuario) => {
              setUsuarioSeleccionado(usuario);
              setVista("detalleUsuario");
            }}
          />
        );
      case "detalleUsuario":
        return (
          <DetalleUsuario
            usuario={usuarioSeleccionado}
            onVolver={() => setVista("usuarios")}
          />
        );
      case "productos":
        return <ListaProductos onAgregar={() => setVista("agregarProducto")} />;
      case "agregarProducto":
        return <AgregarProducto onVolver={() => setVista("productos")} />;
      case "categorias":
        return <AdminCategorias />;
      case "ordenes":
        return (
          <ListaOrdenes
            onVerDetalle={(orden) => {
              setOrdenSeleccionada(orden);
              setVista("detalleOrden");
            }}
          />
        );
      case "detalleOrden":
        return (
          <DetalleOrden
            orden={ordenSeleccionada}
            onVolver={() => setVista("ordenes")}
          />
        );
      default:
        return <Resumen />;
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Dashboard del Administrador</h2>
      <div className="botones-nav">
        <button onClick={() => setVista("resumen")}>Resumen</button>
        <button onClick={() => setVista("usuarios")}>Usuarios</button>
        <button onClick={() => setVista("productos")}>Productos</button>
        <button onClick={() => setVista("categorias")}>Categorías</button>
        
        <button onClick={() => setVista("ordenes")}>Órdenes</button>
      </div>

      <div className="contenido">{renderVista()}</div>
    </div>
  );
};

export default AdminDashboard;
