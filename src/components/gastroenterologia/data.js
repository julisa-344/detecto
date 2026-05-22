import {
  Activity,
  Microscope,
  ShieldCheck,
  ClipboardList,
  Pill,
  Users2,
  HeartHandshake,
  Stethoscope,
  Sparkles,
  Dna,
  Apple,
  AlertCircle,
  Scan,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const gastroImages = {
  heroVideo: `${IMG_BASE}especialidades/gastroenterologia.mp4`,
  side: `${IMG_BASE}especialidades/gastroenterologia.jpg`,
  cta: `${IMG_BASE}especialidades/gastroenterologiaCta.jpg`,
}

export const sintomas = [
  { title: 'Dolor abdominal persistente', desc: 'Molestias continuas en zona digestiva.' },
  { title: 'Cambios en hábitos intestinales', desc: 'Diarrea o estreñimiento sin causa clara.' },
  { title: 'Acidez o reflujo gastroesofágico', desc: 'Síntomas frecuentes que afectan tu calidad de vida.' },
  { title: 'Sangrado gastrointestinal', desc: 'Sangre en heces o vómito que requiere evaluación.' },
  { title: 'Pérdida de peso inexplicada', desc: 'Bajadas sin cambios en alimentación.' },
  { title: 'Enfermedades hepáticas', desc: 'Diagnóstico o seguimiento de patologías del hígado.' },
]

export const condiciones = [
  { title: 'Enfermedades del esófago, estómago e intestinos', icon: Activity },
  { title: 'Hepatitis y cirrosis', icon: Dna },
  { title: 'Enfermedades pancreáticas', icon: Sparkles },
  { title: 'Trastornos funcionales digestivos', icon: AlertCircle },
  { title: 'Enfermedad de Crohn y colitis ulcerosa', icon: ShieldCheck },
  { title: 'Cánceres gastrointestinales', icon: Microscope },
]

export const servicios = [
  {
    title: 'Servicios y procedimientos',
    icon: ClipboardList,
    bullets: [
      'Evaluación clínica integral.',
      'Procedimientos endoscópicos diagnósticos y terapéuticos.',
      'Biopsias hepáticas y análisis genéticos.',
      'Manejo de enfermedades hepáticas crónicas.',
      'Asesoría en nutrición y estilo de vida.',
      'Prevención y detección temprana de cánceres digestivos.',
    ],
  },
]

export const stripServicios = [
  { title: 'Gastroenterología', icon: Stethoscope },
  { title: 'Endoscopía diagnóstica', icon: Scan },
  { title: 'Hepatología', icon: Dna },
  { title: 'Prevención oncológica', icon: ShieldCheck },
  { title: 'Asesoría nutricional', icon: Apple },
  { title: 'Atención humana', icon: HeartHandshake },
]

export const faqs = [
  {
    q: '¿Qué órganos trata exactamente un gastroenterólogo?',
    a: 'Esófago, estómago, intestino delgado y grueso, hígado, vesícula biliar y páncreas.',
  },
  {
    q: '¿Cuándo es necesario realizarse una endoscopía?',
    a: 'Ante síntomas persistentes como dolor, reflujo, sangrado, pérdida de peso o para control de patologías diagnosticadas.',
  },
  {
    q: '¿Qué tipo de enfermedades hepáticas atienden en Detecta?',
    a: 'Hepatitis virales y autoinmunes, hígado graso, cirrosis y otras patologías crónicas con seguimiento especializado.',
  },
  {
    q: '¿Ofrecen soluciones para problemas comunes como el reflujo o el estreñimiento?',
    a: 'Sí, evaluamos la causa, planteamos cambios de estilo de vida y tratamientos farmacológicos o endoscópicos según corresponda.',
  },
]

export const fortalezas = [
  'Gastroenterología clínica',
  'Hepatología',
  'Endoscopía avanzada',
  'Prevención oncológica',
  'Diagnóstico preciso',
  'Atención humana',
  'Innovación Tecnológica',
]
