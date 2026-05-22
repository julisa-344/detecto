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
  radioIntervImages,
  sintomas,
  condiciones,
  servicios,
  stripServicios,
  faqs,
  fortalezas,
} from '../components/radiologia-intervencionista/data'

export default function RadiologiaIntervencionista() {
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
        eyebrow="Diagnóstico y tratamiento avanzado"
        video={radioIntervImages.heroVideo}
        titlePre="Radiología"
        titleAccent="intervencionista."
        paragraph="Tratamientos mínimamente invasivos guiados por imágenes con precisión, rapidez y menor recuperación."
      />

      <ServicesStrip items={stripServicios} />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <SpecialtyIntro
              titlePre="¿Qué es la"
              titleAccent="radiología intervencionista?"
              paragraph="Subespecialidad médica que utiliza técnicas de imagen guiada (ecografía, tomografía o rayos X) para realizar tratamientos mínimamente invasivos con menor riesgo y dolor."
              listLabel="Motivos de consulta"
              items={sintomas}
              sideImage={radioIntervImages.side}
              sideAlt="Atención en radiología intervencionista"
            />

            <ConditionsGrid
              eyebrow="CONDICIONES TRATADAS"
              titlePre="¿Qué"
              titleAccent="tratamos?"
              items={condiciones}
            />

            <MisionCTA
              image={radioIntervImages.cta}
              imageAlt="Compromiso médico Detecta"
              eyebrow=" "
              titlePre="Agenda una"
              titleAccent="evaluación intervencionista."
              paragraph="Accede a tratamientos mínimamente invasivos con Tecnología de Alta Precisión y un equipo experto."
            />

            <ServicesCard
              titlePre="Servicios y procedimientos"
              titleAccent="disponibles."
              paragraph="Procedimientos guiados por imagen para diagnósticos precisos y tratamientos efectivos sin cirugía abierta."
              service={servicios[0]}
            />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas más comunes"
              subtitle="Información clara sobre nuestros procedimientos intervencionistas."
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
