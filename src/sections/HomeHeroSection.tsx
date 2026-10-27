// src/sections/HomeHeroSection.tsx
import { Link } from 'react-router'
import './HomeHeroSection.css'

import heroImage from '../assets/images/hero_bg.png'

interface HomeHeroSectionProps {
  backgroundImage?: string
}

function HomeHeroSection({ backgroundImage = heroImage }: HomeHeroSectionProps) {
  return (
    <section
      id="home"
      className="home-hero"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(22,22,22,0.8) 0%, rgba(22,22,22,0) 25%), linear-gradient(to bottom, rgba(22,22,22,0) 0%, rgba(22,22,22,0.8) 70%, rgba(22,22,22,1) 100%), url(${backgroundImage})`,
      }}
    >
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