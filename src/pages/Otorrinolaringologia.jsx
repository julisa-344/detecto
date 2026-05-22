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
  ServicesGrid,
  FAQs,
  QuickContact,
  FortalezasClinica,
} from '../components/specialty'

import {
  orlImages,
  sintomas,
  condiciones,
  servicios,
  stripServicios,
  faqs,
  fortalezas,
} from '../components/otorrinolaringologia/data'

export default function Otorrinolaringologia() {
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
        eyebrow="Especialidad ORL"
        video={orlImages.heroVideo}
        titlePre="Otorrinolaringología"
        titleAccent="clínica."
        paragraph="Salud de oído, nariz y garganta con precisión, tecnología y un trato humano que te devuelve la calidad de vida."
      />

      <ServicesStrip items={stripServicios} />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <SpecialtyIntro
              titlePre="¿Qué es la"
              titleAccent="otorrinolaringología?"
              paragraph="Especialidad médica que previene, diagnostica y trata enfermedades del oído, nariz y garganta en niños y adultos, con Innovación Tecnológica y especialistas experimentados."
              listLabel="Motivos de consulta"
              items={sintomas}
              sideImage={orlImages.side}
              sideAlt="Atención en otorrinolaringología"
            />

            <ConditionsGrid
              eyebrow="CONDICIONES TRATADAS"
              titlePre="¿Qué tratamos"
              titleAccent="en ORL?"
              items={condiciones}
            />

            <MisionCTA
              image={orlImages.cta}
              imageAlt="Compromiso médico Detecta"
              eyebrow=" "
              titlePre="Agenda una"
              titleAccent="evaluación ORL."
              paragraph="Vuelve a respirar, escuchar y vivir mejor con especialistas en oído, nariz y garganta."
            />

            <ServicesGrid
              titlePre="Atención integral para"
              titleAccent="tu salud ORL."
              paragraph="Diagnóstico, cirugía y rehabilitación con un equipo dedicado a tu bienestar."
              services={servicios}
              columns={3}
            />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas más comunes"
              subtitle="Información clara sobre nuestra atención en otorrinolaringología."
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
