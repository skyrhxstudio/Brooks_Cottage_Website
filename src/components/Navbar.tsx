// src/components/Navbar.tsx
import { Link, NavLink } from 'react-router'
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

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 0)
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })

    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

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
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fa-brands fa-facebook-f" aria-hidden="true" />
          </a>
        </div>
        <div className="navbar__icon">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-instagram" aria-hidden="true" />
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