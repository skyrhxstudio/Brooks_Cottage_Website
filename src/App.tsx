import { BrowserRouter, Route, Routes } from 'react-router'
import SiteLayout from './layouts/SiteLayout'
import ContemporaryRoomPage from './pages/rooms/ContemporaryRoomPage'
import EclecticRoomPage from './pages/rooms/EclecticRoomPage'
import IndonesianRoomPage from './pages/rooms/IndonesianRoomPage'
import MahoganyRoomPage from './pages/rooms/MahoganyRoomPage'
import ModernVictorianRoomPage from './pages/rooms/ModernVictorianRoomPage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'
import LocationAttractionsPage from './pages/LocationAttractionsPage'
import RoomsRatesPage from './pages/RoomsRatesPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms-rates" element={<RoomsRatesPage />} />
          <Route path="/location-attractions" element={<LocationAttractionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/rooms/the-contemporary-room" element={<ContemporaryRoomPage />} />
          <Route path="/rooms/the-indonesian-room" element={<IndonesianRoomPage />} />
          <Route path="/rooms/the-modern-victorian-room" element={<ModernVictorianRoomPage />} />
          <Route path="/rooms/the-mahogany-room" element={<MahoganyRoomPage />} />
          <Route path="/rooms/the-eclectic-room" element={<EclecticRoomPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
