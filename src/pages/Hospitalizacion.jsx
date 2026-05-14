import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'
import detecto from '../assets/detecto.png'
import ctaImg from '../assets/clinica.jpg'

import {
  ThemeProvider,
  BLUE_THEME,
  MisionCTA,
  FAQs,
  QuickContact,
  FortalezasClinica,
} from '../components/specialty'

import {
  HospitalizacionHero,
  EntornosRecuperacion,
  faqs,
  fortalezas,
} from '../components/hospitalizacion'

export default function Hospitalizacion() {
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

      <HospitalizacionHero />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <EntornosRecuperacion />

            <MisionCTA
              image={ctaImg}
              imageAlt="Hospitalización Detecta Clínica"
              eyebrow="Lo que más valoran los pacientes"
              titlePre="Confianza y precisión"
              titleAccent="en cada resultado."
              paragraph="Un equipo humano comprometido, espacios cómodos y protocolos clínicos que acompañan cada etapa de tu recuperación."
            />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas más comunes"
              subtitle="Todo lo que necesitas saber sobre tu hospitalización."
              faqs={faqs}
            />
          </main>

          <aside className="hidden self-start lg:sticky lg:top-24 lg:block">
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
