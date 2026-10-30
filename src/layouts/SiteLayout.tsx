import { Outlet, useLocation } from 'react-router'
import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './SiteLayout.css'

function SiteLayout() {
  const { pathname } = useLocation()
  const isHomePage = pathname === '/'
  const [showBackToTop, setShowBackToTop] = useState(false)
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    })
    lenisRef.current = lenis

    let animationFrame = 0
    const update = (time: number) => {
      lenis.raf(time)
      animationFrame = requestAnimationFrame(update)
    }
    animationFrame = requestAnimationFrame(update)

    return () => {
      cancelAnimationFrame(animationFrame)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  useEffect(() => {
    const updateBackToTop = () => setShowBackToTop(window.scrollY > 600)

    updateBackToTop()
    window.addEventListener('scroll', updateBackToTop, { passive: true })
    return () => window.removeEventListener('scroll', updateBackToTop)
  }, [])

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1 })
      return
    }
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
