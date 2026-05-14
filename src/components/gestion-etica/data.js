import {
  Compass,
  HeartHandshake,
  Award,
  ShieldCheck,
  Users,
  Sparkles,
  Stethoscope,
  Briefcase,
  Handshake,
  Heart,
  ShieldOff,
  UserCheck,
  Scale,
  Lock,
  GitBranch,
  Ban,
  Megaphone,
  Smile,
  Wallet,
  Megaphone as Speaker,
  FileSignature,
  HelpCircle,
  AlertTriangle,
  CheckCircle2,
  FileText,
  ScrollText,
  ShieldAlert,
  UserMinus,
  ClipboardEdit,
  Mail,
  Globe,
  UserCog,
  EyeOff,
  RefreshCcw,
  CheckSquare,
} from 'lucide-react'

export const heroMicrocards = [
  { label: 'Compromiso central', value: 'Hacer lo correcto', icon: Compass },
  { label: 'Enfoque', value: 'Paciente primero', icon: HeartHandshake },
  { label: 'Tolerancia', value: 'Cero soborno y represalias', icon: ShieldOff },
  { label: 'Cobertura', value: 'Personal, médicos, directivos y terceros', icon: Users },
]

export const garantizamos = [
  'Atención médica y administrativa basada en principios éticos.',
  'Decisiones clínicas sustentadas en criterio profesional y beneficio del paciente.',
  'Protección de la confidencialidad y tratamiento responsable de la información.',
  'Respeto a la dignidad, autonomía y derechos de cada persona.',
  'Relaciones transparentes con proveedores, aliados y terceros.',
]

export const valores = [
  { title: 'Integridad', desc: 'Actuamos con honestidad, coherencia y rectitud, incluso cuando nadie observa.', icon: Award },
  { title: 'Empatía', desc: 'Reconocemos la situación humana detrás de cada atención, diagnóstico y decisión.', icon: Heart },
  { title: 'Excelencia', desc: 'Buscamos altos estándares clínicos, administrativos y relacionales en cada proceso.', icon: Sparkles },
  { title: 'Respeto', desc: 'Valoramos la dignidad, diversidad, privacidad y autonomía de las personas.', icon: UserCheck },
  { title: 'Colaboración', desc: 'Promovemos el trabajo articulado entre áreas para tomar decisiones responsables y oportunas.', icon: Users },
  { title: 'Innovación responsable', desc: 'Incorporamos tecnología y mejora continua con criterio ético y enfoque en bienestar.', icon: Compass },
]

export const alcance = [
  {
    title: 'Personal asistencial',
    desc: 'Médicos, enfermería, técnicos y demás profesionales de salud vinculados a la atención del paciente.',
    icon: Stethoscope,
  },
  {
    title: 'Personal administrativo',
    desc: 'Equipos de admisión, comercial, finanzas, recursos humanos, operaciones, TI y soporte institucional.',
    icon: Briefcase,
  },
  {
    title: 'Terceros y aliados',
    desc: 'Proveedores, locadores, contratistas, socios y cualquier tercero que mantenga relación con la clínica.',
    icon: Handshake,
  },
]

export const principios = [
  {
    title: 'Beneficencia',
    desc: 'Actuamos buscando el mayor beneficio posible para el paciente, priorizando su bienestar integral.',
    icon: HeartHandshake,
  },
  {
    title: 'No maleficencia',
    desc: 'Evitamos producir daño, riesgos innecesarios o decisiones que afecten física, emocional o éticamente al paciente.',
    icon: ShieldCheck,
  },
  {
    title: 'Autonomía',
    desc: 'Respetamos la capacidad del paciente para decidir informadamente sobre su proceso de atención.',
    icon: UserCheck,
  },
  {
    title: 'Justicia',
    desc: 'Promovemos una atención equitativa, oportuna y libre de discriminación.',
    icon: Scale,
  },
]

export const compromisosOncologia = [
  { text: 'Segunda opinión responsable y basada en evidencia.', icon: ClipboardEdit },
  { text: 'Comunicación clara frente a hallazgos, riesgos y alternativas.', icon: Megaphone },
  { text: 'Respeto por los tiempos y decisiones del paciente y su familia.', icon: Heart },
  { text: 'Evitar sobrediagnóstico, sobrepromesa o sobretratamiento.', icon: ShieldAlert },
  { text: 'Acompañamiento ético en procesos preventivos y oncológicos.', icon: HeartHandshake },
]

export const conductaEsperada = [
  { title: 'Confidencialidad y protección de datos', icon: Lock },
  { title: 'Prevención de conflictos de interés', icon: GitBranch },
  { title: 'Anticorrupción y antisoborno', icon: Ban },
  { title: 'Transparencia en la comunicación', icon: Speaker },
  { title: 'Respeto y no discriminación', icon: Smile },
  { title: 'Uso responsable de recursos', icon: Wallet },
]

