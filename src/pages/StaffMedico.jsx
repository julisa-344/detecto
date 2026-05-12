import { useState, useMemo } from 'react'
import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'
import {
  CardClipDef,
  StaffBanner,
  SearchFilters,
  StaffGrid,
} from '../components/staff-medico'
import { doctors, specialties } from '../data/staff'

const PAGE_SIZE = 12

export default function StaffMedico() {
  const [page, setPage] = useState(1)
  const [activeChip, setActiveChip] = useState('Todas')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('az')

  const sortedDoctors = useMemo(() => {
    return [...doctors].sort((a, b) =>
      sort === 'az'
        ? a.name.localeCompare(b.name, 'es')
        : b.name.localeCompare(a.name, 'es')
    )
  }, [sort])

  const totalPages = Math.max(1, Math.ceil(sortedDoctors.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)
  const start = (safePage - 1) * PAGE_SIZE
  const visible = sortedDoctors.slice(start, start + PAGE_SIZE)

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Lexend, sans-serif' }}>
      <HeaderV3 />
      <CardClipDef />

      <StaffBanner />

      <SearchFilters
        query={query}
        onQueryChange={setQuery}
        chips={specialties}
        activeChip={activeChip}
        onChipChange={setActiveChip}
      />

      <StaffGrid
        doctors={visible}
        page={safePage}
        totalPages={totalPages}
        onPageChange={setPage}
        sort={sort}
        onSortChange={setSort}
        startIndex={start}
      />

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </div>
  )
}
