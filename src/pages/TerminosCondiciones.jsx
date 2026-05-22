import { useMemo } from 'react'
import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'
import ctaImg from '../assets/transparencia.jpg'
import {
  ThemeProvider,
  BLUE_THEME,
  SectionEyebrow,
  SectionTitle,
  MisionCTA,
} from '../components/specialty'
import {
  HeroTerminos,
  Sidebar,
  Seccion,
  useActiveSection,
  TERMINOS,
  PRIVACIDAD,
} from '../components/terminos-condiciones'

export default function TerminosCondiciones() {
  const ids = useMemo(
    () => [...TERMINOS, ...PRIVACIDAD].map((s) => s.id),
    []
  )
  const activeId = useActiveSection(ids, TERMINOS[0].id)

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

      <HeroTerminos />

      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
            <Sidebar activeId={activeId} />

            <div className="min-w-0">
              <div className="mb-10 max-w-2xl">
                <SectionEyebrow>Términos y Condiciones</SectionEyebrow>
                <SectionTitle>Condiciones de uso del sitio</SectionTitle>
              </div>

              <div className="space-y-5">
                {TERMINOS.map((s, i) => (
                  <Seccion key={s.id} item={s} index={i} />
                ))}
              </div>

              <div className="mt-24 mb-10 max-w-2xl">
                <SectionEyebrow>Protección de Datos</SectionEyebrow>
                <SectionTitle>
                  Tratamiento responsable de tu{' '}
                  <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
                    información
                  </em>
                </SectionTitle>
              </div>

              <div className="space-y-5">
                {PRIVACIDAD.map((s, i) => (
                  <Seccion key={s.id} item={s} index={i} />
                ))}
              </div>

              <div className="mt-16">
                <MisionCTA
                  image={ctaImg}
                  imageAlt="Protección de datos Detecta Clínica"
                  eyebrow="¿Dudas o consultas?"
                  titlePre="Escríbenos para ejercer"
                  titleAccent="tus derechos sobre tus datos."
                  paragraph="Nuestro equipo te responderá en un plazo razonable y atenderá cualquier solicitud relacionada con el tratamiento de tu información."
                  ctaLabel="IR A CONTACTO"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </ThemeProvider>
  )
}
