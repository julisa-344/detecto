import {
  Stethoscope,
  FileText,
  Activity,
  Microscope,
  Scan,
  HeartPulse,
  ClipboardList,
  Target,
  CalendarCheck,
  HeartHandshake,
  Cpu,
  Clock,
} from 'lucide-react'

export const servicios = [
  { title: 'Triaje integral',                          icon: ClipboardList },
  { title: 'Consulta oncológica',                      icon: Stethoscope },
  { title: 'Papanicolaou',                             icon: FileText },
  { title: 'Colposcopia digital',                      icon: Microscope },
  { title: 'Ecografía transvaginal',                   icon: Scan },
  { title: 'Test OncoClarity VPH',                     icon: Activity },
  { title: 'Mamografía 3D con IA',                     icon: Scan },
  { title: 'Ecografía mamaria con Shear Wave',         icon: HeartPulse },
  { title: 'Lectura de resultados',                    icon: FileText },
]

export const beneficios = [
  {
    icon: Stethoscope,
    title: 'Atención especializada',
    text: 'Equipo médico con enfoque oncológico para una evaluación experta y precisa.',
  },
  {
    icon: HeartHandshake,
    title: 'Trato cercano',
    text: 'Acompañamiento humano en cada paso para que tu experiencia sea tranquila.',
  },
  {
    icon: Cpu,
    title: 'Tecnología de vanguardia',
    text: 'Equipos de última generación que respaldan diagnósticos más confiables.',
  },
  {
    icon: Clock,
    title: 'Resultados rápidos',
    text: 'Te entregamos tus resultados el mismo día o en el menor tiempo posible.',
  },
]

export const perfilPaciente = [
  'Quieres una evaluación integral en un solo día',
  'Buscas detectar a tiempo cualquier indicio para actuar con tranquilidad',
  'Necesitas orientación clara con la lectura de tus resultados',
  'Deseas un seguimiento ginecológico y mamario con tecnología de vanguardia',
  'Tienes antecedentes familiares y quieres asesoramiento experto',
]

export const planes = [
  {
    badge: 'Para menores de 40 años',
    price: 'S/ 590.00',
    priceNote: '(IGV incl.)',
    items: [
      'Triaje',
      'Consulta oncológica',
      'Papanicolaou',
      'Colposcopia digital',
      'Ecografía transvaginal',
      'Test OncoClarity VPH',
      'Ecografía mamaria con Shear Wave',
      'Lectura de resultados',
    ],
    highlighted: false,
  },
  {
    badge: 'Para mayores de 40 años',
    price: 'S/ 890.00',
    priceNote: '(IGV incl.)',
    items: [
      'Triaje',
      'Consulta oncológica',
      'Papanicolaou',
      'Colposcopia digital',
      'Ecografía transvaginal',
      'Test OncoClarity VPH',
      'Mamografía 3D con IA',
      'Ecografía mamaria con Shear Wave',
      'Lectura de resultados',
    ],
    highlighted: true,
  },
]

export const preparacion = [
  'No aplicarse duchas vaginales, ni óvulos o cremas 48 horas antes.',
  'No aplicarse desodorante a nivel axilar el día del despistaje.',
  'Traer resultados médicos previos si los tienes.',
  'Venir con ropa cómoda.',
]

export const importante =
  'Si no cumples las indicaciones, puedes reprogramar tu cita hasta 24 horas antes del día del despistaje.'

export const faqs = [
  { q: '¿Necesito ayuno para el preventivo?', a: 'No es necesario ayuno para las pruebas incluidas. Si tienes indicaciones específicas por tu médico, coméntalo al agendar.' },
  { q: '¿Puedo agendar si estoy en mi periodo menstrual?', a: 'Recomendamos reprogramar para obtener mejor lectura del Papanicolaou y la colposcopia. Te ayudamos a reagendar sin costo hasta 24 horas antes.' },
  { q: '¿Cuánto demora la atención completa?', a: 'En promedio entre 2.5 y 4 horas. Es una experiencia One Day: todas tus pruebas en una sola visita con acompañamiento del equipo.' },
  { q: '¿Cuándo entregan los resultados?', a: 'Los resultados se entregan progresivamente y se complementan con una sesión de lectura para que comprendas cada hallazgo.' },
]

export const fortalezas = [
  'Detección temprana',
  'Tecnología de vanguardia',
  'Atención humana',
  'Resultados confiables',
  'Equipo gineco-oncológico',
  'Cuidado personalizado',
  'Lectura experta',
  'One Day Experience',
]
