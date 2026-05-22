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
    title: 'Innovación Tecnológica',
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
  'Deseas un seguimiento ginecológico y mamario con Innovación Tecnológica',
  'Tienes antecedentes familiares y quieres asesoramiento experto',
]

export const planes = [
  {
    badge: 'Para menores de 39 años',
    price: 'S/ 380.00',
    priceNote: '(IGV incl.)',
    priceRegular: 'S/ 512.00',
    items: [
      'Consulta oncológica',
      'Colposcopia digital',
      'Papanicolaou',
      'Ecografía transvaginal',
      'Ecografía mamaria',
      'Lectura de resultados',
    ],
    highlighted: false,
  },
  {
    badge: 'Para mayores de 40 años',
    price: 'S/ 600.00',
    priceNote: '(IGV incl.)',
    priceRegular: 'S/ 832.00',
    items: [
      'Consulta oncológica',
      'Colposcopia digital',
      'Papanicolaou',
      'Ecografía transvaginal',
      'Ecografía mamaria',
      'Mamografía 3D + IA',
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

export const testimonios = [
  {
    paciente: 'Carmen L.',
    edad: 81,
    doctor: 'Dr. Mendoza L.',
    fecha: '20/05/2026',
    rating: 5,
    comentario:
      'Me encantó la atención del doctor. Me brindó confianza, seguridad y demostró mucho profesionalismo durante toda la consulta.',
  },
  {
    paciente: 'Griner G.',
    edad: 42,
    doctor: 'Dr. Mendoza',
    fecha: '20/05/2026',
    rating: 5,
    comentario:
      'La atención fue muy profesional y las instalaciones me parecieron buenas. Considero que podrían seguir fortaleciendo la información sobre los servicios que ofrecen.',
  },
  {
    paciente: 'Isabel R.',
    edad: 58,
    doctor: 'Dr. Gastón',
    fecha: '20/05/2026',
    rating: 5,
    comentario:
      'La experiencia con el doctor fue buena. Recomendaría reforzar una atención más personalizada y empática, así como mejorar los tiempos de espera.',
  },
]

export const fortalezas = [
  'Detección temprana',
  'Innovación Tecnológica',
  'Atención humana',
  'Resultados confiables',
  'Equipo gineco-oncológico',
  'Cuidado personalizado',
  'Lectura experta',
  'One Day Experience',
]
