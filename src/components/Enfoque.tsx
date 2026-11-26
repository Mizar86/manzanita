import { useState } from 'react'
import { conditions, focus, type ConditionGroup } from '../content'
import { useReveal } from '../useReveal'

const FILTERS: { id: ConditionGroup | 'todas'; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'metabolica', label: 'Metabólicas' },
  { id: 'digestiva', label: 'Digestivas' },
  { id: 'hormonal', label: 'Hormonales' },
  { id: 'general', label: 'Otras' },
]

export function Enfoque() {
  const reveal = useReveal<HTMLElement>()
  const [group, setGroup] = useState<ConditionGroup | 'todas'>('todas')
  const visible = conditions.filter((item) => group === 'todas' || item.group === group)

  return (
    <section id="enfoque" ref={reveal.ref} className={`section band ${reveal.className}`}>
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">02 — Enfoque</p>
          <h2>Nutrición clínica, con nombre y apellido.</h2>
          <p>
            Seis áreas de trabajo y los motivos de consulta que publica en su perfil profesional.
          </p>
        </div>
        <div className="focus-grid">
          {focus.map((item, index) => (
            <article className="card" key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="motivos">
          <div className="motivos-head">
            <h3>Motivos de consulta</h3>
            <p>{visible.length} temas</p>
          </div>
          <div className="filter-row" role="group" aria-label="Filtrar motivos">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={group === filter.id ? 'chip on' : 'chip'}
                aria-pressed={group === filter.id}
                onClick={() => setGroup(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <ul className="tags">
            {visible.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
