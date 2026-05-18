import {
  Activity,
  Microscope,
  Scissors,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Heart,
  Users2,
  Stethoscope,
  Dna,
  AlertCircle,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const urologiaImages = {
  heroVideo: `${IMG_BASE}oncologia/urologia.mp4`,
  side: `${IMG_BASE}oncologia/urologia.jpg`,
  cta: `${IMG_BASE}oncologia/urologiaCta.jpg`,
}

export const sintomas = [
  { title: 'Sangrado en la orina', desc: 'Hematuria visible o detectada en análisis.' },
  { title: 'Dificultad o dolor al orinar', desc: 'Cambios persistentes en la micción.' },
  { title: 'Dolor lumbar o abdominal', desc: 'Molestias continuas en zona lumbar o abdomen.' },
  { title: 'Bultos en testículos o abdomen', desc: 'Masas palpables en zona genital o abdominal.' },
  { title: 'Antecedentes familiares', desc: 'Historia familiar de cáncer urológico.' },
]

export const condiciones = [
  { title: 'Cáncer de próstata', icon: ShieldCheck },
  { title: 'Cáncer de vejiga', icon: Activity },
  { title: 'Cáncer de riñón', icon: Dna },
  { title: 'Cáncer de testículo', icon: Sparkles },
  { title: 'Cáncer de pene', icon: Heart },
  { title: 'Cáncer de uréter', icon: Microscope },
  { title: 'Sarcomas retroperitoneales', icon: AlertCircle },
  { title: 'Tumores urológicos pediátricos', icon: Stethoscope },
]

export const servicios = [
  {
    title: 'Servicios y procedimientos disponibles',
    icon: Microscope,
    bullets: [
      'Biopsias guiadas por imagen.',
      'Marcadores tumorales y estudios genéticos.',
      'Ecografía, TAC y resonancia magnética.',
      'Cirugía laparoscópica mínimamente invasiva.',
      'Cirugía abierta para casos complejos.',
      'Radioterapia y braquiterapia.',
      'Terapias dirigidas y quimioterapia.',
      'Controles médicos periódicos.',
      'Apoyo psicológico para pacientes y familias.',
      'Rehabilitación y seguimiento postoperatorio.',
    ],
  },
]

export const stripServicios = [
  { title: 'Urología oncológica', icon: Stethoscope },
  { title: 'Diagnóstico preciso', icon: ShieldCheck },
  { title: 'Cirugía mínimamente invasiva', icon: Scissors },
  { title: 'Terapias avanzadas', icon: Activity },
  { title: 'Equipo multidisciplinario', icon: Users2 },
  { title: 'Acompañamiento integral', icon: HeartHandshake },
]

export const faqs = [
  {
    q: '¿Debo acudir al urólogo si tengo antecedentes familiares de cáncer?',
    a: 'Sí. Con antecedentes familiares se recomienda iniciar controles preventivos a una edad más temprana.',
  },
  {
    q: '¿Qué debo llevar a mi primera cita?',
    a: 'Estudios previos, análisis de sangre y orina recientes, e información sobre tu historial médico y familiar.',
  },
  {
    q: '¿Existen tratamientos menos invasivos?',
    a: 'Sí. La cirugía laparoscópica, la braquiterapia y las terapias dirigidas permiten tratamientos eficaces con menor recuperación.',
  },
]

export const fortalezas = [
  'Salud urológica',
  'Diagnóstico preciso',
  'Cirugía mínimamente invasiva',
  'Tecnología avanzada',
  'Acompañamiento integral',
  'Equipo experto',
  'Atención humana',
]
