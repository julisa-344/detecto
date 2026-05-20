import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, UserRound } from 'lucide-react'
import { CARD_CLIP_ID } from './CardClipDef'
import { getFileUrl } from '../../lib/images'

const CLIP_STYLE = {
  clipPath: `url(#${CARD_CLIP_ID})`,
  WebkitClipPath: `url(#${CARD_CLIP_ID})`,
}

export default function DoctorCard({ doctor, index, stagger = 0.05 }) {
  const imageUrl = getFileUrl(doctor.image)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * stagger, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/v4/staff-medico/${doctor.id}`}
        aria-label={`Ver perfil de ${doctor.name}`}
        className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark/40 focus-visible:ring-offset-2 rounded-3xl"
      >
        <article className="relative cursor-pointer">
          <div className="relative aspect-[616/868] w-full">
            <div className="absolute inset-0 overflow-hidden bg-[#DCF1F8]" style={CLIP_STYLE}>
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={doctor.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-primary-light/30 to-primary/20">
                  <UserRound className="h-24 w-24 text-white/70" strokeWidth={1.2} />
                </div>
              )}

              <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-slate-900/35 backdrop-blur-md px-3 py-1.5 text-[9px] font-semibold tracking-[0.18em] uppercase text-white shadow-sm">
                {doctor.specialty}
              </span>
            </div>

            <span
              aria-hidden="true"
              className="absolute bottom-[2%] right-[2%] flex h-[11%] w-[16%] items-center justify-center rounded-full bg-slate-900 text-white transition-all duration-300 group-hover:bg-primary-dark"
            >
              <ArrowUpRight className="h-4 w-4 lg:h-5 lg:w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>

          <div className="mt-5 px-1">
            <h3 className="text-base lg:text-lg font-normal text-slate-900 leading-tight tracking-tight group-hover:text-primary-dark transition-colors">
              {doctor.name}
            </h3>
            <p className="mt-1.5 text-[11px] font-medium tracking-[0.08em] uppercase text-slate-500">
              {doctor.careType}
            </p>
          </div>
        </article>
      </Link>
    </motion.div>
  )
}
