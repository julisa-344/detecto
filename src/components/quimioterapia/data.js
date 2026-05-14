import {
  BedDouble,
  ShieldCheck,
  Activity,
  Stethoscope,
  Heart,
  Pill,
  Brain,
  ClipboardCheck,
  CalendarCheck,
  Syringe,
  FlaskConical,
  Microscope,
  TrendingUp,
} from 'lucide-react'

export const tratamiento = [
  {
    title: 'Ambientes cómodos y silenciosos',
    desc: 'Espacios diseñados para hacer más llevaderas las sesiones.',
    icon: BedDouble,
  },
  {
    title: 'Supervisión continua',
    desc: 'Acompañamiento médico y de enfermería durante toda la aplicación.',
    icon: ShieldCheck,
  },
  {
    title: 'Monitoreo clínico',
    desc: 'Seguimiento constante para prevenir y manejar eventos adversos.',
    icon: Activity,
  },
]

export const equipo = [
  { title: 'Oncología Clínica', icon: Stethoscope },
  { title: 'Enfermería Oncológica', icon: Heart },
  { title: 'Farmacia', icon: Pill },
  { title: 'Psicología de Soporte', icon: Brain },
]

export const beneficios = [
  {
    title: 'Consulta inicial',
    desc: 'Evaluación integral y definición del esquema más adecuado.',
    icon: ClipboardCheck,
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Programación clínica',
    desc: 'Revisión de analítica, profilaxis y calendario de sesiones.',
    icon: CalendarCheck,
    image:
      'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Monitoreo continuo',
    desc: 'Aplicación ambulatoria con control de signos vitales.',
    icon: Syringe,
    image:
      'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1200&q=80',
  },
]

export const ensayos = [
  {
    title: 'Acceso a nuevas terapias',
    desc: 'Tratamientos innovadores en evaluación clínica.',
    icon: FlaskConical,
  },
  {
    title: 'Seguimiento médico continuo',
    desc: 'Monitoreo especializado sin costo en el estudio.',
    icon: Microscope,
  },
  {
    title: 'Contribución científica',
    desc: 'Aportas al desarrollo de futuras alternativas.',
    icon: TrendingUp,
  },
]

export const faqs = [
  {
    q: '¿Qué es la quimioterapia?',
    a: 'Es un tratamiento que utiliza medicamentos para destruir células cancerígenas o detener su crecimiento, aplicado según un esquema personalizado.',
  },
  {
    q: '¿Cómo me preparo para una sesión?',
    a: 'Sigue las indicaciones de tu médico sobre alimentación, hidratación y medicación previa. Te entregaremos un plan claro antes de cada sesión.',
  },
  {
    q: '¿Puedo trabajar o estudiar durante el tratamiento?',
    a: 'Depende de la respuesta individual. Muchos pacientes mantienen sus actividades con adecuaciones, otros requieren más descanso.',
  },
  {
    q: '¿Es dolorosa la aplicación?',
    a: 'La aplicación intravenosa no suele ser dolorosa. Solo se siente la punción inicial. Nuestro equipo te acompañará durante toda la sesión.',
  },
  {
    q: '¿Cuánto dura una sesión?',
    a: 'Varía según el esquema: desde 1 hasta varias horas. Te informaremos la duración estimada antes de cada sesión.',
  },
]

export const fortalezas = [
  'Oncología integral',
  'Tratamiento personalizado',
  'Monitoreo continuo',
  'Equipo multidisciplinario',
  'Acompañamiento humano',
  'Ensayos clínicos',
  'Seguridad farmacológica',
]
