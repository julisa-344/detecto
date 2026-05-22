import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'
import {
  ThemeProvider,
  BLUE_THEME,
} from '../components/specialty'

import {
  InvestigacionHero,
  Pilares,
  InfoSplit,
  AreasEstudio,
  Patrocinadores,
  Publicaciones,
  CTAFinal,
  investigacionImages,
} from '../components/investigacion'

export default function Investigacion() {
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

      <InvestigacionHero />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <main className="space-y-24 lg:space-y-32">
          <Pilares />

          <InfoSplit
            eyebrow="Nuestro Centro"
            titlePre="Autorizado por el"
            titleAccent="Instituto Nacional de Salud"
            paragraphs={[
              'Detecta Clínica cuenta con un centro de investigación autorizado por el Instituto Nacional de Salud, enfocado en innovación médica y ensayos clínicos.',
              'Desde 2022, hemos desarrollado 8 estudios oncológicos con patrocinio internacional y ampliamos nuestra licencia para nuevas especialidades médicas.',
            ]}
            image={investigacionImages.centro}
            imageAlt="Centro de investigación Detecta"
          />

          <InfoSplit
            reverse
            eyebrow="Equipo & Instalaciones"
            titlePre="Equipo multidisciplinario"
            titleAccent="altamente capacitado"
            paragraphs={[
              'Contamos con un equipo multidisciplinario compuesto por médicos especialistas, coordinadores de estudio, farmacéuticos, personal de enfermería y administrativos, todos certificados en Buenas Prácticas Clínicas (BPC), Ética en la Investigación y Conducta Responsable en Investigación.',
              'Nuestras instalaciones están equipadas con Innovación Tecnológica y áreas dedicadas exclusivamente a investigación clínica que aseguran la trazabilidad y la integridad de los datos.',
            ]}
            image={investigacionImages.equipo}
            imageAlt="Equipo de investigación Detecta"
          />

          <AreasEstudio />

          <Publicaciones />

          <Patrocinadores />

          <CTAFinal />
        </main>
      </div>

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </ThemeProvider>
  )
}
