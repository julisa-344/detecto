import {
  Activity,
  Microscope,
  ShieldCheck,
  ClipboardList,
  Pill,
  Users2,
  HeartHandshake,
  Stethoscope,
  Sparkles,
  Dna,
  Droplet,
  AlertCircle,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const hematoImages = {
  heroVideo: `${IMG_BASE}especialidades/hematologia.mp4`,
  side: `${IMG_BASE}especialidades/hematologia.jpg`,
  cta: `${IMG_BASE}especialidades/hematologiaCta.webp`,
}

export const sintomas = [
  { title: 'Fatiga o debilidad inexplicada', desc: 'Cansancio persistente sin causa clara.' },
  { title: 'Hemorragias o moretones frecuentes', desc: 'Sangrados inusuales o hematomas espontáneos.' },
  { title: 'Infecciones recurrentes', desc: 'Episodios repetidos que sugieren alteración inmune.' },
  { title: 'Pérdida de peso inexplicada', desc: 'Disminución sin cambios en alimentación.' },
  { title: 'Anemia persistente', desc: 'Hemoglobina baja que no responde al tratamiento básico.' },
  { title: 'Antecedentes familiares', desc: 'Historia de trastornos hematológicos en la familia.' },
]

export const condiciones = [
  { title: 'Anemia y trastornos de glóbulos rojos', icon: Droplet },
  { title: 'Leucemia y linfoma', icon: ShieldCheck },
  { title: 'Mieloma múltiple', icon: Microscope },
  { title: 'Trastornos de las plaquetas', icon: Activity },
  { title: 'Hemorragias o coagulopatías', icon: AlertCircle },
  { title: 'Talasemia y anemia de células falciformes', icon: Dna },
  { title: 'Trastornos de los glóbulos blancos', icon: Sparkles },
  { title: 'Síndrome hemofagocítico', icon: Users2 },
  { title: 'Trastornos de la médula ósea', icon: HeartHandshake },
]

export const servicios = [
  {
    title: 'Servicios y procedimientos',
    icon: ClipboardList,
    bullets: [
      'Hemograma completo y pruebas especializadas.',
      'Transfusiones de sangre y plaquetas.',
      'Terapias biológicas y medicamentos dirigidos.',
      'Quimioterapia e inmunoterapia.',
      'Terapia de células T con receptor de antígeno quimérico.',
      'Trasplante de médula ósea.',
      'Terapia de ablación y viroterapia.',
      'Ensayos clínicos y tratamientos experimentales.',
    ],
  },
]

export const stripServicios = [
  { title: 'Hematología clínica', icon: Stethoscope },
  { title: 'Diagnóstico avanzado', icon: Microscope },
  { title: 'Quimio e inmunoterapia', icon: Pill },
  { title: 'Trasplante de médula', icon: ShieldCheck },
  { title: 'Ensayos clínicos', icon: Sparkles },
  { title: 'Atención humana', icon: HeartHandshake },
]

export const faqs = [
  {
    q: '¿Qué componentes de la sangre estudia exactamente la hematología?',
    a: 'Glóbulos rojos, glóbulos blancos, plaquetas, factores de coagulación y la médula ósea.',
  },
  {
    q: '¿Cuándo un síntoma como el cansancio debe ser visto por un hematólogo?',
    a: 'Cuando es persistente, no mejora con descanso o se acompaña de palidez, sangrados, infecciones o pérdida de peso.',
  },
  {
    q: '¿Qué tipo de cánceres hematológicos tratan en la clínica?',
    a: 'Leucemias agudas y crónicas, linfomas Hodgkin y no Hodgkin, mieloma múltiple y otros trastornos linfoproliferativos.',
  },
  {
    q: '¿Realizan procedimientos avanzados como trasplantes o terapias dirigidas?',
    a: 'Sí. Ofrecemos trasplante de médula ósea, terapia CAR-T, terapias biológicas y acceso a ensayos clínicos.',
  },
]

export const fortalezas = [
  'Hematología clínica',
  'Diagnóstico preciso',
  'Tratamientos avanzados',
  'Trasplante de médula',
  'Atención humana',
  'Innovación Tecnológica',
  'Equipo especializado',
]
