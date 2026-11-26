import { faqs, whatsappHref } from '../content'
import { useReveal } from '../useReveal'

export function Booking() {
  const reveal = useReveal<HTMLElement>()

  return (
    <section id="contacto" ref={reveal.ref} className={`section band ${reveal.className}`}>
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">06 — Contacto</p>
          <h2>Escríbele directo por WhatsApp.</h2>
          <p>Cuéntale qué necesitas y te responde por ahí.</p>
          <a
            className="btn btn-primary"
            href={whatsappHref('Hola, quiero informes de una consulta.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
        <div className="faq">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
