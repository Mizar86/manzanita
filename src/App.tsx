import { About } from './components/About'
import { Booking } from './components/Booking'
import { Enfoque } from './components/Enfoque'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero, Stats } from './components/Hero'
import { Reviews } from './components/Reviews'
import { Services } from './components/Services'
import { Visit } from './components/Visit'

const RIBBON = [
  'planes reales',
  'obesidad',
  'diabetes',
  'hormonas',
  'niños desde 1 año',
  'consulta en línea',
  'alimentos fáciles',
  'seguimiento',
]

function Ribbon() {
  const loop = [...RIBBON, ...RIBBON]
  return (
    <div className="ribbon" aria-hidden="true">
      <div className="ribbon-track">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <Stats />
        <Ribbon />
        <figure className="wide-photo">
          <img
            src="/images/mesa.jpg"
            alt="Bowl de hojas verdes, higo y granada sobre una mesa de madera"
            width={1280}
            height={720}
          />
        </figure>
        <About />
        <Enfoque />
        <Services />
        <Reviews />
        <Visit />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
