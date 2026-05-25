import { useMemo } from 'react'
import { Link } from 'react-router-dom'
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
  HeroPrivacidad,
  Sidebar,
  Seccion,
  useActiveSection,
  SECCIONES,
} from '../components/privacidad'

export default function Privacidad() {
  const ids = useMemo(() => SECCIONES.map((s) => s.id), [])
  const activeId = useActiveSection(ids, SECCIONES[0].id)

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

      <HeroPrivacidad />

      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
            <Sidebar activeId={activeId} />

            <div className="min-w-0">
              <div className="mb-10 max-w-2xl">
                <SectionEyebrow>Política de Privacidad</SectionEyebrow>
                <SectionTitle>
                  Tratamiento responsable de tu{' '}
                  <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
                    información
                  </em>
                </SectionTitle>
              </div>

              <div className="space-y-5">
                {SECCIONES.map((s, i) => (
                  <Seccion key={s.id} item={s} index={i} />
                ))}
              </div>

              <div className="mt-16">
                <MisionCTA
                  image={ctaImg}
                  imageAlt="Privacidad y datos personales"
                  eyebrow="¿Consultas sobre privacidad?"
                  titlePre="Ejerce tus derechos"
                  titleAccent="sobre tus datos personales."
                  paragraph="Escríbenos para acceder, rectificar, cancelar u oponerte al tratamiento de tu información. Atendemos tu solicitud conforme a la Ley N.° 29733."
                  ctaLabel="ESCRÍBENOS"
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
