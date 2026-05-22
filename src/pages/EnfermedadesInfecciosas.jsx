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
  infeccionesImages,
  sintomas,
  condiciones,
  servicios,
  stripServicios,
  faqs,
  fortalezas,
} from '../components/enfermedades-infecciosas/data'

export default function EnfermedadesInfecciosas() {
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
        video={infeccionesImages.heroVideo}
        titlePre="Enfermedades infecciosas"
        titleAccent="y tropicales."
        paragraph="Atención especializada para tu salud inmunológica con Innovación Tecnológica y protocolos actualizados."
      />

      <ServicesStrip items={stripServicios} />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <SpecialtyIntro
              titlePre="¿Qué abarca esta"
              titleAccent="especialidad?"
              paragraph="Estudio, diagnóstico y tratamiento de infecciones por bacterias, virus, hongos y parásitos, incluyendo enfermedades comunes, emergentes y tropicales."
              items={sintomas}
              sideImage={infeccionesImages.side}
              sideAlt="Atención en enfermedades infecciosas"
            />

            <ConditionsGrid items={condiciones} />

            <MisionCTA
              image={infeccionesImages.cta}
              imageAlt="Compromiso médico Detecta"
              eyebrow=" "
              titlePre="Agenda una"
              titleAccent="evaluación infectológica."
              paragraph="Atención cercana con especialistas en enfermedades infecciosas y tropicales para cuidar tu salud."
            />

            <ServicesCard
              titlePre="Servicios y procedimientos"
              titleAccent="disponibles."
              paragraph="Equipo especializado y protocolos actualizados para el diagnóstico y manejo integral de tu salud infecciosa."
              service={servicios[0]}
            />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas más comunes"
              subtitle="Información clara sobre enfermedades infecciosas y tropicales."
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
