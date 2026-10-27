// src/components/Navbar.tsx
import { Link, NavLink } from 'react-router'
import './Navbar.css'

interface NavItem {
  label: string
  to: string
}

const NAV_LINKS: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Rooms & Rates', to: '/rooms-rates' },
  { label: 'Services', to: '/services' },
  { label: 'Location & Attractions', to: '/location-attractions' },
  { label: 'Contact', to: '/contact' },
  { label: 'Gallery', to: '/gallery' },
]

function FacebookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.43-4.92 8.43-9.94Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left: gold circle logo */}
      <Link to="/" className="navbar__logo" aria-label="Brooks Cottage - Home" />

      {/* Middle: 6 nav links */}
      <div className="navbar__links">
        {NAV_LINKS.map((item) => (
          <div className="navbar__link" key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              <p>{item.label}</p>
            </NavLink>
          </div>
        ))}
      </div>

      {/* Right: Facebook, Instagram, Book Now */}
      <div className="navbar__actions">
        <div className="navbar__icon">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FacebookIcon />
          </a>
        </div>
        <div className="navbar__icon">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </a>
        </div>
        <Link to="/contact" className="navbar__book">
          <p>Book Now</p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar