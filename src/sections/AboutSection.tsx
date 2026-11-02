// src/sections/AboutSection.tsx
import aboutSectionImage from '../assets/images/about_section_img.webp'
import './AboutSection.css'

interface AboutSectionProps {
  image?: string
  imageAlt?: string
}

function AboutSection({ image = aboutSectionImage, imageAlt = 'Brooks Cottage' }: AboutSectionProps) {
  return (
    <section id="about" className="about">
      <span className="about__watermark" aria-hidden="true">Welcome</span>
      {/* Div 1: Header - cols 2 to 5 */}
      <div className="about__header">
        <div className="about__flower">
          <img src="/heading_decor.svg" alt="" aria-hidden="true" />
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
          <i className="fa-solid fa-quote-left" aria-hidden="true" />
        </div>
        <p className="about__quote-text">
          This lovely old home, with its Oregon floors and beautiful pressed
          ceilings, offers you a choice of five tastefully decorated
          rooms each with their own private entrance and full
          en-suite bathrooms – shower and bath.
          <br />
          Conveniently located close to most foreign embassies, University of
          Pretoria, Hillcrest, Brooklyn Mall, and other attractions. It is a
          stone&apos;s throw from Africa&apos;s embassies and diplomatic precincts.
        </p>
      </div>

      {/* Div 3: Image - cols 1 to 6 */}
      <div className="about__image">
        <img src={image} alt={imageAlt} />
      </div>

      {/* Div 5 + Div 4: Location pill and Reservation pill */}
      <div className="about__pills">
        <div className="about__location">
          <div className="about__pin">
            <i className="fa-solid fa-location-dot" aria-hidden="true" />
          </div>
          <p>BROOKLYN, PRETORIA, SOUTH AFRICA</p>
        </div>

        <a
          href="https://book.nightsbridge.com/31512"
          target="_blank"
          rel="noopener noreferrer"
          className="about__cta"
        >
          <p>MAKE A RESERVATION NOW</p>
        </a>
      </div>
    </section>
  )
}

export default AboutSection