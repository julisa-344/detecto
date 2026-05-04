import { motion } from 'framer-motion'

const metrics = [
  { value: '$250M+', label: 'En tecnología médica' },
  { value: '25,000+', label: 'Pacientes evaluados' },
  { value: '98%', label: 'Precisión diagnóstica' },
  { value: '120+', label: 'Especialistas médicos' },
]

export default function MetricsBarV2() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center py-8 px-6"
            >
              <span className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight tabular-nums">
                {metric.value}
              </span>
              <span className="mt-1.5 text-xs font-light text-gray-400 tracking-wide uppercase">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
