import {
  Baby,
  Activity,
  Heart,
  HeartHandshake,
  ShieldCheck,
  Microscope,
  Dna,
  Sparkles,
  Apple,
  Users2,
  Pill,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const pediatricaImages = {
  heroVideo: `${IMG_BASE}oncologia/pediatrica.mp4`,
  side: `${IMG_BASE}oncologia/pediatrica.jpg`,
  cta: `${IMG_BASE}oncologia/pediatricaCta.jpg`,
}

export const sintomas = [
  { title: 'Bultos o masas inusuales', desc: 'Aparición de tumoraciones palpables en el cuerpo.' },
  { title: 'Fiebre persistente', desc: 'Episodios prolongados sin causa aparente.' },
  { title: 'Pérdida de peso involuntaria', desc: 'Bajadas de peso sin cambios en alimentación.' },
  { title: 'Sangrados o moretones', desc: 'Hematomas frecuentes o sangrados inusuales.' },
  { title: 'Dolor óseo o articular', desc: 'Molestias persistentes que no mejoran con reposo.' },
  { title: 'Fatiga o cambios de conducta', desc: 'Cansancio extremo o alteraciones del comportamiento.' },
]

export const tiposCancer = [
  { title: 'Leucemias (LLA, LMA)', icon: Dna },
  { title: 'Linfomas (Hodgkin y no Hodgkin)', icon: ShieldCheck },
  { title: 'Tumores cerebrales', icon: Microscope },
  { title: 'Neuroblastoma', icon: Activity },
  { title: 'Tumor de Wilms', icon: Sparkles },
  { title: 'Sarcomas óseos y de partes blandas', icon: Heart },
  { title: 'Retinoblastoma y tumores raros', icon: Baby },
]

export const servicios = [
  {
    title: 'Modalidades de atención',
    icon: Pill,
    bullets: [
      'Quimioterapia pediátrica.',
      'Terapias dirigidas e inmunoterapia.',
      'Coordinación con cirugía y radioterapia pediátrica.',
      'Atención psicológica infantil y familiar.',
      'Nutrición especializada para niños oncológicos.',
      'Cuidado paliativo pediátrico.',
      'Seguimiento a largo plazo post tratamiento.',
    ],
  },
]

export const stripServicios = [
  { title: 'Oncología pediátrica', icon: Baby },
  { title: 'Quimioterapia infantil', icon: Pill },
  { title: 'Atención familiar', icon: Users2 },
  { title: 'Apoyo psicológico', icon: Heart },
  { title: 'Nutrición especializada', icon: Apple },
  { title: 'Cuidados paliativos', icon: HeartHandshake },
]

export const datosClave = [
  'El diagnóstico temprano aumenta las tasas de curación hasta un 80%.',
  'El cáncer infantil suele responder mejor a los tratamientos que el adulto.',
  'Los controles pediátricos de rutina son la mejor herramienta de detección.',
  'La mayoría de casos se debe a cambios genéticos aleatorios, no al estilo de vida.',
]

export const faqs = [
  {
    q: '¿Qué edad atienden en oncología pediátrica?',
    a: 'Atendemos niños y adolescentes desde el nacimiento hasta los 18 años.',
  },
  {
    q: '¿Es necesario internarse para el tratamiento?',
    a: 'Depende del caso. Muchos tratamientos son ambulatorios; otros requieren hospitalización breve según el protocolo.',
  },
  {
    q: '¿Cómo apoyan a las familias durante el proceso?',
    a: 'Brindamos acompañamiento psicológico, orientación nutricional y soporte emocional para padres y hermanos.',
  },
]

export const fortalezas = [
  'Cuidado infantil',
  'Acompañamiento familiar',
  'Diagnóstico temprano',
  'Tratamientos personalizados',
  'Apoyo psicológico',
  'Atención humana',
  'Seguimiento integral',
]
