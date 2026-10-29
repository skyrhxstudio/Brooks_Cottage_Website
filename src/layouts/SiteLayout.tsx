import { Outlet, useLocation } from 'react-router'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './SiteLayout.css'

function SiteLayout() {
  const { pathname } = useLocation()
  const isHomePage = pathname === '/'
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  useEffect(() => {
    const updateBackToTop = () => setShowBackToTop(window.scrollY > 600)

    updateBackToTop()
    window.addEventListener('scroll', updateBackToTop, { passive: true })
    return () => window.removeEventListener('scroll', updateBackToTop)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <div className={isHomePage ? 'site-layout site-layout--home' : 'site-layout'}>
      <Navbar />
      {!isHomePage && <div className="site-layout__navbar-spacer" aria-hidden="true" />}
      <Outlet />
      <Footer />
      <button
        type="button"
        className={`site-layout__back-to-top${showBackToTop ? ' site-layout__back-to-top--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="fa-solid fa-arrow-up" aria-hidden="true" />
      </button>
    </div>
  )
}

export default SiteLayout
