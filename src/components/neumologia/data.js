import {
  Stethoscope,
  Wind,
  Activity,
  ShieldAlert,
  ScanLine,
  HeartPulse,
  Pill,
  ClipboardList,
  Users2,
  HeartHandshake,
  Cigarette,
  Microscope,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const neumoImages = {
  heroVideo: `${IMG_BASE}especialidades/neumologia.mp4`,
  side: `${IMG_BASE}especialidades/neumologia.jpg`,
  cta: `${IMG_BASE}especialidades/neumologiaCta.jpg`,
}

export const sintomas = [
  { title: 'Tos crónica', desc: 'Tos persistente por más de 3 semanas sin causa clara.' },
  { title: 'Falta de aire', desc: 'Dificultad respiratoria en reposo o con esfuerzo leve.' },
  { title: 'Sibilancias', desc: 'Silbidos al respirar, opresión o presión en el pecho.' },
  { title: 'Apnea del sueño', desc: 'Ronquidos, pausas respiratorias o cansancio diurno.' },
  { title: 'Despistaje de cáncer', desc: 'Antecedentes familiares o factores de riesgo pulmonar.' },
]

export const condiciones = [
  { title: 'Asma bronquial', icon: Wind },
  { title: 'EPOC', icon: Activity },
  { title: 'Cáncer de pulmón', icon: ShieldAlert },
  { title: 'Infecciones respiratorias', icon: Microscope },
  { title: 'Apnea del sueño', icon: HeartPulse },
  { title: 'Tabaquismo', icon: Cigarette },
]

export const servicios = [
  {
    title: 'Servicios y procedimientos',
    icon: ClipboardList,
    bullets: [
      'Consulta neumológica integral.',
      'Espirometría y pruebas de función pulmonar.',
      'Despistaje de cáncer de pulmón (PulmoScan).',
      'Diagnóstico y tratamiento del asma y EPOC.',
      'Evaluación de apnea del sueño y trastornos respiratorios.',
      'Acompañamiento para dejar de fumar.',
    ],
  },
]

export const stripServicios = [
  { title: 'Neumología clínica', icon: Stethoscope },
  { title: 'Pruebas funcionales', icon: ScanLine },
  { title: 'Despistaje pulmonar', icon: Wind },
  { title: 'Tratamiento del asma', icon: Activity },
  { title: 'Equipo especializado', icon: Users2 },
  { title: 'Atención personalizada', icon: HeartHandshake },
]

export const faqs = [
  {
    q: '¿Cuándo debo acudir al neumólogo?',
    a: 'Si presentas tos persistente, falta de aire, sibilancias o ronquidos con pausas respiratorias, es momento de una evaluación neumológica.',
  },
  {
    q: '¿Qué incluye una espirometría?',
    a: 'Es una prueba simple, no invasiva, que mide la capacidad pulmonar y el flujo de aire para detectar asma, EPOC u otras enfermedades respiratorias.',
  },
  {
    q: '¿Pueden ayudarme a dejar de fumar?',
    a: 'Sí, contamos con un programa de cesación tabáquica con acompañamiento médico y soporte personalizado.',
  },
  {
    q: '¿En qué consiste el PulmoScan?',
    a: 'Es nuestro paquete preventivo de salud respiratoria que combina consulta, espirometría, radiografía y lectura por especialista en una sola visita.',
  },
  {
    q: '¿Atienden urgencias respiratorias?',
    a: 'Para urgencias contamos con atención 24/7 a través de la central. Para consultas programadas puedes agendar online o por WhatsApp.',
  },
]

export const fortalezas = [
  'Excelencia neumológica',
  'Diagnóstico temprano',
  'Tecnología avanzada',
  'Cuidado personalizado',
  'Atención humana',
  'Prevención del cáncer de pulmón',
  'Resultados confiables',
]
