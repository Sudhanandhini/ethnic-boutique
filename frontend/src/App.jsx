import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomeNavbar from './components/HomeNavbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Collection from './pages/Collection'
import './index.css'

function AppContent() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="min-h-screen bg-white">
      {isHomePage ? <HomeNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/collection/:category" element={<Collection />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default function App() {
  return <AppContent />
}
