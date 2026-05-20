const BASE = import.meta.env.VITE_BASE_IMAGE_URL

export function getFileUrl(path) {
  if (!path) return null
  if (/^https?:\/\//i.test(path)) return path
  if (!BASE) {
    console.error('VITE_BASE_IMAGE_URL no está definida')
    return path
  }
  return `${BASE.replace(/\/$/, '')}/${path.replace(/^\//, '')}`
}
