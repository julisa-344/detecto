import {
  Stethoscope,
  Activity,
  Heart,
  ShieldCheck,
  Microscope,
  ClipboardList,
  Syringe,
  Pill,
  Users2,
  HeartHandshake,
  Apple,
  Sparkles,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const medicinaImages = {
  heroVideo: `${IMG_BASE}especialidades/interna.mp4`,
  side: `${IMG_BASE}especialidades/interna.jpg`,
  cta: `${IMG_BASE}especialidades/internaCta.jpg`,
}

export const sintomas = [
  { title: 'Exámenes médicos de rutina', desc: 'despistajes preventivos para tu salud integral.' },
  { title: 'Control de enfermedades crónicas', desc: 'Hipertensión, diabetes y otras condiciones.' },
  { title: 'Evaluación de síntomas generales', desc: 'Cansancio, dolor o malestares sin causa clara.' },
  { title: 'Asesoría en salud preventiva', desc: 'Estilo de vida y hábitos saludables.' },
  { title: 'Vacunación y despistajes periódicos', desc: 'Mantenimiento de tu calendario sanitario.' },
  { title: 'Derivación a especialistas', desc: 'Coordinación con otras áreas cuando lo necesites.' },
]

export const condiciones = [
  { title: 'Enfermedades respiratorias y digestivas comunes', icon: Activity },
  { title: 'Control y seguimiento de enfermedades crónicas', icon: Heart },
  { title: 'Evaluación y manejo de síntomas generales', icon: ClipboardList },
  { title: 'Asesoría en salud preventiva y estilo de vida', icon: ShieldCheck },
  { title: 'Coordinación de atención con especialistas', icon: Users2 },
]

export const servicios = [
  {
    title: 'Servicios y procedimientos',
    icon: ClipboardList,
    bullets: [
      'Consultas médicas generales.',
      'Exámenes de laboratorio y diagnóstico.',
      'Asesoría en nutrición y ejercicio.',
      'Vacunación y control de salud preventiva.',
      'Derivación a especialistas según sea necesario.',
    ],
  },
]

export const stripServicios = [
  { title: 'Medicina interna', icon: Stethoscope },
  { title: 'Salud preventiva', icon: ShieldCheck },
  { title: 'Manejo de crónicos', icon: Heart },
  { title: 'Diagnóstico clínico', icon: Microscope },
  { title: 'Vacunación', icon: Syringe },
  { title: 'Atención humana', icon: HeartHandshake },
]

export const faqs = [
  {
    q: '¿Cuál es la diferencia entre un médico general y un internista?',
    a: 'El internista tiene formación más profunda en enfermedades del adulto y manejo de condiciones complejas o múltiples a la vez.',
  },
  {
    q: '¿Qué tipo de enfermedades crónicas pueden controlar en Detecta?',
    a: 'Hipertensión, diabetes, dislipidemia, asma, EPOC, hipotiroidismo, entre otras, con seguimiento periódico.',
  },
  {
    q: '¿Cuándo debo acudir al internista por síntomas generales?',
    a: 'Cuando hay cansancio persistente, dolor sin causa clara, pérdida de peso o síntomas que no mejoran con tratamientos básicos.',
  },
  {
    q: '¿Cómo coordinan mi atención si necesito ver a otros especialistas?',
    a: 'El internista integra tu caso, deriva al especialista adecuado y mantiene una visión global de tu salud.',
  },
]

export const fortalezas = [
  'Medicina interna',
  'Atención preventiva',
  'Manejo de crónicos',
  'Diagnóstico integral',
  'Coordinación clínica',
  'Atención humana',
  'Equipo especializado',
]
