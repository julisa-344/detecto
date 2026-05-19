import {
  Stethoscope,
  FileText,
  Activity,
  Scan,
  ClipboardList,
  HeartHandshake,
  Cpu,
  Clock,
  Wind,
} from 'lucide-react'

export const servicios = [
  { title: 'Consulta con neumología', icon: Stethoscope },
  { title: 'Espirometría con broncodilatador', icon: Wind },
  { title: 'Radiografía de tórax (PA + lateral)', icon: Scan },
  { title: 'Lectura personalizada de resultados', icon: FileText },
  { title: 'Despistaje EPOC', icon: Activity },
  { title: 'Despistaje de cáncer de pulmón', icon: ClipboardList },
]

export const beneficios = [
  {
    icon: Stethoscope,
    title: 'Atención especializada',
    text: 'Neumólogos con enfoque preventivo para una evaluación experta y precisa.',
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
  'Tienes antecedentes de tabaquismo (actual o exfumador)',
  'Presentas tos crónica, silbidos, opresión en el pecho o fatiga',
  'Has estado expuesto laboralmente a polvo, humo o productos químicos',
  'Eres mayor de 40 años con historial familiar de enfermedades pulmonares',
  'Buscas detectar a tiempo EPOC, cáncer de pulmón u otras patologías',
]

export const planes = [
  {
    badge: 'Promoción especial',
    price: 'S/ 400.00',
    priceNote: 'Precio regular S/ 571.71',
    items: [
      'Consulta con neumología',
      'Espirometría con broncodilatador',
      'Radiografía de tórax (PA + lateral)',
      'Lectura personalizada de resultados',
    ],
    highlighted: true,
  },
]

export const preparacion = [
  'No usar broncodilatadores 8 horas antes.',
  'Evitar fumar o comer en exceso 2 horas antes.',
  'Usar ropa cómoda y sin metales en el pecho.',
  'No necesitas venir en ayunas.',
]

export const importante =
  'Si no cumples las indicaciones, puedes reprogramar tu cita hasta 24 horas antes del día del despistaje.'

export const faqs = [
  {
    q: '¿Quién debería hacerse el PulmoScan?',
    a: 'Personas con antecedentes de tabaquismo, exposición laboral a humo/polvo, síntomas respiratorios persistentes o mayores de 40 años con historia familiar.',
  },
  {
    q: '¿Necesito ayuno?',
    a: 'No. Solo evita broncodilatadores 8 horas antes y no comas en exceso 2 horas previas al estudio.',
  },
  {
    q: '¿Cuánto demora la atención completa?',
    a: 'En promedio entre 2 y 3 horas. Una experiencia One Day: todas tus pruebas en una sola visita.',
  },
  {
    q: '¿Y si el PulmoScan detecta algo?',
    a: 'Te derivamos de inmediato con un neumólogo especialista y diseñamos un plan de tratamiento personalizado con seguimiento continuo.',
  },
]
