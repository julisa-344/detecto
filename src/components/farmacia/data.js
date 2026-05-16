import { Pill, HeartHandshake, Truck } from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const areas = [
  {
    title: 'Medicamentos generales y oncológicos',
    icon: Pill,
    image: `${IMG_BASE}servicios/farmacia1.webp`,
    bullets: [
      'Amplio stock para el cuidado diario y manejo de enfermedades crónicas.',
      'Medicamentos oncológicos certificados y supervisados.',
      'Suplementos y productos que apoyan tu salud y recuperación.',
    ],
  },
  {
    title: 'Acompañamiento farmacéutico cercano',
    icon: HeartHandshake,
    image: `${IMG_BASE}servicios/farmacia2jpg.jpg`,
    bullets: [
      'Te explicamos cómo tomar tus medicamentos y qué efectos esperar.',
      'Te ayudamos a mantener tu tratamiento sin interrupciones.',
      'Asesoría directa con profesionales que entienden tu situación.',
    ],
  },
  {
    title: 'Entrega sencilla y segura',
    icon: Truck,
    image: `${IMG_BASE}servicios/farmacia2.png`,
    bullets: [
      'Compra presencial o por teléfono.',
      'Medicamentos conservados bajo normas estrictas.',
      'Entrega a domicilio en Lima Metropolitana si lo necesitas.',
      'Manejados bajo protocolos de seguridad y control de calidad.',
    ],
  },
]

export const faqs = [
  {
    q: '¿La farmacia tiene los medicamentos que indican los médicos de Detecta Clínica?',
    a: 'Sí, contamos con stock priorizado de los medicamentos que indican nuestros especialistas, tanto generales como oncológicos.',
  },
  {
    q: '¿Puedo comprar con receta de otro centro médico?',
    a: 'Sí, atendemos recetas externas siempre que sean válidas y emitidas por un profesional autorizado.',
  },
  {
    q: '¿Los medicamentos que venden son confiables?',
    a: 'Todos nuestros productos están certificados, almacenados bajo normas estrictas y supervisados por nuestro equipo farmacéutico.',
  },
  {
    q: '¿Me pueden ayudar si tengo dudas con mi medicación?',
    a: 'Sí, nuestro equipo te brinda asesoría sobre dosis, interacciones y efectos esperados durante el tratamiento.',
  },
  {
    q: '¿Qué ventajas tiene comprar aquí?',
    a: 'Acceso a medicamentos confiables, acompañamiento profesional, entrega a domicilio y continuidad asegurada de tu tratamiento.',
  },
]

export const fortalezas = [
  'Farmacia clínica',
  'Oncología especializada',
  'Acompañamiento profesional',
  'Medicamentos certificados',
  'Entrega segura',
  'Stock confiable',
  'Asesoría farmacéutica',
]
