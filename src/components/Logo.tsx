type Letter = [string, string]

const TOP: Letter[] = [
  ['m', '#F5385C'],
  ['a', '#2EB6E8'],
  ['n', '#F6E534'],
  ['z', '#A4C63A'],
]

const BOTTOM_LEFT: Letter[] = [
  ['z', '#5EC4D8'],
  ['a', '#F6E534'],
  ['n', '#80367E'],
]

const BOTTOM_RIGHT: Letter[] = [
  ['t', '#F5385C'],
  ['a', '#80367E'],
]

export function Apple({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <g fill="#fff">
        <path d="M32 20c8-2 20 4 20 20 0 12-8 20-20 20S12 52 12 40C12 24 22 18 32 20z" />
        <ellipse cx="45" cy="16" rx="12" ry="7" transform="rotate(-36 45 16)" />
        <path d="M30 18c2-9 9-14 14-12-2 5-2 9 0 13-5 .4-10 0-14-1z" />
      </g>
      <path d="M32 23c7-1.6 16.5 3.2 16.5 17.2C48.5 52 41.2 58 32 58S15.5 52 15.5 40.2C15.5 26.2 24.4 21.4 32 23z" fill="#A4C63A" />
      <ellipse cx="44.2" cy="16.6" rx="8.4" ry="4.5" transform="rotate(-36 44.2 16.6)" fill="#D4EE7A" />
      <path d="M32 24c.8-6 4-10 8-11" fill="none" stroke="#5E8E2E" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

function Letters({ items }: { items: Letter[] }) {
  return items.map(([char, color]) => (
    <span key={`${char}-${color}`} style={{ color }}>
      {char}
    </span>
  ))
}

export function Wordmark({ size = 'md' }: { size?: 'md' | 'lg' }) {
  return (
    <span className={`wordmark ${size}`} aria-hidden="true">
      <span className="wm-row">
        <Letters items={TOP} />
      </span>
      <span className="wm-row">
        <Letters items={BOTTOM_LEFT} />
        <Apple className="wm-apple" />
        <Letters items={BOTTOM_RIGHT} />
      </span>
    </span>
  )
}
