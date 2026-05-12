import {
  Stethoscope,
  Scissors,
  ShieldAlert,
  Sparkles,
  Droplet,
  ScanLine,
  Sun,
  Pill,
  ClipboardList,
} from 'lucide-react'

import clinicaLocal from '../../assets/clinica.jpg'
import doctoresLocal from '../../assets/doctores.webp'
import oncologiaLocal from '../../assets/OncologiaMedica.jpg'

// Imágenes: mezcla de assets locales + Unsplash (reemplazables)
export const dermaImages = {
  // Locales
  clinica: clinicaLocal,
  team: doctoresLocal,
  technology: oncologiaLocal,
  // Unsplash — reemplazables
  hero: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80',
  procedure:
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
  consultation:
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
  skinCare:
    'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
  laser:
    'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=80',
}

export const servicios = [
  { title: 'Exámenes dermatológicos completos', icon: ClipboardList },
  { title: 'Biopsias de piel', icon: ScanLine },
  { title: 'Procedimientos láser para rejuvenecimiento y manchas', icon: Sparkles },
  { title: 'Tratamientos para acné y cicatrices', icon: Droplet },
  { title: 'Asesoría en cuidado de la piel y protección solar', icon: Sun },
  { title: 'Diagnóstico de lesiones sospechosas', icon: ShieldAlert },
]

export const queTratamos = [
  { title: 'Enfermedades de la piel', desc: 'Acné, dermatitis, psoriasis', icon: Stethoscope },
  { title: 'Cirugía dermatológica', desc: 'Procedimientos quirúrgicos especializados', icon: Scissors },
  { title: 'Cáncer de piel', desc: 'Detección y tratamiento oportuno', icon: ShieldAlert },
  { title: 'Rejuvenecimiento facial', desc: 'Tratamiento de arrugas y signos del tiempo', icon: Sparkles },
  { title: 'Manchas y melasma', desc: 'Tratamientos despigmentantes personalizados', icon: Droplet },
  { title: 'Caída del cabello', desc: 'Consulta y tratamiento tricológico', icon: Pill },
]

export const perfilPaciente = [
  'Acné',
  'Eczemas y dermatitis',
  'Psoriasis',
  'Manchas en la piel',
  'Lesiones cutáneas sospechosas',
]

export const faqs = [
  {
    q: '¿Necesito una orden médica para mi primera consulta?',
    a: 'No, puedes agendar tu primera consulta directamente con nuestro dermatólogo.',
  },
  {
    q: '¿Realizan biopsias en la misma consulta?',
    a: 'En la mayoría de los casos sí, dependiendo de la lesión y la evaluación previa.',
  },
  {
    q: '¿Atienden tratamientos estéticos además de los clínicos?',
    a: 'Sí, ofrecemos tanto dermatología clínica como estética: láser, rejuvenecimiento y tratamientos para manchas.',
  },
  {
    q: '¿Cuándo debo preocuparme por un lunar?',
    a: 'Si notas cambios en forma, color, tamaño o sangrado, agenda una evaluación lo antes posible.',
  },
]

export const fortalezas = [
  'Excelencia dermatológica',
  'Diagnóstico preciso',
  'Tecnología láser',
  'Cuidado personalizado',
  'Atención humana',
  'Prevención del cáncer de piel',
  'Resultados confiables',
]
