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
    q: '¿Qué hace diferente al Laboratorio Clínico de Detecta?',
    a: 'Combinamos tecnología avanzada, controles de calidad rigurosos y un equipo de especialistas que interpreta cada resultado para apoyar decisiones médicas confiables y oportunas.',
  },
  {
    q: '¿En cuánto tiempo entregan los resultados?',
    a: 'Los análisis de rutina están disponibles el mismo día; los estudios especializados pueden tomar entre 24 y 72 horas según la complejidad.',
  },
  {
    q: '¿Los análisis están validados por especialistas?',
    a: 'Sí, cada resultado es revisado e interpretado por médicos especialistas en diagnóstico antes de su entrega.',
  },
  {
    q: '¿Puedo acceder a mis resultados desde casa?',
    a: 'Sí, entregamos los resultados de forma digital, confidencial y accesible desde cualquier dispositivo.',
  },
  {
    q: '¿Atienden sin cita previa?',
    a: 'En la mayoría de análisis sí; algunos estudios especializados requieren reserva previa y preparación específica.',
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
