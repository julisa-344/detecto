import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'

import {
  Hero,
  ServicesStrip,
  QueEsOncologia,
  TiposCancer,
  MisionCTA,
  LoQueOfrecemos,
  FAQs,
  FortalezasClinica,
  QuickContact,
} from '../components/oncologia-medica'

export default function OncologiaMedica() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: 'Lexend, sans-serif',
        background:
          'linear-gradient(180deg, #FFFFFF 0%, #F7FCFE 35%, #EEFBFF 70%, #E3F4FB 100%)',
      }}
    >
      <HeaderV3 />
      <Hero />
      <ServicesStrip />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">

          <main className="min-w-0 space-y-20 lg:space-y-24">
            <QueEsOncologia />
            <TiposCancer />
            <MisionCTA />
            <LoQueOfrecemos />
            <FAQs />
          </main>

          <aside className="hidden self-start lg:sticky lg:top-[96px] lg:block">
            <QuickContact />
          </aside>

        </div>
      </div>

      <FortalezasClinica />

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </div>
  )
}
