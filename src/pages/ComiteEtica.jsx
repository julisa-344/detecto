import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'

import {
  ThemeProvider,
  BLUE_THEME,
} from '../components/specialty'

import {
  ComiteEticaHero,
  QueEsCIEI,
  Integrantes,
  Principios,
  AlcanceEvaluacion,
  ProcesoRevision,
  RequisitosFormatos,
  Transparencia,
  ContactoMapa,
  CTAFinal,
} from '../components/comite-etica'

export default function ComiteEtica() {
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

      <ComiteEticaHero />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <main className="space-y-24 lg:space-y-32">
          <QueEsCIEI />
          <Principios />
          <AlcanceEvaluacion />
          <ProcesoRevision />
          <RequisitosFormatos />
          <Integrantes />
          <Transparencia />
          <ContactoMapa />
          <CTAFinal />
        </main>
      </div>

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </ThemeProvider>
  )
}
