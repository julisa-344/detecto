import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'

import {
  ThemeProvider,
  BLUE_THEME,
  FAQs,
  QuickContact,
} from '../components/specialty'

import {
  AnatomiaHero,
  PorQueElegirnos,
  EstudiosRealizamos,
  LiderDrTaxa,
  ConfianzaCta,
  faqs,
} from '../components/anatomia-patologica'

export default function AnatomiaPatologica() {
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

      <AnatomiaHero />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <PorQueElegirnos />
            <EstudiosRealizamos />
            <LiderDrTaxa />
            <ConfianzaCta />
            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas más comunes"
              subtitle="Información clara sobre nuestro laboratorio de anatomía patológica."
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
