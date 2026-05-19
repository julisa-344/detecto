import {
  Activity,
  ShieldCheck,
  Microscope,
  ClipboardList,
  Users2,
  HeartHandshake,
  Stethoscope,
  Scissors,
  AlertCircle,
  Scan,
  Heart,
  Sparkles,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const coloproctoImages = {
  heroVideo: `${IMG_BASE}especialidades/coloproctologia.mp4`,
  side: `${IMG_BASE}especialidades/coloproctologia.jpg`,
  cta: `${IMG_BASE}especialidades/coloproctologiaCta.jpg`,
}

export const sintomas = [
  { title: 'Sangrado rectal o cambios intestinales', desc: 'Alteraciones en las heces o sangrado evidente.' },
  { title: 'Dolor o molestias anales', desc: 'Síntomas persistentes que afectan tu calidad de vida.' },
  { title: 'Hemorroides persistentes', desc: 'Casos recurrentes o que no responden a tratamiento básico.' },
  { title: 'Fisuras o fístulas anales', desc: 'Lesiones que requieren manejo especializado.' },
  { title: 'Sospecha de cáncer colorrectal', desc: 'Antecedentes o síntomas que ameritan evaluación.' },
  { title: 'Enfermedades inflamatorias intestinales', desc: 'Colitis ulcerativa o enfermedad de Crohn.' },
]

export const condiciones = [
  { title: 'Hemorroides y fisuras anales', icon: AlertCircle },
  { title: 'Fístulas y abscesos anorrectales', icon: Activity },
  { title: 'Cáncer de colon y recto', icon: ShieldCheck },
  { title: 'Enfermedad diverticular', icon: Microscope },
  { title: 'Enfermedades inflamatorias del intestino', icon: Sparkles },
  { title: 'Prolapso rectal y trastornos de continencia', icon: Heart },
]

export const servicios = [
  {
    title: 'Servicios y procedimientos',
    icon: ClipboardList,
    bullets: [
      'Colonoscopía diagnóstica y terapéutica.',
      'Cirugías de hemorroides y fisuras.',
      'Resección de tumores colorrectales.',
      'Tratamiento de abscesos y fístulas.',
      'Cirugías laparoscópicas de colon y recto.',
      'Manejo quirúrgico de enfermedades inflamatorias.',
    ],
  },
]

export const stripServicios = [
  { title: 'Coloproctología', icon: Stethoscope },
  { title: 'Colonoscopía avanzada', icon: Scan },
  { title: 'Cirugía laparoscópica', icon: Scissors },
  { title: 'Prevención colorrectal', icon: ShieldCheck },
  { title: 'Manejo de crónicos', icon: HeartHandshake },
  { title: 'Equipo especializado', icon: Users2 },
]

export const faqs = [
  {
    q: '¿Qué síntomas indican que debo acudir al coloproctólogo?',
    a: 'Sangrado rectal, cambios en los hábitos intestinales, dolor anal, hemorroides persistentes o antecedentes familiares de cáncer colorrectal.',
  },
  {
    q: '¿La colonoscopía es un procedimiento doloroso?',
    a: 'No. Se realiza con sedación para mayor comodidad y permite diagnosticar y tratar lesiones en el mismo procedimiento.',
  },
  {
    q: '¿Qué beneficios ofrece la cirugía laparoscópica de colon?',
    a: 'Menos dolor postoperatorio, recuperación más rápida, cicatrices pequeñas y menor riesgo de complicaciones.',
  },
  {
    q: '¿Qué tipos de enfermedades inflamatorias tratan en la clínica?',
    a: 'Colitis ulcerativa, enfermedad de Crohn y otros trastornos inflamatorios intestinales con seguimiento integral.',
  },
]

export const fortalezas = [
  'Coloproctología clínica',
  'Colonoscopía avanzada',
  'Cirugía laparoscópica',
  'Prevención oncológica',
  'Diagnóstico preciso',
  'Atención humana',
  'Equipo especializado',
]
