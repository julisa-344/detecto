import statImage1 from "../../assets/responsabilidad/1.png";
import statImage2 from "../../assets/responsabilidad/2.png";
import statImage3 from "../../assets/responsabilidad/3.png";
import statImage4 from "../../assets/responsabilidad/4.png";

import actuarImage1 from "../../assets/responsabilidad/actuar1.png";
import actuarImage2 from "../../assets/responsabilidad/actuar2.png";
import actuarImage3 from "../../assets/responsabilidad/actuar3.png";
import actuarImage4 from "../../assets/responsabilidad/actuar4.png";
/**
 * Contenido de la página "Responsabilidad Social — Proyecto Athenea Perú".
 *
 * Cifras y narrativa provistas por el cliente.
 */

export interface StatItem {
  value: number
  prefix?: string
  suffix?: string
  title: string
  sentence: string
  image: string
}

export const CHALLENGE_STATS: StatItem[] = [
{
value: 4800,
suffix: '+',
title: 'Nuevos casos',
sentence: 'Mujeres fueron diagnosticadas con cáncer de cuello uterino en 2022.',
image: statImage1,
},
{
value: 2545,
title: 'Vidas perdidas',
sentence: 'Mujeres perdieron la vida a causa de esta enfermedad ese mismo año.',
image: statImage2,
},
{
value: 85,
suffix: '%',
title: 'Diagnóstico tardío',
sentence: 'De los casos se detectan cuando la enfermedad ya está avanzada.',
image: statImage3,
},
{
value: 30,
prefix: '+',
suffix: '%',
title: 'Riesgo hacia 2030',
sentence: 'La carga de esta enfermedad podría aumentar si no actuamos ahora.',
image: statImage4,
},
]

export const DETECTION_FLOW = ['Vacunación', 'Tamizaje', 'Colposcopía', 'Diagnóstico oportuno']

export interface OrbitalStep {
  title: string
  text: string
  image?: string
}

export const ATHENEA_STEPS: OrbitalStep[] = [
  {
    title: 'Generamos conciencia',
    text: 'Promovemos la prevención, la vacunación contra el VPH y la importancia de realizar controles a tiempo.',
    image: actuarImage1,
  },
  {
    title: 'Llevamos equipos donde hacen falta',
    text: 'Donamos colposcopios a centros de salud públicos donde no existen o donde la capacidad actual no es suficiente.',
    image: actuarImage2,
  },
  {
    title: 'Capacitamos al personal de salud',
    text: 'Acompañamos a los equipos médicos para que puedan utilizar la tecnología correctamente y brindar una atención de calidad.',
    image: actuarImage3,
  },
  {
    title: 'Medimos el impacto',
    text: 'Documentamos cada intervención y sus resultados para generar evidencia que contribuya a fortalecer el sistema de salud.',
    image: actuarImage4,
  },
]

export interface Intervention {
  place: string
  description: string
}

export const INTERVENTIONS: Intervention[] = [
  {
    place: 'Huachos, Huancavelica',
    description:
      'Entrega de un colposcopio para ampliar el acceso a diagnóstico especializado.',
  },
  {
    place: 'DIRIS Sur',
    description:
      'Nueva intervención orientada a fortalecer la capacidad de detección oportuna.',
  },
]