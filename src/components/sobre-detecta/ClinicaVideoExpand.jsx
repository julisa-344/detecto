import ScrollExpandMedia from './ScrollExpandMedia'
import clinicaBg from '../../assets/clinicafondo.png'
import videoSrc from '../../assets/bg1.mp4'

export default function ClinicaVideoExpand() {
  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc={videoSrc}
      bgImageSrc={clinicaBg}
      title="Detecta Clínica"
      date="Un espacio para ti"
      scrollToExpand="Desliza para descubrir"
      textBlend
    >
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="text-3xl font-light tracking-tight text-primary-dark md:text-4xl">
          Un espacio pensado para{' '}
          <span className="italic font-medium text-primary">tu bienestar</span>
        </h3>
        <p className="mt-6 text-base font-light leading-7 text-slate-500 md:text-lg">
          Más de 8 años acompañando a nuestros pacientes con atención médica
          especializada y un equipo humano comprometido con su bienestar.
        </p>
        <p className="mt-4 text-base font-light leading-7 text-slate-500 md:text-lg">
          Espacios diseñados para que cada visita se sienta cercana, segura y
          centrada en ti.
        </p>
      </div>
    </ScrollExpandMedia>
  )
}
