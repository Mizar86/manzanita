import { trajectory } from '../content'
import { useReveal } from '../useReveal'

export function About() {
  const reveal = useReveal<HTMLElement>()

  return (
    <section id="sobre" ref={reveal.ref} className={`section ${reveal.className}`}>
      <div className="wrap about-grid">
        <figure className="about-photo">
          <img
            src="/images/manzanitas.jpg"
            alt="Manzanitas rojas con una hoja sobre lino"
            width={1024}
            height={1024}
            loading="lazy"
          />
        </figure>
        <div>
          <p className="kicker">01 — Sobre mí</p>
          <h2>Una consulta que parte de tu semana real.</h2>
          <p className="lede">
            María Fernanda Gallegos Serna es nutrióloga clínica, egresada de la Universidad La
            Concordia, campus Fórum Internacional, en Aguascalientes, con mención honorífica. Hizo
            su servicio social en el Hospital General de Zona No. 2 del IMSS y desde 2020 atiende
            consulta privada.
          </p>
          <p className="lede">
            Quienes vuelven describen planes personalizados, alimentos fáciles de conseguir y
            explicaciones claras para seguirlos. Atiende adultos y niños a partir de un año.
          </p>
          <blockquote className="pull">
            <p>Explicaciones detalladas, dedicación en la visita y puntualidad.</p>
            <footer>Lo más mencionado en sus opiniones de Doctoralia.</footer>
          </blockquote>
          <ol className="timeline">
            {trajectory.map((item) => (
              <li key={item.year}>
                <span>{item.year}</span>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
