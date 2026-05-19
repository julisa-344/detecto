import {
  Activity,
  ShieldCheck,
  Microscope,
  ClipboardList,
  Users2,
  HeartHandshake,
  Stethoscope,
  Sparkles,
  AlertCircle,
  Dumbbell,
  Brain,
  Bone,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const fisicaImages = {
  heroVideo: `${IMG_BASE}especialidades/rehabilitacion.mp4`,
  side: `${IMG_BASE}especialidades/rehabilitacion.jpg`,
  cta: `${IMG_BASE}especialidades/rehabilitacionCta.jpg`,
}

export const sintomas = [
  { title: 'Dolor crónico o agudo', desc: 'Molestias persistentes que limitan tu día a día.' },
  { title: 'Lesiones deportivas o laborales', desc: 'Recuperación funcional especializada.' },
  { title: 'Recuperación postquirúrgica', desc: 'Rehabilitación tras una intervención.' },
  { title: 'Trastornos neurológicos', desc: 'Accidente cerebrovascular o esclerosis múltiple.' },
  { title: 'Condiciones musculoesqueléticas', desc: 'Artritis, tendinitis u otras afecciones.' },
  { title: 'Dificultad en actividades diarias', desc: 'Pérdida de movilidad por dolor o debilidad.' },
]

export const condiciones = [
  { title: 'Lesiones deportivas y laborales', icon: Dumbbell },
  { title: 'Dolor musculoesquelético crónico', icon: AlertCircle },
  { title: 'Rehabilitación postquirúrgica', icon: ShieldCheck },
  { title: 'Trastornos neurológicos y neuromusculares', icon: Brain },
  { title: 'Condiciones ortopédicas y traumatológicas', icon: Bone },
  { title: 'Enfermedades degenerativas articulares', icon: Sparkles },
  { title: 'Lesiones de la médula espinal', icon: Activity },
  { title: 'Amputaciones y prótesis', icon: HeartHandshake },
]

export const servicios = [
  {
    title: 'Servicios y procedimientos',
    icon: ClipboardList,
    bullets: [
      'Evaluación y diagnóstico funcional.',
      'Terapia física y ocupacional.',
      'Ejercicios terapéuticos personalizados.',
      'Terapia manual y técnicas de movilización.',
      'Estimulación eléctrica funcional y tecnología avanzada.',
      'Entrenamiento en el uso de prótesis y órtesis.',
      'Programas de rehabilitación para lesiones medulares.',
      'Rehabilitación vestibular y del equilibrio.',
    ],
  },
]

export const stripServicios = [
  { title: 'Medicina física', icon: Stethoscope },
  { title: 'Terapia física', icon: Activity },
  { title: 'Rehabilitación neurológica', icon: Brain },
  { title: 'Lesiones deportivas', icon: Dumbbell },
  { title: 'Recuperación postquirúrgica', icon: HeartHandshake },
  { title: 'Equipo multidisciplinario', icon: Users2 },
]

export const faqs = [
  {
    q: '¿Cuál es la función de un médico fisiatra en mi recuperación?',
    o: '',
    a: 'Coordina tu rehabilitación, integra terapias, define objetivos funcionales y evalúa tu progreso de forma continua.',
  },
  {
    q: '¿Es necesaria la rehabilitación después de una cirugía?',
    a: 'En la mayoría de cirugías ortopédicas o neurológicas la rehabilitación es clave para recuperar fuerza y movilidad.',
  },
  {
    q: '¿Qué tipo de condiciones neurológicas pueden tratarse aquí?',
    a: 'ACV, esclerosis múltiple, parálisis, lesiones medulares y otros trastornos del sistema nervioso central y periférico.',
  },
  {
    q: '¿Ayudan también con problemas de equilibrio y mareos?',
    a: 'Sí. Realizamos rehabilitación vestibular y entrenamiento del equilibrio con técnicas específicas.',
  },
]

export const fortalezas = [
  'Medicina física',
  'Rehabilitación neurológica',
  'Terapia física',
  'Manejo del dolor',
  'Atención humana',
  'Equipo multidisciplinario',
  'Tecnología avanzada',
]
