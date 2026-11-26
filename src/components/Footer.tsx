import { clinic } from '../content'
import { Wordmark } from './Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <a className="brand" href="#inicio" aria-label="manzzanita, inicio">
            <Wordmark />
          </a>
          <p>
            {clinic.title}
            <br />
            {clinic.role} · Cédula {clinic.cedula}
          </p>
        </div>
        <div>
          <h2>Consultorio</h2>
          <p>
            {clinic.street}
            <br />
            {clinic.colony}, {clinic.zip}
            <br />
            {clinic.city}
          </p>
        </div>
        <div>
          <h2>Contacto</h2>
          <p>
            <a href={`tel:${clinic.phoneTel}`}>{clinic.phoneDisplay}</a>
            <br />
            <a href={clinic.doctoralia} target="_blank" rel="noopener noreferrer">
              Doctoralia
            </a>
            <br />
            <a href={clinic.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <br />
            <a href={clinic.maps} target="_blank" rel="noopener noreferrer">
              Google Maps
            </a>
          </p>
        </div>
      </div>
      <div className="wrap legal">
        <p>© {new Date().getFullYear()} {clinic.name}</p>
        <p>La información de este sitio es orientativa y no sustituye una valoración clínica.</p>
      </div>
    </footer>
  )
}
