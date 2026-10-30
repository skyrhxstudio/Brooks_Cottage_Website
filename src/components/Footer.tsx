import { Link } from 'react-router'
import footerImage from '../assets/images/footer_img.webp'
import travelAwardImage from '../assets/images/travel_awards.webp'
import bookingAwardImage from '../assets/images/booking_award.webp'
import bestValueAwardImage from '../assets/images/best_value_award.webp'
import './Footer.css'

const ROOM_LINKS = [
  { label: 'THE CONTEMPORARY ROOM', to: '/rooms/the-contemporary-room' },
  { label: 'THE INDONESIAN ROOM', to: '/rooms/the-indonesian-room' },
  { label: 'THE MODERN VICTORIAN ROOM', to: '/rooms/the-modern-victorian-room' },
  { label: 'THE MAHOGANY ROOM', to: '/rooms/the-mahogany-room' },
  { label: 'THE ECLECTIC ROOM', to: '/rooms/the-eclectic' },
]

const PAGE_LINKS = [
  { label: 'HOME', to: '/' },
  { label: 'ROOMS & RATES', to: '/rooms-rates' },
  { label: 'LOCATION & ATTRACTIONS', to: '/location-attractions' },
  { label: 'CONTACT', to: '/contact' },
  { label: 'GALLERY', to: '/gallery' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__image" aria-hidden="true">
        <img src={footerImage} alt="" />
      </div>

      <div className="site-footer__content">
        <div className="site-footer__information">
          <div className="site-footer__column">
            <h2>PHYSICAL ADDRESS:</h2>
            <address>
              283 BROOKS STREET
              <br />
              BROOKLYN
              <br />
              PRETORIA
              <br />
              SOUTH AFRICA
            </address>
            <a
              className="site-footer__text-link"
              href="https://maps.google.com/?q=283+Brooks+Street,+Brooklyn,+Pretoria,+South+Africa"
              target="_blank"
              rel="noopener noreferrer"
            >
              GOOGLE MAPS
            </a>
          </div>

          <div className="site-footer__column">
            <h2>CONTACT:</h2>
            <a href="tel:+27824483902">+27 82 448 3902</a>
            <a href="tel:+27832337340">+27 83 233 7340</a>
            <a href="mailto:chrisandnorma@brookscottage.co.za">
              CHRISANDNORMA@BROOKSCOTTAGE.CO.ZA
            </a>
          </div>

          <nav className="site-footer__column" aria-label="View rooms">
            <h2>VIEW ROOMS:</h2>
            {ROOM_LINKS.map((room) => (
              <Link key={room.to} to={room.to}>
                {room.label}
              </Link>
            ))}
          </nav>

          <nav className="site-footer__column" aria-label="Footer navigation">
            <h2>LINKS:</h2>
            {PAGE_LINKS.map((page) => (
              <Link key={page.to} to={page.to}>
                {page.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="site-footer__brand-row">
          <div className="site-footer__brand">
            <Link to="/" className="site-footer__monogram" aria-label="Brooks Cottage home">
              <img src="/favicon.svg" alt="Brooks Cottage" />
            </Link>
            <div className="site-footer__brand-details">
              <Link to="/" className="site-footer__wordmark">
                Brooks Cottage
              </Link>
              <p className="site-footer__tagline">LUXURY GUEST HOUSE ACCOMMODATION</p>
              <div className="site-footer__socials">
                <a href="https://www.instagram.com/brooks_cottage1/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fa-brands fa-instagram" aria-hidden="true" />
                </a>
                <a href="https://www.facebook.com/p/Brooks-Cottage-100065196384318/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="site-footer__awards" aria-label="Guest awards and recognition">
            <img className="site-footer__award" src={travelAwardImage} alt="Kayak Travel Awards" />
            <img className="site-footer__award" src={bookingAwardImage} alt="Booking.com Traveller Review Awards, rated 9.6" />
            <img className="site-footer__award" src={bestValueAwardImage} alt="Best Value accommodation award" />
          </div>
        </div>

        <div className="site-footer__legal">
          <p>© ALL RIGHTS RESERVED, {new Date().getFullYear()}, BROOKS COTTAGE</p>
          <p>
            DESIGNED &amp; DEVELOPED, WITH ❤︎, BY{' '}
            <a href="https://skyrhxstudio.com" target="_blank" rel="noopener noreferrer">
              SKYRHX | A Creative Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
