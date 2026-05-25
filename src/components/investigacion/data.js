import {
  FlaskConical,
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Microscope,
  Activity,
  Stethoscope,
  Sun,
  Pill,
  Biohazard,
  LineChart,
} from 'lucide-react'

import insImg from '../../assets/ins.webp'
import ensayosImg from '../../assets/ensayosClínicos.jpg'
import eticaImg from '../../assets/eticajpg.jpg'
import tecnologiaImg from '../../assets/tecnologia.jpg'

const BASE = import.meta.env.VITE_BASE_IMAGE_URL
const staffImg = `${BASE}investigacion/staff.png`

export const investigacionImages = {
  centro: insImg,
  equipo: staffImg,
  observacionales:
    'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
}

export const pilares = [
  {
    title: 'Ensayos clínicos',
    desc: 'Estudios de fase I a IV en oncología y nuevas especialidades, con patrocinio de farmacéuticas internacionales.',
    icon: FlaskConical,
    image: ensayosImg,
  },
  {
    title: 'Innovación',
    desc: 'Innovación Tecnológica y áreas dedicadas que aseguran trazabilidad e integridad de los datos.',
    icon: Sparkles,
    image: tecnologiaImg,
  },
  {
    title: 'Ética & seguridad',
    desc: 'Equipo certificado en Buenas Prácticas Clínicas, Ética en la Investigación y Conducta Responsable.',
    icon: ShieldCheck,
    image: eticaImg,
  },
]

export const areasEstudio = [
  { title: 'Cáncer de pulmón', icon: Activity },
  { title: 'Cáncer de cuello uterino', icon: Microscope },
  { title: 'Cáncer gastroesofágico', icon: Pill },
  { title: 'Cardiología', icon: HeartPulse },
  { title: 'Dermatología', icon: Sun },
  { title: 'Infectología', icon: Biohazard },
  { title: 'Gastroenterología', icon: Stethoscope },
  { title: 'Estudios observacionales', icon: LineChart },
]

export const patrocinadores = [
  'Farmacéutica Internacional 1',
  'Farmacéutica Internacional 2',
  'Farmacéutica Internacional 3',
  'Farmacéutica Internacional 4',
]
