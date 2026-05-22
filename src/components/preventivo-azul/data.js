import {
  Stethoscope,
  FileText,
  Activity,
  Scan,
  ClipboardList,
  HeartHandshake,
  Cpu,
  Clock,
  TestTube,
} from 'lucide-react'

export const servicios = [
  { title: 'Triaje integral', icon: ClipboardList },
  { title: 'Consulta oncológica', icon: Stethoscope },
  { title: 'Ecografía testicular', icon: Scan },
  { title: 'PSA Total y PSA Libre', icon: TestTube },
  { title: 'Ecografía prostática', icon: Activity },
  { title: 'Lectura de resultados', icon: FileText },
]

export const beneficios = [
  {
    icon: Stethoscope,
    title: 'Atención especializada',
    text: 'Equipo médico con enfoque oncológico para una evaluación experta y precisa.',
  },
  {
    icon: HeartHandshake,
    title: 'Trato cercano',
    text: 'Acompañamiento humano en cada paso para que tu experiencia sea tranquila.',
  },
  {
    icon: Cpu,
    title: 'Tecnología de vanguardia',
    text: 'Equipos de última generación que respaldan diagnósticos más confiables.',
  },
  {
    icon: Clock,
    title: 'Resultados rápidos',
    text: 'Te entregamos tus resultados el mismo día o en el menor tiempo posible.',
  },
]

export const perfilPaciente = [
  'Quieres una evaluación integral en un solo día',
  'Buscas detectar a tiempo cualquier indicio para actuar con tranquilidad',
  'Necesitas orientación clara con la lectura de tus resultados',
  'Deseas un seguimiento urológico y prostático con tecnología de vanguardia',
  'Tienes antecedentes familiares y quieres asesoramiento experto',
]

export const planes = [
  {
    badge: 'Para menores de 40 años',
    price: 'S/ 450.00',
    priceNote: '(IGV incl.)',
    items: [
      'Consulta oncológica',
      'Hemograma completo',
      'Creatinina y urea',
      'Ecografía de abdomen completo',
      'Ecografía testicular',
      'Lectura de resultados',
    ],
    highlighted: false,
  },
  {
    badge: 'Para mayores de 40 años',
    price: 'S/ 580.00',
    priceNote: '(IGV incl.)',
    items: [
      'Consulta oncológica',
      'Hemograma completo',
      'Creatinina y urea',
      'PSA total y PSA libre',
      'Ecografía de abdomen completo',
      'Ecografía de próstata',
      'Ecografía testicular',
      'Lectura de resultados',
    ],
    highlighted: true,
  },
]

export const preparacion = [
  'Realizar ayuno de 8 horas.',
  'Evitar actividad física intensa 24 horas antes.',
  'Hidratarse bien el día previo.',
  'Traer resultados médicos previos si los tienes.',
]

export const importante =
  'Si no cumples las indicaciones, puedes reprogramar tu cita hasta 24 horas antes del día del despistaje.'

export const faqs = [
  {
    q: '¿A qué edad debo empezar mi preventivo masculino?',
    a: 'Se recomienda iniciar evaluaciones urológicas a partir de los 40 años, o antes si existen antecedentes familiares de cáncer de próstata.',
  },
  {
    q: '¿Necesito ayuno?',
    a: 'Sí, recomendamos ayuno de 8 horas para los análisis incluidos en el plan.',
  },
  {
    q: '¿Cuánto demora la atención completa?',
    a: 'En promedio entre 2 y 3 horas. Una experiencia One Day: todas tus pruebas en una sola visita con acompañamiento del equipo.',
  },
  {
    q: '¿Cuándo entregan los resultados?',
    a: 'Los resultados se entregan progresivamente y se complementan con una sesión de lectura para que comprendas cada hallazgo.',
  },
]
