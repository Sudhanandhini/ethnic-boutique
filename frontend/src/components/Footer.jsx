import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const collections = [
    { name: 'Western', path: '/collection/western' },
    { name: 'Indo Western', path: '/collection/indo-western' },
    { name: 'Bridal Blouse', path: '/collection/bridal-blouse' },
    { name: 'Salwar', path: '/collection/salwar' },
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-serif font-bold mb-4 text-secondary">Ethnic Boutique</h3>
            <p className="text-gray-400 text-sm mb-4">
              Where tradition meets modernity. We create exquisite ethnic wear that celebrates your unique style and heritage.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-serif font-bold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Collections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-serif font-bold mb-4 text-secondary">Collections</h3>
            <ul className="space-y-2">
              {collections.map((collection) => (
                <li key={collection.name}>
                  <Link
                    to={collection.path}
                    className="text-gray-400 hover:text-secondary transition-colors text-sm"
                  >
                    {collection.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-serif font-bold mb-4 text-secondary">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-gray-400 hover:text-secondary">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>#120, 14th Main, 29th Cross, Jayanagar, 4th Block, Bangalore, India</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400 hover:text-secondary">
                <Phone size={18} className="flex-shrink-0" />
                <span>+91 98869 87278</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400 hover:text-secondary">
                <Mail size={18} className="flex-shrink-0" />
                <span>sandysethnic@gmail.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Ethnic Boutique. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.sunsys.in/" className="text-gray-400 hover:text-secondary text-sm transition-colors">
              Developed by Sunsys Technologies Pvt Ltd
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
