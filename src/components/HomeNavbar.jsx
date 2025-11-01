import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

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
          scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-25">
            {/* Logo - Left Side */}
            <Link to="/" className="flex items-center space-x-2">
              {/* <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✦</span>
              </div> */}
              <span className="text-sm font-medium text-gray-800">
                <img src="/src/assets/logo_1.png" alt="Ethnic Boutique" style={{height:'100px '}} className="logo w-auto rounded-full" />
              </span>
            </Link>

            {/* Right Side - Hamburger + Contact */}
            <div className="flex items-center space-x-4">
              {/* Hamburger Menu Icon */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-secondary transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Contact Button */}
              <Link
                to="/contact"
                className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Contact
              </Link>
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
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-8">
                {/* Close Button */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-6 right-6 text-gray-600 hover:text-secondary transition-colors"
                >
                  <X size={24} />
                </button>

                {/* Logo */}
                <div className="flex items-center space-x-2 mb-12 mt-4">
                  {/* <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✦</span>
                  </div> */}
                  <span className="text-lg font-serif font-bold text-gray-800">
                        <img src="/src/assets/logo_1.png" alt="Ethnic Boutique" style={{height:'100px '}} className="logo w-auto rounded-full" />
                  </span>
                </div>

                {/* Menu Items */}
                <nav className="space-y-2">
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 text-gray-700 hover:bg-secondary/10 hover:text-secondary rounded-lg transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Collection Submenu */}
                <div className="mt-8">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
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
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-500 rounded-lg transition-colors"
                      >
                        {collection}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-4">Follow Us</p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                    >
                      <span className="text-sm">f</span>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                    >
                      <span className="text-sm">in</span>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                    >
                      <span className="text-sm">tw</span>
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
