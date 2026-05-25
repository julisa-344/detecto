export const TIPOS_DOCUMENTO = [
  'DNI',
  'Carnet de Extranjería',
  'Pasaporte',
  'RUC',
]

export const SERVICIOS = [
  'Atención médica / Consulta',
  'Citas y reservas',
  'Resultados de exámenes',
  'Telemedicina',
  'Diagnóstico por imágenes',
  'Laboratorio clínico',
  'Facturación / Cobros',
  'Atención telefónica',
  'Otro',
]

export const TIPOS_REGISTRO = [
  {
    value: 'reclamo',
    label: 'Reclamo',
    description: 'Petición formal por incumplimiento; exige una solución concreta.',
  },
  {
    value: 'queja',
    label: 'Queja',
    description: 'Expresión de insatisfacción sin exigir una solución específica.',
  },
]

export const initialForm = {
  tipoDocumento: '',
  numDocumento: '',
  nombre: '',
  email: '',
  telefono: '',
  direccion: '',
  tipo: '',
  servicio: '',
  detalle: '',
}

export const MARQUEE_ITEMS = [
  'Atención al Cliente',
  'Respuesta Garantizada',
  'Plazo de 30 días',
  'Confidencialidad',
  'Mejora Continua',
  'Compromiso con el Paciente',
  'Trazabilidad',
  'Indecopi',
]

export const HERO_BG = `${import.meta.env.VITE_BASE_IMAGE_URL}libro-reclamaciones/hero.jpg`
