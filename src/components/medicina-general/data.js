import {
  Activity,
  Heart,
  ShieldCheck,
  Microscope,
  ClipboardList,
  Syringe,
  Users2,
  HeartHandshake,
  Stethoscope,
  Apple,
  AlertCircle,
  Pill,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const medGeneralImages = {
  heroVideo: `${IMG_BASE}especialidades/general.mp4`,
  side: `${IMG_BASE}especialidades/general.jpg`,
  cta: `${IMG_BASE}especialidades/generalCta.jpg`,
}

export const sintomas = [
  { title: 'Exámenes médicos de rutina', desc: 'Despistajes preventivos periódicos.' },
  { title: 'Vacunación y prevención', desc: 'Calendario de vacunas y controles preventivos.' },
  { title: 'Síntomas generales', desc: 'Fiebre, dolor o malestar sin causa clara.' },
  { title: 'Cambios recientes en tu salud', desc: 'Evaluación de signos nuevos o persistentes.' },
  { title: 'Orientación médica inicial', desc: 'Primera consulta para guiar tu atención.' },
  { title: 'Evaluación previa a especialistas', desc: 'Diagnóstico inicial y derivación adecuada.' },
]

export const condiciones = [
  { title: 'Enfermedades respiratorias comunes', icon: Activity },
  { title: 'Problemas digestivos frecuentes', icon: AlertCircle },
  { title: 'Control y seguimiento de crónicos', icon: Heart },
  { title: 'Infecciones leves y afecciones generales', icon: ShieldCheck },
  { title: 'Evaluación integral de salud', icon: ClipboardList },
  { title: 'Coordinación con especialistas', icon: Users2 },
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
  { title: 'Medicina general', icon: Stethoscope },
  { title: 'Atención preventiva', icon: ShieldCheck },
  { title: 'Vacunación', icon: Syringe },
  { title: 'Diagnóstico clínico', icon: Microscope },
  { title: 'Asesoría nutricional', icon: Apple },
  { title: 'Atención humana', icon: HeartHandshake },
]

export const faqs = [
  {
    q: '¿Cuál es el papel de un médico general en mi cuidado a largo plazo?',
    a: 'Es tu primer contacto: te acompaña, lleva tu historial, previene complicaciones y coordina la atención con especialistas cuando es necesario.',
  },
  {
    q: '¿Qué tipo de enfermedades comunes pueden resolverse en esta consulta?',
    a: 'Resfriados, gripes, infecciones leves, problemas digestivos, control de crónicos y muchas otras condiciones frecuentes.',
  },
  {
    q: '¿Es necesario estar enfermo para visitar al médico general?',
    a: 'No. Las visitas preventivas y despistajes son fundamentales para detectar problemas a tiempo y mantener tu salud.',
  },
  {
    q: '¿Qué servicios adicionales recibo durante mi consulta?',
    a: 'Evaluación integral, orientación preventiva, indicaciones de laboratorio, vacunación y derivaciones según el caso.',
  },
]

export const fortalezas = [
  'Atención primaria',
  'Salud preventiva',
  'Diagnóstico integral',
  'Vacunación y controles',
  'Coordinación clínica',
  'Atención humana',
  'Equipo cercano',
]
