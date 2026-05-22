import {
  Activity,
  Heart,
  ShieldCheck,
  Microscope,
  ClipboardList,
  Droplet,
  Users2,
  HeartHandshake,
  Stethoscope,
  Sparkles,
  Dna,
  AlertCircle,
  Apple,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const nefroImages = {
  heroVideo: `${IMG_BASE}especialidades/nefrologia.mp4`,
  side: `${IMG_BASE}especialidades/nefrologia.jpg`,
  cta: `${IMG_BASE}especialidades/nefrologiaCta.jpg`,
}

export const sintomas = [
  { title: 'Antecedentes familiares de enfermedad renal', desc: 'Historia familiar que aumenta el riesgo.' },
  { title: 'Hinchazón o cambios en la micción', desc: 'Edema, espuma o variaciones en la orina.' },
  { title: 'Fatiga excesiva', desc: 'Cansancio persistente sin causa clara.' },
  { title: 'Hipertensión difícil de controlar', desc: 'Presión arterial que no responde a tratamiento.' },
  { title: 'Diabetes o enfermedades cardiovasculares', desc: 'Condiciones que afectan la función renal.' },
  { title: 'Seguimiento post-trasplante renal', desc: 'Control especializado tras el trasplante.' },
]

export const condiciones = [
  { title: 'Enfermedad renal crónica y aguda', icon: Droplet },
  { title: 'Hipertensión renovascular y secundaria', icon: Activity },
  { title: 'Enfermedades glomerulares', icon: Microscope },
  { title: 'Enfermedad renal poliquística', icon: Dna },
  { title: 'Síndromes nefrótico y nefrítico', icon: AlertCircle },
  { title: 'Trastornos ácido-base y electrolitos', icon: Sparkles },
  { title: 'Insuficiencia renal aguda y crónica', icon: Heart },
  { title: 'Enfermedades renales asociadas a cáncer', icon: ShieldCheck },
]

export const servicios = [
  {
    title: 'Servicios y procedimientos',
    icon: ClipboardList,
    bullets: [
      'Evaluación y diagnóstico de enfermedades renales.',
      'Manejo de hipertensión resistente.',
      'Diálisis peritoneal y hemodiálisis.',
      'Trasplante renal y seguimiento post-trasplante.',
      'Biopsia renal y estudios de función renal.',
      'Asesoría en dieta y estilo de vida para la salud renal.',
      'Coordinación con otros especialistas según sea necesario.',
    ],
  },
]

export const stripServicios = [
  { title: 'Nefrología clínica', icon: Stethoscope },
  { title: 'Manejo de hipertensión', icon: Activity },
  { title: 'Diálisis especializada', icon: Droplet },
  { title: 'Trasplante renal', icon: ShieldCheck },
  { title: 'Asesoría nutricional', icon: Apple },
  { title: 'Equipo multidisciplinario', icon: Users2 },
]

export const faqs = [
  {
    q: '¿Por qué un nefrólogo trata también la hipertensión arterial?',
    a: 'Porque los riñones regulan la presión arterial y muchas hipertensiones difíciles de controlar tienen un origen renal.',
  },
  {
    q: '¿Qué síntomas pueden indicar que mis riñones no están funcionando bien?',
    a: 'Hinchazón en piernas o rostro, orina espumosa, micción frecuente, fatiga, presión alta o pérdida de apetito.',
  },
  {
    q: '¿Qué tipos de tratamientos para insuficiencia renal ofrecen?',
    a: 'Tratamiento conservador, diálisis peritoneal, hemodiálisis y trasplante renal con seguimiento integral.',
  },
  {
    q: '¿Cómo ayuda la nutrición en mi tratamiento renal?',
    a: 'Una dieta adaptada controla la presión, reduce el daño renal y previene complicaciones metabólicas.',
  },
]

export const fortalezas = [
  'Nefrología clínica',
  'Manejo de hipertensión',
  'Diálisis especializada',
  'Trasplante renal',
  'Atención humana',
  'Equipo multidisciplinario',
  'Innovación Tecnológica',
]
