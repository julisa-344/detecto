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
  Scan,
  Droplet,
  Heart,
  Zap,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const radioIntervImages = {
  heroVideo: `${IMG_BASE}especialidades/radiologiaIntervencionista.mp4`,
  side: `${IMG_BASE}especialidades/radiologiaIntervencionista.jpg`,
  cta: `${IMG_BASE}especialidades/radiologiaIntervencionistaCta.jpg`,
}

export const sintomas = [
  { title: 'Biopsia dirigida por imagen', desc: 'Diagnóstico preciso con mínima invasión.' },
  { title: 'Varices pélvicas o síndrome congestivo', desc: 'Manejo especializado por imagen.' },
  { title: 'Drenaje de abscesos o líquidos', desc: 'Procedimientos guiados sin cirugía abierta.' },
  { title: 'Alternativas a cirugía', desc: 'Opciones para tumores o quistes sin cirugía mayor.' },
  { title: 'Obstrucción urinaria, biliar o venosa', desc: 'Tratamientos percutáneos efectivos.' },
  { title: 'Accesos venosos para quimioterapia', desc: 'Colocación de catéter o port-a-cath.' },
  { title: 'Enfermedades vasculares', desc: 'Opciones menos invasivas para tu salud vascular.' },
]

export const condiciones = [
  { title: 'Tumores hepáticos, renales y pulmonares (ablación)', icon: Sparkles },
  { title: 'Fibromas uterinos (embolización)', icon: Activity },
  { title: 'Varicocele masculino y pélvico', icon: Heart },
  { title: 'Enfermedad vascular periférica', icon: AlertCircle },
  { title: 'Abscesos abdominales o pélvicos', icon: Droplet },
  { title: 'Accesos venosos para quimioterapia', icon: ShieldCheck },
  { title: 'Obstrucción biliar o urinaria', icon: Zap },
  { title: 'Biopsias dirigidas y diagnóstico complejo', icon: Microscope },
]

export const servicios = [
  {
    title: 'Servicios y procedimientos',
    icon: ClipboardList,
    bullets: [
      'Biopsias guiadas por imagen (ecografía, tomografía).',
      'Drenajes de líquidos o colecciones.',
      'Embolizaciones terapéuticas (tumores, sangrados, fibromas).',
      'Colocación de catéteres centrales y port-a-cath.',
      'Ablación tumoral percutánea.',
      'Flebografías y angioplastias.',
      'Vertebroplastía y tratamiento del dolor óseo metastásico.',
    ],
  },
]

export const stripServicios = [
  { title: 'Radiología intervencionista', icon: Scan },
  { title: 'Procedimientos guiados por imagen', icon: Microscope },
  { title: 'Mínimamente invasivos', icon: Sparkles },
  { title: 'Tratamiento vascular', icon: Activity },
  { title: 'Accesos para oncología', icon: ShieldCheck },
  { title: 'Equipo especializado', icon: Users2 },
]

export const faqs = [
  {
    q: '¿Cuánto dura un procedimiento de radiología intervencionista?',
    a: 'La mayoría dura entre 30 y 90 minutos, dependiendo del tipo de intervención y la complejidad del caso.',
  },
  {
    q: '¿La recuperación es rápida?',
    a: 'Sí. Al ser procedimientos mínimamente invasivos, los tiempos de recuperación son significativamente menores que con cirugía abierta.',
  },
  {
    q: '¿Necesito preparación antes del procedimiento?',
    a: 'Sí. Se te indicarán ayuno, suspensión de medicamentos específicos y estudios previos según el procedimiento.',
  },
]

export const fortalezas = [
  'Radiología intervencionista',
  'Procedimientos guiados',
  'Mínimamente invasivos',
  'Tratamiento vascular',
  'Apoyo oncológico',
  'Atención humana',
  'Tecnología de Alta Precisión',
]
