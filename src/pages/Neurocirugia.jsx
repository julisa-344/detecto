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
  neuroImages,
  sintomas,
  condiciones,
  servicios,
  stripServicios,
  faqs,
  fortalezas,
} from '../components/neurocirugia/data'

export default function Neurocirugia() {
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
        eyebrow="Especialidad neuroquirúrgica"
        video={neuroImages.heroVideo}
        titlePre="Neurocirugía"
        titleAccent="especializada."
        paragraph="Cuidado especializado del sistema nervioso con tecnología de vanguardia para cirugías complejas y funcionales."
      />

      <ServicesStrip items={stripServicios} />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <SpecialtyIntro
              titlePre="¿Qué es la"
              titleAccent="neurocirugía?"
              paragraph="Especialidad médica que diagnostica y trata enfermedades del sistema nervioso central y periférico: tumores cerebrales, columna, aneurismas y trastornos del movimiento."
              listLabel="Motivos de consulta"
              items={sintomas}
              sideImage={neuroImages.side}
              sideAlt="Atención neuroquirúrgica"
            />

            <ConditionsGrid
              eyebrow="CONDICIONES TRATADAS"
              titlePre="¿Qué"
              titleAccent="tratamos?"
              items={condiciones}
            />

            <MisionCTA
              image={neuroImages.cta}
              imageAlt="Compromiso médico Detecta"
              eyebrow=" "
              titlePre="Agenda una"
              titleAccent="evaluación neuroquirúrgica."
              paragraph="Atención cercana con neurocirujanos especializados y tecnología de vanguardia para tu salud neurológica."
            />

            <ServicesGrid
              titlePre="Atención integral para"
              titleAccent="tu salud neurológica."
              paragraph="Diagnóstico, cirugía mínimamente invasiva y rehabilitación con un equipo dedicado a tu recuperación."
              services={servicios}
              columns={3}
            />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas más comunes"
              subtitle="Información clara sobre nuestra atención neuroquirúrgica."
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
