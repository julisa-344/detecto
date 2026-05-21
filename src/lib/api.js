// Siempre usamos rutas relativas (/api/...). En dev las resuelve el proxy de
// Vite (vite.config), en prod las resuelven los rewrites de vercel.json hacia
// el Lambda. Así la URL del backend no queda expuesta en el bundle.
async function request(path, { params, signal } = {}) {
  const url = new URL(path, window.location.origin)
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
