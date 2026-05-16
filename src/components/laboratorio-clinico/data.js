import {
  Droplet,
  Microscope,
  FlaskConical,
  Cpu,
  BadgeCheck,
  Clock,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const servicios = [
  {
    title: 'Análisis de sangre completos',
    icon: Droplet,
    image: `${IMG_BASE}servicios/lab1.jpg`,
    bullets: [
      'Hemogramas, perfiles bioquímicos y pruebas hormonales con tecnología avanzada.',
      'Marcadores tumorales que garantizan precisión y seguridad.',
      'Interpretación a cargo de médicos especialistas.',
    ],
  },
  {
    title: 'Pruebas microbiológicas y serológicas',
    icon: Microscope,
    image: `${IMG_BASE}servicios/lab2.webp`,
    bullets: [
      'Diagnóstico rápido y confiable de infecciones bacterianas, virales y fúngicas.',
      'Detección precisa de VIH, hepatitis, VPH, entre otros.',
      'Métodos modernos como PCR e inmunoensayos.',
    ],
  },
  {
    title: 'Estudios especializados',
    icon: FlaskConical,
    image: `${IMG_BASE}servicios/lab3.jpg`,
    bullets: [
      'Paneles metabólicos, inmunológicos, pruebas de coagulación e inflamación.',
      'Monitoreo de enfermedades crónicas y oncológicas con resultados claros.',
      'Protocolos internacionales para asegurar calidad y reproducibilidad.',
    ],
  },
]

export const compromisos = [
  {
    title: 'Tecnología avanzada y confiable',
    desc: 'Equipos de alta sensibilidad que reducen errores y aseguran resultados precisos desde la primera toma.',
    icon: Cpu,
  },
  {
    title: 'Profesionales certificados',
    desc: 'Técnicos y médicos especialistas en diagnóstico, comprometidos con la exactitud y seguridad de cada muestra.',
    icon: BadgeCheck,
  },
  {
    title: 'Resultados rápidos y seguros',
    desc: 'Entrega digital, confidencial y accesible desde cualquier dispositivo, con tiempos ajustados a la necesidad clínica.',
    icon: Clock,
  },
]

export const faqs = [
  {
    q: '¿Necesito cita previa para realizarme un análisis?',
    a: 'En la mayoría de los casos no, pero algunos estudios especializados requieren reserva previa y preparación específica.',
  },
  {
    q: '¿En cuánto tiempo entregan los resultados?',
    a: 'Los análisis de rutina están disponibles el mismo día; los estudios especializados pueden tomar entre 24 y 72 horas según la complejidad.',
  },
  {
    q: '¿Puedo acceder a mis resultados en línea?',
    a: 'Sí, entregamos los resultados de forma digital, confidencial y accesible desde cualquier dispositivo.',
  },
  {
    q: '¿Atienden órdenes de médicos externos?',
    a: 'Sí, procesamos órdenes emitidas por cualquier profesional autorizado, siempre que sean válidas y vigentes.',
  },
  {
    q: '¿Qué controles de calidad aplican a las muestras?',
    a: 'Trabajamos con protocolos internacionales de aseguramiento de calidad y trazabilidad en cada etapa del análisis.',
  },
]

export const fortalezas = [
  'Análisis confiables',
  'Tecnología avanzada',
  'Resultados rápidos',
  'Profesionales certificados',
  'Calidad asegurada',
  'Entrega digital',
  'Diagnóstico preciso',
]
