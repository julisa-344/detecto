import {
  Activity,
  ShieldCheck,
  Microscope,
  ClipboardList,
  Users2,
  HeartHandshake,
  Stethoscope,
  Sparkles,
  Smile,
  Scan,
  Scissors,
  AlertCircle,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const odontoImages = {
  heroVideo: `${IMG_BASE}especialidades/odontologia.mp4`,
  side: `${IMG_BASE}especialidades/odontologia.webp`,
  cta: `${IMG_BASE}especialidades/odontologiaCta.webp`,
}

export const sintomas = [
  { title: 'Dolor dental persistente', desc: 'Molestias continuas que requieren evaluación.' },
  { title: 'Sensibilidad al frío o calor', desc: 'Reacciones dolorosas a temperaturas.' },
  { title: 'Sangrado o inflamación de encías', desc: 'Posibles signos de enfermedad periodontal.' },
  { title: 'Pérdida o movilidad dental', desc: 'Piezas flojas o ausentes que afectan la función.' },
  { title: 'Problemas de alineación', desc: 'Dientes apiñados o mordida irregular.' },
  { title: 'Rehabilitación dental', desc: 'Implantes, coronas o prótesis.' },
  { title: 'Estética dental', desc: 'Blanqueamientos, carillas o mejoras visibles.' },
]

export const condiciones = [
  { title: 'Caries y restauraciones', icon: AlertCircle },
  { title: 'Enfermedad periodontal', icon: ShieldCheck },
  { title: 'Endodoncia y tratamientos de conducto', icon: Activity },
  { title: 'Prótesis dentales fijas y removibles', icon: Smile },
  { title: 'Implantes dentales', icon: Sparkles },
  { title: 'Rehabilitación oral', icon: HeartHandshake },
  { title: 'Ortodoncia y alineadores', icon: Microscope },
  { title: 'Estética dental', icon: Stethoscope },
]

export const servicios = [
  {
    title: 'Diagnóstico avanzado',
    icon: Scan,
    bullets: [
      'Radiografías panorámicas y periapicales.',
      'Tomografía dental (CBCT).',
      'Fotografías intraorales.',
      'Exploración clínica detallada.',
      'Escaneo 3D digital.',
    ],
  },
  {
    title: 'Tratamientos',
    icon: Scissors,
    bullets: [
      'Endodoncia (tratamiento de conducto).',
      'Periodoncia (limpieza profunda y cirugía de encías).',
      'Extracciones simples y quirúrgicas.',
      'Implantes dentales con carga inmediata.',
      'Prótesis fijas, removibles y rehabilitación.',
      'Ortodoncia con brackets o alineadores.',
      'Cirugía oral menor (tercer molar, quistes, frenectomía).',
      'Estética dental (blanqueamientos, carillas, microcontornos).',
    ],
  },
  {
    title: 'Acompañamiento integral',
    icon: HeartHandshake,
    bullets: [
      'Higiene y profilaxis periódica.',
      'Educación en salud oral.',
      'Seguimientos y controles regulares.',
    ],
  },
]

export const stripServicios = [
  { title: 'Odontología integral', icon: Stethoscope },
  { title: 'Diagnóstico 3D', icon: Scan },
  { title: 'Implantes dentales', icon: Sparkles },
  { title: 'Ortodoncia y alineadores', icon: Microscope },
  { title: 'Estética dental', icon: Smile },
  { title: 'Equipo especializado', icon: Users2 },
]

export const faqs = [
  {
    q: '¿Qué beneficios ofrece la tecnología 3D y el escaneo digital?',
    a: 'Permite diagnósticos precisos, planificación detallada de tratamientos y mejor adaptación de prótesis o alineadores.',
  },
  {
    q: '¿Cuándo es necesario realizar una endodoncia o tratamiento de conducto?',
    a: 'Cuando hay caries profundas, daño del nervio dental o infección que afecta la pulpa del diente.',
  },
  {
    q: '¿Qué opciones tengo si he perdido una o varias piezas dentales?',
    a: 'Implantes dentales, prótesis fijas o removibles y rehabilitación oral según tu caso.',
  },
  {
    q: '¿Cuál es la diferencia entre ortodoncia convencional y alineadores?',
    a: 'Los brackets son fijos y suelen tratar casos complejos; los alineadores son removibles, transparentes y discretos.',
  },
]

export const fortalezas = [
  'Odontología integral',
  'Diagnóstico avanzado',
  'Implantes dentales',
  'Ortodoncia',
  'Estética dental',
  'Atención humana',
  'Tecnología 3D',
]
