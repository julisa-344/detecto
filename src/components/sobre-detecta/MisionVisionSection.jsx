import { motion } from 'framer-motion'
import { MISION, VISION } from './data'

const BASE = import.meta.env.VITE_BASE_IMAGE_URL
const MISION_IMG = `${BASE}about/mison.jpg`
const VISION_IMG = `${BASE}about/vision.jpg`

function Block({ item, image, num, reverse = false, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      <div className={`relative overflow-hidden rounded-[28px] aspect-4/3 bg-slate-100 ${reverse ? 'lg:order-2' : ''}`}>
        <img
          src={image}
          alt={item.eyebrow}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className={reverse ? 'lg:order-1' : ''}>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[12px] font-medium tracking-[0.28em] text-primary-medium">
            {num}
          </span>
          <span className="block h-px w-12 bg-primary-light" />
          <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-primary-medium">
            {item.eyebrow}
          </p>
        </div>

        <h3 className="mt-6 text-3xl font-extralight leading-[1.1] tracking-tight text-primary-dark lg:text-5xl">
          {item.titlePre}{' '}
          <span className="font-medium text-primary">
            {item.titleAccent}
          </span>
        </h3>

        <p className="mt-6 text-[15px] font-light text-slate-500 leading-[1.75] max-w-lg">
          {item.body}
        </p>
      </div>
    </motion.article>
  )
}

export default function MisionVisionSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="pb-16 max-w-3xl mx-auto text-center"
        >
          <p className="mb-4 text-[10px] font-semibold tracking-[0.4em] uppercase text-primary-medium">
            Razón de ser
          </p>
          <h2 className="text-5xl font-light text-primary-dark lg:text-7xl">
            Misión <span className="text-primary">&</span>{' '}
            <span className="text-5xl font-light text-primary-dark lg:text-7xl">Visión</span>
          </h2>
          <p className="mt-8 text-[15px] font-light text-slate-500 leading-[1.75] max-w-xl mx-auto">
             Nuestro propósito y horizonte están guiados por la excelencia, la empatía y la responsabilidad.
          </p>
        </motion.div>

        <div className="flex flex-col gap-20 lg:gap-28">
          <Block item={MISION} image={MISION_IMG} num="01" />
          <Block item={VISION} image={VISION_IMG} num="02" reverse delay={0.1} />
        </div>
      </div>
    </section>
  )
}
