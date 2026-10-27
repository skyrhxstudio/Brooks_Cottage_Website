// src/sections/AboutSection.tsx
import { Link } from 'react-router'
import './AboutSection.css'

interface AboutSectionProps {
  image?: string
  imageAlt?: string
}

function FlowerIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <g fill="#D7942E">
        <ellipse cx="32" cy="16" rx="8" ry="14" />
        <ellipse cx="32" cy="48" rx="8" ry="14" />
        <ellipse cx="16" cy="32" rx="14" ry="8" />
        <ellipse cx="48" cy="32" rx="14" ry="8" />
        <ellipse cx="20.7" cy="20.7" rx="8" ry="14" transform="rotate(-45 20.7 20.7)" opacity="0.6" />
        <ellipse cx="43.3" cy="43.3" rx="8" ry="14" transform="rotate(-45 43.3 43.3)" opacity="0.6" />
        <ellipse cx="43.3" cy="20.7" rx="8" ry="14" transform="rotate(45 43.3 20.7)" opacity="0.6" />
        <ellipse cx="20.7" cy="43.3" rx="8" ry="14" transform="rotate(45 20.7 43.3)" opacity="0.6" />
      </g>
      <circle cx="32" cy="32" r="7" fill="#151515" />
    </svg>
  )
}

function QuoteIcon() {
  return (
    <svg width="40" height="32" viewBox="0 0 40 32" fill="#D7942E" aria-hidden="true">
      <path d="M0 32V19.2C0 8.6 5.4 2.2 16.2 0l1.8 4.2C12.4 5.8 9.6 9.2 9.4 14.4H17V32H0Zm23 0V19.2C23 8.6 28.4 2.2 39.2 0L41 4.2c-5.6 1.6-8.4 5-8.6 10.2H40V32H23Z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="24" height="30" viewBox="0 0 24 30" fill="#D7942E" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 9 12 18 12 18s12-9 12-18C24 5.37 18.63 0 12 0Zm0 16.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z" />
    </svg>
  )
}

function AboutSection({ image, imageAlt = 'Brooks Cottage' }: AboutSectionProps) {
  return (
    <section id="about" className="about">
      {/* Div 1: Header - cols 2 to 5 */}
      <div className="about__header">
        <div className="about__flower">
          <FlowerIcon />
        </div>
        <p className="about__title">
          WELCOME TO
          <br />
          BROOKS COTTAGE
        </p>
      </div>

      {/* Div 2: Quote - cols 8 to 11 */}
      <div className="about__quote">
        <div className="about__quote-icon">
          <QuoteIcon />
        </div>
        <p className="about__quote-text">
          This lovely old home, with its Oregon floors and beautiful pressed
          ceilings, offers you a choice of five tastefully decorated
          north-facing rooms each with their own private entrance and full
          en-suite bathrooms – shower and bath.
          <br />
          Conveniently located close to most foreign embassies, University of
          Pretoria, Hillcrest and Brooklyn Shopping Centres.
        </p>
      </div>

      {/* Div 3: Image - cols 1 to 6 */}
      <div className="about__image">
        {image && <img src={image} alt={imageAlt} />}
      </div>

      {/* Div 5 + Div 4: Location pill and Reservation pill */}
      <div className="about__pills">
        <div className="about__location">
          <div className="about__pin">
            <PinIcon />
          </div>
          <p>Brooklyn, Pretoria, South Africa</p>
        </div>

        <Link to="/rooms-rates" className="about__cta">
          <p>MAKE A RESERVATION NOW</p>
        </Link>
      </div>
    </section>
  )
}

export default AboutSection