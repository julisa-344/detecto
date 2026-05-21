// En dev usamos el proxy de Vite (target /api) para evitar CORS.
// En prod, si el backend habilita CORS, podemos usar VITE_API_BASE_URL directo.
const BASE = import.meta.env.DEV ? '' : (import.meta.env.VITE_API_BASE_URL ?? 'https://b7xzbqvq4oo56pxuosb2wr2zim0tcots.lambda-url.us-east-1.on.aws')

async function request(path, { params, signal } = {}) {
  const url = new URL(`${BASE}${path}`, window.location.origin)
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value === undefined || value === null || value === '') continue
      url.searchParams.set(key, value)
    }
  }
  const res = await fetch(url.toString(), { signal })
  if (!res.ok) {
    throw new Error(`API ${res.status}: ${res.statusText}`)
  }
  return res.json()
}

export const api = {
  doctors: {
    list: ({ page = 1, pageSize = 12, search = '', signal } = {}) =>
      request('/api/record-doctor', {
        params: { Page: page, PageSize: pageSize, Search: search },
        signal,
      }),
    get: (id, { signal } = {}) =>
      request(`/api/record-doctor/${id}`, { signal }),
  },
}
