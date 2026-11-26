import { useReveal } from '../useReveal'

export function About() {
  const reveal = useReveal<HTMLElement>()

  return (
    <section id="sobre" ref={reveal.ref} className={`section ${reveal.className}`}>
      <div className="wrap about-copy">
        <p className="kicker">01 — Sobre mí</p>
        <h2>Una consulta que parte de tu semana real.</h2>
        <p className="lede">
          María Fernanda Gallegos Serna es nutrióloga clínica. Arma planes personalizados, con
          alimentos fáciles de conseguir y explicaciones claras para seguirlos.
        </p>
        <p className="lede">Atiende adultos y niños a partir de un año, presencial o en línea.</p>
        <blockquote className="pull">
          <p>Explicaciones detalladas, dedicación en la visita y puntualidad.</p>
          <footer>Lo más mencionado en sus opiniones de Doctoralia.</footer>
        </blockquote>
      </div>
    </section>
  )
}
