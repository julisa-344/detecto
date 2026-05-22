import {
  Activity,
  Brain,
  ShieldCheck,
  Microscope,
  ClipboardList,
  Users2,
  HeartHandshake,
  Stethoscope,
  Sparkles,
  Scissors,
  AlertCircle,
  Scan,
  Zap,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const neuroImages = {
  heroVideo: `${IMG_BASE}especialidades/neurocirugia.mp4`,
  side: `${IMG_BASE}especialidades/neurocirugia.jpg`,
  cta: `${IMG_BASE}especialidades/neurocirugiaCta.jpg`,
}

export const sintomas = [
  { title: 'Dolores de cabeza persistentes', desc: 'Cefaleas progresivas o sin causa clara.' },
  { title: 'Convulsiones', desc: 'Episodios que requieren evaluación neurológica.' },
  { title: 'Pérdida de fuerza o entumecimiento', desc: 'Alteraciones sensitivas o motoras.' },
  { title: 'Problemas de equilibrio o mareos', desc: 'Vértigos persistentes o inestabilidad.' },
  { title: 'Hernias de disco', desc: 'Dolor radicular intenso por compresión nerviosa.' },
  { title: 'Tumores cerebrales o medulares', desc: 'Sospecha o diagnóstico que requiere cirugía.' },
  { title: 'Parkinson y trastornos del movimiento', desc: 'Manejo quirúrgico y funcional.' },
  { title: 'Lesiones traumáticas', desc: 'Traumatismos craneales o de columna.' },
]

export const condiciones = [
  { title: 'Tumores cerebrales y medulares', icon: Brain },
  { title: 'Aneurismas y malformaciones vasculares', icon: AlertCircle },
  { title: 'Hernias discales y patologías de columna', icon: Activity },
  { title: 'Lesiones traumáticas del sistema nervioso', icon: ShieldCheck },
  { title: 'Hidrocefalia y malformaciones congénitas', icon: Sparkles },
  { title: 'Parkinson y trastornos del movimiento', icon: Zap },
  { title: 'Cirugía de nervios periféricos', icon: Microscope },
]

export const servicios = [
  {
    title: 'Diagnóstico avanzado',
    icon: Scan,
    bullets: [
      'Resonancia magnética (RM) y TAC cerebral o de columna.',
      'Angiografía cerebral.',
      'Estudios neurofisiológicos (EEG, EMG).',
      'Evaluación funcional para Parkinson y trastornos del movimiento.',
      'Biopsias neurológicas.',
    ],
  },
  {
    title: 'Cirugía y tratamientos avanzados',
    icon: Scissors,
    bullets: [
      'Resección de tumores cerebrales y medulares.',
      'Cirugía de columna mínimamente invasiva.',
      'Clipaje de aneurismas y malformaciones vasculares.',
      'Cirugía funcional para Parkinson (estimulación cerebral profunda).',
      'Implantes de electrodos para control de movimiento y dolor.',
      'Descompresión espinal.',
    ],
  },
  {
    title: 'Acompañamiento integral',
    icon: HeartHandshake,
    bullets: [
      'Evaluación preoperatoria completa.',
      'Cuidados neurointensivos post cirugía.',
      'Rehabilitación neurológica y fisioterapia.',
      'Seguimiento especializado a largo plazo.',
    ],
  },
]

export const stripServicios = [
  { title: 'Neurocirugía', icon: Brain },
  { title: 'Cirugía de columna', icon: Activity },
  { title: 'Diagnóstico avanzado', icon: Scan },
  { title: 'Cirugía funcional', icon: Zap },
  { title: 'Rehabilitación neurológica', icon: HeartHandshake },
  { title: 'Equipo especializado', icon: Users2 },
]

export const faqs = [
  {
    q: '¿Cuándo un dolor de cabeza o mareo requiere ver a un neurocirujano?',
    a: 'Cuando son persistentes, progresivos o se acompañan de síntomas como pérdida de fuerza, alteraciones visuales o convulsiones.',
  },
  {
    q: '¿Qué es la cirugía funcional y cómo ayuda en el Parkinson?',
    a: 'Es la estimulación cerebral profunda mediante electrodos que controla síntomas motores y mejora la calidad de vida.',
  },
  {
    q: '¿Cómo se tratan los aneurismas y tumores en Detecta Clínica?',
    a: 'Con técnicas microquirúrgicas, endovasculares y cirugía mínimamente invasiva según el tipo y ubicación de la lesión.',
  },
  {
    q: '¿Qué opciones ofrecen para el dolor intenso de espalda o hernias?',
    a: 'Desde tratamiento conservador hasta cirugía mínimamente invasiva, descompresión y estabilización vertebral.',
  },
]

export const fortalezas = [
  'Neurocirugía clínica',
  'Cirugía de columna',
  'Cirugía funcional',
  'Diagnóstico avanzado',
  'Rehabilitación neurológica',
  'Atención humana',
  'Tecnología de Alta Precisión',
]
