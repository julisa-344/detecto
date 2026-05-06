import { motion } from 'framer-motion'

const metrics = [
  { value: '+15', label: 'Años de experiencia' },
  { value: '+100,000', label: 'Pacientes atendidos' },
  { value: '+3,500', label: 'Cirugías Complejas Anuales' },
]

export default function MetricsV3() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-light text-primary-dark mb-3">
                {metric.value}
              </div>
              <div className="text-sm md:text-base font-light text-gray-500 tracking-wide uppercase">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
