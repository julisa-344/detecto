import {
  Bug,
  Activity,
  Microscope,
  ShieldCheck,
  Sparkles,
  Heart,
  Users2,
  Stethoscope,
  Pill,
  Thermometer,
  Syringe,
  AlertCircle,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const infeccionesImages = {
  heroVideo: `${IMG_BASE}especialidades/infecciosas.mp4`,
  side: `${IMG_BASE}especialidades/infecciosas.webp`,
}

export const sintomas = [
  { title: 'Fiebre persistente o recurrente', desc: 'Episodios prolongados sin causa clara.' },
  { title: 'Síntomas gastrointestinales', desc: 'Molestias digestivas inexplicables o crónicas.' },
  { title: 'Viajes a zonas endémicas', desc: 'Contacto reciente con regiones tropicales.' },
  { title: 'Diagnóstico de enfermedades específicas', desc: 'Malaria, dengue, tuberculosis o VIH.' },
  { title: 'Infecciones recurrentes', desc: 'Procesos infecciosos resistentes a tratamientos comunes.' },
]

export const condiciones = [
  { title: 'Infecciones gastrointestinales y respiratorias', icon: Activity },
  { title: 'Enfermedades tropicales (malaria, dengue, tifoidea)', icon: Thermometer },
  { title: 'Tuberculosis e infecciones pulmonares', icon: Microscope },
  { title: 'Infecciones de transmisión sexual', icon: AlertCircle },
  { title: 'VIH/SIDA y enfermedades asociadas', icon: ShieldCheck },
  { title: 'Infecciones en inmunocomprometidos', icon: Heart },
  { title: 'Enfermedades emergentes y reemergentes', icon: Sparkles },
]

export const servicios = [
  {
    title: 'Servicios y procedimientos disponibles',
    icon: Microscope,
    bullets: [
      'Evaluación y diagnóstico de infecciones.',
      'Pruebas de laboratorio especializadas.',
      'Tratamientos farmacológicos y antimicrobianos.',
      'Asesoría en prevención y vacunación.',
      'Manejo de enfermedades crónicas infecciosas.',
      'Seguimiento post-tratamiento y control de recaídas.',
    ],
  },
]

export const stripServicios = [
  { title: 'Infectología clínica', icon: Stethoscope },
  { title: 'Enfermedades tropicales', icon: Bug },
  { title: 'Vacunación y prevención', icon: Syringe },
  { title: 'Tratamientos antimicrobianos', icon: Pill },
  { title: 'Manejo crónico', icon: Heart },
  { title: 'Equipo especializado', icon: Users2 },
]

export const faqs = [
  {
    q: '¿Qué diferencia hay entre una infección común y una enfermedad tropical?',
    a: 'Las enfermedades tropicales están asociadas a regiones específicas y a vectores como mosquitos o agua contaminada, requiriendo enfoques diagnósticos y terapéuticos particulares.',
  },
  {
    q: '¿Cuándo es urgente acudir a un infectólogo después de un viaje?',
    a: 'Cuando aparece fiebre, diarrea persistente, erupciones cutáneas o síntomas inusuales en los días o semanas posteriores al regreso de una zona endémica.',
  },
  {
    q: '¿Qué tipo de apoyo brindan a pacientes con enfermedades crónicas como VIH?',
    a: 'Acompañamiento integral con terapia antirretroviral, seguimiento clínico, soporte emocional y educación para mejorar tu calidad de vida.',
  },
  {
    q: '¿Cómo ayudan a pacientes con infecciones que no responden a tratamientos?',
    a: 'Realizamos estudios de resistencia, ajustamos esquemas terapéuticos y coordinamos con otras especialidades para resolver casos complejos.',
  },
]

export const fortalezas = [
  'Infectología clínica',
  'Enfermedades tropicales',
  'Diagnóstico avanzado',
  'Prevención y vacunación',
  'Manejo de crónicos',
  'Tecnología de laboratorio',
  'Atención humana',
]
