import { BedDouble, Users2, Heart, ShieldCheck, Sparkles, Clock } from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const habitaciones = [
  {
    title: 'Habitaciones unipersonales',
    icon: BedDouble,
    image: `${IMG_BASE}servicios/unipersonales.webp`,
    bullets: ['Privacidad total', 'Atención personalizada', 'Ambiente sereno'],
  },
  {
    title: 'Habitaciones bipersonales',
    icon: Users2,
    image: `${IMG_BASE}servicios/bipersonales.webp`,
    bullets: ['Facilidades para acompañante', 'Cuidado constante', 'Ambiente familiar'],
  },
]

export const beneficios = [
  { title: 'Atención humana', desc: 'Equipo cercano comprometido con tu bienestar.', icon: Heart },
  { title: 'Seguridad clínica', desc: 'Protocolos estrictos en cada etapa.', icon: ShieldCheck },
  { title: 'Espacios cómodos', desc: 'Ambientes diseñados para tu descanso.', icon: Sparkles },
  { title: 'Acompañamiento 24/7', desc: 'Estamos contigo en todo momento.', icon: Clock },
]

export const faqs = [
  {
    q: '¿Qué incluye la hospitalización en Detecta Clínica?',
    a: 'Habitación equipada, atención médica y de enfermería, monitoreo continuo y soporte emocional durante toda tu estadía.',
  },
  {
    q: '¿Puedo elegir el tipo de habitación?',
    a: 'Sí, ofrecemos habitaciones unipersonales y bipersonales según tu preferencia y disponibilidad.',
  },
  {
    q: '¿Los acompañantes pueden quedarse?',
    a: 'Sí, contamos con facilidades para acompañantes en ambos tipos de habitaciones.',
  },
  {
    q: '¿Quién supervisa mi recuperación?',
    a: 'Un equipo multidisciplinario de médicos, enfermeras y especialistas dedicados a tu seguimiento.',
  },
  {
    q: '¿Qué medidas de seguridad aplican?',
    a: 'Protocolos estrictos de bioseguridad, monitoreo permanente y trazabilidad de cada procedimiento.',
  },
]

export const fortalezas = [
  'Cuidado humano',
  'Habitaciones cómodas',
  'Seguridad clínica',
  'Acompañamiento integral',
  'Atención personalizada',
  'Recuperación tranquila',
  'Equipo comprometido',
]
