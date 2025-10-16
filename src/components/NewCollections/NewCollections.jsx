import './NewCollections.css';
import pulsera12 from "../../assets/pulsera12.jpg"
import anillo14 from "../../assets/anillo14.jpg";


const colecciones = [
    { 
        id: 1, name: "Pulsera de plata fina", 
        category: "Pulseras", type: "de lujo",
        price: "$95.00", 
        stock: 12, 
        ventas: 48,
        image: pulsera12 },

    { 
        id: 2, 
        name: "Anillo trenzado artesanal", 
        category: "Anillos", 
        type: "artesanal", 
        price: "$33.00",
        stock: 29, ventas: 63, 
        image: anillo14 },

    { 
        id: 3, 
        name: "Collar dorado clásico",
        category: "Collares",
        type: "casual", 
        price: "$35.00", 
        stock: 42,
        ventas: 134, 
        image: anillo14 },

  ];

const NewCollections = () => {

    return (
        <section className="new-collections">
      <div className="encabezado">
        <div className="linea"></div>
        <h2>Nuevas Colecciones</h2>
        <p>Introducing our latest series of exceptional jewelry</p>
      </div>

      <div className="colecciones-grid">
        {colecciones.map((col) => (
          <div key={col.id} className="coleccion-card">
            <div className="imagen">
              <img src={col.image} alt={col.name} />
            </div>

            <div className="info">
              <p className="subtitulo">{col.category}</p>
              <h3>{col.title}</h3>
              <p className="descripcion">COLECCION {col.type}</p>
              <button
                className="boton-descubrir"
                onClick={() => navigate("/colecciones")}>Descubre más →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

    )
}

export default NewCollections