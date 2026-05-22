import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'

import bannerImg from '../assets/bannerOncologia.jpg'

import {
  Users2,
  HeartHandshake,
  Microscope,
  ShieldCheck,
  Stethoscope,
  Sparkles,
} from 'lucide-react'

import { ClipboardList, Heart, Dna, Stethoscope as StethoscopeIcon, Activity } from 'lucide-react'

import {
  ThemeProvider,
  BLUE_THEME,
  MisionCTA,
  ServicesStrip,
  SpecialtyIntro,
  FAQs,
  QuickContact,
} from '../components/specialty'

import {
  OncologiaHero,
  TiposCancer,
  LoQueOfrecemos,
  NuestroDiferencial,
} from '../components/oncologia-medica'

import { perfilPaciente, oncoImages, faqs } from '../components/oncologia-medica/data'

const introIcons = [ClipboardList, Heart, Dna, StethoscopeIcon, Activity]

const stripServicios = [
  { title: 'Oncología médica', icon: Stethoscope },
  { title: 'Equipo multidisciplinario', icon: Users2 },
  { title: 'Tratamientos personalizados', icon: Sparkles },
  { title: 'Tecnología de Alta Precisión', icon: Microscope },
  { title: 'Acompañamiento integral', icon: HeartHandshake },
  { title: 'Detección temprana', icon: ShieldCheck },
]

const fortalezasWords = [
  'Excelencia médica',
  'Tecnología de Alta Precisión',
  'Atención humana',
  'Diagnóstico preciso',
  'Innovación continua',
  'Equipo multidisciplinario',
  'Cuidado personalizado',
  'Resultados confiables',
]

export default function OncologiaMedica() {
  return (
    <ThemeProvider
      theme={BLUE_THEME}
      className="min-h-screen"
      style={{
        fontFamily: 'Lexend, sans-serif',
        background: BLUE_THEME.pageGradient,
      }}
    >
      <HeaderV3 />

      <OncologiaHero />

      <ServicesStrip items={stripServicios} />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">

          <main className="min-w-0 space-y-20 lg:space-y-24">
            <SpecialtyIntro
              titlePre="Cuidado"
              titleAccent="oncológico integral"
              paragraph="En Detecta Clínica, acompañamos el diagnóstico, tratamiento y seguimiento del cáncer con un enfoque médico especializado, humano y seguro."
              listLabel="¿Cuándo acudir a oncología médica?"
              items={perfilPaciente}
              sideImage={oncoImages.hero}
              sideAlt="Atención oncológica Detecta"
              icons={introIcons}
            />

            <TiposCancer />

            <MisionCTA
              image={bannerImg}
              imageAlt="Misión de la oncología médica"
              eyebrow=" "
              titlePre="Agenda una"
              titleAccent="evaluación oncológica."
              paragraph="Conoce tus opciones de tratamiento médico con especialistas en oncología y recibe una orientación clara para tu caso."
            />

            <LoQueOfrecemos />

            <NuestroDiferencial />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas"
              subtitle="Información clara para que llegues a tu consulta con confianza."
              faqs={faqs}
            />
          </main>

          <aside className="hidden self-start lg:sticky lg:top-24 lg:block">
            <QuickContact />
          </aside>

        </div>
      </div>

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </ThemeProvider>
  )
}
