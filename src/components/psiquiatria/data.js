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
  AlertCircle,
  Moon,
  Pill,
  Heart,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const psiquiatriaImages = {
  heroVideo: `${IMG_BASE}especialidades/psiquiatria.mp4`,
  side: `${IMG_BASE}especialidades/psiquiatria.jpg`,
  cta: `${IMG_BASE}especialidades/psiquiatriaCta.jpg`,
}

export const sintomas = [
  { title: 'Ansiedad o ataques de pánico', desc: 'Síntomas que limitan tu día a día.' },
  { title: 'Depresión o tristeza prolongada', desc: 'Estado de ánimo bajo persistente.' },
  { title: 'Insomnio o alteraciones del sueño', desc: 'Dificultad para descansar o mantener el sueño.' },
  { title: 'Cambios bruscos del ánimo', desc: 'Sospecha de bipolaridad u otros trastornos.' },
  { title: 'Obsesiones o compulsiones', desc: 'Pensamientos o rituales repetitivos.' },
  { title: 'Consumo problemático de sustancias', desc: 'Manejo especializado e integral.' },
  { title: 'Trastornos alimentarios', desc: 'Conductas que afectan tu salud y bienestar.' },
  { title: 'Ideas de suicidio o desesperanza', desc: 'Atención urgente y acompañamiento.' },
]

export const condiciones = [
  { title: 'Trastornos del estado de ánimo (depresión, bipolaridad)', icon: Heart },
  { title: 'Ansiedad y ataques de pánico', icon: AlertCircle },
  { title: 'Trastorno obsesivo-compulsivo (TOC)', icon: Sparkles },
  { title: 'Trastornos del sueño y fatiga mental', icon: Moon },
  { title: 'Esquizofrenia y trastornos psicóticos', icon: Brain },
  { title: 'Consumo de sustancias', icon: ShieldCheck },
  { title: 'Trastornos de la conducta alimentaria', icon: Activity },
  { title: 'Patologías psiquiátricas en contexto médico', icon: Microscope },
]

export const servicios = [
  {
    title: 'Servicios y abordaje terapéutico',
    icon: ClipboardList,
    bullets: [
      'Evaluación psiquiátrica integral.',
      'Prescripción y seguimiento farmacológico.',
      'Coordinación con psicoterapia y otras especialidades.',
      'Planes de tratamiento individualizados.',
      'Intervención en crisis y acompañamiento en duelos o eventos traumáticos.',
      'Psiquiatría de enlace para pacientes con enfermedades físicas.',
    ],
  },
]

export const stripServicios = [
  { title: 'Psiquiatría clínica', icon: Brain },
  { title: 'Salud mental integral', icon: Heart },
  { title: 'Manejo farmacológico', icon: Pill },
  { title: 'Intervención en crisis', icon: ShieldCheck },
  { title: 'Atención humana', icon: HeartHandshake },
  { title: 'Equipo multidisciplinario', icon: Users2 },
]

export const faqs = [
  {
    q: '¿Trabajan en conjunto con psicólogos?',
    a: 'Sí. Trabajamos en equipo: el psiquiatra puede indicar tratamiento farmacológico y el psicólogo aporta la psicoterapia.',
  },
  {
    q: '¿Me van a medicar en la primera consulta?',
    a: 'No necesariamente. La indicación depende del diagnóstico y la severidad. Siempre se conversa contigo antes de iniciar tratamiento.',
  },
  {
    q: '¿Atienden adolescentes?',
    a: 'Sí. Brindamos atención psiquiátrica a adolescentes y adultos con un abordaje adaptado a cada etapa de vida.',
  },
]

export const fortalezas = [
  'Psiquiatría clínica',
  'Salud mental',
  'Manejo farmacológico',
  'Atención adolescente y adulta',
  'Intervención en crisis',
  'Atención humana',
  'Equipo multidisciplinario',
]
