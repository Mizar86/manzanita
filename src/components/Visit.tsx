import { clinic, whatsappHref } from '../content'
import { useClinicStatus } from '../useClinicStatus'
import { useReveal } from '../useReveal'

export function Visit() {
  const reveal = useReveal<HTMLElement>()
  const status = useClinicStatus()
  const today = status.day === 0 ? 'sun' : status.day === 6 ? 'sat' : 'week'

  return (
    <section id="consultorio" ref={reveal.ref} className={`section ${reveal.className}`}>
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">05 — Consultorio</p>
          <h2>Zona Centro, Aguascalientes.</h2>
        </div>
        <div className="visit-grid">
          <div className="visit-card">
            <p className={`status${status.open ? ' on' : ''}`}>
              <span className="dot" aria-hidden="true" />
              {status.open ? 'Abierto ahora' : 'Cerrado ahora'}
              <span className="status-detail">{status.detail}</span>
            </p>
            <address>
              {clinic.street}
              <br />
              {clinic.colony}, {clinic.zip}
              <br />
              {clinic.city}
            </address>
            <ul className="hours">
              <li className={today === 'week' ? 'today' : undefined}>
                <span>Lunes a viernes</span>
                <span>9:00–14:00 y 16:00–20:00</span>
              </li>
              <li className={today === 'sat' ? 'today' : undefined}>
                <span>Sábado</span>
                <span>10:00–14:00</span>
              </li>
              <li className={today === 'sun' ? 'today' : undefined}>
                <span>Domingo</span>
                <span>Cerrado</span>
              </li>
            </ul>
            <p className="fine">Horario de su ficha pública. Confírmalo por WhatsApp.</p>
            <div className="contact-links">
              <a href={`tel:${clinic.phoneTel}`}>{clinic.phoneDisplay}</a>
              <a
                href={whatsappHref('Hola, quiero informes de una consulta.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a href={clinic.maps} target="_blank" rel="noopener noreferrer">
                Cómo llegar
              </a>
            </div>
          </div>
          <div className="map-card">
            <iframe
              title="Mapa del consultorio en Álvaro Obregón 365, Zona Centro, Aguascalientes"
              src={clinic.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
