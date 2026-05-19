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
  Scissors,
  AlertCircle,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const ginecoObsImages = {
  heroVideo: `${IMG_BASE}especialidades/ginecologia.mp4`,
  side: `${IMG_BASE}especialidades/ginecologia.jpg`,
  cta: `${IMG_BASE}especialidades/ginecologiaCta.jpg`,
}

export const sintomas = [
  { title: 'Exámenes ginecológicos de rutina', desc: 'Controles preventivos periódicos.' },
  { title: 'Embarazo o planificación familiar', desc: 'Seguimiento, orientación y control reproductivo.' },
  { title: 'Problemas menstruales', desc: 'Irregularidades o dolor durante el ciclo.' },
  { title: 'Dolor pélvico o síntomas inusuales', desc: 'Evaluación de molestias persistentes.' },
  { title: 'Trastornos hormonales', desc: 'Alteraciones en el equilibrio hormonal femenino.' },
  { title: 'Atención postparto', desc: 'Cuidado integral después del nacimiento.' },
]

export const condiciones = [
  { title: 'Atención prenatal y postnatal', icon: Baby },
  { title: 'Cáncer ginecológico (útero, ovarios, cérvix)', icon: ShieldCheck },
  { title: 'Enfermedades del sistema reproductivo femenino', icon: Activity },
  { title: 'Menopausia y trastornos hormonales', icon: Sparkles },
  { title: 'Planificación familiar y control de fertilidad', icon: Heart },
  { title: 'Cirugía ginecológica y obstétrica', icon: Scissors },
]

export const servicios = [
  {
    title: 'Servicios y procedimientos',
    icon: ClipboardList,
    bullets: [
      'Exámenes ginecológicos completos (Papanicolaou, ultrasonidos).',
      'Seguimiento del embarazo con ecografías.',
      'Asesoría en planificación familiar.',
      'Procedimientos quirúrgicos mínimamente invasivos.',
      'Tratamiento de infertilidad y asesoría.',
      'Consultas de postparto y salud mamaria.',
    ],
  },
]

export const stripServicios = [
  { title: 'Ginecología y obstetricia', icon: Stethoscope },
  { title: 'Control prenatal', icon: Baby },
  { title: 'Salud reproductiva', icon: Heart },
  { title: 'Prevención oncológica', icon: ShieldCheck },
  { title: 'Cirugía mínimamente invasiva', icon: Scissors },
  { title: 'Acompañamiento integral', icon: HeartHandshake },
]

export const faqs = [
  {
    q: '¿Cuál es la diferencia entre Ginecología y Obstetricia?',
    a: 'La ginecología atiende la salud del sistema reproductivo femenino; la obstetricia se enfoca en el embarazo, parto y postparto.',
  },
  {
    q: '¿Qué incluye el seguimiento del embarazo en Detecta Clínica?',
    a: 'Controles periódicos, ecografías, exámenes de laboratorio, asesoría nutricional y preparación para el parto.',
  },
  {
    q: '¿Ofrecen asesoría en planificación familiar y fertilidad?',
    a: 'Sí. Brindamos orientación anticonceptiva, evaluación de fertilidad y tratamiento para parejas que buscan concebir.',
  },
  {
    q: '¿Cómo ayudan a las mujeres durante la menopausia?',
    a: 'Evaluación hormonal, manejo de síntomas, prevención de osteoporosis y acompañamiento integral para esta etapa.',
  },
]

export const fortalezas = [
  'Salud femenina',
  'Control prenatal',
  'Atención obstétrica',
  'Prevención oncológica',
  'Cirugía mínimamente invasiva',
  'Acompañamiento integral',
  'Equipo especializado',
]
