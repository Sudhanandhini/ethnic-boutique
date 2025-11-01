import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo_1.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showCollections, setShowCollections] = useState(false)
  const location = useLocation()

  const collections = [
    'western',
    'indo-western',
    'bridal-blouse',
    'salwar',
    'kids',
    'lehenga',
    'pattu-pavada',
    'ready-to-wear-sarees'
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Ethnic Boutique" 
              className="h-16 sm:h-20 md:h-24 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-secondary' : 'text-gray-700 hover:text-secondary'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-secondary' : 'text-gray-700 hover:text-secondary'
              }`}
            >
              About
            </Link>
            
            {/* Collections Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowCollections(true)}
              onMouseLeave={() => setShowCollections(false)}
            >
              <button className="text-sm font-medium text-gray-700 hover:text-secondary flex items-center gap-1 transition-colors">
                Collections <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {showCollections && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100"
                  >
                    {collections.map((collection) => (
                      <Link
                        key={collection}
                        to={`/collection/${collection}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary/10 hover:text-secondary capitalize transition-colors"
                      >
                        {collection.replace(/-/g, ' ')}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/gallery"
              className={`text-sm font-medium transition-colors ${
                isActive('/gallery') ? 'text-secondary' : 'text-gray-700 hover:text-secondary'
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-secondary' : 'text-gray-700 hover:text-secondary'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-secondary transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-4 space-y-1">
                <Link
                  to="/"
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive('/') 
                      ? 'text-secondary bg-secondary/10' 
                      : 'text-gray-700 hover:text-secondary hover:bg-secondary/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive('/about') 
                      ? 'text-secondary bg-secondary/10' 
                      : 'text-gray-700 hover:text-secondary hover:bg-secondary/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                
                {/* Mobile Collections */}
                <div className="px-3 py-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Collections</p>
                  <div className="space-y-1">
                    {collections.map((collection) => (
                      <Link
                        key={collection}
                        to={`/collection/${collection}`}
                        className="block py-2 px-4 text-sm text-gray-600 hover:text-secondary hover:bg-secondary/5 rounded-md capitalize transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {collection.replace(/-/g, ' ')}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  to="/gallery"
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive('/gallery') 
                      ? 'text-secondary bg-secondary/10' 
                      : 'text-gray-700 hover:text-secondary hover:bg-secondary/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  to="/contact"
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive('/contact') 
                      ? 'text-secondary bg-secondary/10' 
                      : 'text-gray-700 hover:text-secondary hover:bg-secondary/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar