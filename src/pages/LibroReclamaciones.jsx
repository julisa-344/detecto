import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'
import { ThemeProvider, BLUE_THEME } from '../components/specialty'
import { HeroLibro, LibroForm } from '../components/libro-reclamaciones'

export default function LibroReclamaciones() {
  return (
    <ThemeProvider
      theme={BLUE_THEME}
      className="min-h-screen"
      style={{
        fontFamily: 'Lexend, sans-serif',
        background: BLUE_THEME.pageGradient,
      }}
    >
      <HeaderV3 forceLight />

      <HeroLibro />

      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <LibroForm />
        </div>
      </section>

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </ThemeProvider>
  )
}
