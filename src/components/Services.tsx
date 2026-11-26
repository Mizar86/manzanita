import { useState } from 'react'
import { services, steps } from '../content'
import { useReveal } from '../useReveal'

export function Services() {
  const reveal = useReveal<HTMLElement>()
  const [current, setCurrent] = useState(services[0].id)
  const service = services.find((item) => item.id === current) ?? services[0]

  return (
    <section id="servicios" ref={reveal.ref} className={`section ${reveal.className}`}>
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">03 — Servicios</p>
          <h2>Tres formas de empezar.</h2>
          <p>Pago en efectivo o transferencia. La consulta es privada: no se aceptan aseguradoras.</p>
        </div>
        <div className="service-layout">
          <div className="service-tabs" role="tablist" aria-label="Servicios">
            {services.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`tab-${item.id}`}
                aria-selected={item.id === service.id}
                aria-controls={`panel-${item.id}`}
                className={item.id === service.id ? 'service-tab on' : 'service-tab'}
                onClick={() => setCurrent(item.id)}
              >
                <span>
                  {item.name}
                  <small>{item.mode}</small>
                </span>
                <strong>{item.price}</strong>
              </button>
            ))}
          </div>
          <article
            className="service-panel"
            role="tabpanel"
            id={`panel-${service.id}`}
            aria-labelledby={`tab-${service.id}`}
          >
            <p className="kicker light">{service.mode}</p>
            <h3>{service.name}</h3>
            <p className="price">{service.price}</p>
            <p>{service.summary}</p>
            <p className="fine">MXN. El monto puede ajustarse según el caso y se confirma al agendar.</p>
            <a className="btn btn-light" href="#agenda">
              Agendar esta consulta
            </a>
          </article>
        </div>
        <div className="process">
          <figure>
            <img
              src="/images/consulta.jpg"
              alt="Mesa de madera con luz natural, cuaderno, agua y fruta"
              width={1152}
              height={864}
              loading="lazy"
            />
            <figcaption>Imagen de ambiente.</figcaption>
          </figure>
          <ol className="steps">
            {steps.map((step) => (
              <li key={step.n}>
                <span>{step.n}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
