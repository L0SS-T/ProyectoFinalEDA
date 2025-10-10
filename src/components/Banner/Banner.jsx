import './Banner.css'
import collar from '../../assets/collar-main.jpg'

const Banner = () => {
  return (
    <main>
      <div className="seccionTexto">
        <h2>Elegancia</h2>
        <h2>Elegancia</h2>
        <h2 id='letraGold'>Elegancia</h2>
        <p>Discover exquisite jewelry that transcends trends. Each piece is a masterwork of artistry and precision.</p>

        <button>Comprar ahora </button>
      </div>

      <div className='img1'>
        <img src={collar} alt="Collar" />
      </div>

    </main>
  )
}

export default Banner
