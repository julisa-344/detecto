import {
  Activity,
  Eye,
  ShieldCheck,
  Microscope,
  ClipboardList,
  Users2,
  HeartHandshake,
  Stethoscope,
  Sparkles,
  AlertCircle,
  Scan,
  Sun,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const oftalmoImages = {
  heroVideo: `${IMG_BASE}especialidades/oftalmologia.mp4`,
  side: `${IMG_BASE}especialidades/oftalmologia.jpg`,
  cta: `${IMG_BASE}especialidades/oftalmologiaCta.jpg`,
}

export const sintomas = [
  { title: 'Visión borrosa o pérdida súbita', desc: 'Alteraciones que requieren evaluación urgente.' },
  { title: 'Dolor, enrojecimiento o secreción', desc: 'Síntomas oculares que afectan tu día a día.' },
  { title: 'Ojos secos o sensación de arenilla', desc: 'Molestias persistentes que limitan la visión.' },
  { title: 'Destellos, manchas o visión doble', desc: 'Posibles signos de patologías retinianas.' },
  { title: 'Revisión anual en personas de riesgo', desc: 'Controles preventivos periódicos.' },
  { title: 'Detección temprana en niños', desc: 'Control de lentes y desarrollo visual.' },
]

export const condiciones = [
  { title: 'Miopía, hipermetropía, astigmatismo y presbicia', icon: Eye },
  { title: 'Cataratas y cirugía de cristalino', icon: Sparkles },
  { title: 'Glaucoma y enfermedades de retina', icon: AlertCircle },
  { title: 'Ojo seco crónico', icon: Sun },
  { title: 'Conjuntivitis, queratitis, estrabismo, ambliopía', icon: Activity },
  { title: 'Urgencias oculares', icon: ShieldCheck },
]

export const servicios = [
  {
    title: 'Servicios y tecnología',
    icon: ClipboardList,
    bullets: [
      'Estudios oftalmológicos completos (fondo de ojo, tonometría, refracción).',
      'Cirugía de cataratas con lente intraocular.',
      'Láser ocular (glaucoma, retina, capsulotomía).',
      'Adaptación de lentes de contacto.',
      'Topografía corneal y OCT.',
      'Tratamientos para ojo seco.',
      'Evaluación prequirúrgica para cirugía refractiva.',
    ],
  },
]

export const stripServicios = [
  { title: 'Oftalmología clínica', icon: Eye },
  { title: 'Cirugía de cataratas', icon: Sparkles },
  { title: 'Láser ocular', icon: Activity },
  { title: 'Diagnóstico avanzado', icon: Scan },
  { title: 'Atención humana', icon: HeartHandshake },
  { title: 'Equipo especializado', icon: Users2 },
]

export const faqs = [
  {
    q: '¿Atienden niños?',
    a: 'Sí. Realizamos evaluación visual pediátrica, control de lentes y tratamiento de estrabismo o ambliopía.',
  },
  {
    q: '¿Qué debo llevar a la consulta?',
    a: 'Tus lentes actuales, prescripciones previas y estudios oftalmológicos anteriores si los tienes.',
  },
  {
    q: '¿Realizan cirugías en la clínica?',
    a: 'Sí. Realizamos cirugía de cataratas, láser ocular y otros procedimientos con tecnología de vanguardia.',
  },
]

export const fortalezas = [
  'Salud visual',
  'Cirugía de cataratas',
  'Láser ocular',
  'Diagnóstico avanzado',
  'Atención pediátrica visual',
  'Atención humana',
  'Tecnología de vanguardia',
]
