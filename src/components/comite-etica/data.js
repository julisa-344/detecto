import {
  CalendarDays,
  Receipt,
  Mail,
  Phone,
  ClipboardCheck,
  ShieldAlert,
  Eye,
  UserCheck,
  HeartHandshake,
  Sparkles,
  Scale,
  ShieldOff,
  FlaskConical,
  LineChart,
  Stethoscope,
  Users,
  TestTube,
  Database,
  Inbox,
  Search,
  Gavel,
  FileCheck2,
  FileText,
} from 'lucide-react'

export const heroStats = [
  { eyebrow: 'Sesiones', value: 'Todos los miércoles', icon: CalendarDays },
  { eyebrow: 'Tarifario', value: 'Costos de evaluación', icon: Receipt },
  { eyebrow: 'Correo', value: 'comitedeetica@detecta.pe', icon: Mail },
  { eyebrow: 'Anexo', value: '(01) 217 5100 - 420', icon: Phone },
]

export const pilaresFuncionamiento = [
  { num: '1', title: 'Evalúa protocolos', desc: 'Revisión exhaustiva de metodología y ética.', icon: ClipboardCheck },
  { num: '2', title: 'Analiza riesgos', desc: 'Balance entre riesgos y beneficios para participantes.', icon: ShieldAlert },
  { num: '3', title: 'Supervisa estudios', desc: 'Monitoreo continuo durante toda la investigación.', icon: Eye },
  { num: '4', title: 'Asesora investigadores', desc: 'Orientación en aspectos éticos y normativos.', icon: UserCheck },
]

export const principios = [
  { title: 'Respeto a las personas', desc: 'Autonomía y protección de vulnerables.', icon: HeartHandshake },
  { title: 'Beneficencia', desc: 'Maximizar beneficios, minimizar riesgos.', icon: Sparkles },
  { title: 'Justicia', desc: 'Distribución equitativa de cargas y beneficios.', icon: Scale },
  { title: 'No maleficencia', desc: 'Primum non nocere — primero no dañar.', icon: ShieldOff },
]

export const alcance = [
  { title: 'Ensayos clínicos', icon: FlaskConical },
  { title: 'Estudios observacionales y epidemiológicos', icon: LineChart },
  { title: 'Investigaciones en Salud Pública', icon: Stethoscope },
  { title: 'Investigaciones con poblaciones vulnerables', icon: Users },
  { title: 'Estudios con muestras biológicas humanas', icon: TestTube },
  { title: 'Investigación con datos sensibles', icon: Database },
]

export const etapas = [
  { id: '01', tag: 'Inicio', title: 'Recepción', desc: 'Ingreso de documentación vía correo institucional. El equipo confirma recibo en máximo 24 horas.', icon: Inbox },
  { id: '02', tag: 'Análisis', title: 'Revisión', desc: 'Se notifican observaciones hasta un día hábil antes de la sesión programada.', icon: Search },
  { id: '03', tag: 'Evaluación', title: 'Sesión del comité', desc: 'Evaluación semanal por parte del CIEI con revisión colegiada del protocolo.', icon: Gavel },
  { id: '04', tag: 'Resolución', title: 'Carta de decisión', desc: 'Dictamen emitido dentro de los 5 días hábiles posteriores a la sesión.', icon: FileCheck2 },
]

export const requisitosTabs = [
  {
    key: 'clinicos',
    label: 'Ensayos Clínicos',
    items: [
      { title: 'Carta de sometimiento', desc: 'Solicitud firmada por el investigador principal con título, código, institución y documentos.' },
      { title: 'Protocolo completo del estudio', desc: 'Se adjunta guía para la elaboración de un protocolo de investigación.', download: true },
      { title: 'Consentimiento / Asentimiento informado', desc: 'Se adjunta guía para la elaboración del documento.', download: true },
      { title: 'Curriculum Vitae del equipo de investigación', desc: 'Adjuntar certificados en buenas prácticas clínicas y éticas en investigación (vigente).', download: true },
      { title: 'Declaraciones juradas del equipo de investigación', desc: '', download: true },
      { title: 'Material de reclutamiento (si aplica)', desc: '' },
      { title: 'Instrumentos de recolección (si aplica)', desc: '' },
      { title: 'Manual del investigador (si aplica)', desc: '' },
      { title: 'Pólizas de seguro (si aplica)', desc: '' },
      { title: 'Módulos obligatorios', desc: '', modules: ['Módulo A', 'Módulo B'] },
    ],
  },
  {
    key: 'observacionales',
    label: 'Ensayos Observacionales',
    items: [
      { title: 'Carta de sometimiento', desc: 'Solicitud firmada por el investigador principal.' },
      { title: 'Protocolo del estudio observacional', desc: '', download: true },
      { title: 'Consentimiento informado', desc: '', download: true },
      { title: 'CV del equipo', desc: '', download: true },
      { title: 'Declaraciones juradas', desc: '', download: true },
      { title: 'Instrumentos de recolección', desc: '' },
      { title: 'Plan de análisis de datos', desc: '' },
      { title: 'Módulos obligatorios', desc: '', modules: ['Módulo A', 'Módulo B'] },
    ],
  },
  {
    key: 'enmiendas',
    label: 'Enmiendas',
    items: [
      { title: 'Carta de sometimiento de enmienda', desc: '' },
      { title: 'Resumen de cambios', desc: '' },
      { title: 'Documentos modificados con control de cambios', desc: '' },
    ],
  },
]

export const documentosLink = FileText
