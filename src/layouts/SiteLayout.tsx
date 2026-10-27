import { Outlet, useLocation } from 'react-router'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './SiteLayout.css'

function SiteLayout() {
  const { pathname } = useLocation()

  return (
    <div className="site-layout">
      {pathname !== '/' && <Navbar />}
      <Outlet />
      <Footer />
    </div>
  )
}

export default SiteLayout
