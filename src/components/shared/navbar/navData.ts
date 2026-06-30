/**
 * Datos estáticos del Navbar: categorías del mega-menú "Pacientes"
 * y enlaces planos del menú principal.
 *
 * Aislado del componente para reducir su tamaño y permitir que cambios
 * de menú (agregar/quitar enlaces) no requieran tocar lógica UI.
 */

export interface NavLink {
  label: string
  to: string
}

export interface NavCategory {
  id: string
  title: string
  items: NavLink[]
}

// Enlaces planos del nav principal (Desktop + Mobile)
export const MAIN_LINKS: NavLink[] = [
  { label: 'Médicos', to: '/staff-medico' },
  { label: 'Sobre Detecta', to: '/nosotros' },
  { label: 'Responsabilidad Social', to: '/responsabilidad-social' },
  { label: 'Contacto', to: '/contacto' },
]

// Items del dropdown "Ética"
export const ETHICS_LINKS: NavLink[] = [
  { label: 'Comité de ética', to: '/comite-etica' },
  { label: 'Gestión ética', to: '/gestion-de-etica' },
]

// Items del dropdown "Resultados" (portal del paciente, NO las páginas de servicio)
export const RESULTADOS_LINKS: NavLink[] = [
  { label: 'Laboratorio Clínico', to: '/resultados-laboratorio-clinico' },
  { label: 'Anatomía Patológica', to: '/resultados-anatomia-patologica' },
]

// Categorías del mega-menú "Pacientes"
export const PACIENTES_CATEGORIES: NavCategory[] = [
  {
    id: 'preventivos',
    title: 'Programas Preventivos',
    items: [
      { label: 'Preventivo Rosa', to: '/preventivo-rosa' },
      { label: 'Preventivo Azul', to: '/preventivo-azul' },
      { label: 'Pulmo Scan', to: '/preventivo-pulmoscan' },
    ],
  },
  {
    id: 'servicios',
    title: 'Servicios',
    items: [
      { label: 'Diagnóstico por Imágenes', to: '/servicios/diagnostico-por-imagenes' },
      { label: 'Farmacia', to: '/servicios/farmacia' },
      { label: 'Hospitalización', to: '/servicios/hospitalizacion' },
      { label: 'Quimioterapia', to: '/servicios/quimioterapia' },
      { label: 'Laboratorio Clínico', to: '/servicios/laboratorio-clinico' },
      { label: 'Sala de Operaciones', to: '/servicios/sala-de-operaciones' },
      { label: 'Laboratorio de Anatomía Patológica', to: '/servicios/anatomia-patologica' },
      { label: 'Investigación', to: '/investigacion' },
    ],
  },
  {
    id: 'oncologia',
    title: 'Oncología',
    items: [
      { label: 'Oncología Médica', to: '/especialidades/oncologia-medica' },
      { label: 'Oncología Pediátrica', to: '/especialidades/oncologia-pediatrica' },
      { label: 'Oncología de Cabeza y Cuello', to: '/especialidades/oncologia-cabeza-cuello' },
      { label: 'Ginecología Oncológica', to: '/especialidades/ginecologia-oncologica' },
      { label: 'Mastología y Ginecología Oncológica', to: '/especialidades/mastologia-ginecologia-oncologica' },
      { label: 'Urología Oncológica', to: '/especialidades/urologia-oncologica' },
      { label: 'Psicooncología', to: '/especialidades/psicooncologia' },
    ],
  },
  {
    id: 'medicas',
    title: 'Especialidades Médicas',
    items: [
      { label: 'Cardiología',  to: '/especialidades/cardiologia'  },
      { label: 'Dermatología', to: '/especialidades/dermatologia' },
      { label: 'Endocrinología', to: '/especialidades/endocrinologia' },
      { label: 'Enfermedades Infecciosas', to: '/especialidades/enfermedades-infecciosas' },
      { label: 'Gastroenterología', to: '/especialidades/gastroenterologia' },
      { label: 'Geriatría', to: '/especialidades/geriatria' },
      { label: 'Hematología', to: '/especialidades/hematologia' },
      { label: 'Infectología', to: '/especialidades/infectologia' },
      { label: 'Medicina General', to: '/especialidades/medicina-general' },
      { label: 'Medicina Interna', to: '/especialidades/medicina-interna' },
      { label: 'Nefrología', to: '/especialidades/nefrologia' },
      { label: 'Neumología', to: '/especialidades/neumologia' },
    ],
  },
  {
    id: 'quirurgicas',
    title: 'Especialidades Quirúrgicas',
    items: [
      { label: 'Cirugía Plástica', to: '/especialidades/cirugia-plastica' },
      { label: 'Coloproctología', to: '/especialidades/coloproctologia' },
      { label: 'Ginecología y Obstetricia', to: '/especialidades/ginecologia-obstetricia' },
      { label: 'Neurocirugía', to: '/especialidades/neurocirugia' },
      { label: 'Odontología', to: '/especialidades/odontologia' },
      { label: 'Otorrinolaringología', to: '/especialidades/otorrinolaringologia' },
      { label: 'Traumatología', to: '/especialidades/traumatologia' },
      { label: 'Urología', to: '/especialidades/urologia' },
    ],
  },
  {
    id: 'otras',
    title: 'Otras Especialidades',
    items: [
      { label: 'Medicina Física y Rehabilitación', to: '/especialidades/medicina-fisica-rehabilitacion' },
      { label: 'Oftalmología', to: '/especialidades/oftalmologia' },
      { label: 'Pediatría', to: '/especialidades/pediatria' },
      { label: 'Psicología', to: '/especialidades/psicologia' },
      { label: 'Psiquiatría', to: '/especialidades/psiquiatria' },
      { label: 'Radiología Intervencionista', to: '/especialidades/radiologia-intervencionista' },
    ],
  },
]

// Tipos de menú dropdown actualmente abiertos en desktop
export type DropdownKey = 'pacientes' | 'ethics' | 'laboratorio'
