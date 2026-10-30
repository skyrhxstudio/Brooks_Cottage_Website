// src/pages/HomePage.tsx
import PageMetadata from '../components/PageMetadata'
import AboutSection from '../sections/AboutSection'
import ContactSection from '../sections/ContactSection'
import HomeHeroSection from '../sections/HomeHeroSection'
import LocationSection from '../sections/LocationSection'
import ReviewsSection from '../sections/ReviewsSection'
import RoomsSection from '../sections/RoomsSection'
import GalleryPreview from '../sections/GalleryPreview'
import ServicesSection from '../sections/ServicesSection'
import './HomePage.css'

function HomePage() {
  return (
    <>
      <PageMetadata
        title="Luxury Guest House in Pretoria"
        path="/"
        description="Stay at Brooks Cottage, an elegant guest house in Brooklyn, Pretoria, offering five en-suite rooms, secure parking, Wi-Fi, and breakfast."
      />
      <main id="home-page" className="home-page">
        <HomeHeroSection />
        <ReviewsSection />
        <AboutSection />
        <RoomsSection />
        <GalleryPreview />
        <ServicesSection />
        <LocationSection />
        <ContactSection />
      </main>
    </>
  )
}

export default HomePage