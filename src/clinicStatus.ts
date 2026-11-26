export type ClinicStatus = {
  open: boolean
  detail: string
  day: number
}

const RANGES: Record<number, [number, number][]> = {
  0: [],
  1: [
    [9 * 60, 14 * 60],
    [16 * 60, 20 * 60],
  ],
  2: [
    [9 * 60, 14 * 60],
    [16 * 60, 20 * 60],
  ],
  3: [
    [9 * 60, 14 * 60],
    [16 * 60, 20 * 60],
  ],
  4: [
    [9 * 60, 14 * 60],
    [16 * 60, 20 * 60],
  ],
  5: [
    [9 * 60, 14 * 60],
    [16 * 60, 20 * 60],
  ],
  6: [[10 * 60, 14 * 60]],
}

const WEEKDAY: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
}

const DAYS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']

function formatTime(mins: number) {
  const h = Math.floor(mins / 60)
  const m = mins % 60
  return `${h}:${m.toString().padStart(2, '0')}`
}

export function getClinicStatus(date = new Date()): ClinicStatus {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Mexico_City',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date)

  const weekday = parts.find((part) => part.type === 'weekday')?.value ?? 'Sun'
  let hour = Number(parts.find((part) => part.type === 'hour')?.value ?? '0')
  const minute = Number(parts.find((part) => part.type === 'minute')?.value ?? '0')
  if (hour === 24) hour = 0

  const day = WEEKDAY[weekday] ?? 0
  const mins = hour * 60 + minute

  for (const [start, end] of RANGES[day]) {
    if (mins >= start && mins < end) {
      return { open: true, day, detail: `Hoy, hasta las ${formatTime(end)}` }
    }
    if (mins < start) {
      return { open: false, day, detail: `Abre hoy a las ${formatTime(start)}` }
    }
  }

  for (let offset = 1; offset <= 7; offset += 1) {
    const next = (day + offset) % 7
    const ranges = RANGES[next]
    if (ranges.length > 0) {
      const when = offset === 1 ? 'mañana' : `el ${DAYS[next]}`
      return { open: false, day, detail: `Abre ${when} a las ${formatTime(ranges[0][0])}` }
    }
  }

  return { open: false, day, detail: 'Confirma el horario por WhatsApp' }
}
