const images = import.meta.glob('../assets/doctores/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})

const img = (file) => images[`../assets/doctores/${file}`]

const PLACEHOLDER_REG = 'CMP 026465 / RNE 13976'

const PLACEHOLDER_BIO =
  'Médico especialista con amplia trayectoria clínica, comprometido con la excelencia diagnóstica y el acompañamiento humano del paciente oncológico a lo largo de todo su tratamiento.'

const PLACEHOLDER_AREAS = [
  'Enfermedad de Reflujo Gastroesofágico',
  'Esofagitis péptica',
  'Esófago de Barrett',
  'Diagnóstico de cáncer de esófago',
  'Cáncer gástrico',
  'Patología duodenal',
  'Patología hepática',
]

const PLACEHOLDER_FORMACION = [
  { title: 'Médico Cirujano', institucion: 'Universidad Nacional Mayor de San Marcos', pais: 'Perú', anio: '2005' },
  { title: 'Especialidad en Oncología', institucion: 'Instituto Nacional de Enfermedades Neoplásicas', pais: 'Perú', anio: '2010' },
  { title: 'Fellowship en Oncología Quirúrgica', institucion: 'MD Anderson Cancer Center', pais: 'Estados Unidos', anio: '2013' },
]

const PLACEHOLDER_INFO = {
  tipoAtencion: 'Asegurados',
  modalidad: 'Ambas',
  trayectoriaInvestigacion: 'No registra trabajos de investigación.',
  interesInvestigacion: 'Sí, desea recibir información del área de investigación.',
}

export function slugify(name) {
  return name
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/^(Dr\.|Dra\.)\s*/i, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const D = (name, file, specialty = 'Oncología', reg = PLACEHOLDER_REG, overrides = {}) => ({
  name,
  specialty,
  reg,
  image: img(file),
  slug: slugify(name),
  bio: PLACEHOLDER_BIO,
  areas: PLACEHOLDER_AREAS,
  formacion: PLACEHOLDER_FORMACION,
  info: PLACEHOLDER_INFO,
  ...overrides,
})

export const doctors = [
  D('Dr. Abraham Alvarado Hinojosa', 'abrahamalvaradohinojosa1.webp'),
  D('Dr. Adolfo Boada', 'adolfoboada1.webp'),
  D('Dr. Alejandro Cantella', 'alejandrocantella1.webp'),
  D('Dr. Alexis Alva Pinto', 'alexisalvapinto1.webp', 'Urología Oncológica', 'RNE 011507'),
  D('Dr. Alexis Michaele Alva Pinto', 'alvapintoalexismichaele1.webp', 'Urología Oncológica'),
  D('Dr. Amado Quiroz Sánchez', 'amadoquirozsanchez1.webp'),
  D('Dr. Antonio Teodoro Inocente', 'antonioteodoroinocente1.webp'),
  D('Dra. Carla Becerra Valdés', 'carlabecerravaldes1.webp'),
  D('Dr. Carlos Aguirre Masson', 'carlosaguirremasson1.webp'),
  D('Dr. Carlos Luque Vásquez', 'carlosluquevasquez1.webp'),
  D('Dr. Carlos Mares Morote', 'carlosmaresmorote1.webp'),
  D('Dr. Carlos Morante Deza', 'carlosmorantedeza1.webp'),
  D('Dr. Carlos Olaechea Matto', 'carlosolaecheamatto1.webp', 'Cabeza y Cuello', 'CMP 018493 / RNE 029918'),
  D('Dr. Carlos Prada Medina', 'carlospradamedina1.webp'),
  D('Dr. Carlos Velásquez Hawkins', 'carlosvelasquezhawkins1.webp'),
  D('Dr. César Bustamante Mejía', 'cesarbustamentemejia1.webp'),
  D('Dra. Claudia Jiménez Orozco', 'claudiajimenezorozco1.webp'),
  D('Dr. Cristian Apestegui Moreno', 'cristianapesteguimoreno1.webp'),
  D('Dr. Daniel Valdivia Leonardo', 'danielvaldivialeonardo1.webp'),
  D('Dr. Darwin Desposorio', 'darwindesposorioa1.webp'),
  D('Dr. Edgardo Granda Chaupis', 'edgardograndachaupis1.webp'),
  D('Dra. Elka Fierro Falcón', 'elkafierrofalcón1.webp'),
  D('Dr. Fernando Quiroa Vera', 'fernandoquiroavera1.webp'),
  D('Dr. Francisco Berrospi Espinoza', 'franciscoberrospiespinoza1.webp'),
  D('Dr. Frank Vidal Loli', 'frankvidalloli1.webp'),
  D('Dr. Gastón Mendoza de Lama', 'gastonmendozadelama1.webp', 'Cirugía Oncológica', 'CMP 025779 / RNE 011470'),
  D('Dra. Gilda Mancini García', 'gildamancinigarcía1.webp'),
  D('Dr. Giovanni Luna Sánchez', 'giovannilunasánchez1.webp'),
  D('Dra. Gloria Paredes Guerra', 'gloriaparedesguerra1.webp'),
  D('Dr. Guillermo Ladd Vicuña', 'guillermoladdvicuña1.webp'),
  D('Dr. Henry Modesto Valdivia Franco', 'henrymodestovaldiviafranco1.webp'),
  D('Dr. Henry Valdivia Franco', 'henryvaldiviafranco1.webp'),
  D('Dr. Herbert Cárdenas del Carpio', 'herbertcárdenasdelcarpio1.webp'),
  D('Dr. Humberto Liu Bejarano', 'humbertoliubejarano1.webp'),
  D('Dr. Jaime Cunza Paredes', 'jaimecunzaparedes1.webp'),
  D('Dr. Jorge Calderón Morales', 'jorgecalderonmorales1.webp'),
  D('Dr. Jorge Quiroa Vera', 'jorgequiroavera1.webp'),
  D('Dr. José Cortina Concha', 'josecortinaconcha1.webp'),
  D('Dr. José Carlos Zapater Agüero', 'josécarloszapateraguero1.webp'),
  D('Dr. José Orrego Puelles', 'joséorregopuelles1.webp'),
  D('Dr. José Callupe Pérez', 'josécallupeperez1.webp'),
  D('Dr. José Víctor Sullón Olaya', 'josévictorsullonolaya1.webp'),
  D('Dr. Juan Carlos Haro', 'juancarlosharo1.webp'),
  D('Dr. Juan José Alva Lahoz', 'juanjosealvalahoz1.webp'),
  D('Dr. Juan Mora Mora', 'juanmoramora1.webp'),
  D('Dr. Julio Rivera Torres', 'julioriveratorres1.webp'),
  D('Dr. Lewis Ramos Frisancho', 'lewisramosfrisancho1.webp'),
  D('Dra. Leyla Meléndez Álvarez', 'leylamelendezalvarez1.webp'),
  D('Dr. Luis Fernando Meza Montoya', 'luisfernandomezamontoya1.webp'),
  D('Dr. Luis Ojeda Medina', 'luisojedamedina1.webp'),
  D('Dr. Marco Velarde Méndez', 'marcovelardemendez1.webp'),
  D('Dr. Marvin Levi Vásquez Mesías', 'marvinlevivasquezmesias1.webp'),
  D('Dra. María Eugenia Ruiz', 'maríaeugeniaruiz1.webp'),
  D('Dra. Melany Cirilo Jocobo', 'melanycirilojocobo1.webp'),
  D('Dra. Melva Flores Sierra', 'melvafloressierra1.webp'),
  D('Dra. Milagros La Rosa Canales', 'milagroslarosacanales1.webp'),
  D('Dr. Milko Gárces Castre', 'milkogárcescastre1.webp'),
  D('Dr. Carlos Orlando Munive Huari', 'munivehuaricarlosorlando1.webp'),
  D('Dra. Nancy Muñoz Quispe', 'nancymuñozquispe1.webp'),
  D('Dra. Nancy Servan Chávez', 'nancyservanchávez1.webp'),
  D('Dra. Nathaly Ramírez Mendoza', 'nathalyramirezmendoza1.webp'),
  D('Dr. Nicanor Rodríguez Gutarra', 'nicanorrodriguezgutarra1.webp', 'Urología Oncológica', 'CMP 025867 / RNE 027671'),
  D('Dr. Oscar Ricardo Paredes Torres', 'oscarricardoparedestorres1.webp'),
  D('Dr. Raúl Cantella Suito', 'raúlcantellasuito1.webp'),
  D('Dr. Renzo Bozzo Pancorvo', 'renzobozzopancorvo1.webp'),
  D('Dr. Renzo Cañote Flores', 'renzocañoteflores1.webp'),
  D('Dra. Samantha Mendoza Rivera', 'samanthamendozarivera1.webp'),
  D('Dr. Santiago Herrera Morales', 'santiagoherreramorales1.webp'),
  D('Dra. Angelina Sorrentino Tipacti', 'sorrentinotipactiangelina1.webp'),
  D('Dra. Tatiana Vidaurre Rojas', 'tatianavidaurrerojas1.webp'),
  D('Dr. Victor Castro Oliden', 'victorcastrooliden1.webp', 'Oncología Médica', 'CMP 031518'),
  D('Dra. Tatiana Vidaurre Rojas', 'vidaurrerojastatiana1.webp'),
  D('Dr. Wilfredo Bozzo Pancorvo', 'wilfredobozzopancorvo1.webp'),
  D('Dr. Wilmer Calmet Berrocal', 'wilmercalmetberrocal1.webp'),
  D('Dr. Yhony Veliz Hurtado', 'yhonyvelizhurtado1.webp'),
]

export function getDoctorBySlug(slug) {
  return doctors.find((d) => d.slug === slug)
}

export const specialties = [
  'Todas',
  'Oncología Médica',
  'Cirugía Oncológica',
  'Urología Oncológica',
  'Cabeza y Cuello',
  'Mastología',
  'Radioterapia',
  'Ginecología',
]
