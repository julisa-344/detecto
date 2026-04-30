import { useCallback, useState } from 'react'
import Splash from './components/Splash'
import Header from './components/Header'
import Hero from './components/Hero'
import Especialidades from './components/Especialidades'
import StaffMedico from './components/StaffMedico'
import PorQueNosotros from './components/PorQueNosotros'
import Partners from './components/Partners'

function App() {
  const [splashDone, setSplashDone] = useState(false)
  const handleSplashDone = useCallback(() => setSplashDone(true), [])

  return (
    <div className="min-h-screen">
      {!splashDone && <Splash onDone={handleSplashDone} />}
      <Header />
      <Hero />
      <Especialidades />
      <StaffMedico />
      <PorQueNosotros />
      <Partners />
    </div>
  )
}

export default App
