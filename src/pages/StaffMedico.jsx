import { useEffect, useMemo, useState } from 'react'
import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'
import {
  CardClipDef,
  StaffBanner,
  SearchFilters,
  StaffGrid,
} from '../components/staff-medico'
import { useDoctors } from '../hooks/useDoctors'

const PAGE_SIZE = 12
const DEBOUNCE_MS = 350

export default function StaffMedico() {
  const [page, setPage] = useState(1)
  const [activeChip, setActiveChip] = useState('Todas')
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [sort, setSort] = useState('az')

  // debounce de búsqueda
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query.trim()), DEBOUNCE_MS)
    return () => clearTimeout(t)
  }, [query])

  // reset de página cuando cambia búsqueda o filtro
  useEffect(() => {
    setPage(1)
  }, [debouncedQuery, activeChip])

  // build search term combinando chip + query
  const searchTerm = useMemo(() => {
    const parts = []
    if (activeChip && activeChip !== 'Todas') parts.push(activeChip)
    if (debouncedQuery) parts.push(debouncedQuery)
    return parts.join(' ')
  }, [activeChip, debouncedQuery])

  const { doctors, totalPages, totalCount, loading } = useDoctors({
    page,
    pageSize: PAGE_SIZE,
    search: searchTerm,
  })

  // sort local de la página actual
  const sortedDoctors = useMemo(() => {
    return [...doctors].sort((a, b) =>
      sort === 'az'
        ? a.name.localeCompare(b.name, 'es')
        : b.name.localeCompare(a.name, 'es')
    )
  }, [doctors, sort])

  // chips derivados de los resultados visibles (fallback simple)
  const chips = useMemo(() => {
    const set = new Set(doctors.map((d) => d.specialty).filter(Boolean))
    return ['Todas', ...Array.from(set).sort((a, b) => a.localeCompare(b, 'es'))]
  }, [doctors])

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Lexend, sans-serif' }}>
      <HeaderV3 />
      <CardClipDef />

      <StaffBanner />

      <SearchFilters
        query={query}
        onQueryChange={setQuery}
        chips={chips}
        activeChip={activeChip}
        onChipChange={setActiveChip}
      />

      <StaffGrid
        doctors={sortedDoctors}
        page={page}
        totalPages={totalPages}
        totalCount={totalCount}
        onPageChange={setPage}
        sort={sort}
        onSortChange={setSort}
        startIndex={(page - 1) * PAGE_SIZE}
        loading={loading}
      />

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </div>
  )
}
