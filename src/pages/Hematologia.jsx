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
  hematoImages,
  sintomas,
  condiciones,
  servicios,
  stripServicios,
  faqs,
  fortalezas,
} from '../components/hematologia/data'

export default function Hematologia() {
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
        video={hematoImages.heroVideo}
        titlePre="Hematología"
        titleAccent="clínica."
        paragraph="Cuidamos tu salud a través del diagnóstico y tratamiento de enfermedades de la sangre y la médula ósea."
      />

      <ServicesStrip items={stripServicios} />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <SpecialtyIntro
              titlePre="¿Qué es la"
              titleAccent="hematología?"
              paragraph="Especialidad médica que estudia, diagnostica y trata enfermedades de la sangre y la médula ósea, abarcando glóbulos rojos, blancos y plaquetas, tanto en cánceres hematológicos como en trastornos no oncológicos."
              listLabel="Motivos de consulta"
              items={sintomas}
              sideImage={hematoImages.side}
              sideAlt="Atención hematológica"
            />

            <ConditionsGrid
              eyebrow="CONDICIONES TRATADAS"
              titlePre="¿Qué tratamos"
              titleAccent="en hematología?"
              items={condiciones}
            />

            <MisionCTA
              image={hematoImages.cta}
              imageAlt="Compromiso médico Detecta"
              eyebrow=" "
              titlePre="Agenda una"
              titleAccent="evaluación hematológica."
              paragraph="Cuida tu salud sanguínea con un equipo especializado y tecnología de vanguardia."
            />

            <ServicesCard
              titlePre="Servicios y procedimientos"
              titleAccent="disponibles."
              paragraph="Atención integral con tratamientos avanzados, trasplante de médula y acceso a ensayos clínicos."
              service={servicios[0]}
            />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas más comunes"
              subtitle="Información clara sobre nuestra atención hematológica."
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
