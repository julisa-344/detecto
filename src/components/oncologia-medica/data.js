import {
  Activity,
  Pill,
  ShieldCheck,
  Dna,
  Heart,
  Apple,
  ClipboardList,
  Clock,
  Stethoscope,
} from 'lucide-react'

export const tiposCancer = [
  'Cáncer de mama',        'Cáncer de pulmón',
  'Cáncer colorrectal',    'Cáncer de próstata',
  'Linfomas y leucemias',  'Melanoma y cánceres de piel',
  'Cáncer de páncreas, hígado, gástrico y otros',
]

export const servicios = [
  { title: 'Quimioterapia ambulatoria',                 icon: Activity },
  { title: 'Inmunoterapia y terapias biológicas',       icon: ShieldCheck },
  { title: 'Terapia hormonal',                          icon: Pill },
  { title: 'Planes de tratamiento individualizados',    icon: ClipboardList },
  { title: 'Evaluación genética y marcadores tumorales',icon: Dna },
  { title: 'Acompañamiento psicooncológico',            icon: Heart },
  { title: 'Nutrición oncológica y cuidados paliativos',icon: Apple },
]

export const highlights = [
  { icon: Stethoscope, title: 'Equipo especializado',  text: 'Oncólogos médicos con enfoque integral y multidisciplinario.' },
  { icon: Dna,         title: 'Medicina personalizada', text: 'Planes diseñados según tu perfil genético y molecular.' },
  { icon: Clock,       title: 'Atención oportuna',      text: 'Seguimiento continuo desde la primera evaluación.' },
]

export const faqs = [
  { q: '¿Me pueden tratar si ya estoy en tratamiento en otro lugar?', a: 'Sí, podemos ofrecer una segunda opinión o complementar tu tratamiento actual..' },
  { q: '¿Qué necesito para la primera consulta?', a: 'Lleva tus estudios más recientes. Nuestro equipo evaluará si necesitas análisis adicionales.' },
  { q: '¿Usan tratamientos nuevos como inmunoterapia?', a: 'Sí, contamos con inmunoterapia y terapias dirigidas según el tipo de tumor y las características genéticas.' },
]

export const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}
