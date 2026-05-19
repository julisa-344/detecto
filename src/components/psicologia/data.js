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
  Heart,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const psicologiaImages = {
  heroVideo: `${IMG_BASE}especialidades/psicologia.mp4`,
  side: `${IMG_BASE}especialidades/psicologia.jpg`,
  cta: `${IMG_BASE}especialidades/psicologiaCta.jpg`,
}

export const sintomas = [
  { title: 'Ansiedad, depresión o estrés', desc: 'Estados emocionales persistentes que afectan tu día.' },
  { title: 'Dificultades en relaciones', desc: 'Conflictos personales, familiares o de pareja.' },
  { title: 'Crisis emocionales', desc: 'Cambios importantes que requieren acompañamiento.' },
  { title: 'Mejorar tu bienestar emocional', desc: 'Búsqueda de crecimiento personal y calidad de vida.' },
  { title: 'Apoyo en la toma de decisiones', desc: 'Orientación para momentos clave de tu vida.' },
  { title: 'Manejo de cambios personales', desc: 'Adaptación a transiciones familiares o laborales.' },
]

export const condiciones = [
  { title: 'Atención psicológica en cada etapa de vida', icon: Users2 },
  { title: 'Trastornos de ansiedad y ataques de pánico', icon: AlertCircle },
  { title: 'Depresión y trastornos del ánimo', icon: Heart },
  { title: 'Estrés laboral y burnout', icon: Activity },
  { title: 'Trastornos de la conducta alimentaria', icon: ShieldCheck },
  { title: 'Gestión emocional', icon: Sparkles },
  { title: 'Autoestima y autoconcepto', icon: Brain },
  { title: 'Conflictos familiares y de pareja', icon: HeartHandshake },
  { title: 'Acompañamiento en procesos de duelo', icon: Microscope },
]

export const servicios = [
  {
    title: 'Servicios y procedimientos',
    icon: ClipboardList,
    bullets: [
      'Terapia cognitivo-conductual (TCC).',
      'Terapia de aceptación y compromiso (ACT).',
      'Terapia de pareja y familiar.',
      'Evaluaciones psicológicas y psicométricas.',
      'Técnicas de relajación y manejo del estrés.',
      'Psicoeducación y talleres grupales.',
      'Acompañamiento en procesos de cambio y crecimiento personal.',
    ],
  },
]

export const stripServicios = [
  { title: 'Psicología clínica', icon: Brain },
  { title: 'Bienestar emocional', icon: Heart },
  { title: 'Terapia individual', icon: Stethoscope },
  { title: 'Terapia familiar y de pareja', icon: Users2 },
  { title: 'Manejo del estrés', icon: Sparkles },
  { title: 'Atención humana', icon: HeartHandshake },
]

export const faqs = [
  {
    q: '¿Cómo sé si mi problema requiere la atención de un psicólogo?',
    a: 'Cuando sientes malestar persistente, dificultad para manejar emociones o tu vida diaria se ve afectada, una consulta puede ayudarte.',
  },
  {
    q: '¿En qué consiste la Terapia Cognitivo-Conductual (TCC)?',
    a: 'Es un abordaje estructurado basado en evidencia que identifica pensamientos y conductas que generan malestar para modificarlos.',
  },
  {
    q: '¿Ofrecen terapia para parejas o familias en crisis?',
    a: 'Sí. Acompañamos procesos de pareja y familia con sesiones enfocadas en comunicación, vínculos y resolución de conflictos.',
  },
  {
    q: '¿Qué es la psicoeducación y cómo me ayuda?',
    a: 'Es brindarte conocimientos sobre tu condición y herramientas prácticas para manejarla de forma activa y consciente.',
  },
]

export const fortalezas = [
  'Psicología clínica',
  'Bienestar emocional',
  'Terapia basada en evidencia',
  'Terapia familiar y de pareja',
  'Atención por edad',
  'Atención humana',
  'Equipo especializado',
]
