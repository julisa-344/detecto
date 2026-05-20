import {
  ShieldCheck,
  Cpu,
  Award,
  Microscope,
  Scissors,
  Droplet,
  TestTubes,
  Layers,
} from 'lucide-react'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

export const porQue = [
  {
    title: 'Alta especialización en cáncer y lesiones complejas',
    desc: 'Evaluación de tumores, lesiones premalignas y patologías de difícil diagnóstico, en coordinación con cirugía y oncología.',
    icon: ShieldCheck,
  },
  {
    title: 'Tecnología avanzada',
    desc: 'Sistemas automatizados para procesamiento, tinción y análisis de tejidos que brindan resultados rápidos y confiables.',
    icon: Cpu,
  },
  {
    title: 'Control de calidad riguroso',
    desc: 'Revisión por pares y protocolos internacionales para asegurar diagnósticos consistentes y reproducibles.',
    icon: Award,
  },
]

export const estudios = [
  {
    title: 'Biopsias',
    desc: 'Mama, tiroides, piel, ganglios, entre otros tejidos.',
    icon: Microscope,
  },
  {
    title: 'Piezas quirúrgicas completas',
    desc: 'Estudio integral de piezas obtenidas en cirugía oncológica.',
    icon: Scissors,
  },
  {
    title: 'Citologías exfoliativas',
    desc: 'Papanicolaou y cepillados para detección temprana.',
    icon: Droplet,
  },
  {
    title: 'PAAF (aspiración con aguja fina)',
    desc: 'Citología por aspiración para lesiones palpables o guiada por imagen.',
    icon: TestTubes,
  },
  {
    title: 'Inmunohistoquímica',
    desc: 'Panel ampliado para clasificación y subtipificación de tumores.',
    icon: Layers,
  },
]

export const lider = {
  name: 'Dr. Luis Taxa',
  role: 'Patólogo Oncológico',
  experiencia: '+15 años de trayectoria',
  bio: 'Especialista en patología oncológica con más de 15 años de trayectoria. Ha liderado equipos en instituciones públicas y privadas, destacando en diagnósticos de cáncer de mama, cuello uterino, gastrointestinal y neoplasias poco frecuentes. Su trabajo une rigor científico y enfoque humano, facilitando decisiones médicas seguras.',
  expertise: [
    'Cáncer de mama',
    'Cuello uterino',
    'Gastrointestinal',
    'Neoplasias raras',
  ],
  image: `${IMG_BASE}servicios/luis_taxa.webp`,
}

export const faqs = [
  {
    q: '¿Qué es el laboratorio de anatomía patológica y qué tipo de muestras analiza?',
    a: 'Es el laboratorio que estudia tejidos y células obtenidos por biopsia, cirugía o citología, para diagnosticar enfermedades como cáncer y lesiones complejas.',
  },
  {
    q: '¿Cuánto tiempo demora el resultado de una biopsia?',
    a: 'Las biopsias de rutina están disponibles entre 5 y 7 días hábiles; los estudios complejos con inmunohistoquímica pueden tomar entre 10 y 14 días según el caso.',
  },
  {
    q: '¿Cómo puedo recoger los resultados?',
    a: 'Los resultados pueden recogerse de forma presencial en nuestras instalaciones o consultarse digitalmente desde cualquier dispositivo.',
  },
  {
    q: '¿Es necesario estar en ayunas para dejar una muestra?',
    a: 'No es necesario ayuno para la toma de muestras patológicas; sí debes seguir las indicaciones específicas del médico tratante para cada tipo de estudio.',
  },
  {
    q: '¿Qué debo hacer antes y después de una biopsia?',
    a: 'Sigue las indicaciones de tu médico: evita anticoagulantes si te lo indican, mantén la zona limpia tras el procedimiento y consulta cualquier signo de alarma.',
  },
]
