import { ShieldCheck, FileLock2 } from 'lucide-react'

export const SECCIONES = [
  {
    id: 'responsable',
    num: '01',
    title: 'Identificación del Responsable del Tratamiento',
    body: [
      'DETECTA CENTRO ONCOLOGICO S.A.C., RUC N.° 20515468499, con domicilio en Av. Angamos Este N.º 2688, Lima – Perú (en adelante, «DETECTA CLÍNICA»), informa cómo trata los datos personales de sus usuarios/pacientes.',
    ],
  },
  {
    id: 'objeto',
    num: '02',
    title: 'Objeto',
    body: [
      'Esta Política establece los criterios bajo los cuales se realiza el tratamiento de datos personales contenidos en los Bancos de Datos Personales de DETECTA CLÍNICA, en cumplimiento de la Ley N.° 29733 (LPDP), su Reglamento aprobado por D.S. N.° 016-2024-JUS (RLPDP) y normas complementarias.',
    ],
  },
  {
    id: 'definiciones',
    num: '03',
    title: 'Definiciones',
    body: [
      {
        dl: [
          { term: 'Autorización', def: 'consentimiento libre, previo, informado, expreso e inequívoco del titular.' },
          { term: 'Datos personales', def: 'información que identifica a una persona natural (p. ej., nombre, DNI, correo, teléfono).' },
          { term: 'Datos sensibles', def: 'datos que afectan la intimidad del titular, como información de salud.' },
          { term: 'Titular de datos personales', def: 'persona natural propietaria de los datos.' },
          { term: 'Titular del banco de datos', def: 'quien determina finalidad y contenido del banco y medidas de seguridad.' },
          { term: 'Banco de datos personales', def: 'conjunto estructurado de datos gestionado por DETECTA CLÍNICA.' },
          { term: 'Responsable del tratamiento', def: 'quien decide sobre el tratamiento de datos personales.' },
          { term: 'Tratamiento', def: 'cualquier operación sobre datos (recolección, almacenamiento, uso, etc.).' },
          { term: 'Flujo transfronterizo', def: 'transferencia de datos personales fuera del Perú.' },
        ],
      },
    ],
  },
  {
    id: 'alcance',
    num: '04',
    title: 'Alcance',
    body: [
      'Aplica a los datos personales recopilados a través de nuestros medios digitales (sitio web, apps), atención telefónica y otros canales usados en la prestación de servicios.',
    ],
  },
  {
    id: 'principios',
    num: '05',
    title: 'Principios Rectores',
    body: [
      {
        dl: [
          { term: 'Legalidad', def: 'tratamiento conforme a LPDP/RLPDP; prohibida la recopilación por medios ilícitos.' },
          { term: 'Consentimiento', def: 'libre, previo, expreso, informado e inequívoco; no se admiten fórmulas tácitas.' },
          { term: 'Finalidad', def: 'clara, específica y acorde con las actividades del titular del banco.' },
          { term: 'Proporcionalidad', def: 'tratamiento adecuado, relevante y no excesivo.' },
          { term: 'Calidad', def: 'los datos deben ajustarse a la realidad; se presume exactitud de los facilitados por el titular.' },
          { term: 'Seguridad', def: 'medidas para evitar adulteración, pérdida o acceso no autorizado.' },
          { term: 'Disposición de recurso', def: 'vías administrativas o judiciales para reclamar derechos.' },
          { term: 'Nivel de protección', def: 'en transferencias internacionales, protección suficiente o equiparable a LPDP/estándares internacionales.' },
        ],
      },
    ],
  },
  {
    id: 'almacenamiento',
    num: '06',
    title: 'Almacenamiento',
    body: [
      'Los datos personales se almacenan en Bancos de Datos Personales de DETECTA CLÍNICA, en proceso de inscripción ante la Autoridad Nacional de Protección de Datos Personales, conforme a la Ley N.° 29733 y su Reglamento.',
    ],
  },
  {
    id: 'consentimiento',
    num: '07',
    title: 'Consentimiento y Consecuencias',
    body: [
      'El registro de datos personales en nuestros canales implica consentimiento libre, previo, expreso, inequívoco e informado para su tratamiento conforme a esta Política.',
      'Proporcionar datos puede ser requisito para establecer relación con DETECTA CLÍNICA. La negativa a brindarlos o la revocatoria del consentimiento (sin efectos retroactivos) podría limitar la prestación de servicios.',
    ],
  },
  {
    id: 'uso',
    num: '08',
    title: 'Uso Autorizado de los Datos Personales',
    body: [
      {
        ul: [
          'Brindar atención médica y otros servicios de salud.',
          'Ejecutar relaciones jurídicas, contractuales o comerciales.',
          'Realizar análisis estadísticos, evaluar calidad del servicio y analizar comportamiento de uso.',
          'Gestionar consultas, quejas, reclamos y solicitudes.',
          'Cumplir obligaciones legales y regulatorias.',
        ],
      },
    ],
  },
  {
    id: 'transferencias',
    num: '09',
    title: 'Transferencias Nacionales e Internacionales',
    body: [
      'Los datos podrán compartirse con:',
      {
        ul: [
          'Empresas del grupo económico de DETECTA CLÍNICA.',
          'Proveedores de servicios tecnológicos, médicos o administrativos.',
          'Entidades aseguradoras, clínicas asociadas y laboratorios.',
          'Autoridades administrativas, judiciales o regulatorias, peruanas o extranjeras, cuando lo exija la ley.',
        ],
      },
      'Todo tercero receptor asume cumplir la LPDP, su Reglamento y disposiciones complementarias.',
    ],
  },
  {
    id: 'plazo',
    num: '10',
    title: 'Plazo de Conservación',
    body: [
      'Conservaremos los datos durante la relación con el usuario y hasta por 10 años después de finalizada, salvo plazo mayor exigido por ley. Vencido el plazo, los datos serán eliminados; cierta información puede mantenerse para fines estadísticos o de auditoría.',
    ],
  },
  {
    id: 'comunicaciones',
    num: '11',
    title: 'Comunicaciones Comerciales y Usos Adicionales',
    body: [
      'Con su autorización, podremos usar sus datos para ofrecer servicios y productos médicos, promocionar seguros u otros servicios vinculados y enviar comunicaciones por medios físicos, digitales o telefónicos.',
    ],
  },
  {
    id: 'videovigilancia',
    num: '12',
    title: 'Videovigilancia',
    body: [
      'Nuestras sedes cuentan con sistemas de videovigilancia para seguridad. La información obtenida se gestiona conforme a esta Política y a la Directiva N.° 02-2020-JUS/DGTAIPD. Las áreas videovigiladas están señalizadas.',
    ],
  },
  {
    id: 'menores',
    num: '13',
    title: 'Tratamiento de Datos de Menores',
    body: [
      'Si tratamos datos de niños, niñas o adolescentes, observaremos estrictamente los arts. 27 a 30 del RLPDP y normas concordantes. DETECTA CLÍNICA asegurará:',
      {
        ul: [
          'Respeto del interés superior del menor.',
          'Respeto de sus derechos fundamentales.',
          'Valoración de su opinión cuando cuente con madurez/autonomía suficiente.',
        ],
      },
    ],
  },
  {
    id: 'sensibles',
    num: '14',
    title: 'Tratamiento de Datos Sensibles',
    body: [
      'En caso de tratar datos sensibles, DETECTA CLÍNICA obtendrá el consentimiento expreso del titular y cumplirá las limitaciones y obligaciones de la LPDP y el RLPDP.',
    ],
  },
  {
    id: 'confidencialidad',
    num: '15',
    title: 'Confidencialidad',
    body: [
      'Garantizamos la confidencialidad de los datos, especialmente los relativos a la salud, aplicando medidas de seguridad apropiadas y cumpliendo el deber de secreto profesional.',
    ],
  },
  {
    id: 'arco',
    num: '16',
    title: 'Ejercicio de Derechos ARCO',
    body: [
      'El titular puede ejercer sus derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO), o revocar su consentimiento, mediante solicitud en nuestra sede (Av. Angamos Este 2688 – Surquillo) o a los correos: atencionalpaciente@detecta.pe / datos@detectaclinica.com.pe.',
    ],
  },
  {
    id: 'derechos',
    num: '17',
    title: 'Derechos de los Titulares de los Datos Personales',
    body: [
      { h: '17.1 Derechos de los Titulares' },
      {
        dl: [
          { term: 'Información', def: 'conocer finalidad, destinatarios, banco de datos, identidad y domicilio del titular/encargados, carácter obligatorio/facultativo de respuestas, transferencias, consecuencias de proporcionar datos o negarse, plazo de conservación y medios para ejercer derechos.' },
          { term: 'Acceso', def: 'obtener de DETECTA CLÍNICA toda la información relativa a sus datos personales.' },
          { term: 'Actualización, inclusión, rectificación y supresión', def: 'frente a datos inexactos o innecesarios, o vencido el plazo de tratamiento.' },
          { term: 'Impedimento de suministro', def: 'evitar suministro cuando afecte derechos fundamentales.' },
          { term: 'Oposición', def: 'cuando existan motivos fundados y legítimos, salvo disposición legal en contrario.' },
        ],
      },
      { h: '17.2 Procedimiento para ejercer derechos' },
      'Las solicitudes serán atendidas conforme al art. 69 del RLPDP desde su recepción. De requerirse ampliación de plazo, se informarán los motivos.',
      { h: '17.3 Titulares o personas facultadas' },
      {
        ul: [
          'Usuarios actuales.',
          'Terceros autorizados por el titular o por la ley.',
          'En general, cualquier titular cuyos datos figuren en nuestras bases.',
        ],
      },
      { h: '17.4 Canales para ejercer derechos' },
      'Correo: atencionalpaciente@detecta.pe · Web: www.detecta.pe · Teléfono: +51 922 335 134 · Punto físico: Av. Angamos Este 2688 – Surquillo, Lima.',
      { h: '17.5 Responsable del cumplimiento' },
      'Consultas y reclamos de protección de datos: direccionmedica@detecta.pe.',
    ],
  },
  {
    id: 'modificaciones',
    num: '18',
    title: 'Modificaciones',
    body: [
      'Esta Política podrá ser modificada por DETECTA CLÍNICA. La versión vigente estará publicada en www.detecta.pe.',
    ],
  },
]

export const TOC = [
  {
    group: 'Política de Privacidad',
    icon: FileLock2,
    items: SECCIONES.map((s) => ({ id: s.id, num: s.num, title: s.title })),
  },
]

export const HERO_BG = `${import.meta.env.VITE_BASE_IMAGE_URL}gestion-etica/libroReclamaciones.jpg`

export const MARQUEE_ITEMS = [
  'Protección de Datos',
  'Ley N.° 29733',
  'D.S. N.° 016-2024-JUS',
  'Confidencialidad',
  'Derechos ARCO',
  'Transparencia',
  'Seguridad de la Información',
  'Consentimiento Informado',
]

export { ShieldCheck }
