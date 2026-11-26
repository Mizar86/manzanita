import { useEffect, useState } from 'react'
import { Wordmark } from './Logo'

const LINKS = [
  ['inicio', 'Inicio'],
  ['sobre', 'Sobre mí'],
  ['enfoque', 'Enfoque'],
  ['servicios', 'Servicios'],
  ['opiniones', 'Opiniones'],
  ['consultorio', 'Consultorio'],
] as const

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight
      const next = height > 0 ? window.scrollY / height : 0
      setProgress((prev) => (Math.abs(prev - next) > 0.004 ? next : prev))
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const nodes = LINKS.map(([id]) => document.getElementById(id)).filter(
      (node): node is HTMLElement => node !== null,
    )
    const visible = new Map<string, number>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio)
          else visible.delete(entry.target.id)
        }
        const top = [...visible.entries()].sort((a, b) => b[1] - a[1])[0]
        if (top) setActive(top[0])
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0 },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={scrolled ? 'header scrolled' : 'header'}>
      <div className="wrap header-inner">
        <a className="brand" href="#inicio" aria-label="manzzanita, inicio">
          <Wordmark />
        </a>
        <nav id="menu-principal" className={open ? 'nav open' : 'nav'} aria-label="Secciones">
          {LINKS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'active' : undefined}
              aria-current={active === id ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="tools">
          <a className="btn btn-primary" href="#agenda" onClick={() => setOpen(false)}>
            Agendar
          </a>
          <button
            type="button"
            className="menu"
            aria-expanded={open}
            aria-controls="menu-principal"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
    </header>
  )
}
