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
}) {
  return (
    <section className="relative py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between mb-8 sm:mb-10 gap-4 flex-wrap">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-500">
            Página{' '}
            <span className="text-slate-900">
              {String(page).padStart(2, '0')}
            </span>{' '}
            / {String(totalPages).padStart(2, '0')}
          </p>

          <SortDropdown value={sort} onChange={onSortChange} />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {doctors.map((doctor, i) => (
            <DoctorCard key={startIndex + i} doctor={doctor} index={i} />
          ))}
        </div>

        <Pagination
          page={page}
          totalPages={totalPages}
          onChange={onPageChange}
        />
      </div>
    </section>
  )
}
