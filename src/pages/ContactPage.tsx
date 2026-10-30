import PageMetadata from '../components/PageMetadata'
import './ContactPage.css'

function ContactPage() {
  return (
    <>
      <PageMetadata
        title="Contact"
        path="/contact"
        description="Contact Brooks Cottage, view our Brooklyn Pretoria address, or book your stay by phone, email, or Nightsbridge."
      />
      <main id="contact-page" className="contact-page">
        <span className="contact-page__watermark" aria-hidden="true">
          Contact
        </span>

        <header className="contact-page__header">
          <img
            className="contact-page__flower"
            src="/heading_decor.svg"
            alt=""
            aria-hidden="true"
          />
          <h1 className="contact-page__title">
            CONTACT
            <br />
            BROOKS COTTAGE
          </h1>
        </header>

        <section className="contact-page__details" aria-label="Brooks Cottage contact details">
          <article className="contact-page__card">
            <div className="contact-page__icon" aria-hidden="true">
              <i className="fa-solid fa-location-dot" />
            </div>
            <div>
              <h2>VISIT US</h2>
              <address>
                283 Brooks Street
                <br />
                Brooklyn
                <br />
                Pretoria
                <br />
                South Africa
              </address>
              <a
                href="https://maps.google.com/?q=283+Brooks+Street,+Brooklyn,+Pretoria,+South+Africa"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-page__link"
              >
                OPEN IN GOOGLE MAPS
                <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
              </a>
            </div>
          </article>

          <article className="contact-page__card">
            <div className="contact-page__icon" aria-hidden="true">
              <i className="fa-solid fa-phone" />
            </div>
            <div>
              <h2>CALL US</h2>
              <a href="tel:+27824483902" className="contact-page__text-link">
                +27 82 448 3902
              </a>
              <a href="tel:+27832337340" className="contact-page__text-link">
                +27 83 233 7340
              </a>
            </div>
          </article>

          <article className="contact-page__card">
            <div className="contact-page__icon" aria-hidden="true">
              <i className="fa-solid fa-envelope" />
            </div>
            <div>
              <h2>EMAIL US</h2>
              <a
                href="mailto:chrisandnorma@brookscottage.co.za"
                className="contact-page__text-link contact-page__email"
              >
                chrisandnorma@brookscottage.co.za
              </a>
            </div>
          </article>
        </section>

        <section className="contact-page__map-section" aria-label="Location map and booking">
          <div className="contact-page__map">
            <iframe
              title="Brooks Cottage location"
              src="https://www.google.com/maps?q=283+Brooks+Street,+Brooklyn,+Pretoria,+South+Africa&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <aside className="contact-page__booking">
            <p>
              Book your stay at Brooks Cottage directly through Nightsbridge.
            </p>
            <a
              href="https://book.nightsbridge.com/31512"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-page__booking-link"
            >
              BOOK NOW
              <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
            </a>
            <div className="contact-page__socials" role="group" aria-label="Brooks Cottage social media">
              <a
                href="https://www.facebook.com/p/Brooks-Cottage-100065196384318/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Brooks Cottage on Facebook"
              >
                <i className="fa-brands fa-facebook-f" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/brooks_cottage1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Brooks Cottage on Instagram"
              >
                <i className="fa-brands fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </aside>
        </section>
      </main>
    </>
  )
}

export default ContactPage
