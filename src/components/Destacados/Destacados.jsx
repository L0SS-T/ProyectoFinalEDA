import './Destacados.css'
import pulsera1 from '../../assets/pulseras.jpg'
import collar1 from '../../assets/collar1.jpg'
import conjunto1 from '../../assets/conjunto.jpg'
import anillo1 from '../../assets/anillo1.jpg'



const featuredProducts = [
  {
    id: 1,
    category: "Brazaletes",
    name: "Elegance Bracelet",
    price: "$25,000",
    image: pulsera1,
  },
  {
    id: 2,
    category: "Necklaces",
    name: "Golden Elegance Necklace",
    price: "$15,000",
    image: collar1,
  },
  {
    id: 3,
    category: "Conjuntos",
    name: "Heritage Pearl Necklace",
    price: "$12,000",
    image: conjunto1,
  },
  {
    id: 4,
    category: "Anillos",
    name: "Celestial Gold Chain",
    price: "$2,400",
    image: anillo1,
  },
];

const Destacados = () => {
  return (
    
    <section className="destacados">
      <hr />
      <h2>Los más destacados</h2>

      <div className="colecciones">
        {featuredProducts.map((product) => (
          <div key={product.id} className="coleccion-card">
            <div className="imagen-cuadro">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="info-card">
              <small>{product.category}</small>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="boton-explorar">Explorar todos</button>
    </section>
  );
};

export default Destacados;
