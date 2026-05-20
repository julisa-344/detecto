import { useEffect, useState } from 'react'
import { api } from '../lib/api'

export function useDoctors({ page = 1, pageSize = 12, search = '' } = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)
    api.doctors
      .list({ page, pageSize, search, signal: controller.signal })
      .then((res) => {
        if (controller.signal.aborted) return
        setData(res)
        setLoading(false)
      })
      .catch((err) => {
        if (controller.signal.aborted || err.name === 'AbortError') return
        setError(err)
        setLoading(false)
      })
    return () => controller.abort()
  }, [page, pageSize, search])

  return {
    doctors: data?.items ?? [],
    totalCount: data?.totalCount ?? 0,
    totalPages: data?.totalPages ?? 1,
    page: data?.page ?? page,
    loading,
    error,
  }
}

export function useDoctor(id) {
  const [doctor, setDoctor] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) {
      setLoading(false)
      return
    }
    const controller = new AbortController()
    setLoading(true)
    setError(null)
    api.doctors
      .get(id, { signal: controller.signal })
      .then((res) => {
        if (controller.signal.aborted) return
        setDoctor(res)
        setLoading(false)
      })
      .catch((err) => {
        if (controller.signal.aborted || err.name === 'AbortError') return
        setError(err)
        setLoading(false)
      })
    return () => controller.abort()
  }, [id])

  return { doctor, loading, error }
}
