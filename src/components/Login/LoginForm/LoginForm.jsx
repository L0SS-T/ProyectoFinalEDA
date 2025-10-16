import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from "../../../context/AppContext";
import './LoginForm.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useApp(); 

  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const loggedUser = login(correo, password);

    if (loggedUser) {
      if (loggedUser.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } else {
      alert("Usuario o contraseña incorrecta!");
    }
  };

  return (
    <main>
      <div className="loginBloque">
        <h2>Iniciar sesión</h2>

        <label>Correo</label><br />
        <input
          type="email"
          id="correoUsuario"
          placeholder="usuario@gmail.com"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <label>Contraseña</label><br />
        <input
          type="password"
          id="contraseñaUsuario"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Iniciar sesión</button>

        <div className="opcionesExtras">
          <a href="/register">Registrarme</a><br />
          <a href="/forgot-password">Olvidé mi contraseña</a>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
