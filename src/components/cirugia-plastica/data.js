import {
  Scissors,
  Sparkles,
  Heart,
  HeartHandshake,
  ShieldCheck,
  Microscope,
  ClipboardList,
  Users2,
  Stethoscope,
  Activity,
  AlertCircle,
  Droplet,
  Sun,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const plasticaImages = {
  heroVideo: `${IMG_BASE}especialidades/cirugiaPlastica.mp4`,
  side: `${IMG_BASE}especialidades/cirugiaPlastica.jpg`,
  cta: `${IMG_BASE}especialidades/cirugiaPlasticaCta.jpg`,
}

export const sintomas = [
  { title: 'Defectos por trauma', desc: 'Quemaduras, cortes o cicatrices extensas.' },
  { title: 'Reconstrucción post cáncer', desc: 'Mamaria, facial o tras mastectomía.' },
  { title: 'Malformaciones congénitas', desc: 'Labio/paladar hendido, orejas prominentes y más.' },
  { title: 'Mejoras estéticas', desc: 'Mamoplastia, rinoplastia o abdominoplastia.' },
  { title: 'Caída de tejidos', desc: 'Ptosis o flacidez que afecta tu imagen.' },
  { title: 'Reconstrucción de piel', desc: 'Injertos y colgajos para defectos cutáneos.' },
  { title: 'Quemaduras y urgencias', desc: 'Atención reconstructiva oportuna.' },
]

export const condiciones = [
  { title: 'Reconstrucción mamaria post cáncer', icon: Heart },
  { title: 'Rinoplastia, ritidectomía y blefaroplastia', icon: Sparkles },
  { title: 'Abdominoplastia, liposucción y gluteoplastia', icon: Activity },
  { title: 'Reconstrucción facial post traumatismos', icon: ShieldCheck },
  { title: 'Cirugía de mano y microcirugía', icon: Microscope },
  { title: 'Injertos y colgajos para defectos cutáneos', icon: Droplet },
  { title: 'Corrección de cicatrices y quemaduras', icon: AlertCircle },
  { title: 'Otoplastia y mamoplastias', icon: Scissors },
]

export const servicios = [
  {
    title: 'Diagnóstico y planificación',
    icon: ClipboardList,
    bullets: [
      'Evaluación clínica detallada.',
      'Modelado 3D y simulaciones estéticas.',
      'Fotografía médica pre / post.',
      'Estudios complementarios: ecografía, TAC de partes blandas.',
    ],
  },
  {
    title: 'Tratamientos quirúrgicos',
    icon: Scissors,
    bullets: [
      'Mamoplastia de aumento o reducción.',
      'Abdominoplastia, liposucción y lipoescultura.',
      'Rinoplastia y blefaroplastia.',
      'Facelift y lifting facial.',
      'Reconstrucción mamaria, facial y corporal.',
      'Cirugía de mano y microcirugía.',
      'Injertos y colgajos locales o libres.',
      'Corrección de cicatrices y quemaduras.',
    ],
  },
  {
    title: 'Tratamientos no quirúrgicos',
    icon: Sparkles,
    bullets: [
      'Rellenos con ácido hialurónico.',
      'Toxina botulínica (botox).',
      'Peelings y microdermoabrasión.',
      'Láser dermatológico para cicatrices.',
      'Mesoterapia.',
    ],
  },
  {
    title: 'Acompañamiento integral',
    icon: HeartHandshake,
    bullets: [
      'Seguimiento médico postoperatorio.',
      'Cuidado de heridas y manejo del dolor.',
      'Rehabilitación funcional cuando aplica.',
      'Apoyo emocional pre y post cirugía.',
    ],
  },
]

export const stripServicios = [
  { title: 'Cirugía plástica', icon: Scissors },
  { title: 'Reconstrucción avanzada', icon: ShieldCheck },
  { title: 'Estética facial y corporal', icon: Sparkles },
  { title: 'Cirugía de mano', icon: Microscope },
  { title: 'Tratamientos no quirúrgicos', icon: Sun },
  { title: 'Equipo multidisciplinario', icon: Users2 },
]

export const faqs = [
  {
    q: '¿Cuál es la diferencia entre cirugía estética y reconstructiva?',
    a: 'La reconstructiva repara defectos por trauma, cáncer o malformaciones; la estética mejora la apariencia por decisión personal.',
  },
  {
    q: '¿Cómo garantizan que los resultados se vean naturales?',
    a: 'Combinamos planificación 3D, evaluación personalizada y técnicas modernas para resultados armónicos y funcionales.',
  },
  {
    q: '¿Ofrecen tratamientos que no requieran entrar a quirófano?',
    a: 'Sí. Contamos con rellenos, toxina botulínica, peelings, láser y mesoterapia, según el objetivo del paciente.',
  },
  {
    q: '¿Cómo es el acompañamiento después de la cirugía?',
    a: 'Seguimiento médico, cuidado de heridas, manejo del dolor, rehabilitación funcional y soporte emocional continuo.',
  },
]

export const fortalezas = [
  'Cirugía plástica',
  'Reconstrucción avanzada',
  'Resultados naturales',
  'Microcirugía',
  'Tratamientos no quirúrgicos',
  'Acompañamiento integral',
  'Equipo especializado',
]
