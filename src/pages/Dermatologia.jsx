import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'
import detecto from '../assets/detecto.png'
import bannerImg from '../assets/bannerOncologia.jpg'

import {
  ThemeProvider,
  BLUE_THEME,
  MisionCTA,
  FAQs,
  QuickContact,
  FortalezasClinica,
} from '../components/specialty'

import {
  DermaHero,
  QueEsDermatologia,
  QueTratamos,
  ServiciosEspecializados,
  faqs,
  fortalezas,
} from '../components/dermatologia'

export default function Dermatologia() {
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

      <DermaHero />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">

          <main className="min-w-0 space-y-20 lg:space-y-24">
            <QueEsDermatologia />

            <QueTratamos />

            <MisionCTA
              image={bannerImg}
              imageAlt="Misión de Detecta Clínica"
              eyebrow="Nuestro compromiso"
              titlePre="Tu salud,"
              titleAccent="nuestra misión."
              paragraph="En Detecta Clínica combinamos ciencia, tecnología y humanidad para acompañarte en cada etapa del tratamiento. Da el primer paso hacia tu recuperación hoy mismo."
            />

            <ServiciosEspecializados />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas"
              subtitle="Información clara para que llegues a tu consulta con confianza."
              faqs={faqs}
            />
          </main>

          <aside className="hidden self-start lg:sticky lg:top-[96px] lg:block">
            <QuickContact />
          </aside>

        </div>
      </div>

      <FortalezasClinica image={detecto} words={fortalezas} />

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </ThemeProvider>
  )
}
