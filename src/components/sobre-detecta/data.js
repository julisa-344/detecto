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
  'Con 8 años de experiencia en atención médica altamente especializada, **Detecta Clínica** se ha consolidado como un referente en el manejo de patologías complejas. Nacimos con un fuerte enfoque en la prevención, diagnóstico, tratamiento y seguimiento de enfermedades oncológicas, y con el tiempo hemos ampliado nuestra propuesta para brindar atención integral en múltiples especialidades médicas.',
  'Aunque mantenemos un compromiso especial con nuestros pacientes oncológicos, nuestra experiencia y capacidad nos permiten atender con la misma dedicación a personas con distintas necesidades de salud. En Detecta, combinamos la más avanzada tecnología con un equipo médico especializado para ofrecer soluciones personalizadas, efectivas y humanas en cada etapa del cuidado.',
]

export const MISION = {
  eyebrow: 'Misión',
  titlePre: 'Cuidado integral con',
  titleAccent: 'excelencia médica.',
  body: 'Brindar atención médica especializada en prevención, diagnóstico, tratamiento y seguimiento del cáncer, abordando además otras enfermedades complejas con tecnología avanzada, un equipo altamente calificado y un enfoque centrado en el paciente.',
}

export const VISION = {
  eyebrow: 'Visión',
  titlePre: 'Liderazgo en',
  titleAccent: 'atención oncológica.',
  body: 'Ser la clínica privada líder en atención oncológica en el Perú, reconocida por excelencia médica, innovación tecnológica y trato humanizado, resolviendo necesidades complejas con eficiencia y calidad.',
}
