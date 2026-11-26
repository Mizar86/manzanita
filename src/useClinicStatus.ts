import { useEffect, useState } from 'react'
import { getClinicStatus } from './clinicStatus'

export function useClinicStatus() {
  const [status, setStatus] = useState(() => getClinicStatus())

  useEffect(() => {
    const id = window.setInterval(() => setStatus(getClinicStatus()), 30000)
    return () => window.clearInterval(id)
  }, [])

  return status
}
