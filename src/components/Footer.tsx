import { Link } from 'react-router'
import heroImage from '../assets/images/hero_bg.png'
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
  { label: 'SERVICES', to: '/services' },
  { label: 'LOCATION & ATTRACTIONS', to: '/location-attractions' },
  { label: 'CONTACT', to: '/contact' },
  { label: 'GALLERY', to: '/gallery' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__image" aria-hidden="true">
        <img src={heroImage} alt="" />
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
              BC
            </Link>
            <div className="site-footer__brand-details">
              <Link to="/" className="site-footer__wordmark">
                Brooks Cottage
              </Link>
              <p className="site-footer__tagline">LUXURY GUEST HOUSE ACCOMMODATION</p>
              <div className="site-footer__socials">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <span aria-hidden="true">t</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <span aria-hidden="true">◎</span>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <span aria-hidden="true">f</span>
                </a>
              </div>
            </div>
          </div>

          <div className="site-footer__awards" aria-label="Guest awards and recognition">
            <div className="site-footer__award site-footer__award--travel">
              <span className="site-footer__award-source">KAYAK</span>
              <strong>Travel<br />Awards</strong>
            </div>
            <div className="site-footer__award site-footer__award--booking">
              <span>Awarded to<br /><strong>Brooks Cottage</strong></span>
              <strong className="site-footer__rating">9.6</strong>
              <small>Booking.com<br />Traveller Review Awards</small>
            </div>
            <div className="site-footer__award site-footer__award--value">
              <span aria-hidden="true">❧</span>
              <strong>Best Value</strong>
              <small>Accommodation</small>
            </div>
          </div>
        </div>

        <div className="site-footer__legal">
          <p>© ALL RIGHTS RESERVED, {new Date().getFullYear()}, BROOKS COTTAGE</p>
          <p>
            DESIGNED &amp; DEVELOPED BY{' '}
            <a href="https://skyrhx.studio" target="_blank" rel="noopener noreferrer">
              SKYRHX STUDIO
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
