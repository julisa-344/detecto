import {
  Heart,
  Microscope,
  Scissors,
  HeartHandshake,
  ShieldCheck,
  Activity,
  Stethoscope,
  Users2,
  Sparkles,
  Dna,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const mastoImages = {
  heroVideo: `${IMG_BASE}oncologia/mastologia.mp4`,
  side: `${IMG_BASE}oncologia/mastologia.webp`,
  cta: `${IMG_BASE}oncologia/mastologiaCta.webp`,
}

export const sintomas = [
  { title: 'Bulto en mama o axila', desc: 'Masa palpable o engrosamiento inusual.' },
  { title: 'Cambios en la piel', desc: 'Enrojecimiento, hundimientos o piel de naranja.' },
  { title: 'Secreción anormal', desc: 'Salida de líquido por el pezón con o sin sangre.' },
  { title: 'Dolor mamario persistente', desc: 'Molestias continuas sin causa aparente.' },
  { title: 'Retracción del pezón', desc: 'Cambios en la posición o forma del pezón.' },
  { title: 'Alteraciones en la mama', desc: 'Cambios visibles de tamaño o forma.' },
  { title: 'Antecedentes familiares', desc: 'Historia de cáncer de mama en la familia.' },
]

export const condiciones = [
  { title: 'Cáncer de mama en todas sus etapas', icon: ShieldCheck },
  { title: 'Tumores benignos (fibroadenomas, quistes)', icon: Sparkles },
  { title: 'Mastitis y abscesos mamarios', icon: Activity },
  { title: 'Cambios fibroquísticos', icon: Heart },
  { title: 'Lesiones sospechosas por imagen', icon: Microscope },
  { title: 'Seguimiento de alto riesgo hereditario', icon: Dna },
]

export const servicios = [
  {
    title: 'Diagnóstico avanzado',
    icon: Microscope,
    bullets: [
      'Mamografía 3D — tomosíntesis.',
      'Ecografía mamaria Shear Wave.',
      'Biopsia estereotáctica, core y BAAF.',
      'Resonancia mamaria.',
      'Marcadores tumorales específicos.',
    ],
  },
  {
    title: 'Cirugía oncológica de mama',
    icon: Scissors,
    bullets: [
      'Cirugía conservadora (tumorectomía, cuadrantectomía).',
      'Mastectomía total o parcial.',
      'Ganglio centinela con verde de indocianina.',
      'Linfadenectomía axilar.',
      'Reconstrucción mamaria inmediata o diferida.',
    ],
  },
  {
    title: 'Acompañamiento integral',
    icon: HeartHandshake,
    bullets: [
      'Apoyo psicológico oncológico.',
      'Rehabilitación y linfoterapia post cirugía.',
      'Seguimiento y control periódico.',
    ],
  },
]

export const stripServicios = [
  { title: 'Mastología clínica', icon: Stethoscope },
  { title: 'Diagnóstico precoz', icon: ShieldCheck },
  { title: 'Cirugía conservadora', icon: Scissors },
  { title: 'Reconstrucción mamaria', icon: Heart },
  { title: 'Equipo multidisciplinario', icon: Users2 },
  { title: 'Tecnología de Alta Precisión', icon: Microscope },
]

export const faqs = [
  {
    q: '¿Qué señales en mis mamas deben motivarme a pedir una cita?',
    a: 'Bultos, secreciones, cambios en la piel o el pezón, dolor persistente y antecedentes familiares ameritan una evaluación especializada.',
  },
  {
    q: '¿En qué se diferencia la Ecografía Shear Wave de una ecografía común?',
    a: 'Mide la elasticidad del tejido para detectar lesiones sospechosas con mayor precisión, complementando la ecografía convencional.',
  },
  {
    q: '¿Qué opciones existen si requiero una cirugía de mama?',
    a: 'Desde técnicas conservadoras hasta mastectomía con reconstrucción inmediata o diferida, siempre priorizando estética y funcionalidad.',
  },
  {
    q: '¿Cómo es el apoyo después de un tratamiento oncológico?',
    a: 'Seguimiento clínico, linfoterapia, apoyo psicológico y rehabilitación física para asegurar tu recuperación integral.',
  },
]

export const fortalezas = [
  'Salud mamaria',
  'Diagnóstico precoz',
  'Cirugía oncológica',
  'Reconstrucción',
  'Atención humana',
  'Tecnología de Alta Precisión',
  'Acompañamiento integral',
]
