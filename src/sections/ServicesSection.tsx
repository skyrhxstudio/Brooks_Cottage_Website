import servicesImage1 from '../assets/images/services_section_img_1.webp'
import servicesImage2 from '../assets/images/services_section_img_2.webp'
import './ServicesSection.css'

function ServicesSection() {
  return (
    <section id="services" className="home-section services-section">
      <span className="services__watermark" aria-hidden="true">Amenities</span>
      <div className="services__header">
        <div className="services__flower">
          <img src="/heading_decor.svg" alt="" aria-hidden="true" />
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
          and coffee station, a fridge, a microwave, a hair dryer, and basic
          crockery and cutlery.
        </p>
      </div>

      <img
        className="services__image services__image--pool"
        src={servicesImage1}
        alt="Brooks Cottage interior and guest amenities"
      />
      <img
        className="services__image services__image--lounge"
        src={servicesImage2}
        alt="Guest dining and lounge area at Brooks Cottage"
      />

      <div className="services__details">
        <p>
          Stay entertained and perfectly connected with free fibre Wi-Fi and
          DSTV satellite television, all completely protected from load-shedding
          by our uninterrupted, solar-powered electricity backup system. Best
          of all, you can take a refreshing dip in our pristine swimming pool
          and enjoy the comfort of our water backup system.
        </p>
      </div>

      <a
        href="https://book.nightsbridge.com/31512"
        target="_blank"
        rel="noopener noreferrer"
        className="services__cta"
      >
        <span>MAKE A RESERVATION</span>
      </a>
    </section>
  )
}

export default ServicesSection
