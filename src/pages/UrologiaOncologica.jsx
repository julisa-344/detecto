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
  urologiaImages,
  sintomas,
  condiciones,
  servicios,
  stripServicios,
  faqs,
  fortalezas,
} from '../components/urologia-oncologica/data'

export default function UrologiaOncologica() {
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
        video={urologiaImages.heroVideo}
        titlePre="Urología"
        titleAccent="oncológica."
        paragraph="Tu salud en manos expertas. Experiencia médica y Tecnología de Alta Precisión con trato humano en cada etapa."
      />

      <ServicesStrip items={stripServicios} />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <SpecialtyIntro
              titlePre="¿Qué es la"
              titleAccent="urología oncológica?"
              paragraph="Diagnostica y trata los cánceres de próstata, vejiga, riñones, testículos, pene, uréteres y glándulas relacionadas con tecnología menos invasiva y mejores resultados."
              listLabel="Señales de alerta"
              items={sintomas}
              sideImage={urologiaImages.side}
              sideAlt="Atención urológica oncológica"
            />

            <ConditionsGrid items={condiciones} />

            <MisionCTA
              image={urologiaImages.cta}
              imageAlt="Compromiso oncológico Detecta"
              eyebrow=" "
              titlePre="Agenda una"
              titleAccent="evaluación urológica."
              paragraph="Diagnóstico oportuno y atención cercana con especialistas en urología oncológica."
            />

            <ServicesCard
              titlePre="Servicios y procedimientos"
              titleAccent="disponibles."
              paragraph="Tecnología de Alta Precisión y un equipo especializado en cada etapa del tratamiento urológico oncológico."
              service={servicios[0]}
            />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas más comunes"
              subtitle="Información clara sobre urología oncológica."
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
