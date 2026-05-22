import {
  Stethoscope,
  Scan,
  Scissors,
  Activity,
  HeartHandshake,
  ShieldCheck,
  Microscope,
  Dna,
  Sun,
  Sparkles,
  Users2,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const cabezaCuelloImages = {
  heroVideo: `${IMG_BASE}oncologia/cabezaCuello.mp4`,
  side: `${IMG_BASE}oncologia/cabeza.webp`,
}

export const sintomas = [
  {
    title: 'Úlceras orales persistentes',
    desc: 'Llagas en la boca que no sanan tras varias semanas.',
  },
  {
    title: 'Dificultad para tragar',
    desc: 'Sensación de disfagia al ingerir alimentos o líquidos.',
  },
  {
    title: 'Cambios en la voz',
    desc: 'Ronquera o alteraciones persistentes del habla.',
  },
  {
    title: 'Bultos en cuello',
    desc: 'Aparición de ganglios o masas palpables en la región cervical.',
  },
  {
    title: 'Dolor facial o mandibular',
    desc: 'Molestias continuas en cara, mandíbula o garganta.',
  },
  {
    title: 'Sangrado en mucosas',
    desc: 'Hemorragias nasales recurrentes o sangrado bucal sin causa clara.',
  },
  {
    title: 'Lesiones cutáneas nuevas',
    desc: 'Manchas o crecimientos inusuales en la piel de cara o cuello.',
  },
]

export const tiposCancer = [
  { title: 'Carcinoma de cavidad oral', icon: Microscope },
  { title: 'Cáncer de laringe y faringe', icon: Activity },
  { title: 'Tumores de glándulas salivales', icon: Dna },
  { title: 'Cáncer de senos paranasales', icon: Stethoscope },
  { title: 'Tumores de piel de cabeza y cuello', icon: Sun },
  { title: 'Tumores cervicales y ganglios linfáticos', icon: ShieldCheck },
  { title: 'Recurrencias tumorales', icon: Sparkles },
]

export const servicios = [
  {
    title: 'Diagnóstico de precisión',
    icon: Scan,
    bullets: [
      'Biopsias incisionales y excisionales.',
      'Punción aspirativa con aguja fina (PAAF).',
      'Estudios de imagen: TAC, RM y PET-CT.',
      'Marcadores tumorales e inmunohistoquímica.',
    ],
  },
  {
    title: 'Tratamientos quirúrgicos',
    icon: Scissors,
    bullets: [
      'Resección de tumores de cavidad oral.',
      'Laringectomía parcial o total.',
      'Glosectomía y sialadenectomía.',
      'Cirugía de senos paranasales y nariz.',
      'Disección de cuello y reconstrucción microvascular.',
    ],
  },
  {
    title: 'Terapias combinadas',
    icon: Activity,
    bullets: [
      'Radioterapia postoperatoria.',
      'Quimioterapia adyuvante.',
      'Terapias dirigidas según perfil tumoral.',
    ],
  },
  {
    title: 'Acompañamiento integral',
    icon: HeartHandshake,
    bullets: [
      'Evaluaciones postoperatorias periódicas.',
      'Rehabilitación del habla y la deglución.',
      'Apoyo psicológico durante todo el proceso.',
    ],
  },
]

export const stripServicios = [
  { title: 'Cirugía oncológica', icon: Scissors },
  { title: 'Diagnóstico avanzado', icon: Scan },
  { title: 'Preservación funcional', icon: ShieldCheck },
  { title: 'Equipo multidisciplinario', icon: Users2 },
  { title: 'Rehabilitación postoperatoria', icon: HeartHandshake },
  { title: 'Tecnología de Alta Precisión', icon: Microscope },
]

export const faqs = [
  {
    q: '¿Qué tipos de lesiones se tratan en esta unidad?',
    a: 'Atendemos tumores benignos y malignos de cavidad oral, laringe, faringe, glándulas salivales, senos paranasales, piel y ganglios cervicales.',
  },
  {
    q: '¿Cómo aseguran que mi apariencia y funciones no se vean afectadas?',
    a: 'Trabajamos con técnicas quirúrgicas de preservación funcional y reconstrucción microvascular para mantener tu calidad de vida y estética.',
  },
  {
    q: '¿Qué sucede si mi caso requiere más que solo cirugía?',
    a: 'Coordinamos un plan integral con radioterapia, quimioterapia y terapias dirigidas según las características de tu tumor.',
  },
  {
    q: '¿Ofrecen apoyo después de la operación?',
    a: 'Sí, brindamos seguimiento postoperatorio, rehabilitación del habla y deglución, y soporte psicológico continuo.',
  },
]

export const fortalezas = [
  'Cirugía especializada',
  'Preservación funcional',
  'Reconstrucción avanzada',
  'Diagnóstico preciso',
  'Equipo multidisciplinario',
  'Rehabilitación integral',
  'Cuidado humano',
  'Tecnología de Alta Precisión',
]
