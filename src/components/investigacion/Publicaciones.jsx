import { motion } from 'framer-motion'
import { ArrowUpRight, FileText } from 'lucide-react'
import { SectionEyebrow, SectionTitle } from '../specialty'
import portada1 from '../../assets/portada1.webp'
import portada2 from '../../assets/portada2.webp'
import portada3 from '../../assets/portada3.webp'
import portada4 from '../../assets/portada4.webp'
import portada5 from '../../assets/portada5.webp'
import gaston from '../../assets/gaston.jpg'

const publications = [
  {
    short: 'WJSO',
    title: 'World Journal of Surgical Oncology',
    tag: 'Research / Open access',
    authors:
      'G. Mendoza, N. Muñoz, J. Aguilar, S. Mendoza, R. Hidalgo, D. Díaz-Llontop, R. Castillo, J. Trejo, E. Bedoya & L. Taxa.',
    lead: { name: 'Gastón Mendoza De Lama', role: 'Investigador principal', photo: gaston },
    link: 'https://link.springer.com/article/10.1186/s12957-025-04183-5',
    image: portada1,
  },
  {
    short: 'Tumori',
    title: 'Tumori Journal',
    tag: 'Abstract Book / Supplement',
    presentedAt: '18th BGIICC 2026',
    authors: 'Gastón Wilmer Mendoza De Lama',
    lead: { name: 'Gastón Mendoza De Lama', role: 'Investigador principal', photo: gaston },
    link: 'https://journals.sagepub.com/toc/tmja/112/1_suppl',
    image: portada2,
  },
  {
    short: 'EJC',
    title: 'European Journal of Cancer',
    tag: 'Conference Supplement',
    presentedAt: '15th European Breast Cancer Conference (EBCC-15)',
    authors: 'Gastón Wilmer Mendoza De Lama',
    lead: { name: 'Gastón Mendoza De Lama', role: 'Investigador principal', photo: gaston },
    link: 'https://www.ejcancer.com/issue/S0959-8049(26)X2004-4',
    image: portada3,
  },
  {
    short: 'R&O',
    title: 'Radiology and Oncology',
    tag: 'Article / Ahead of Print',
    authors:
      'G. Mendoza, N. Muñoz, J. Aguilar, J. Ayón, D. Díaz-Llontop, S. Mendoza, C. Quiñones, R. Castillo & L. Taxa.',
    lead: { name: 'Gastón Mendoza De Lama', role: 'Investigador principal', photo: gaston },
    link: 'https://reference-global.com/article/10.2478/raon-2026-0018?tab=article',
    image: portada4,
  },
  {
    short: 'PPCR',
    title: 'Clinical Research',
    tag: 'Journal Article',
    authors: 'Gastón Wilmer Mendoza De Lama.',
    lead: { name: 'Gastón Mendoza De Lama', role: 'Investigador principal', photo: gaston },
    link: 'https://journal.ppcr.org/index.php/ppcrjournal/article/view/433',
    image: portada5,
  },
]

const BLUR_MASK =
  'linear-gradient(to top, black 0%, black 55%, rgba(0,0,0,0.9) 65%, rgba(0,0,0,0.6) 78%, rgba(0,0,0,0.3) 88%, transparent 100%)'

function PubCard({ pub, index }) {
  return (
    <motion.a
      href={pub.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group relative block aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl border-[3px] border-white shadow-[0_6px_20px_rgba(0,0,0,0.16)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.24)]"
    >
      <img
        src={pub.image}
        alt={pub.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Chip arriba */}
      <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.22em] text-[rgb(var(--brand-dark))] shadow-sm backdrop-blur">
        <FileText className="h-2.5 w-2.5" />
        {pub.short}
      </span>

      {/* Progressive blur abajo */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%]"
        style={{
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          mask: BLUR_MASK,
          WebkitMask: BLUR_MASK,
        }}
      />

      {/* Gradiente oscuro */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-linear-to-t from-slate-950/85 via-slate-950/40 to-transparent" />

      {/* Contenido */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[rgb(var(--brand-base))]">
          {pub.tag}
        </p>
        <h3 className="mt-1 line-clamp-2 text-[13px] font-medium leading-tight text-white">
          {pub.title}
        </h3>

        <p className="mt-1 line-clamp-1 text-[10px] font-light text-white/70">
          {pub.authors}
        </p>

        <div className="mt-3 flex items-end justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <img
              src={pub.lead.photo}
              alt={pub.lead.name}
              loading="lazy"
              className="h-6 w-6 shrink-0 rounded-full object-cover ring-1 ring-white/60"
            />
            <p className="truncate text-[10px] font-medium text-white">
              {pub.lead.name.split(' ').slice(0, 3).join(' ')}
            </p>
          </div>

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[rgb(var(--brand-dark))] shadow-lg ring-1 ring-black/5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </motion.a>
  )
}

export default function Publicaciones() {
  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Publicaciones</SectionEyebrow>
        <SectionTitle className="mb-3">
          Innovación que marca un{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            hito en el Perú
          </em>
        </SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
          Nuestros estudios forman parte de publicaciones internacionales
          orientadas a mejorar la atención del paciente oncológico.
        </p>
      </div>

      {/* Cuadrícula 3 col → fila 1: 3 cards / fila 2: 2 cards */}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {publications.map((pub, i) => (
          <PubCard key={pub.short} pub={pub} index={i} />
        ))}
      </div>
    </section>
  )
}
