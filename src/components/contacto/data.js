import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from './icons'

export const SOCIALS = [
  { Icon: FacebookIcon, label: 'Facebook', href: '#' },
  { Icon: InstagramIcon, label: 'Instagram', href: '#' },
  { Icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
  { Icon: YoutubeIcon, label: 'YouTube', href: '#' },
]

export const ESPECIALIDADES = [
  'Oncología Médica',
  'Oncología Pediátrica',
  'Mastología y Ginecología',
  'Urología Oncológica',
  'Diagnóstico por Imágenes',
  'Laboratorio Clínico',
  'Anatomía Patológica',
  'Psicooncología',
  'Telemedicina',
  'Otra',
]

export const MOTIVOS = [
  'Primera consulta',
  'Control / seguimiento',
  'Despistaje preventivo',
  'Resultados',
  'Investigación clínica',
  'Otro',
]

export const LOCALES = [
  {
    name: 'Detecta Clínica · Surquillo',
    address: 'Av. Angamos Este 2688, Surquillo, Lima',
    map: 'https://www.google.com/maps?q=Av.+Angamos+Este+2688,+Surquillo,+Lima&output=embed',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Av.+Angamos+Este+2688,+Surquillo,+Lima',
  },
  {
    name: 'Consultorios Detecta · San Borja',
    address: 'Av. Angamos Este Mz. F-12 Lote 72, San Borja, Lima',
    map: 'https://www.google.com/maps?q=Av.+Angamos+Este+San+Borja,+Lima&output=embed',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Av.+Angamos+Este+San+Borja,+Lima',
  },
]

export const CANALES = [
  {
    label: 'Citas y consultas',
    phone: '+51 922 335 134',
    email: 'citas@detecta.pe',
    href: 'https://wa.me/51922335134',
  },
  {
    label: 'Central telefónica',
    phone: '(01) 217 5100',
    email: 'informes@detecta.pe',
    href: 'tel:+5112175100',
  },
  {
    label: 'Resultados',
    phone: '+51 922 335 134',
    email: 'resultados@detecta.pe',
    href: 'mailto:resultados@detecta.pe',
  },
  {
    label: 'Investigación',
    phone: '+51 922 335 134',
    email: 'investigacion@detecta.pe',
    href: 'mailto:investigacion@detecta.pe',
  },
]

export const MARQUEE_ITEMS = [
  'Atención Personalizada',
  'Respuesta Rápida',
  'Citas y Consultas',
  'Telemedicina',
  'Resultados en Línea',
  'Equipo Multidisciplinario',
  'Cobertura con EPS',
  'Acompañamiento Humano',
]

export const FAQS = [
  {
    q: '¿Cómo agendo una cita?',
    a: 'Puedes hacerlo desde el portal web en appointments.detecta.pe, llamando a la central (01) 217 5100, escribiéndonos por WhatsApp al +51 922 335 134 o llenando el formulario en esta página.',
  },
  {
    q: '¿Atienden urgencias 24/7?',
    a: 'Sí, contamos con atención de emergencias las 24 horas. Para consultas oncológicas urgentes te recomendamos contactarnos por nuestra central telefónica.',
  },
  {
    q: '¿Aceptan seguros y EPS?',
    a: 'Trabajamos con las principales aseguradoras y EPS del Perú. Al agendar tu cita confirmaremos la cobertura de tu plan específico.',
  },
  {
    q: '¿Cómo accedo a mis resultados?',
    a: 'A través del portal del paciente con tu DNI y clave de acceso. También puedes recogerlos presencialmente en cualquiera de nuestras sedes.',
  },
  {
    q: '¿Tienen telemedicina?',
    a: 'Sí, ofrecemos consultas virtuales en varias especialidades. Al agendar tu cita selecciona la modalidad "Telemedicina".',
  },
]

export const initialForm = {
  nombre: '',
  telefono: '',
  email: '',
  motivo: '',
  especialidad: '',
  comentarios: '',
}

export const heroVideo = `${import.meta.env.VITE_BASE_IMAGE_URL}contacto/contacto.mp4`
