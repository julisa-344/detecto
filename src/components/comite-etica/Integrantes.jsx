import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { SectionEyebrow, SectionTitle } from '../specialty'
import { integrantes } from './data'

const ROLE_TONE = {
  Presidencia: 'bg-[rgb(var(--brand-base))] text-white',
  'Secretaría Técnica': 'bg-[rgb(var(--brand-dark))] text-white',
}

function MemberCard({ m }) {
  const tone = ROLE_TONE[m.role] ?? 'bg-white text-[rgb(var(--brand-dark))]'
  const isAccent = !!ROLE_TONE[m.role]

  return (
    <div
      className={`flex aspect-3/4 w-full select-none flex-col justify-between rounded-[28px] border p-6 shadow-[0_20px_50px_-25px_rgb(15,23,42/0.35)] ${
        isAccent ? 'border-transparent' : 'border-slate-100'
      } ${tone}`}
    >
      <div className="flex items-start justify-between">
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-semibold tracking-wide ${
            isAccent
              ? 'bg-white/15 text-white backdrop-blur'
              : 'bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))]'
          }`}
        >
          {m.initials}
        </span>
        <span
          className={`font-mono text-[10px] font-semibold uppercase tracking-[0.22em] ${
            isAccent ? 'text-white/70' : 'text-slate-300'
          }`}
        >
          CIEI
        </span>
      </div>

      <div>
        <p
          className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${
            isAccent ? 'text-white/70' : 'text-[rgb(var(--brand-base))]'
          }`}
        >
          {m.role}
        </p>
        <h3
          className={`mt-2 text-[18px] font-light leading-tight tracking-tight ${
            isAccent ? 'text-white' : 'text-[rgb(var(--brand-dark))]'
          }`}
        >
          {m.name}
        </h3>
      </div>
    </div>
  )
}

export default function Integrantes() {
  const css = `
    .integrantes-swiper { width: 100%; padding: 8px 0 64px; }
    .integrantes-swiper .swiper-slide { width: 280px; }
    .integrantes-swiper .swiper-slide > div { transition: opacity .4s; opacity: .55; }
    .integrantes-swiper .swiper-slide-active > div { opacity: 1; }
    .integrantes-swiper .swiper-slide-next > div,
    .integrantes-swiper .swiper-slide-prev > div { opacity: .85; }
    .integrantes-swiper .swiper-3d .swiper-slide-shadow-left,
    .integrantes-swiper .swiper-3d .swiper-slide-shadow-right { background: none; }
    .integrantes-swiper .swiper-pagination { bottom: 12px; }
    .integrantes-swiper .swiper-pagination-bullet { background: rgb(var(--brand-base)); opacity: .25; }
    .integrantes-swiper .swiper-pagination-bullet-active { opacity: 1; width: 22px; border-radius: 999px; }
  `

  return (
    <section className="relative">
      <style>{css}</style>

      <div className="mb-10 max-w-3xl">
        <SectionEyebrow>El equipo</SectionEyebrow>
        <SectionTitle className="mb-4">
          Integrantes del{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            comité
          </em>
        </SectionTitle>
        <p className="text-[15px] font-light leading-7 text-slate-500">
          Profesionales multidisciplinarios certificados en Buenas Prácticas
          Clínicas, Ética en la Investigación y Conducta Responsable.
        </p>
      </div>

      <div className="relative">
        <Swiper
          className="integrantes-swiper"
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          effect="coverflow"
          centeredSlides
          loop
          grabCursor
          slidesPerView="auto"
          spaceBetween={24}
          autoplay={{ delay: 1000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 120, modifier: 2.2, slideShadows: false }}
          pagination={{ clickable: true }}
          navigation={{ nextEl: '.integrantes-next', prevEl: '.integrantes-prev' }}
        >
          {integrantes.map((m) => (
            <SwiperSlide key={m.name}>
              <MemberCard m={m} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          aria-label="Anterior"
          className="integrantes-prev absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-[rgb(var(--brand-dark))] shadow-[0_10px_25px_-12px_rgb(15,23,42/0.25)] transition hover:bg-[rgb(var(--brand-base))] hover:text-white lg:-left-4"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Siguiente"
          className="integrantes-next absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-[rgb(var(--brand-dark))] shadow-[0_10px_25px_-12px_rgb(15,23,42/0.25)] transition hover:bg-[rgb(var(--brand-base))] hover:text-white lg:-right-4"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}
