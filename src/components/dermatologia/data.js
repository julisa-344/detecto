import {
  Stethoscope,
  Scissors,
  ShieldAlert,
  Sparkles,
  Droplet,
  ScanLine,
  Sun,
  Pill,
  ClipboardList,
  Users2,
  ShieldCheck,
  HeartHandshake,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const dermaImages = {
  heroVideo: `${IMG_BASE}especialidades/dermatologia.mp4`,
  side: `${IMG_BASE}especialidades/dermatologia.jpg`,
  cta: `${IMG_BASE}especialidades/dermatologiaCta.jpg`,
}

export const sintomas = [
  { title: 'Acné persistente', desc: 'Brotes recurrentes o cicatrices que afectan la piel.' },
  { title: 'Eczemas y dermatitis', desc: 'Enrojecimiento, picor o irritación crónica.' },
  { title: 'Psoriasis', desc: 'Placas escamosas o inflamación cutánea.' },
  { title: 'Manchas en la piel', desc: 'Melasma, hiperpigmentación u otros cambios de color.' },
  { title: 'Lesiones sospechosas', desc: 'Lunares con cambios de forma, tamaño o color.' },
]

export const condiciones = [
  { title: 'Enfermedades de la piel', icon: Stethoscope },
  { title: 'Cirugía dermatológica', icon: Scissors },
  { title: 'Cáncer de piel', icon: ShieldAlert },
  { title: 'Rejuvenecimiento facial', icon: Sparkles },
  { title: 'Manchas y melasma', icon: Droplet },
  { title: 'Caída del cabello', icon: Pill },
]

export const servicios = [
  {
    title: 'Servicios y procedimientos',
    icon: ClipboardList,
    bullets: [
      'Exámenes dermatológicos completos.',
      'Biopsias de piel y diagnóstico de lesiones.',
      'Procedimientos láser para rejuvenecimiento y manchas.',
      'Tratamientos para acné y cicatrices.',
      'Asesoría en cuidado de la piel y protección solar.',
      'Diagnóstico oportuno de lesiones sospechosas.',
    ],
  },
]

export const stripServicios = [
  { title: 'Dermatología clínica', icon: Stethoscope },
  { title: 'Diagnóstico de lesiones', icon: ScanLine },
  { title: 'Tratamientos láser', icon: Sparkles },
  { title: 'Cuidado preventivo', icon: Sun },
  { title: 'Equipo especializado', icon: Users2 },
  { title: 'Atención personalizada', icon: HeartHandshake },
]

export const faqs = [
  {
    q: '¿Necesito una orden médica para mi primera consulta?',
    a: 'No, puedes agendar tu primera consulta directamente con nuestro dermatólogo.',
  },
  {
    q: '¿Realizan biopsias en la misma consulta?',
    a: 'En la mayoría de los casos sí, dependiendo de la lesión y la evaluación previa.',
  },
  {
    q: '¿Atienden tratamientos estéticos además de los clínicos?',
    a: 'Sí, ofrecemos tanto dermatología clínica como estética: láser, rejuvenecimiento y tratamientos para manchas.',
  },
  {
    q: '¿Cuándo debo preocuparme por un lunar?',
    a: 'Si notas cambios en forma, color, tamaño o sangrado, agenda una evaluación lo antes posible.',
  },
]

export const fortalezas = [
  'Excelencia dermatológica',
  'Diagnóstico preciso',
  'Tecnología láser',
  'Cuidado personalizado',
  'Atención humana',
  'Prevención del cáncer de piel',
  'Resultados confiables',
]
