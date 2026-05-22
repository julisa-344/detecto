import { FileText, Lock } from 'lucide-react'

export const TERMINOS = [
  {
    id: 'aceptacion',
    num: '01',
    title: 'Aceptación de los términos',
    body: [
      'Al acceder o utilizar el sitio web de Detecta Clínica y los servicios asociados, usted acepta cumplir y quedar vinculado por estos Términos y Condiciones. Si no está de acuerdo con alguna parte, le pedimos abstenerse de usar el sitio.',
      'Estos términos pueden actualizarse periódicamente; la versión vigente será la publicada en esta página.',
    ],
  },
  {
    id: 'uso',
    num: '02',
    title: 'Uso del sitio y de los servicios',
    body: [
      'El contenido del sitio es informativo y no reemplaza la consulta médica presencial. La información sobre especialidades, programas preventivos y servicios se ofrece con fines orientativos.',
      'Usted se compromete a utilizar el sitio de forma lícita, sin afectar la disponibilidad, integridad o seguridad de los sistemas, ni los derechos de terceros.',
    ],
  },
  {
    id: 'citas',
    num: '03',
    title: 'Citas y reservas',
    body: [
      'La solicitud de citas a través del sitio queda sujeta a confirmación por parte del equipo de Detecta Clínica según disponibilidad médica.',
      'Cualquier cancelación o reprogramación debe realizarse con la anticipación que se le indique al momento de confirmar la cita.',
    ],
  },
  {
    id: 'propiedad',
    num: '04',
    title: 'Propiedad intelectual',
    body: [
      'Todos los contenidos del sitio — textos, gráficos, imágenes, logotipos, íconos y marcas — son propiedad de Detecta Clínica o de sus respectivos titulares y están protegidos por las leyes de propiedad intelectual.',
      'Queda prohibida su reproducción, distribución o modificación sin autorización previa por escrito.',
    ],
  },
  {
    id: 'responsabilidad',
    num: '05',
    title: 'Limitación de responsabilidad',
    body: [
      'Detecta Clínica no será responsable por daños derivados del uso o imposibilidad de uso del sitio, errores u omisiones en los contenidos, ni por la interrupción del servicio por motivos técnicos.',
      'Tampoco se responsabiliza por contenidos de sitios externos enlazados desde nuestra plataforma.',
    ],
  },
  {
    id: 'modificaciones',
    num: '06',
    title: 'Modificaciones',
    body: [
      'Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto del sitio o de los servicios en cualquier momento, sin necesidad de aviso previo.',
    ],
  },
  {
    id: 'legislacion',
    num: '07',
    title: 'Legislación aplicable',
    body: [
      'Estos Términos y Condiciones se rigen por las leyes de la República del Perú. Cualquier controversia será sometida a la jurisdicción de los tribunales de Lima.',
    ],
  },
]

export const PRIVACIDAD = [
  {
    id: 'datos',
    num: '01',
    title: 'Datos que recopilamos',
    body: [
      'Recopilamos únicamente la información que usted nos proporciona voluntariamente al completar formularios de contacto, agendar citas o suscribirse a comunicaciones: nombre, correo electrónico, teléfono, motivo de consulta y otros datos estrictamente necesarios.',
    ],
  },
  {
    id: 'uso-datos',
    num: '02',
    title: 'Uso de la información',
    body: [
      'Los datos se utilizan para gestionar su solicitud, coordinar citas, enviar información que usted haya autorizado expresamente y mejorar la calidad de nuestros servicios.',
      'No comercializamos, vendemos ni cedemos sus datos personales a terceros.',
    ],
  },
  {
    id: 'derechos',
    num: '03',
    title: 'Sus derechos',
    body: [
      'Usted puede en todo momento acceder, rectificar, actualizar o solicitar la supresión de sus datos personales, conforme a la Ley N.° 29733 de Protección de Datos Personales.',
      'Para ejercer estos derechos puede escribirnos a contacto@detecta.pe.',
    ],
  },
]

export const HERO_BG = `${import.meta.env.VITE_BASE_IMAGE_URL}ethical-committee/terminos.jpg`

export const MARQUEE_ITEMS = [
  'Transparencia',
  'Protección de Datos',
  'Ley N.° 29733',
  'Confidencialidad',
  'Uso Responsable',
  'Derechos del Usuario',
  'Información Clara',
  'Compromiso Ético',
]

export const TOC = [
  {
    group: 'Términos y Condiciones',
    icon: FileText,
    items: TERMINOS.map((t) => ({ id: t.id, num: t.num, title: t.title })),
  },
  {
    group: 'Protección de Datos',
    icon: Lock,
    items: PRIVACIDAD.map((t) => ({ id: t.id, num: t.num, title: t.title })),
  },
]
