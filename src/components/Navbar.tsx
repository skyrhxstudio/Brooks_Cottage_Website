// src/components/Navbar.tsx
import { Link, NavLink, useLocation } from 'react-router'
import { useEffect, useState } from 'react'
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

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 0)
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })

    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!isMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  return (
    <nav className={`navbar${isScrolled ? ' navbar--scrolled' : ''}`}>
      {/* Left: gold circle logo */}
      <Link to="/" className="navbar__logo" aria-label="Brooks Cottage - Home">
        <img src="/favicon.svg" alt="Brooks Cottage" />
      </Link>

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
          <a href="https://www.facebook.com/p/Brooks-Cottage-100065196384318/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fa-brands fa-facebook-f" aria-hidden="true" />
          </a>
        </div>
        <div className="navbar__icon">
          <a href="https://www.instagram.com/brooks_cottage1/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-instagram" aria-hidden="true" />
          </a>
        </div>
        <Link to="/contact" className="navbar__book">
          <p>Book Now</p>
        </Link>
      </div>

      <button
        type="button"
        className="navbar__menu-toggle"
        onClick={() => setIsMenuOpen((open) => !open)}
        aria-expanded={isMenuOpen}
        aria-controls="navbar-mobile-menu"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
      >
        <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true" />
      </button>

      <div
        id="navbar-mobile-menu"
        className={`navbar__mobile-menu${isMenuOpen ? ' navbar__mobile-menu--open' : ''}`}
      >
        <div className="navbar__mobile-links">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="navbar__mobile-actions">
          <a
            href="https://www.facebook.com/p/Brooks-Cottage-100065196384318/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fa-brands fa-facebook-f" aria-hidden="true" />
          </a>
          <a
            href="https://www.instagram.com/brooks_cottage1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram" aria-hidden="true" />
          </a>
          <Link to="/contact" className="navbar__mobile-book" onClick={() => setIsMenuOpen(false)}>
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar