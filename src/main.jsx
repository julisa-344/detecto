import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import VersionPicker from './pages/VersionPicker'
import V1 from './pages/V1'
import V2 from './pages/V2'
import V3 from './pages/V3'
import V4 from './pages/V4'
import V5 from './pages/V5'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VersionPicker />} />
        <Route path="/v1" element={<V1 />} />
        <Route path="/v2" element={<V2 />} />
        <Route path="/v3" element={<V3 />} />
        <Route path="/v4" element={<V4 />} />
        <Route path="/v5" element={<V5 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
