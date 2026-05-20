import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

import bannerImg from '../assets/bannerOncologia.jpg'

import {
  ThemeProvider,
  BLUE_THEME,
  MisionCTA,
  ServicesStrip,
  SpecialtyHero,
  SpecialtyIntro,
  ConditionsGrid,
  ServicesCard,
  SectionEyebrow,
  FAQs,
  QuickContact,
  FortalezasClinica,
} from '../components/specialty'

import {
  pediatricaImages,
  sintomas,
  tiposCancer,
  servicios,
  stripServicios,
  datosClave,
  faqs,
  fortalezas,
} from '../components/oncologia-pediatrica/data'

function DatosClave() {
  return (
    <section className="relative">
      <div className="mb-10 max-w-2xl">
        <SectionEyebrow>Datos que debes conocer</SectionEyebrow>
        <h2 className="mt-4 text-3xl font-extralight leading-[1.1] tracking-tight text-[rgb(var(--brand-dark))] lg:text-4xl">
          La detección temprana{' '}
          <span className="italic font-medium text-[rgb(var(--brand-base))]">
            salva vidas.
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {datosClave.map((dato, i) => (
          <motion.div
            key={dato}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start gap-3 rounded-2xl bg-white p-5 ring-1 ring-slate-100"
          >
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))]">
              <Sparkles className="h-4 w-4" />
            </span>
            <p className="text-[13.5px] font-light leading-relaxed text-slate-600">
              {dato}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default function OncologiaPediatrica() {
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
        video={pediatricaImages.heroVideo}
        titlePre="Oncología"
        titleAccent="pediátrica."
        paragraph="Tratamos el cáncer infantil con ciencia, compasión y esperanza, acompañando a niños, adolescentes y sus familias."
      />

      <ServicesStrip items={stripServicios} />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 space-y-20 lg:space-y-24">
            <SpecialtyIntro
              titlePre="¿Qué es la"
              titleAccent="oncología pediátrica?"
              paragraph="Diagnostica y trata el cáncer en niños y adolescentes con enfoques específicos adaptados a cada etapa del desarrollo."
              listLabel="Señales de alerta"
              items={sintomas}
              sideImage={pediatricaImages.side}
              sideAlt="Atención oncológica pediátrica"
            />

            <ConditionsGrid
              eyebrow="PATOLOGÍAS INFANTILES"
              titlePre="Tipos de cáncer"
              titleAccent="que tratamos."
              items={tiposCancer}
            />

            <MisionCTA
              image={pediatricaImages.cta}
              imageAlt="Compromiso oncológico Detecta"
              eyebrow=" "
              titlePre="Agenda una"
              titleAccent="evaluación pediátrica."
              paragraph="Atención oncológica especializada para niños y adolescentes con acompañamiento integral para toda la familia."
            />

            <ServicesCard
              eyebrow="Cómo te acompañamos"
              titlePre="Modalidades"
              titleAccent="de atención."
              paragraph="Tratamientos integrales adaptados a cada etapa del desarrollo y a las necesidades del paciente y su familia."
              label="/ Tratamientos"
              service={servicios[0]}
            />

            <DatosClave />

            <FAQs
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas más comunes"
              subtitle="Información clara sobre oncología pediátrica."
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
