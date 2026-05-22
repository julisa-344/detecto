import { TOC } from './data'

export default function Sidebar({ activeId }) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto space-y-7 rounded-3xl border border-[rgb(var(--brand-med)/0.2)] bg-white/80 p-6 backdrop-blur-xl shadow-[0_20px_50px_-20px_rgb(var(--brand-med)/0.18)]">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[rgb(var(--brand-base))]">
            Índice
          </p>
          <p className="mt-2 text-[13px] font-light leading-relaxed text-slate-500">
            Navega entre las secciones del documento.
          </p>
        </div>

        <div className="space-y-6">
          {TOC.map((group) => {
            const Icon = group.icon
            return (
              <div key={group.group}>
                <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgb(var(--brand-dark))]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))]">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {group.group}
                </div>
                <ul className="space-y-0.5 border-l border-[rgb(var(--brand-med)/0.2)] pl-3">
                  {group.items.map((it) => {
                    const isActive = activeId === it.id
                    return (
                      <li key={it.id}>
                        <a
                          href={`#${it.id}`}
                          className={`flex items-baseline gap-3 rounded-md py-1.5 pr-2 pl-2 text-[13px] font-light transition-all ${
                            isActive
                              ? 'bg-(--brand-bg-ultra) text-[rgb(var(--brand-dark))] font-medium'
                              : 'text-slate-500 hover:text-[rgb(var(--brand-dark))]'
                          }`}
                        >
                          <span
                            className={`font-mono text-[10px] ${
                              isActive
                                ? 'text-[rgb(var(--brand-base))]'
                                : 'text-slate-400'
                            }`}
                          >
                            {it.num}
                          </span>
                          <span className="leading-snug">{it.title}</span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