export const pasosModelo = [
  {
    n: '1',
    title: 'Difusión y conocimiento',
    desc: 'Todo colaborador, médico o tercero vinculado debe conocer los lineamientos éticos aplicables a su rol.',
    icon: Megaphone,
  },
  {
    n: '2',
    title: 'Compromiso formal',
    desc: 'Las personas sujetas al sistema firman constancias o declaraciones de recepción, cumplimiento, conflicto de interés y antisoborno según corresponda.',
    icon: FileSignature,
  },
  {
    n: '3',
    title: 'Consulta y prevención',
    desc: 'Ante dudas, se promueve la consulta previa para prevenir decisiones equivocadas o riesgos reputacionales.',
    icon: HelpCircle,
  },
  {
    n: '4',
    title: 'Reporte e investigación',
    desc: 'Toda situación sospechosa o irregular puede ser informada por canales confidenciales y será evaluada con enfoque objetivo y reservado.',
    icon: AlertTriangle,
  },
  {
    n: '5',
    title: 'Medidas y mejora continua',
    desc: 'Las observaciones o incumplimientos pueden generar acciones correctivas, disciplinarias o preventivas según corresponda.',
    icon: RefreshCcw,
  },
]

export const situacionesReportables = [
  'Conductas contrarias al código de conducta.',
  'Conflictos de interés no declarados.',
  'Posibles actos de corrupción o soborno.',
  'Faltas de respeto, discriminación o acoso.',
  'Uso indebido de información o recursos institucionales.',
  'Cualquier situación que comprometa al paciente o a la institución.',
]

export const canalContactos = [
  { label: 'Correo', value: 'gestionetica@detecta.pe', icon: Mail, href: 'mailto:gestionetica@detecta.pe' },
  { label: 'Formulario web', value: 'Canal confidencial institucional', icon: Globe },
  { label: 'Atención interna', value: 'Comité o responsable de cumplimiento', icon: UserCog },
  { label: 'Modalidad', value: 'Identificado o anónimo', icon: EyeOff },
]

export const garantias = [
  { title: 'Confidencialidad', icon: Lock },
  { title: 'Protección frente a represalias', icon: ShieldCheck },
  { title: 'Investigación objetiva', icon: Scale },
  { title: 'Trazabilidad interna', icon: CheckSquare },
]

export const documentos = [
  { title: 'Código de Conducta', desc: 'Lineamientos generales de comportamiento institucional aplicables a todo el personal y terceros.', icon: ScrollText },
  { title: 'Política de Conflicto de Interés', desc: 'Reglas para identificar, declarar y manejar situaciones que comprometan la objetividad.', icon: GitBranch },
  { title: 'Política Antisoborno y Anticorrupción', desc: 'Compromiso institucional con la prevención de prácticas indebidas y cero tolerancia.', icon: Ban },
  { title: 'Política de No Discriminación y No Acoso', desc: 'Marco de actuación para garantizar entornos respetuosos y libres de discriminación.', icon: UserMinus },
  { title: 'Formato de Declaración Jurada', desc: 'Documento para la declaración formal de cumplimiento ético y conflictos de interés.', icon: FileText },
]

export const indicadores = [
  { value: '100%', label: 'Colaboradores con recepción del código', icon: CheckCircle2 },
  { value: '100%', label: 'Personal clave capacitado anualmente', icon: Award },
  { value: '24/7', label: 'Disponibilidad del canal de reportes', icon: ShieldCheck },
]

export const faqs = [
  {
    q: '¿Qué es la Gestión de Ética en Detecta Clínica?',
    a: 'Es el sistema institucional que orienta la conducta de colaboradores, médicos, directivos y terceros bajo principios de integridad, responsabilidad y transparencia, protegiendo al paciente y a la institución.',
  },
  {
    q: '¿Quiénes deben cumplir estas disposiciones?',
    a: 'Aplica al personal asistencial, administrativo, directivos, médicos vinculados y todo tercero o aliado que mantenga relación con Detecta Clínica.',
  },
  {
    q: '¿Qué tipo de situaciones pueden reportarse?',
    a: 'Conductas contrarias al código, conflictos de interés no declarados, posibles actos de corrupción o soborno, faltas de respeto, discriminación, acoso y uso indebido de información o recursos.',
  },
  {
    q: '¿Se puede reportar de forma confidencial?',
    a: 'Sí. El canal admite reportes identificados o anónimos según corresponda, con garantía de confidencialidad y protección frente a represalias.',
  },
  {
    q: '¿Qué pasa después de un reporte?',
    a: 'Se evalúa de forma objetiva y reservada. Según el caso, se aplican medidas correctivas, disciplinarias o preventivas, manteniendo trazabilidad interna.',
  },
  {
    q: '¿Qué ocurre si tengo dudas antes de tomar una decisión?',
    a: 'Se promueve la consulta previa al comité o responsable de cumplimiento para prevenir decisiones equivocadas o riesgos reputacionales.',
  },
]
