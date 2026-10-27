import { Link } from 'react-router'
import './ServicesSection.css'

const poolImage =
  'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=80'
const laundryImage =
  'https://images.unsplash.com/photo-1517677208171-0fd109f4596b?auto=format&fit=crop&w=1200&q=80'

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

function ServicesSection() {
  return (
    <section id="services" className="home-section services-section">
      <div className="services__header">
        <div className="services__flower">
          <FlowerIcon />
        </div>
        <h2 className="services__title">
          AMENITIES
          <br />
          &amp; SERVICES
        </h2>
      </div>

      <div className="services__intro">
        <p>
          At Brooks Cottage, your absolute comfort and privacy are our top
          priorities, which is why your stay includes a private entrance and
          secure parking for complete peace of mind.
        </p>
        <p>
          Inside your beautifully air-conditioned space, you will find
          everything you need for a seamless stay, including a dedicated tea
          and coffee station, a fridge, a microwave, and a hair dryer.
        </p>
      </div>

      <img
        className="services__image services__image--pool"
        src={poolImage}
        alt="Swimming pool at Brooks Cottage"
      />
      <img
        className="services__image services__image--laundry"
        src={laundryImage}
        alt="Laundry facilities available to guests"
      />

      <div className="services__details">
        <p>
          Stay entertained and perfectly connected with free fibre Wi-Fi and
          DSTV satellite television, all completely protected from load-shedding
          by our uninterrupted, solar-powered electricity backup system. Best
          of all, you can take a refreshing dip in our pristine swimming pool or
          take advantage of our convenient on-site laundry services (charged
          extra) to keep your wardrobe fresh.
        </p>
      </div>

      <Link to="/rooms-rates" className="services__cta">
        <span>MAKE A RESERVATION</span>
      </Link>
    </section>
  )
}

export default ServicesSection
