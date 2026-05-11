import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'

import heroVideo from '../assets/preventivoRosaBanner.mp4'
import quienesImg from '../assets/preventivoRosa.gif'
import bannerImg from '../assets/preventivoRosa1.gif'
import detecto from '../assets/DetectoPreventivoRosa.png'

import {
  ThemeProvider,
  PINK_THEME,
  Hero,
  ServicesStrip,
  EspecialidadIntro,
  BeneficiosGrid,
  MisionCTA,
  FAQs,
  QuickContact,
  FortalezasClinica,
} from '../components/specialty'

import {
  PlanesPreventivo,
  ChecklistPreparacion,
  servicios,
  beneficios,
  perfilPaciente,
  faqs,
  fortalezas,
} from '../components/preventivo-rosa'

export default function PreventivoRosa() {
  return (
    <ThemeProvider
      theme={PINK_THEME}
      className="min-h-screen"
      style={{
        fontFamily: 'Lexend, sans-serif',
        background: PINK_THEME.pageGradient,
      }}
    >
      <HeaderV3 />

      <Hero
        video={heroVideo}
        titlePre="Preventivo Rosa:"
        titleAccent="despistaje con enfoque integral."
        subtitle="Evaluación preventiva para mama, cuello uterino, ovarios, vagina y vulva. Detectar a tiempo puede cambiarlo todo."
      />

      <ServicesStrip items={servicios} />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">

          <main className="min-w-0 space-y-20 lg:space-y-24">
            <EspecialidadIntro
              eyebrow="Despistaje integral"
              titlePre="¿Por qué hacer"
              titleAccent="tu preventivo?"
              paragraph="Una evaluación completa, clara y enfocada en prevención. Diseñada para que puedas realizarte tus pruebas en una sola visita."
              image={quienesImg}
              imageAlt="Despistaje preventivo rosa"
              listIntro="Esta evaluación es para ti si:"
              items={perfilPaciente}
            />

            <BeneficiosGrid
              eyebrow="One Day Experience"
              titlePre="Todo en"
              titleAccent="una sola visita"
              paragraph="Tres pilares que hacen del Preventivo Rosa una experiencia diferente."
              items={beneficios}
            />

            <PlanesPreventivo />

            <MisionCTA
              image={bannerImg}
              imageAlt="Preventivo Rosa"
              eyebrow="Atención especializada"
              titlePre="Tu prevención,"
              titleAccent="nuestra prioridad."
              paragraph="Resultados confiables, lectura experta y acompañamiento profesional en cada paso. Agenda hoy tu despistaje en nuestra sede de Surquillo."
            />

            <ChecklistPreparacion />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas"
              subtitle="Información clara para que llegues a tu despistaje con tranquilidad."
              faqs={faqs}
            />
          </main>

          <aside className="hidden self-start lg:sticky lg:top-24 lg:block">
            <QuickContact
              title="¿Tienes dudas?"
              titleAccent="Estamos aquí."
            />
          </aside>

        </div>
      </div>

      <FortalezasClinica image={detecto} words={fortalezas} />

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </ThemeProvider>
  )
}
