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
  ginecoImages,
  sintomas,
  condiciones,
  servicios,
  stripServicios,
  faqs,
  fortalezas,
} from '../components/ginecologia-oncologica/data'

export default function GinecologiaOncologica() {
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
        video={ginecoImages.heroVideo}
        titlePre="Ginecología"
        titleAccent="oncológica."
        paragraph="Cuidado experto para la salud femenina con tecnología avanzada y trato personalizado."
      />

      <ServicesStrip items={stripServicios} />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <SpecialtyIntro
              titlePre="¿Qué es la"
              titleAccent="ginecología oncológica?"
              paragraph="Diagnostica, trata y da seguimiento a los cánceres del sistema reproductor femenino: ovarios, útero, trompas, cuello uterino, vulva y vagina, con un enfoque integral."
              listLabel="Señales de alerta"
              items={sintomas}
              sideImage={ginecoImages.side}
              sideAlt="Atención ginecológica oncológica"
            />

            <ConditionsGrid items={condiciones} />

            <MisionCTA
              image={ginecoImages.cta}
              imageAlt="Compromiso oncológico Detecta"
              eyebrow=" "
              titlePre="Agenda una"
              titleAccent="evaluación ginecológica."
              paragraph="Diagnóstico oportuno y atención cercana con especialistas en ginecología oncológica."
            />

            <ServicesGrid
              titlePre="Atención integral en"
              titleAccent="cada etapa."
              paragraph="Diagnóstico, cirugía, terapias complementarias y acompañamiento con un equipo dedicado a tu salud."
              services={servicios}
            />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas más comunes"
              subtitle="Información clara sobre ginecología oncológica."
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
