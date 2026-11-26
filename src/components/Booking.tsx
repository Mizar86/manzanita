import { type FormEvent, useState } from 'react'
import { clinic, faqs, reasons, whatsappHref } from '../content'
import { useReveal } from '../useReveal'

type Mode = 'presencial' | 'enlinea'

export function Booking() {
  const reveal = useReveal<HTMLElement>()
  const [name, setName] = useState('')
  const [mode, setMode] = useState<Mode>('presencial')
  const [reason, setReason] = useState('')
  const [note, setNote] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (name.trim().length < 2) {
      setError('Escribe tu nombre para preparar el mensaje.')
      setSent(false)
      return
    }

    const modality = mode === 'presencial' ? 'presencial' : 'en línea'
    const message = [
      `Hola, soy ${name.trim()}. Quiero agendar una consulta ${modality}.`,
      reason ? `Motivo: ${reason}.` : '',
      note.trim(),
    ]
      .filter(Boolean)
      .join(' ')

    setError('')
    setSent(true)
    const url = whatsappHref(message)
    const popup = window.open(url, '_blank', 'noopener,noreferrer')
    if (!popup) window.location.href = url
  }

  return (
    <section id="agenda" ref={reveal.ref} className={`section band ${reveal.className}`}>
      <div className="wrap">
        <div className="agenda-grid">
          <div>
            <p className="kicker">06 — Agenda</p>
            <h2>Escribe y confirmamos la cita por WhatsApp.</h2>
            <p className="lede">
              También puedes reservar directo en Doctoralia. Agendar y cancelar desde esa agenda no
              tiene costo.
            </p>
            <div className="contact-links stack">
              <a href={clinic.doctoralia} target="_blank" rel="noopener noreferrer">
                Abrir agenda en Doctoralia
              </a>
              <a href={`tel:${clinic.phoneTel}`}>Llamar al {clinic.phoneDisplay}</a>
            </div>
          </div>
          <form onSubmit={submit} noValidate>
            <div className="form-row">
              <label className="field">
                <span>Nombre</span>
                <input
                  name="nombre"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Tu nombre"
                  required
                />
              </label>
              <fieldset className="modes">
                <legend>Modalidad</legend>
                <label>
                  <input
                    type="radio"
                    name="modo"
                    value="presencial"
                    checked={mode === 'presencial'}
                    onChange={() => setMode('presencial')}
                  />
                  Presencial
                </label>
                <label>
                  <input
                    type="radio"
                    name="modo"
                    value="enlinea"
                    checked={mode === 'enlinea'}
                    onChange={() => setMode('enlinea')}
                  />
                  En línea
                </label>
              </fieldset>
            </div>
            <label className="field">
              <span>Motivo</span>
              <select name="motivo" value={reason} onChange={(event) => setReason(event.target.value)}>
                <option value="">Elige un motivo</option>
                {reasons.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>Nota</span>
              <textarea
                name="nota"
                value={note}
                onChange={(event) => setNote(event.target.value)}
                placeholder="Horario que te acomoda, o algo que quieras adelantar."
              />
            </label>
            {error ? (
              <p className="form-error" role="alert">
                {error}
              </p>
            ) : null}
            {sent ? <p className="form-ok">Se abrió WhatsApp con tu mensaje.</p> : null}
            <button className="btn btn-primary" type="submit">
              Enviar por WhatsApp
            </button>
            <p className="fine">Este sitio no guarda tus datos: el mensaje se abre en WhatsApp.</p>
          </form>
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
