import {
  Activity,
  Heart,
  ShieldCheck,
  Microscope,
  ClipboardList,
  Pill,
  Users2,
  HeartHandshake,
  Stethoscope,
  Sparkles,
  Dna,
  Apple,
  Droplet,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const endocrinoImages = {
  heroVideo: `${IMG_BASE}especialidades/endocronologia.mp4`,
  side: `${IMG_BASE}especialidades/endocronologia.jpg`,
  cta: `${IMG_BASE}especialidades/endocronologiaCta.jpg`,
}

export const sintomas = [
  { title: 'Azúcar en sangre fuera de control', desc: 'Glucemia elevada o variable persistente.' },
  { title: 'Cambios inexplicables de peso', desc: 'Ganancia o pérdida sin causa aparente.' },
  { title: 'Fatiga persistente', desc: 'Cansancio o debilidad continuos.' },
  { title: 'Irregularidades menstruales', desc: 'Alteraciones hormonales o ciclo desordenado.' },
  { title: 'Crecimiento anormal en niños', desc: 'Talla o desarrollo fuera del rango esperado.' },
  { title: 'Exceso de sed o micción frecuente', desc: 'Posibles signos de alteración metabólica.' },
  { title: 'Problemas tiroideos o metabólicos', desc: 'Síntomas asociados a tiroides o metabolismo.' },
]

export const condiciones = [
  { title: 'Diabetes tipo 1 y tipo 2', icon: Droplet },
  { title: 'Hipotiroidismo e hipertiroidismo', icon: Activity },
  { title: 'Síndrome de ovario poliquístico', icon: Dna },
  { title: 'Glándula pituitaria y suprarrenal', icon: Sparkles },
  { title: 'Osteoporosis y metabolismo óseo', icon: ShieldCheck },
  { title: 'Trastornos del crecimiento', icon: Users2 },
  { title: 'Obesidad y síndrome metabólico', icon: Heart },
  { title: 'Trastornos hormonales del adulto', icon: Microscope },
]

export const servicios = [
  {
    title: 'Servicios y procedimientos',
    icon: ClipboardList,
    bullets: [
      'Evaluación y manejo integral de la diabetes.',
      'Diagnóstico y tratamiento de trastornos tiroideos.',
      'Asesoría en salud reproductiva y endocrinología ginecológica.',
      'Evaluación de la función adrenal y pituitaria.',
      'Tratamientos para osteoporosis y metabolismo óseo.',
      'Manejo de trastornos del crecimiento.',
      'Programas de control de peso y síndrome metabólico.',
    ],
  },
]

export const stripServicios = [
  { title: 'Endocrinología clínica', icon: Stethoscope },
  { title: 'Manejo de diabetes', icon: Droplet },
  { title: 'Salud tiroidea', icon: Activity },
  { title: 'Salud ósea', icon: ShieldCheck },
  { title: 'Control de peso', icon: Apple },
  { title: 'Tratamientos personalizados', icon: Pill },
]

export const faqs = [
  {
    q: '¿Qué tipos de glándulas y hormonas trata un endocrinólogo?',
    a: 'Tiroides, suprarrenales, hipófisis, páncreas y gónadas, junto con las hormonas que regulan metabolismo, crecimiento y reproducción.',
  },
  {
    q: '¿Cómo saber si mi fatiga o peso se deben a un problema hormonal?',
    a: 'Si los cambios son persistentes y no responden a hábitos, una evaluación endocrinológica puede identificar la causa hormonal o metabólica.',
  },
  {
    q: '¿Qué incluye el manejo integral de la diabetes en Detecta Clínica?',
    a: 'Diagnóstico, tratamiento personalizado, educación, control metabólico, prevención de complicaciones y seguimiento continuo.',
  },
  {
    q: '¿Tratan también problemas de osteoporosis o salud ósea?',
    a: 'Sí. Evaluamos densidad ósea, riesgo de fractura y diseñamos un plan combinado con tratamiento farmacológico y estilo de vida.',
  },
]

export const fortalezas = [
  'Endocrinología clínica',
  'Diagnóstico hormonal',
  'Manejo de diabetes',
  'Salud tiroidea',
  'Control metabólico',
  'Atención humana',
  'Equipo especializado',
]
