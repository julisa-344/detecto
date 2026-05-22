import {
  Bone,
  ScanLine,
  Activity,
  ScanSearch,
  Waves,
  Layers,
  FileText,
  MapPin,
  Users,
} from 'lucide-react'

export const estudios = [
  {
    title: 'Densitometría Ósea – Hologic DXA',
    desc: 'Evaluación segura y precisa de osteoporosis y riesgo de fractura.',
    icon: Bone,
  },
  {
    title: 'Rayos X Digital',
    desc: 'Estudios con menor radiación y resultados inmediatos.',
    icon: ScanLine,
  },
  {
    title: 'Arco en C – Philips Zenition 70',
    desc: 'Visualización en tiempo real para cirugías más seguras.',
    icon: Activity,
  },
  {
    title: 'Mamografía 3D',
    desc: 'Detección precoz con mayor detalle y menor incomodidad.',
    icon: ScanSearch,
  },
  {
    title: 'Ecografía – Resona 7',
    desc: 'Imágenes nítidas para múltiples estudios clínicos.',
    icon: Waves,
  },
  {
    title: 'Tomografía Multicorte',
    desc: 'Alta resolución para diversas especialidades médicas.',
    icon: Layers,
  },
]

export const pasos = [
  {
    n: '1',
    title: 'Ten tus resultados previos u orden médica',
    icon: FileText,
  },
  {
    n: '2',
    title: 'Acude directamente a nuestra sede',
    icon: MapPin,
  },
  {
    n: '3',
    title: 'Atención por nuestro equipo multidisciplinario',
    icon: Users,
  },
]

export const faqs = [
  {
    q: '¿Qué tipos de estudios realizan?',
    a: 'Mamografías 3D, ecografías, tomografías, densitometría ósea, rayos X y soporte intraoperatorio con arco en C.',
  },
  {
    q: '¿Los resultados se entregan rápidamente?',
    a: 'Sí, la mayoría de estudios entregan resultados en el mismo día o en plazos muy cortos, según la complejidad.',
  },
  {
    q: '¿Puedo acceder a mis resultados de forma digital?',
    a: 'Sí, te entregamos tus imágenes y reportes en formato digital para que los compartas con tu médico tratante.',
  },
  {
    q: '¿El personal puede atender casos complejos?',
    a: 'Contamos con médicos radiólogos especializados y tecnología de alta gama preparada para estudios complejos.',
  },
  {
    q: '¿Qué hace diferente el área de Imágenes de Detecta?',
    a: 'La combinación de equipos de última generación, lectura especializada y un enfoque humano centrado en el paciente.',
  },
]

export const fortalezas = [
  'Diagnóstico preciso',
  'Tecnología de Alta Precisión',
  'Resultados rápidos',
  'Radiólogos especializados',
  'Atención humana',
  'Imágenes claras',
  'Seguridad del paciente',
]
