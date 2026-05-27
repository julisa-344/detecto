import {
  Stethoscope,
  Heart,
  Activity,
  ShieldCheck,
  HeartPulse,
  ScanLine,
  Users2,
  HeartHandshake,
  ClipboardList,
  Pill,
  Zap,
  Microscope,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const cardioImages = {
  heroVideo: `${IMG_BASE}especialidades/cardiologia.mp4`,
  side: `${IMG_BASE}especialidades/cardiologia.jpg`,
  cta: `${IMG_BASE}especialidades/cardiologiaCta.jpg`,
}

export const sintomas = [
  { title: 'Dolor o presión en el pecho', desc: 'Molestia torácica que puede irradiarse al brazo o la mandíbula.' },
  { title: 'Palpitaciones', desc: 'Latidos irregulares, acelerados o percibidos con fuerza.' },
  { title: 'Disnea o falta de aire', desc: 'Dificultad para respirar en reposo o con esfuerzo mínimo.' },
  { title: 'Mareos o síncope', desc: 'Episodios de mareo, desmayo o pérdida momentánea de conciencia.' },
  { title: 'Edema en piernas', desc: 'Hinchazón en tobillos o pies sin causa aparente.' },
]

export const condiciones = [
  { title: 'Cardiopatía coronaria', icon: Heart },
  { title: 'Hipertensión arterial', icon: Activity },
  { title: 'Arritmias cardíacas', icon: HeartPulse },
  { title: 'Insuficiencia cardíaca', icon: ShieldCheck },
  { title: 'Valvulopatías', icon: Stethoscope },
  { title: 'Prevención cardiovascular', icon: Zap },
]

export const servicios = [
  {
    title: 'Servicios y procedimientos',
    icon: ClipboardList,
    bullets: [
      'Electrocardiograma (ECG) en reposo y de esfuerzo.',
      'Ecocardiografía transtorácica y transesofágica.',
      'Holter de ritmo cardíaco de 24 y 48 horas.',
      'Monitoreo ambulatorio de presión arterial (MAPA).',
      'Prueba de esfuerzo con protocolo personalizado.',
      'Evaluación y manejo de factores de riesgo cardiovascular.',
    ],
  },
]

export const stripServicios = [
  { title: 'Cardiología clínica', icon: Stethoscope },
  { title: 'Electrocardiografía', icon: Activity },
  { title: 'Ecocardiografía', icon: ScanLine },
  { title: 'Holter cardíaco', icon: HeartPulse },
  { title: 'Equipo especializado', icon: Users2 },
  { title: 'Atención personalizada', icon: HeartHandshake },
]

export const faqs = [
  {
    q: '¿Necesito una orden médica para consultar con cardiología?',
    a: 'No es imprescindible. Puedes agendar una consulta directamente si tienes síntomas como dolor en el pecho, palpitaciones o falta de aire.',
  },
  {
    q: '¿Qué debo llevar a mi primera consulta cardiológica?',
    a: 'Trae exámenes previos como ECG, análisis de laboratorio o informes de imágenes si los tienes. Si tomas medicamentos, lleva la lista actualizada.',
  },
  {
    q: '¿Realizan el ECG y la ecocardiografía en la misma visita?',
    a: 'En muchos casos sí, dependiendo de la evaluación del médico y la disponibilidad del equipo. Consulta al momento de agendar.',
  },
  {
    q: '¿Desde qué edad se recomienda un chequeo cardiovascular preventivo?',
    a: 'A partir de los 40 años, o antes si hay antecedentes familiares de enfermedad cardíaca, hipertensión, diabetes u obesidad.',
  },
]

export const fortalezas = [
  'Salud cardiovascular',
  'Diagnóstico preciso',
  'Tecnología cardiológica',
  'Prevención integral',
  'Atención humana',
  'Detección temprana',
  'Resultados confiables',
]
