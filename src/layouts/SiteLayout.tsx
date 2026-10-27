import { Outlet, useLocation } from 'react-router'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './SiteLayout.css'

function SiteLayout() {
  const { pathname } = useLocation()
  const isHomePage = pathname === '/'

  return (
    <div className={isHomePage ? 'site-layout site-layout--home' : 'site-layout'}>
      <Navbar />
      {!isHomePage && <div className="site-layout__navbar-spacer" aria-hidden="true" />}
      <Outlet />
      <Footer />
    </div>
  )
}

export default SiteLayout
