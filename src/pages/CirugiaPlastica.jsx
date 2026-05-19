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
  plasticaImages,
  sintomas,
  condiciones,
  servicios,
  stripServicios,
  faqs,
  fortalezas,
} from '../components/cirugia-plastica/data'

export default function CirugiaPlastica() {
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
        eyebrow="Especialidad quirúrgica"
        video={plasticaImages.heroVideo}
        titlePre="Cirugía plástica"
        titleAccent="y reconstructiva."
        paragraph="Reconstruye, embellece y transforma con seguridad. Técnicas avanzadas con resultados naturales y trato humano."
      />

      <ServicesStrip items={stripServicios} />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <SpecialtyIntro
              titlePre="¿Qué es la"
              titleAccent="cirugía plástica?"
              paragraph="Especialidad quirúrgica enfocada en la reconstrucción, restauración o mejora estética del cuerpo humano. Combinamos técnica, arte y seguridad para resultados funcionales y armónicos."
              listLabel="Motivos de consulta"
              items={sintomas}
              sideImage={plasticaImages.side}
              sideAlt="Atención en cirugía plástica"
            />

            <ConditionsGrid
              eyebrow="CONDICIONES TRATADAS"
              titlePre="¿Qué tratamos"
              titleAccent="en cirugía plástica?"
              items={condiciones}
            />

            <MisionCTA
              image={plasticaImages.cta}
              imageAlt="Compromiso médico Detecta"
              eyebrow=" "
              titlePre="Agenda una"
              titleAccent="consulta especializada."
              paragraph="Da el primer paso con un equipo que combina técnica, arte y un trato humano para acompañarte en cada etapa."
            />

            <ServicesGrid
              titlePre="Atención integral en"
              titleAccent="cada etapa del proceso."
              paragraph="Diagnóstico, cirugía, tratamientos no quirúrgicos y acompañamiento integral con un equipo multidisciplinario."
              services={servicios}
            />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas más comunes"
              subtitle="Información clara sobre nuestra cirugía plástica y reconstructiva."
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
