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
  cabezaCuelloImages,
  sintomas,
  tiposCancer,
  servicios,
  stripServicios,
  faqs,
  fortalezas,
} from '../components/oncologia-cabeza-cuello/data'

export default function OncologiaCabezaCuello() {
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
        video={cabezaCuelloImages.heroVideo}
        titlePre="Cirugía oncológica"
        titleAccent="de cabeza y cuello."
        paragraph="Tratamientos precisos con cuidado humano, preservando tu funcionalidad y calidad de vida."
      />

      <ServicesStrip items={stripServicios} />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <SpecialtyIntro
              titlePre="¿Qué es la cirugía oncológica"
              titleAccent="de cabeza y cuello?"
              paragraph="Subespecialidad dedicada al diagnóstico y tratamiento quirúrgico de tumores en cavidad oral, glándulas salivales, laringe, faringe, senos paranasales, cara y cuello."
              items={sintomas}
              sideImage={cabezaCuelloImages.side}
              sideAlt="Especialistas en cabeza y cuello"
              reverse
            />

            <ConditionsGrid
              eyebrow="PATOLOGÍAS TRATADAS"
              titlePre="Tipos de cáncer"
              titleAccent="que tratamos."
              items={tiposCancer}
            />

            <MisionCTA
              image={bannerImg}
              imageAlt="Compromiso oncológico Detecta"
              eyebrow=" "
              titlePre="Agenda una"
              titleAccent="evaluación oncológica."
              paragraph="Conoce tus opciones de tratamiento quirúrgico con especialistas en cabeza y cuello y recibe una orientación clara para tu caso."
            />

            <ServicesGrid
              titlePre="Atención integral en"
              titleAccent="cada etapa del tratamiento."
              paragraph="Diagnóstico, cirugía, terapias complementarias y rehabilitación con un equipo multidisciplinario enfocado en tu recuperación."
              services={servicios}
            />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas más comunes"
              subtitle="Información clara sobre la cirugía oncológica de cabeza y cuello."
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
