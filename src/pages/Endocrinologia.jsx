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
  endocrinoImages,
  sintomas,
  condiciones,
  servicios,
  stripServicios,
  faqs,
  fortalezas,
} from '../components/endocrinologia/data'

export default function Endocrinologia() {
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
        video={endocrinoImages.heroVideo}
        titlePre="Endocrinología"
        titleAccent="clínica."
        paragraph="Atención integral para tu salud hormonal y metabólica, con un equipo especializado y trato cercano."
      />

      <ServicesStrip items={stripServicios} />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <SpecialtyIntro
              titlePre="¿Qué es la"
              titleAccent="endocrinología?"
              paragraph="Especialidad médica dedicada al estudio y tratamiento de las glándulas endocrinas y sus hormonas: tiroides, suprarrenales, hipófisis, páncreas y gónadas, así como los trastornos del metabolismo y el crecimiento."
              listLabel="Motivos de consulta"
              items={sintomas}
              sideImage={endocrinoImages.side}
              sideAlt="Atención endocrinológica"
            />

            <ConditionsGrid
              eyebrow="CONDICIONES TRATADAS"
              titlePre="¿Qué"
              titleAccent="tratamos?"
              items={condiciones}
            />

            <MisionCTA
              image={endocrinoImages.cta}
              imageAlt="Compromiso médico Detecta"
              eyebrow=" "
              titlePre="Agenda una"
              titleAccent="evaluación endocrinológica."
              paragraph="Cuida tu salud hormonal y metabólica con un equipo especializado y un plan adaptado a ti."
            />

            <ServicesCard
              titlePre="Servicios y procedimientos"
              titleAccent="disponibles."
              paragraph="Atención integral en endocrinología con Innovación Tecnológica y tratamientos personalizados."
              service={servicios[0]}
            />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas más comunes"
              subtitle="Información clara sobre nuestra atención endocrinológica."
              faqs={faqs}
            />
          </main>

          <aside className="hidden self-start lg:sticky lg:top-24 lg:block">
            <QuickContact />
          </aside>
        </div>
      </div>

      {/* <FortalezasClinica words={fortalezas} /> */}

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </ThemeProvider>
  )
}
