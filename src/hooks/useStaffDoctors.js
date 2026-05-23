import { useEffect, useState } from 'react'
import { api } from '../lib/api'

// Fetches the doctor list and then hydrates each entry with its detail
// (cmp, rne, bio, etc.) which the list endpoint omits.
export function useStaffDoctors({ pageSize = 20 } = {}) {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    let cancelled = false

    async function load() {
      try {
        setLoading(true)
        setError(null)
        const list = await api.doctors.list({
          pageSize,
          signal: controller.signal,
        })
        const items = list?.items ?? []
        const details = await Promise.all(
          items.map((d) =>
            api.doctors
              .get(d.id, { signal: controller.signal })
              .catch(() => d) // fall back to list entry if detail fails
          )
        )
        if (cancelled) return
        setDoctors(details)
        setLoading(false)
      } catch (err) {
        if (cancelled || err.name === 'AbortError') return
        setError(err)
        setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
      controller.abort()
    }
  }, [pageSize])

  return { doctors, loading, error }
}
