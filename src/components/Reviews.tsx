import { useEffect, useState } from 'react'
import { clinic, reviews } from '../content'
import { useReveal } from '../useReveal'

export function Reviews() {
  const reveal = useReveal<HTMLElement>()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const review = reviews[index]

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % reviews.length)
    }, 8000)
    return () => window.clearInterval(id)
  }, [paused])

  const go = (direction: number) => {
    setIndex((value) => (value + direction + reviews.length) % reviews.length)
  }

  return (
    <section
      id="opiniones"
      ref={reveal.ref}
      className={`section reviews ${reveal.className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        const next = event.relatedTarget
        if (!(next instanceof Node) || !event.currentTarget.contains(next)) setPaused(false)
      }}
    >
      <div className="wrap">
        <div className="section-head light">
          <p className="kicker light">04 — Opiniones</p>
          <h2>Lo que cuentan sus pacientes.</h2>
          <p>Textos publicados en Doctoralia, de citas verificadas.</p>
        </div>
        <figure className="quote" key={`${review.name}-${review.date}`}>
          <blockquote>
            <p>“{review.text}”</p>
          </blockquote>
          <figcaption>
            <strong>{review.name}</strong>
            <span>
              {review.date} · {review.visit}
            </span>
          </figcaption>
        </figure>
        <div className="review-controls">
          <button type="button" onClick={() => go(-1)} aria-label="Opinión anterior">
            ←
          </button>
          <div className="dots">
            {reviews.map((item, itemIndex) => (
              <button
                key={`${item.name}-${item.date}`}
                type="button"
                className={itemIndex === index ? 'on' : undefined}
                aria-label={`Opinión de ${item.name}`}
                aria-current={itemIndex === index ? 'true' : undefined}
                onClick={() => setIndex(itemIndex)}
              />
            ))}
          </div>
          <button type="button" onClick={() => go(1)} aria-label="Opinión siguiente">
            →
          </button>
          <a href={clinic.doctoralia} target="_blank" rel="noopener noreferrer">
            Ver perfil en Doctoralia
          </a>
        </div>
      </div>
    </section>
  )
}
