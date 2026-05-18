import {
  Activity,
  Microscope,
  Scissors,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Heart,
  Users2,
  Stethoscope,
  Dna,
  Sun,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const ginecoImages = {
  heroVideo: `${IMG_BASE}oncologia/ginecologia.mp4`,
  side: `${IMG_BASE}oncologia/ginecologia.jpg`,
  cta: `${IMG_BASE}oncologia/gineoncologiaCta.jpg`,
}

export const sintomas = [
  { title: 'Sangrado vaginal anormal', desc: 'Entre períodos o en la postmenopausia.' },
  { title: 'Dolor pélvico persistente', desc: 'Molestias continuas en la zona pélvica.' },
  { title: 'Masa o bulto pélvico', desc: 'Tumoraciones palpables en pelvis o vulva.' },
  { title: 'Flujo vaginal inusual', desc: 'Cambios en el color, consistencia u olor.' },
  { title: 'Cambios menstruales', desc: 'Aumento del sangrado o irregularidad marcada.' },
  { title: 'Dolor en relaciones', desc: 'Molestias durante el coito sin causa clara.' },
  { title: 'Síntomas urinarios o intestinales', desc: 'Asociados en etapas más avanzadas.' },
  { title: 'Antecedentes familiares', desc: 'Historia de cáncer ginecológico en la familia.' },
]

export const condiciones = [
  { title: 'Cáncer de endometrio (útero)', icon: ShieldCheck },
  { title: 'Cáncer de cérvix', icon: Activity },
  { title: 'Cáncer de ovario y trompas', icon: Dna },
  { title: 'Cáncer de vulva y vagina', icon: Sun },
  { title: 'Cáncer gestacional y trofoblástico', icon: Sparkles },
  { title: 'Recurrencias ginecológicas', icon: Microscope },
  { title: 'Prevención y seguimiento', icon: Heart },
]

export const servicios = [
  {
    title: 'Diagnóstico y evaluación',
    icon: Microscope,
    bullets: [
      'Papanicolaou / citología vaginal.',
      'Colposcopia con biopsia.',
      'Ultrasonido transvaginal y pélvico.',
      'Marcadores tumorales: CA-125, CA-19-9, HE4.',
      'TAC, RM y PET-CT para estadiaje.',
      'Biopsias de endometrio, vulva y vagina.',
    ],
  },
  {
    title: 'Cirugía oncológica',
    icon: Scissors,
    bullets: [
      'Histerectomía radical.',
      'Salpingo-ooforectomía (ovarios y trompas).',
      'Cirugía de estadiaje y disección ganglionar.',
      'Laparoscopía y procedimientos mínimamente invasivos.',
      'Cirugía reconstructiva vulvovaginal.',
    ],
  },
  {
    title: 'Tratamientos complementarios',
    icon: Activity,
    bullets: [
      'Quimioterapia adyuvante.',
      'Radioterapia y braquiterapia.',
      'Terapias hormonales y dirigidas.',
      'Tratamientos paliativos.',
    ],
  },
  {
    title: 'Acompañamiento integral',
    icon: HeartHandshake,
    bullets: [
      'Seguimiento periódico.',
      'Apoyo emocional y psicológico.',
      'Rehabilitación del suelo pélvico.',
      'Orientación reproductiva cuando aplica.',
    ],
  },
]

export const stripServicios = [
  { title: 'Ginecología oncológica', icon: Stethoscope },
  { title: 'Diagnóstico temprano', icon: ShieldCheck },
  { title: 'Cirugía mínimamente invasiva', icon: Scissors },
  { title: 'Terapias complementarias', icon: Activity },
  { title: 'Equipo multidisciplinario', icon: Users2 },
  { title: 'Acompañamiento integral', icon: HeartHandshake },
]

export const faqs = [
  {
    q: '¿Cuáles son las señales de alerta para consultar a un ginecólogo oncólogo?',
    a: 'Sangrado anormal, dolor pélvico persistente, masas, flujo inusual o antecedentes familiares ameritan una evaluación especializada.',
  },
  {
    q: '¿Qué tecnologías utilizan para el diagnóstico y estadiaje?',
    a: 'Colposcopia, ultrasonido transvaginal, marcadores tumorales, TAC, RM y PET-CT, además de biopsias dirigidas.',
  },
  {
    q: '¿En qué consiste el tratamiento quirúrgico?',
    a: 'Desde cirugías laparoscópicas hasta histerectomía radical o cirugía reconstructiva, según el tipo y estadio del cáncer.',
  },
  {
    q: '¿Ofrecen apoyo más allá de la cirugía y la quimioterapia?',
    a: 'Sí. Brindamos seguimiento clínico, rehabilitación pélvica, apoyo psicológico y orientación reproductiva cuando es necesario.',
  },
]

export const fortalezas = [
  'Salud femenina',
  'Diagnóstico preciso',
  'Cirugía oncológica',
  'Tecnología avanzada',
  'Acompañamiento integral',
  'Equipo especializado',
  'Atención humana',
]
