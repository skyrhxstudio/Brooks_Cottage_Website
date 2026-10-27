import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './SiteLayout.css'

function SiteLayout() {
  return (
    <div className="site-layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default SiteLayout
