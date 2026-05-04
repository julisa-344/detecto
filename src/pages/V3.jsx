import HeaderV3 from '../components/v3/HeaderV3'
import HeroV3 from '../components/v3/HeroV3'
import MetricsV3 from '../components/v3/MetricsV3'
import VersionNavWidget from '../components/VersionNavWidget'

export default function V3() {
  return (
    <div className="min-h-screen" style={{ background: '#0a0c12' }}>
      <HeaderV3 />
      <HeroV3 />
      <MetricsV3 />
      <VersionNavWidget current="Versión 03 — Futurista Disruptiva" />
    </div>
  )
}
