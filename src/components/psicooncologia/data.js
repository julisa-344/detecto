import {
  Brain,
  Heart,
  Users2,
  Sparkles,
  Sun,
  Activity,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  ClipboardList,
  Video,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const psicoImages = {
  heroVideo: `${IMG_BASE}oncologia/psicooncologiamp4.mp4`,
  side: `${IMG_BASE}oncologia/psicooncologia.jpg`,
  cta: `${IMG_BASE}oncologia/psicooncologiaCta.jpg`,
}

export const sintomas = [
  { title: 'Ansiedad y miedo', desc: 'Angustia frente al diagnóstico o la incertidumbre.' },
  { title: 'Tristeza o depresión', desc: 'Sensación persistente de pérdida de sentido.' },
  { title: 'Dificultad para decidir', desc: 'Bloqueo al evaluar opciones médicas.' },
  { title: 'Cambios en autoestima', desc: 'Impacto en la imagen corporal y autoconcepto.' },
  { title: 'Trastornos del sueño', desc: 'Insomnio, falta de apetito o concentración.' },
  { title: 'Apoyo a familiares', desc: 'Contención para cuidadores, parejas y niños.' },
]

export const abordamos = [
  { title: 'Acompañamiento emocional en cada etapa', icon: Heart },
  { title: 'Adaptación a efectos físicos y emocionales', icon: Activity },
  { title: 'Intervención en crisis y contención inmediata', icon: ShieldCheck },
  { title: 'Apoyo a familiares, cuidadores y niños', icon: Users2 },
  { title: 'Manejo del estrés, relajación y mindfulness', icon: Sparkles },
  { title: 'Preparación para alta y cuidados paliativos', icon: Sun },
]

export const servicios = [
  {
    title: 'Modalidades de atención',
    icon: Video,
    bullets: [
      'Sesiones individuales presenciales o virtuales.',
      'Acompañamiento familiar y de pareja.',
      'Terapia breve de apoyo emocional.',
      'Coordinación con oncología médica y paliativos.',
      'Planes de intervención personalizados por etapa.',
    ],
  },
]

export const stripServicios = [
  { title: 'Psicooncología clínica', icon: Brain },
  { title: 'Apoyo emocional', icon: Heart },
  { title: 'Atención familiar', icon: Users2 },
  { title: 'Manejo del estrés', icon: Sparkles },
  { title: 'Cuidados paliativos', icon: HeartHandshake },
  { title: 'Sesiones presenciales o virtuales', icon: Video },
]

export const faqs = [
  {
    q: '¿Cuál es la diferencia entre un psicólogo convencional y un psicooncólogo?',
    a: 'El psicooncólogo está formado específicamente en el impacto emocional del cáncer y trabaja en coordinación con el equipo médico oncológico.',
  },
  {
    q: '¿La atención es solo para el paciente o también para la familia?',
    a: 'Atendemos al paciente, su pareja, familiares directos, cuidadores e incluso niños afectados por el diagnóstico.',
  },
  {
    q: '¿En qué momentos del proceso es recomendable pedir una cita?',
    a: 'Desde el diagnóstico inicial, durante el tratamiento, en cuidados paliativos o durante el duelo. No hay momento inadecuado.',
  },
  {
    q: '¿Qué técnicas se utilizan para el manejo del estrés y la ansiedad?',
    a: 'Mindfulness, técnicas de relajación, terapia cognitivo-conductual breve y estrategias de afrontamiento adaptadas a cada caso.',
  },
]

export const fortalezas = [
  'Acompañamiento emocional',
  'Atención humana',
  'Apoyo familiar',
  'Manejo del estrés',
  'Cuidados paliativos',
  'Sesiones personalizadas',
  'Equipo especializado',
]
