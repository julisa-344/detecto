import { Stethoscope, Cpu, HandHeart } from 'lucide-react'
import oncologiaImg from '../../assets/OncologiaMedica.jpg'
import tecnologiaImg from '../../assets/tecnologia.jpg'
import staffImg from '../../assets/amabilidad.jpg'

export const DIFERENCIADORES = [
  {
    icon: Stethoscope,
    title: 'Enfoque oncológico integral',
    desc: 'Acompañamos al paciente desde el despistaje hasta el seguimiento post-tratamiento, en cada etapa de su recuperación.',
    image: oncologiaImg,
  },
  {
    icon: Cpu,
    title: 'Innovación médica',
    desc: 'Diagnóstico por imágenes, cirugía, quimioterapia y laboratorio de última generación al servicio de tu salud.',
    image: tecnologiaImg,
  },
  {
    icon: HandHeart,
    title: 'Atención humana y ágil',
    desc: 'Procesos eficientes y trato cercano para una experiencia clara, amable y centrada en la persona.',
    image: staffImg,
  },
]

export const QUIENES_SOMOS_PARAGRAPHS = [
  'Durante 8 años, en Detecta Clínica hemos acompañado a personas y familias en momentos importantes de su salud. Nacimos con un compromiso especial con la prevención y el cuidado oncológico, y hoy seguimos creciendo para brindar una atención integral, humana y especializada en distintas áreas médicas.',
  'Combinamos tecnología, experiencia médica y un trato cercano para que cada paciente se sienta orientado, escuchado y acompañado en cada etapa de su cuidado.',
]

export const MISION = {
  eyebrow: 'Misión',
  titlePre: 'Cuidado integral con',
  titleAccent: 'excelencia médica.',
  body: 'Brindar atención médica especializada en prevención, diagnóstico, tratamiento y seguimiento del cáncer, abordando además otras enfermedades complejas con Innovación Tecnológica, un equipo altamente calificado y un enfoque centrado en el paciente.',
}

export const VISION = {
  eyebrow: 'Visión',
  titlePre: 'Liderazgo en',
  titleAccent: 'atención oncológica.',
  body: 'Ser la clínica privada líder en atención oncológica en el Perú, reconocida por excelencia médica, innovación tecnológica y trato humanizado, resolviendo necesidades complejas con eficiencia y calidad.',
}
