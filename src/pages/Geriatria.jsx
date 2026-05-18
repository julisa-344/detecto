import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'

import bannerImg from '../assets/clinica.jpg'

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
  geriatriaImages,
  sintomas,
  condiciones,
  servicios,
  stripServicios,
  faqs,
  fortalezas,
} from '../components/geriatria/data'

export default function Geriatria() {
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
        video={geriatriaImages.heroVideo}
        titlePre="Geriatría"
        titleAccent="integral."
        paragraph="Atención especializada para la tercera edad que cuida el bienestar físico, mental y social."
      />

      <ServicesStrip items={stripServicios} />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <SpecialtyIntro
              titlePre="¿Qué trata la"
              titleAccent="geriatría?"
              paragraph="Estudio, diagnóstico, tratamiento y prevención de enfermedades en personas mayores, enfocada en mantener la funcionalidad, autonomía y calidad de vida."
              items={sintomas}
              sideImage={geriatriaImages.side}
              sideAlt="Atención geriátrica integral"
            />

            <ConditionsGrid items={condiciones} />

            <MisionCTA
              image={bannerImg}
              imageAlt="Compromiso médico Detecta"
              eyebrow=" "
              titlePre="Agenda una"
              titleAccent="evaluación geriátrica."
              paragraph="Atención cercana y personalizada para cuidar la salud y autonomía de los adultos mayores."
            />

            <ServicesCard
              titlePre="Servicios y procedimientos"
              titleAccent="disponibles."
              paragraph="Atención multidisciplinaria pensada para cuidar tu autonomía y calidad de vida."
              service={servicios[0]}
            />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas más comunes"
              subtitle="Información clara sobre geriatría y atención del adulto mayor."
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
