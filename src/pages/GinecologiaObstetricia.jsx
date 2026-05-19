import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'

import {
  ThemeProvider,
  BLUE_THEME,
  MisionCTA,
  ServicesStrip,
  SpecialtyHero,
  SpecialtyIntro,
  ConditionsGrid,
  ServicesCard,
  FAQs,
  QuickContact,
  FortalezasClinica,
} from '../components/specialty'

import {
  ginecoObsImages,
  sintomas,
  condiciones,
  servicios,
  stripServicios,
  faqs,
  fortalezas,
} from '../components/ginecologia-obstetricia/data'

export default function GinecologiaObstetricia() {
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

      <SpecialtyHero
        eyebrow="Especialidad ginecológica"
        video={ginecoObsImages.heroVideo}
        titlePre="Ginecología"
        titleAccent="y obstetricia."
        paragraph="Atención integral para tu salud reproductiva y materna en cada etapa de tu vida."
      />

      <ServicesStrip items={stripServicios} />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <SpecialtyIntro
              titlePre="¿Qué trata la"
              titleAccent="ginecología y obstetricia?"
              paragraph="La ginecología cuida la salud del sistema reproductivo femenino y la obstetricia te acompaña durante el embarazo, el parto y el postparto."
              listLabel="Motivos de consulta"
              items={sintomas}
              sideImage={ginecoObsImages.side}
              sideAlt="Atención ginecológica y obstétrica"
            />

            <ConditionsGrid
              eyebrow="CONDICIONES TRATADAS"
              titlePre="¿Qué"
              titleAccent="tratamos?"
              items={condiciones}
            />

            <MisionCTA
              image={ginecoObsImages.cta}
              imageAlt="Compromiso médico Detecta"
              eyebrow=" "
              titlePre="Agenda una"
              titleAccent="consulta ginecológica."
              paragraph="Acompáñate con un equipo dedicado a tu salud reproductiva en cada etapa de tu vida."
            />

            <ServicesCard
              titlePre="Servicios y procedimientos"
              titleAccent="disponibles."
              paragraph="Atención integral con tecnología avanzada para cada etapa de la salud femenina."
              service={servicios[0]}
            />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas más comunes"
              subtitle="Información clara sobre nuestra atención en ginecología y obstetricia."
              faqs={faqs}
            />
          </main>

          <aside className="hidden self-start lg:sticky lg:top-24 lg:block">
            <QuickContact />
          </aside>
        </div>
      </div>

      <FortalezasClinica words={fortalezas} />

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </ThemeProvider>
  )
}
