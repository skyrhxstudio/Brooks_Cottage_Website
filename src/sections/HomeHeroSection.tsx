// src/sections/HomeHeroSection.tsx
import './HomeHeroSection.css'

import heroImage from '../assets/images/hero_bg.webp'
import travelAwardImage from '../assets/images/travel_awards.png'
import bookingAwardImage from '../assets/images/booking_award.png'
import bestValueAwardImage from '../assets/images/best_value_award.png'

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
          <div className="home-hero__badges">
            <div
              className="home-hero__backup"
              role="group"
              aria-label="Backup utilities"
            >
              <i className="fa-solid fa-bolt" aria-hidden="true" />
              <span>Solar &amp; Water Backup</span>
            </div>
            <div
              className="home-hero__awards"
              aria-label="Guest awards and recognition"
            >
              <img
                className="home-hero__award"
                src={travelAwardImage}
                alt="Kayak Travel Awards"
              />
              <img
                className="home-hero__award"
                src={bookingAwardImage}
                alt="Booking.com Traveller Review Awards, rated 9.6"
              />
              <img
                className="home-hero__award"
                src={bestValueAwardImage}
                alt="Best Value accommodation award"
              />
            </div>
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
          <a
            href="https://book.nightsbridge.com/31512"
            target="_blank"
            rel="noopener noreferrer"
            className="home-hero__cta"
          >
            <p>Make a Reservation Now</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HomeHeroSection