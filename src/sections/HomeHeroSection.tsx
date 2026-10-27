// src/sections/HomeHeroSection.tsx
import { Link } from 'react-router'
import Navbar from '../components/Navbar'
import './HomeHeroSection.css'

// To add a background photo, uncomment the next line and pass it in below:
// import heroImage from '../assets/images/hero.jpg'

interface HomeHeroSectionProps {
  backgroundImage?: string
}

function HomeHeroSection({ backgroundImage }: HomeHeroSectionProps) {
  return (
    <section
      id="home"
      className="home-hero"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${backgroundImage})`,
            }
          : undefined
      }
    >
      {/* Div 1: Navbar */}
      <Navbar />

      {/* Div 2: Hero content */}
      <div className="home-hero__content">
        <div className="home-hero__title-group">
          <div className="home-hero__title">
            <p>Brooks Cottage</p>
          </div>
          <div className="home-hero__subtitle">
            <p>Luxury Guest House Accommodation</p>
          </div>
        </div>

        <div className="home-hero__divider" />

        <div className="home-hero__bottom">
          <div className="home-hero__description">
            <p>
              Experience timeless charm, elegant en-suite rooms, and a peaceful
              stay, conveniently located near Pretoria’s embassies, university,
              and premier shopping centres.
            </p>
          </div>
          <Link to="/rooms-rates" className="home-hero__cta">
            <p>Make a Reservation Now</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeHeroSection