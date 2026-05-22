import {
  Activity,
  Ear,
  ShieldCheck,
  Microscope,
  ClipboardList,
  Users2,
  HeartHandshake,
  Stethoscope,
  Sparkles,
  Scissors,
  AlertCircle,
  Scan,
  Mic,
  Moon,
  Wind,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const orlImages = {
  heroVideo: `${IMG_BASE}especialidades/otorrinolaringologia.mp4`,
  side: `${IMG_BASE}especialidades/otorrinolaringologia.jpg`,
  cta: `${IMG_BASE}especialidades/otorrinolaringologiaCta.jpg`,
}

export const sintomas = [
  { title: 'Disfonía o problemas de voz', desc: 'Alteraciones persistentes en el habla o voz ronca.' },
  { title: 'Obstrucción nasal', desc: 'Dificultad para respirar o congestión continua.' },
  { title: 'Problemas en la audición', desc: 'Pérdida auditiva parcial o total.' },
  { title: 'Dolor o infecciones de oído', desc: 'Otitis, secreciones o molestias recurrentes.' },
  { title: 'Sinusitis y rinitis crónicas', desc: 'Inflamación persistente de senos paranasales o fosas nasales.' },
  { title: 'Mareos y vértigos', desc: 'Trastornos del equilibrio que requieren evaluación.' },
  { title: 'Ronquidos y apnea del sueño', desc: 'Alteraciones respiratorias durante el descanso.' },
]

export const condiciones = [
  { title: 'Trastornos de la voz y cuerdas vocales', icon: Mic },
  { title: 'Rinitis, sinusitis y desviación del tabique', icon: Wind },
  { title: 'Otitis, hipoacusia y vértigo', icon: Ear },
  { title: 'Pérdida auditiva conductiva o neurosensorial', icon: AlertCircle },
  { title: 'Alergias respiratorias', icon: Sparkles },
  { title: 'Ronquidos y apnea del sueño', icon: Moon },
  { title: 'Lesiones benignas y malignas de laringe y faringe', icon: ShieldCheck },
]

export const servicios = [
  {
    title: 'Diagnóstico',
    icon: Scan,
    bullets: [
      'Laringoscopia para evaluar cuerdas vocales y laringe.',
      'Endoscopia nasal para fosas nasales y senos paranasales.',
      'Audiometría y timpanometría.',
      'Pruebas vestibulares para mareos y equilibrio.',
      'Nasofaringoscopia para garganta y vías superiores.',
    ],
  },
  {
    title: 'Tratamientos',
    icon: Scissors,
    bullets: [
      'Cirugías funcionales de nariz (septoplastia, turbinoplastia).',
      'Cirugía de amígdalas y adenoides.',
      'Microcirugía laríngea para pólipos o lesiones vocales.',
      'Colocación de tubos de ventilación.',
      'Cirugía endoscópica de senos paranasales.',
    ],
  },
  {
    title: 'Acompañamiento integral',
    icon: HeartHandshake,
    bullets: [
      'Programas de rehabilitación de la voz.',
      'Manejo de alergias respiratorias.',
      'Seguimiento de problemas auditivos y audífonos.',
      'Controles periódicos postquirúrgicos.',
    ],
  },
]

export const stripServicios = [
  { title: 'Otorrinolaringología', icon: Stethoscope },
  { title: 'Salud auditiva', icon: Ear },
  { title: 'Cirugía nasal', icon: Wind },
  { title: 'Microcirugía laríngea', icon: Mic },
  { title: 'Apnea del sueño', icon: Moon },
  { title: 'Equipo especializado', icon: Users2 },
]

export const faqs = [
  {
    q: '¿La laringoscopia es dolorosa?',
    a: 'No. Es un procedimiento breve y bien tolerado, usualmente bajo anestesia local en consulta.',
  },
  {
    q: '¿Cómo saber si mi pérdida auditiva es grave?',
    a: 'Una audiometría completa permite cuantificar el grado de pérdida y guiar el tratamiento adecuado.',
  },
  {
    q: '¿La cirugía endoscópica nasal requiere hospitalización?',
    a: 'En la mayoría de los casos es ambulatoria, con alta el mismo día y recuperación rápida.',
  },
  {
    q: '¿Los ronquidos siempre necesitan cirugía?',
    a: 'No. Muchos casos mejoran con tratamiento conservador, dispositivos o cambios de estilo de vida.',
  },
]

export const fortalezas = [
  'Otorrinolaringología',
  'Salud auditiva',
  'Cirugía endoscópica',
  'Microcirugía laríngea',
  'Manejo de apnea',
  'Atención humana',
  'Innovación Tecnológica',
]
