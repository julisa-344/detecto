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
  Microscope,
  Sparkles,
  Sun,
} from 'lucide-react'

import oncologiaImg from '../../assets/OncologiaMedica.jpg'
import bannerOnco from '../../assets/bannerOncologia.jpg'
import clinicaImg from '../../assets/clinica.jpg'

export const oncoImages = {
  clinica: clinicaImg,
  hero: oncologiaImg,
  banner: bannerOnco,
  procedure:
    'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80',
  consultation:
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
  research:
    'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
  care:
    'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80',
}

export const tiposCancer = [
  { title: 'Cáncer de mama', desc: 'Detección temprana y tratamiento multidisciplinario.', icon: ShieldCheck },
  { title: 'Cáncer de pulmón', desc: 'Diagnóstico oportuno y terapias dirigidas.', icon: Activity },
  { title: 'Cáncer colorrectal', desc: 'Screening, tratamiento y seguimiento integral.', icon: Microscope },
  { title: 'Cáncer de próstata', desc: 'Evaluación urológica y terapias personalizadas.', icon: Stethoscope },
  { title: 'Linfomas y leucemias', desc: 'Hematología clínica con protocolos actualizados.', icon: Dna },
  { title: 'Melanoma y cáncer de piel', desc: 'Detección dermatoscópica y terapias avanzadas.', icon: Sun },
  { title: 'Otros tumores sólidos', desc: 'Páncreas, hígado, gástrico y más.', icon: Sparkles },
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

export const perfilPaciente = [
  'Cuentas con un diagnóstico y buscas claridad en los siguientes pasos',
  'Necesitas la tranquilidad de una segunda opinión experta',
  'Deseas un enfoque integral que cuide cada detalle de tu tratamiento actual',
  'Buscas prevención y asesoría profesional por antecedentes familiares',
  'Has concluido tu tratamiento y necesitas un seguimiento cercano y seguro',
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
