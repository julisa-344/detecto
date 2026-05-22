import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'
import { FAQs, ThemeProvider, BLUE_THEME } from '../components/specialty'
import {
  HeroContacto,
  ContactoForm,
  CanalesAside,
  UbicacionMapa,
  FAQS,
} from '../components/contacto'

export default function Contacto() {
  return (
    <ThemeProvider
      theme={BLUE_THEME}
      className="min-h-screen"
      style={{
        fontFamily: 'Lexend, sans-serif',
        background:
          'linear-gradient(180deg, #FFFFFF 0%, #F7FCFE 35%, #EEFBFF 70%, #E3F4FB 100%)',
      }}
    >
      <HeaderV3 />

      <HeroContacto />

      <div className="mx-auto max-w-6xl px-6 lg:px-10 pt-16 lg:pt-20 pb-20 lg:pb-28">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] relative z-10">
          <ContactoForm />
          <CanalesAside />
        </div>

        <UbicacionMapa />

        <div className="mt-20 lg:mt-28">
          <FAQs
            eyebrow="Preguntas frecuentes"
            title="Resolvemos tus dudas"
            subtitle="Información clara para que contactarnos sea fácil y rápido."
            faqs={FAQS}
          />
        </div>
      </div>

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </ThemeProvider>
  )
}
