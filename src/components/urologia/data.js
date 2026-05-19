import {
  Activity,
  ShieldCheck,
  Microscope,
  ClipboardList,
  Users2,
  HeartHandshake,
  Stethoscope,
  Sparkles,
  Scissors,
  AlertCircle,
  Droplet,
  Heart,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const urologiaImages = {
  heroVideo: `${IMG_BASE}oncologia/urologia.mp4`,
  side: `${IMG_BASE}especialidades/urologia.jpg`,
  cta: `${IMG_BASE}especialidades/urologiaCta.jpg`,
}

export const sintomas = [
  { title: 'Dolor o ardor al orinar', desc: 'Síntomas urinarios que requieren evaluación.' },
  { title: 'Incontinencia urinaria', desc: 'Pérdida involuntaria de orina en hombres o mujeres.' },
  { title: 'Disfunción eréctil o problemas sexuales', desc: 'Evaluación y tratamiento especializado.' },
  { title: 'Cálculos renales', desc: 'Diagnóstico y manejo de litiasis urinaria.' },
  { title: 'Control de próstata', desc: 'Despistaje preventivo y seguimiento periódico.' },
  { title: 'Fertilidad masculina', desc: 'Estudio y tratamiento de la salud reproductiva.' },
]

export const condiciones = [
  { title: 'Cáncer urológico (próstata, vejiga, riñón, testículo)', icon: ShieldCheck },
  { title: 'Hiperplasia benigna de próstata', icon: Activity },
  { title: 'Infecciones urinarias recurrentes', icon: AlertCircle },
  { title: 'Incontinencia urinaria', icon: Droplet },
  { title: 'Disfunción sexual masculina', icon: Heart },
  { title: 'Cálculos renales y enfermedades del riñón', icon: Microscope },
]

export const servicios = [
  {
    title: 'Servicios y procedimientos',
    icon: ClipboardList,
    bullets: [
      'Ecografías urológicas y estudios especializados.',
      'Flujometría y estudios funcionales.',
      'Cirugía mínimamente invasiva y laparoscopía.',
      'Tratamientos con láser.',
      'Vasectomía sin bisturí.',
      'Rehabilitación del suelo pélvico.',
    ],
  },
]

export const stripServicios = [
  { title: 'Urología clínica', icon: Stethoscope },
  { title: 'Salud prostática', icon: ShieldCheck },
  { title: 'Cirugía mínimamente invasiva', icon: Scissors },
  { title: 'Tratamientos con láser', icon: Sparkles },
  { title: 'Rehabilitación pélvica', icon: HeartHandshake },
  { title: 'Equipo especializado', icon: Users2 },
]

export const faqs = [
  {
    q: '¿Atienden mujeres?',
    a: 'Sí. La urología atiende tanto a hombres como a mujeres en patologías del sistema urinario, incluyendo incontinencia y cálculos renales.',
  },
  {
    q: '¿Qué debo llevar a la consulta?',
    a: 'Estudios previos, análisis de sangre y orina recientes, y un listado de medicamentos que tomas actualmente.',
  },
  {
    q: '¿Hay opciones sin cirugía?',
    a: 'Sí. Muchas condiciones se manejan con tratamientos médicos, cambios de estilo de vida o procedimientos no quirúrgicos según el caso.',
  },
]

export const fortalezas = [
  'Urología clínica',
  'Salud prostática',
  'Cirugía mínimamente invasiva',
  'Tratamientos con láser',
  'Rehabilitación pélvica',
  'Atención humana',
  'Equipo especializado',
]
