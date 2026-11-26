import { clinic, whatsappHref } from '../content'
import { useClinicStatus } from '../useClinicStatus'
import { Apple, Wordmark } from './Logo'

export function Hero() {
  const status = useClinicStatus()

  return (
    <section className="hero" id="inicio">
      <div className="floaters" aria-hidden="true">
        <Apple className="floater f1" />
        <Apple className="floater f2" />
        <Apple className="floater f3" />
      </div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <Wordmark size="lg" />
          <p className={`status${status.open ? ' on' : ''}`}>
            <span className="dot" aria-hidden="true" />
            {status.open ? 'Abierto ahora' : 'Cerrado ahora'}
            <span className="status-detail">{status.detail}</span>
          </p>
          <p className="kicker">{clinic.title}</p>
          <h1>
            Planes que <em>sí</em> puedes seguir.
          </h1>
          <p className="lede">
            Nutrición clínica en el centro de Aguascalientes, presencial o en línea. Obesidad,
            diabetes, digestión y salud hormonal, con un menú pensado para tu rutina y tu
            presupuesto.
          </p>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href={whatsappHref('Hola, quiero informes de una consulta.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
          <ul className="hero-points">
            <li>Cédula profesional {clinic.cedula}</li>
            <li>Presencial y en línea</li>
            <li>Adultos y niños desde 1 año</li>
          </ul>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            <img
              src="/images/fernanda.jpg"
              alt="María Fernanda Gallegos Serna, nutrióloga clínica"
              width={529}
              height={530}
              fetchPriority="high"
            />
          </div>
          <div className="rating-card">
            <strong>5.0</strong>
            <p>
              161 opiniones
              <br />
              en Doctoralia
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Stats() {
  return (
    <section className="stats" aria-label="Datos de la consulta">
      <div className="wrap stats-grid">
        <div className="s-pink">
          <strong>5.0</strong>
          <span>Valoración en Doctoralia</span>
        </div>
        <div className="s-yellow">
          <strong>161</strong>
          <span>Opiniones de pacientes</span>
        </div>
        <div className="s-lime">
          <strong>$400</strong>
          <span>Consulta desde, en MXN</span>
        </div>
      </div>
    </section>
  )
}
