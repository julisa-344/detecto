import {
  Activity,
  Heart,
  ShieldCheck,
  Microscope,
  ClipboardList,
  Users2,
  HeartHandshake,
  Stethoscope,
  Sparkles,
  Baby,
  Syringe,
  Apple,
  AlertCircle,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const pediatriaImages = {
  heroVideo: `${IMG_BASE}especialidades/pediatria.mp4`,
  side: `${IMG_BASE}especialidades/pediatria.jpg`,
  cta: `${IMG_BASE}especialidades/pediatriaCta.jpg`,
}

export const sintomas = [
  { title: 'Controles de crecimiento y desarrollo', desc: 'Evaluaciones periódicas según la edad.' },
  { title: 'Vacunación y prevención', desc: 'Calendario completo y orientación familiar.' },
  { title: 'Infecciones recurrentes', desc: 'Episodios persistentes que requieren evaluación.' },
  { title: 'Problemas de alimentación o nutrición', desc: 'Asesoría en lactancia y dieta infantil.' },
  { title: 'Trastornos del sueño o conducta', desc: 'Cambios persistentes en hábitos del niño.' },
  { title: 'Enfermedades crónicas o complejas', desc: 'Manejo integral con seguimiento continuo.' },
]

export const condiciones = [
  { title: 'Infecciones respiratorias y gastrointestinales', icon: Activity },
  { title: 'Asma y alergias', icon: AlertCircle },
  { title: 'Trastornos del desarrollo y comportamiento', icon: Sparkles },
  { title: 'Enfermedades infecciosas', icon: ShieldCheck },
  { title: 'Problemas de crecimiento y nutrición', icon: Apple },
  { title: 'Enfermedades crónicas (diabetes, epilepsia)', icon: Heart },
]

export const servicios = [
  {
    title: 'Servicios y procedimientos',
    icon: ClipboardList,
    bullets: [
      'Controles de salud y desarrollo.',
      'Vacunación según el calendario nacional.',
      'Evaluación y manejo de enfermedades agudas y crónicas.',
      'Asesoramiento nutricional y de lactancia.',
      'Apoyo psicológico y del comportamiento.',
      'Coordinación con especialistas para atención integral.',
    ],
  },
]

export const stripServicios = [
  { title: 'Pediatría clínica', icon: Baby },
  { title: 'Controles de crecimiento', icon: Activity },
  { title: 'Vacunación', icon: Syringe },
  { title: 'Nutrición infantil', icon: Apple },
  { title: 'Atención humana', icon: HeartHandshake },
  { title: 'Equipo especializado', icon: Users2 },
]

export const faqs = [
  {
    q: '¿Con qué frecuencia debo llevar a mi hijo a control si no está enfermo?',
    a: 'Los controles preventivos son más frecuentes en el primer año y se espacian luego según la edad y necesidades del niño.',
  },
  {
    q: '¿Qué tipo de apoyo ofrecen para la alimentación y lactancia?',
    a: 'Asesoría en lactancia materna, introducción de alimentos, planes nutricionales y manejo de dificultades alimentarias.',
  },
  {
    q: '¿Cómo manejan las enfermedades crónicas como el asma o la diabetes?',
    a: 'Con un plan integral, educación familiar, controles periódicos y coordinación con otras especialidades cuando se requiere.',
  },
  {
    q: '¿Qué debo hacer si noto cambios en el comportamiento o sueño de mi hijo?',
    a: 'Agenda una consulta. Evaluamos el contexto, descartamos causas médicas y brindamos orientación o derivación adecuada.',
  },
]

export const fortalezas = [
  'Pediatría integral',
  'Controles preventivos',
  'Vacunación',
  'Nutrición infantil',
  'Manejo de crónicos',
  'Atención humana',
  'Equipo especializado',
]
