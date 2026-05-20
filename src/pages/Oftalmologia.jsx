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
  oftalmoImages,
  sintomas,
  condiciones,
  servicios,
  stripServicios,
  faqs,
  fortalezas,
} from '../components/oftalmologia/data'

export default function Oftalmologia() {
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
        eyebrow="Especialidad oftalmológica"
        video={oftalmoImages.heroVideo}
        titlePre="Oftalmología"
        titleAccent="clínica."
        paragraph="Cuidamos tu visión con precisión, tecnología y atención personalizada para niños, adultos y adultos mayores."
      />

      <ServicesStrip items={stripServicios} />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <SpecialtyIntro
              titlePre="¿Qué es la"
              titleAccent="oftalmología?"
              paragraph="Especialidad médica dedicada a la prevención, diagnóstico y tratamiento de enfermedades del ojo y la visión, desde problemas comunes hasta patologías complejas."
              listLabel="Motivos de consulta"
              items={sintomas}
              sideImage={oftalmoImages.side}
              sideAlt="Atención oftalmológica"
            />

            <ConditionsGrid
              eyebrow="CONDICIONES TRATADAS"
              titlePre="¿Qué"
              titleAccent="tratamos?"
              items={condiciones}
            />

            <MisionCTA
              image={oftalmoImages.cta}
              imageAlt="Compromiso oftalmológico Detecta"
              eyebrow=" "
              titlePre="Agenda un"
              titleAccent="examen visual."
              paragraph="Cuida tu visión con un equipo experto y tecnología avanzada para preservar tu salud ocular."
            />

            <ServicesCard
              titlePre="Servicios y"
              titleAccent="tecnología disponible."
              paragraph="Atención integral para tu salud visual con procedimientos diagnósticos y cirugías especializadas."
              service={servicios[0]}
            />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas más comunes"
              subtitle="Información clara sobre nuestra atención oftalmológica."
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
