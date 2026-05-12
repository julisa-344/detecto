import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'

import bannerImg from '../assets/bannerOncologia.jpg'
import detecto from '../assets/detecto.png'

import {
  ThemeProvider,
  BLUE_THEME,
  MisionCTA,
  FAQs,
  QuickContact,
  FortalezasClinica,
} from '../components/specialty'

import {
  OncologiaHero,
  QueEsOncologia,
  TiposCancer,
  LoQueOfrecemos,
  faqs,
} from '../components/oncologia-medica'

const fortalezasWords = [
  'Excelencia médica',
  'Tecnología de vanguardia',
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

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">

          <main className="min-w-0 space-y-20 lg:space-y-24">
            <QueEsOncologia />

            <TiposCancer />

            <MisionCTA
              image={bannerImg}
              imageAlt="Misión de la oncología médica"
              eyebrow="Nuestro compromiso"
              titlePre="Tu salud,"
              titleAccent="nuestra misión."
              paragraph="Combinamos ciencia, tecnología y humanidad para acompañarte en cada etapa del tratamiento oncológico. Da el primer paso hacia tu recuperación hoy mismo."
            />

            <LoQueOfrecemos />

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

      <FortalezasClinica image={detecto} words={fortalezasWords} />

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </ThemeProvider>
  )
}
