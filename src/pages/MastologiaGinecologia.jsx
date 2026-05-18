import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'

import bannerImg from '../assets/bannerOncologia.jpg'

import {
  ThemeProvider,
  BLUE_THEME,
  MisionCTA,
  ServicesStrip,
  SpecialtyHero,
  SpecialtyIntro,
  ConditionsGrid,
  ServicesGrid,
  FAQs,
  QuickContact,
  FortalezasClinica,
} from '../components/specialty'

import {
  mastoImages,
  sintomas,
  condiciones,
  servicios,
  stripServicios,
  faqs,
  fortalezas,
} from '../components/mastologia-ginecologia/data'

export default function MastologiaGinecologia() {
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
        eyebrow="Especialidad oncológica"
        video={mastoImages.heroVideo}
        titlePre="Mastología y"
        titleAccent="ginecología oncológica."
        paragraph="Cuidado especializado de la salud mamaria con tecnología avanzada y atención cercana."
      />

      <ServicesStrip items={stripServicios} />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <SpecialtyIntro
              titlePre="¿Qué es la"
              titleAccent="mastología?"
              paragraph="Especialidad médica dedicada a la prevención, diagnóstico y tratamiento de enfermedades de la mama, incluyendo el cáncer de mama, con tecnología avanzada y atención cercana."
              listLabel="Señales de alerta"
              items={sintomas}
              sideImage={mastoImages.side}
              sideAlt="Especialistas en mastología"
            />

            <ConditionsGrid items={condiciones} />

            <MisionCTA
              image={bannerImg}
              imageAlt="Compromiso oncológico Detecta"
              eyebrow=" "
              titlePre="Agenda una"
              titleAccent="evaluación mamaria."
              paragraph="Diagnóstico oportuno y atención cercana con especialistas en mastología y ginecología oncológica."
            />

            <ServicesGrid
              titlePre="Atención integral en"
              titleAccent="cada etapa."
              paragraph="Diagnóstico, cirugía y acompañamiento con tecnología de vanguardia y un equipo dedicado a tu bienestar."
              services={servicios}
              columns={3}
            />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas más comunes"
              subtitle="Información clara sobre mastología y ginecología oncológica."
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
