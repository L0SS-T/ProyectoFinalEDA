// src/context/AppContext.jsx
import { createContext, useContext, useState } from "react";
import usuariosData from "../data/usuarios";
import productosData from "../data/data"; // Array de productos

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // ===== Usuario Actual (login) =====
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("usuario");
    return saved ? JSON.parse(saved) : null;
  });

  // ===== Usuarios del sistema (ADMIN puede modificarlos) =====
  const [usuarios, setUsuarios] = useState(usuariosData);

  const login = (correo, password) => {
    const usuarioEncontrado = usuarios.find(
      (u) =>
        u.correo.toLowerCase() === correo.toLowerCase() &&
        u.password === password &&
        u.isActive !== false
    );

    if (usuarioEncontrado) {
      setUser(usuarioEncontrado);
      localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));
      return usuarioEncontrado;
    }
    return null;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("usuario");
    setCarrito([]);
    setGuardarParaDespues([]);
    setOrdenes([]);
  };

  // ===== Productos (stock dinámico) =====
  const [productos, setProductos] = useState(productosData);

  // ===== Carrito =====
  const [carrito, setCarrito] = useState(() => {
    const saved = localStorage.getItem("carrito");
    return saved ? JSON.parse(saved) : [];
  });

  const agregarAlCarrito = (producto, cantidad) => {
    setCarrito((prev) => {
      const existing = prev.find((p) => p.id === producto.id);
      let updated;
      if (existing) {
        updated = prev.map((p) =>
          p.id === producto.id
            ? { ...p, quantity: Math.min(p.quantity + cantidad, producto.stock) }
            : p
        );
      } else {
        updated = [...prev, { ...producto, quantity: cantidad }];
      }
      localStorage.setItem("carrito", JSON.stringify(updated));
      return updated;
    });
  };

  const quitarDelCarrito = (id) => {
    setCarrito((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      localStorage.setItem("carrito", JSON.stringify(updated));
      return updated;
    });
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    localStorage.removeItem("carrito");
  };

  // ===== Guardar para después =====
  const [guardarParaDespues, setGuardarParaDespues] = useState(() => {
    const saved = localStorage.getItem("guardarParaDespues");
    return saved ? JSON.parse(saved) : [];
  });

  const agregarParaDespues = (producto) => {
    setGuardarParaDespues((prev) => {
      const updated = [...prev, producto];
      localStorage.setItem("guardarParaDespues", JSON.stringify(updated));
      return updated;
    });
    quitarDelCarrito(producto.id);
  };

  const quitarParaDespues = (id) => {
    setGuardarParaDespues((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      localStorage.setItem("guardarParaDespues", JSON.stringify(updated));
      return updated;
    });
  };

  // ===== Órdenes =====
  const [ordenes, setOrdenes] = useState(() => {
    const saved = localStorage.getItem("ordenes");
    return saved ? JSON.parse(saved) : [];
  });

  const confirmarOrden = () => {
    if (!carrito.length || !user) return;

    // Total de la orden
    const total = carrito.reduce((acc, p) => {
    const precioNum = parseFloat(String(p.price).replace("$", "")) || 0;
    return acc + precioNum * p.quantity;
  }, 0);

    // Actualizar stock
    const nuevosProductos = productos.map((p) => {
      const item = carrito.find((c) => c.id === p.id);
      return item ? { ...p, stock: p.stock - item.quantity } : p;
    });
    setProductos(nuevosProductos);

    // Guardar nueva orden
    const nuevaOrden = {
      id: Date.now(), // BASICAMENTE ESTA FUNCION LA ENCONTRE EN GITHUB Y SE USA PARA CALCULAR MILISEGUNDOS DESDE 1970, ENTONCES TE GENERA UN ID UNICO Y PROFESIONAL
      userId: user.id,
      nombreUsuario: `${user.nombre} ${user.apellido}`,
      productos: carrito.map((p) => ({
        id: p.id,
        name: p.name,
        price: p.price,
        quantity: p.quantity,
        category: p.category,
      })),
      fecha: new Date().toISOString(),
      isEntregado: false,
      total,
    };

    

    setOrdenes((prev) => {
      const updated = [...prev, nuevaOrden];
      localStorage.setItem("ordenes", JSON.stringify(updated));
      return updated;
    });

    // Vaciar carrito
    vaciarCarrito();
  };

  //cambiar Estado orden
    const toggleEstadoOrden = (id) => {
    setOrdenes((prev) =>
      prev.map((o) =>
        o.id === id ? { ...o, isEntregado: !o.isEntregado } : o
      )
    );
  };

    const [categorias, setCategorias] = useState(["Collares", "Anillos", "Pulseras", "Conjuntos"]);

    const agregarCategoria = (nueva) => {
    if (!categorias.includes(nueva)) {
        setCategorias([...categorias, nueva]);
    }
    };

    const eliminarCategoria = (cat) => {
    setCategorias(categorias.filter(c => c !== cat));
    };
  // ===== Proveer todo el estado =====
  const value = {
    // Usuario activo
    user,
    login,
    logout,

    // Usuarios del sistema (para el ADMIN)
    usuarios,
    setUsuarios,

    // Productos
    productos,
    setProductos,

    // Carrito
    carrito,
    agregarAlCarrito,
    quitarDelCarrito,
    vaciarCarrito,

    // Guardar para después
    guardarParaDespues,
    agregarParaDespues,
    quitarParaDespues,

    // Órdenes
    ordenes,
    confirmarOrden,
    toggleEstadoOrden,

    categorias,
    agregarCategoria,
    eliminarCategoria
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
