// src/pages/HomePage.tsx
import PageMetadata from '../components/PageMetadata'
import AboutSection from '../sections/AboutSection'
import ContactSection from '../sections/ContactSection'
import HomeHeroSection from '../sections/HomeHeroSection'
import LocationSection from '../sections/LocationSection'
import RoomsSection from '../sections/RoomsSection'
import ServicesSection from '../sections/ServicesSection'
import './HomePage.css'

function HomePage() {
  return (
    <>
      <PageMetadata title="Home" path="/" />
      <main id="home-page" className="home-page">
        <HomeHeroSection />
        <AboutSection />
        <RoomsSection />
        <ServicesSection />
        <LocationSection />
        <ContactSection />
      </main>
    </>
  )
}

export default HomePage