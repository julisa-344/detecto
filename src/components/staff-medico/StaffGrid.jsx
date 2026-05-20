import Pagination from '../ui/Pagination'
import DoctorCard from './DoctorCard'
import SortDropdown from './SortDropdown'

export default function StaffGrid({
  doctors,
  page,
  totalPages,
  onPageChange,
  sort,
  onSortChange,
  startIndex = 0,
  loading = false,
  totalCount,
}) {
  return (
    <section className="relative py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between mb-8 sm:mb-10 gap-4 flex-wrap">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-500">
            Página <span className="text-slate-900">{String(page).padStart(2, '0')}</span> /{' '}
            {String(totalPages).padStart(2, '0')}
            {typeof totalCount === 'number' && (
              <span className="ml-3 text-slate-400">· {totalCount} doctores</span>
            )}
          </p>

          <SortDropdown value={sort} onChange={onSortChange} />
        </div>

        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-616/868 w-full rounded-3xl bg-slate-100 animate-pulse"
              />
            ))}
          </div>
        ) : doctors.length === 0 ? (
          <div className="py-20 text-center text-slate-500">
            <p className="text-sm font-light">
              No encontramos doctores con esos filtros.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {doctors.map((doctor, i) => (
              <DoctorCard key={doctor.id ?? startIndex + i} doctor={doctor} index={i} />
            ))}
          </div>
        )}

        <Pagination page={page} totalPages={totalPages} onChange={onPageChange} />
      </div>
    </section>
  )
}
