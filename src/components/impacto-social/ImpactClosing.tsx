import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/animations'
import { BRAND } from '../../lib/brand'


export default function ImpactClosing() {
  return (
    <section className="relative py-20 text-center lg:py-28" style={{ background: '#F7FCFE' }}>
      <div className="mx-auto max-w-2xl px-6">
        <motion.p
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-5 text-[10px] font-semibold uppercase tracking-[0.4em] md:text-[11px]"
          style={{ color: BRAND.med }}
        >
          Esto no es solo un problema de salud
        </motion.p>
        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl font-light leading-[1.1] tracking-tight md:text-5xl"
          style={{ color: BRAND.dark }}
        >
          Cuando una mujer muere por una enfermedad prevenible,{' '}
          <span className="font-normal text-slate-900">también se rompe un hogar.</span>
        </motion.h2>
      </div>
    </section>
  )
}
