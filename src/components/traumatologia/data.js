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
  Bone,
  Scan,
  Dumbbell,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const traumaImages = {
  heroVideo: `${IMG_BASE}especialidades/traumatologia.mp4`,
  side: `${IMG_BASE}especialidades/traumatologia.jpg`,
  cta: `${IMG_BASE}especialidades/traumatologiaCta.webp`,
}

export const sintomas = [
  { title: 'Fracturas por caídas o accidentes', desc: 'Atención oportuna de lesiones óseas.' },
  { title: 'Dolor articular persistente', desc: 'Molestias continuas en articulaciones.' },
  { title: 'Lesiones deportivas', desc: 'Esguinces, tendinitis o desgarros.' },
  { title: 'Problemas de rodilla, cadera u hombro', desc: 'Dolor o limitación en articulaciones grandes.' },
  { title: 'Inflamaciones óseas o articulares', desc: 'Procesos crónicos que afectan tu movilidad.' },
  { title: 'Traumatismos de columna leve', desc: 'Evaluación y manejo especializado.' },
  { title: 'Artrosis con limitación funcional', desc: 'Desgaste articular con dolor persistente.' },
]

export const condiciones = [
  { title: 'Fracturas y luxaciones', icon: Bone },
  { title: 'Lesiones de ligamentos y tendones', icon: Activity },
  { title: 'Desgarros musculares', icon: AlertCircle },
  { title: 'Tendinitis y bursitis', icon: ShieldCheck },
  { title: 'Lesiones deportivas (rodilla, hombro, tobillo)', icon: Dumbbell },
  { title: 'Artrosis y desgaste articular', icon: Sparkles },
  { title: 'Tratamientos postraumáticos y rehabilitación', icon: HeartHandshake },
  { title: 'Cirugía artroscópica y mínimamente invasiva', icon: Scissors },
]

export const servicios = [
  {
    title: 'Servicios y diagnóstico',
    icon: Scan,
    bullets: [
      'Radiografía simple.',
      'Tomografía computarizada (TAC) ósea.',
      'Resonancia magnética de articulaciones.',
      'Ecografía musculoesquelética.',
      'Evaluación funcional y estudios biomecánicos.',
    ],
  },
  {
    title: 'Tratamientos quirúrgicos',
    icon: Scissors,
    bullets: [
      'Fijación de fracturas con placas y tornillos.',
      'Reparación de ligamentos (rodilla, hombro).',
      'Artroscopia de rodilla, hombro y tobillo.',
      'Liberaciones tendinosas y reparaciones musculares.',
      'Prótesis articulares (cadera, rodilla) cuando aplica.',
      'Cirugía mínimamente invasiva para patologías articulares.',
    ],
  },
  {
    title: 'Acompañamiento integral',
    icon: HeartHandshake,
    bullets: [
      'Rehabilitación física especializada y progresiva.',
      'Terapia de recuperación funcional.',
      'Fisioterapia y ejercicio terapéutico.',
      'Seguimiento postoperatorio.',
    ],
  },
]

export const stripServicios = [
  { title: 'Traumatología', icon: Bone },
  { title: 'Cirugía artroscópica', icon: Scissors },
  { title: 'Lesiones deportivas', icon: Dumbbell },
  { title: 'Rehabilitación funcional', icon: HeartHandshake },
  { title: 'Diagnóstico avanzado', icon: Microscope },
  { title: 'Equipo especializado', icon: Users2 },
]

export const faqs = [
  {
    q: '¿Duele la cirugía artroscópica?',
    a: 'Es un procedimiento mínimamente invasivo con dolor controlado, recuperación más rápida y cicatrices pequeñas.',
  },
  {
    q: '¿Cuánto tiempo tarda la recuperación de una fractura operada?',
    a: 'Depende del tipo de fractura: la consolidación ósea suele tomar de 6 a 12 semanas, con rehabilitación posterior.',
  },
  {
    q: '¿Puedo volver a mi deporte después de una lesión grave?',
    a: 'Sí, con un plan de tratamiento y rehabilitación adecuados muchos pacientes recuperan su rendimiento previo.',
  },
  {
    q: '¿La prótesis de rodilla o cadera dura mucho tiempo?',
    a: 'Las prótesis modernas pueden durar más de 15-20 años con cuidados adecuados.',
  },
]

export const fortalezas = [
  'Traumatología clínica',
  'Cirugía artroscópica',
  'Lesiones deportivas',
  'Prótesis articulares',
  'Rehabilitación funcional',
  'Atención humana',
  'Innovación Tecnológica',
]
