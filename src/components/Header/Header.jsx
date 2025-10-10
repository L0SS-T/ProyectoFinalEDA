import './Header.css'
import imgLogo from '../../assets/DemonSlayerLogo.png'
import carrito from '../../assets/carrito.png'
import usuario from '../../assets/usuario.webp'
import lupa from '../../assets/search-b.png'


const Header = () => {
  const irInicio = () => {
    window.location.href = '/';
  };

  return (
    <header>
      <div className="contenedorLogo" onClick={irInicio}>
        <img src={imgLogo} alt="Logo Joyeria" />
      </div>

      <nav className="menu">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="/colecciones">Colecciones</a></li>
          <li><a href="#">Ofertas</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>

      <div className="contenedorBuscar">
        <input className="buscar" type="text" placeholder="Buscar..." />
      </div>

      <div className="contenedorUsuario">
        <img src={usuario} alt="Usuario" />
      </div>

      <div className="contenedorCarrito">
        <img src={carrito}alt="Carrito de compras" />
      </div>


      
    </header>
  );
};

export default Header;
