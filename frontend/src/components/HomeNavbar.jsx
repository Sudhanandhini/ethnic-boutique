import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo_1.png'

const HomeNavbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Collections', path: '/collection/western' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 sm:h-24">
            {/* Logo - Left Side */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Ethnic Boutique"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
              />
            </Link>

            {/* Right Side - Hamburger + Contact */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Contact Button - Visible on all screens */}
              <Link
                to="/contact"
                className="bg-black text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Contact
              </Link>

              {/* Hamburger Menu Icon */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-secondary transition-colors p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Sidebar Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-[85%] sm:w-80 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6 sm:p-8 relative">
                {/* Close Button */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-600 hover:text-secondary transition-colors p-2"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>

                {/* Logo */}
                <div className="flex items-center mb-8 sm:mb-12 mt-2 sm:mt-4">
                  <img
                    src={logo}
                    alt="Ethnic Boutique"
                    className="h-16 sm:h-20 w-auto object-contain"
                  />
                </div>

                {/* Menu Items */}
                <nav className="space-y-1 sm:space-y-2">
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2.5 sm:py-3 text-gray-700 hover:bg-secondary/10 hover:text-secondary rounded-lg transition-colors font-medium text-sm sm:text-base"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Collection Submenu */}
                <div className="mt-6 sm:mt-8">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 sm:mb-3 px-4">
                    Collections
                  </h3>
                  <div className="space-y-1">
                    {[
                      'Western',
                      'Indo Western',
                      'Bridal Blouse',
                      'Salwar',
                      'Kids',
                      'Lehenga',
                      'Pattu Pavada',
                      'Ready to Wear Sarees',
                    ].map((collection, index) => (
                      <Link
                        key={index}
                        to={`/collection/${collection.toLowerCase().replace(/ /g, '-')}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-2 text-xs sm:text-sm text-gray-600 hover:bg-secondary/10 hover:text-secondary rounded-lg transition-colors"
                      >
                        {collection}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
                  <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Follow Us</p>
                  <div className="flex space-x-3 sm:space-x-4">
                    <a
                      href="#"
                      className="w-9 h-9 sm:w-10 sm:h-10 bg-[#f5e6e0] rounded-full flex items-center justify-center text-black hover:shadow-lg transition-shadow"
                      aria-label="Facebook"
                      rel="noopener noreferrer"
                    >
                      <span className="text-xs sm:text-sm">f</span>
                    </a>

                    <a
                      href="#"
                      className="w-9 h-9 sm:w-10 sm:h-10 bg-[#f5e6e0] rounded-full flex items-center justify-center text-black hover:shadow-lg transition-shadow"
                      aria-label="LinkedIn"
                      rel="noopener noreferrer"
                    >
                      <span className="text-xs sm:text-sm">in</span>
                    </a>

                    <a
                      href="#"
                      className="w-9 h-9 sm:w-10 sm:h-10 bg-[#f5e6e0] rounded-full flex items-center justify-center text-black hover:shadow-lg transition-shadow"
                      aria-label="Twitter"
                      rel="noopener noreferrer"
                    >
                      <span className="text-xs sm:text-sm">tw</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default HomeNavbar
