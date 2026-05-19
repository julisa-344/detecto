import {
  Activity,
  Brain,
  Heart,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users2,
  Stethoscope,
  Pill,
  ClipboardList,
  AlertCircle,
  Apple,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const geriatriaImages = {
  heroVideo: `${IMG_BASE}especialidades/geriatria.mp4`,
  side: `${IMG_BASE}especialidades/geriatrico.jpg`,
  cta: `${IMG_BASE}especialidades/geriatriaCta.jpg`,
  
}

export const sintomas = [
  { title: 'Pérdida de memoria o confusión', desc: 'Olvidos frecuentes o desorientación.' },
  { title: 'Dificultades en actividades diarias', desc: 'Pérdida de autonomía en tareas cotidianas.' },
  { title: 'Caídas frecuentes', desc: 'Problemas de equilibrio o estabilidad.' },
  { title: 'Dolor crónico o movilidad reducida', desc: 'Limitaciones físicas persistentes.' },
  { title: 'Enfermedades crónicas', desc: 'Hipertensión, diabetes o insuficiencia renal.' },
  { title: 'Asesoría en cuidados paliativos', desc: 'Acompañamiento en etapas avanzadas.' },
]

export const condiciones = [
  { title: 'Enfermedades crónicas en adultos mayores', icon: Heart },
  { title: 'Síndromes geriátricos (caídas, delirium)', icon: AlertCircle },
  { title: 'Trastornos cognitivos y demencias', icon: Brain },
  { title: 'Fragilidad y sarcopenia', icon: Activity },
  { title: 'Polifarmacia y revisión de tratamientos', icon: Pill },
  { title: 'Cuidados paliativos y planificación', icon: HeartHandshake },
]

export const servicios = [
  {
    title: 'Servicios y procedimientos disponibles',
    icon: ClipboardList,
    bullets: [
      'Evaluación geriátrica integral.',
      'Planificación de cuidados personalizados.',
      'Revisión y ajuste de medicamentos.',
      'Terapias físicas y ocupacionales.',
      'Asesoría en nutrición y prevención de caídas.',
      'Apoyo emocional y psicológico.',
      'Coordinación con otros especialistas.',
    ],
  },
]

export const stripServicios = [
  { title: 'Geriatría clínica', icon: Stethoscope },
  { title: 'Evaluación integral', icon: ClipboardList },
  { title: 'Manejo de crónicos', icon: Heart },
  { title: 'Prevención de caídas', icon: ShieldCheck },
  { title: 'Nutrición geriátrica', icon: Apple },
  { title: 'Equipo multidisciplinario', icon: Users2 },
]

export const faqs = [
  {
    q: '¿A partir de qué edad se recomienda visitar al geriatra?',
    a: 'Habitualmente desde los 65 años, o antes si existen múltiples enfermedades crónicas o pérdida de funcionalidad.',
  },
  {
    q: '¿Qué es una Evaluación Geriátrica Integral?',
    a: 'Es una valoración completa que abarca aspectos médicos, funcionales, mentales, sociales y nutricionales para planificar tu cuidado.',
  },
  {
    q: '¿Cómo ayudan con la pérdida de memoria?',
    a: 'Realizamos diagnóstico diferencial, estrategias de estimulación cognitiva, ajuste farmacológico y orientación familiar.',
  },
  {
    q: '¿Qué hacen si el paciente toma demasiadas pastillas?',
    a: 'Revisamos la polifarmacia para simplificar esquemas, eliminar medicamentos innecesarios y reducir interacciones.',
  },
]

export const fortalezas = [
  'Atención geriátrica',
  'Evaluación integral',
  'Manejo de crónicos',
  'Cuidados paliativos',
  'Prevención de caídas',
  'Acompañamiento familiar',
  'Atención humana',
]
