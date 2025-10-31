import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, X } from 'lucide-react'
import pink from '../assets/pink.jpg'
import blue from '../assets/2_blue.jpg'
import black from '../assets/1_b.jpg'
import royal from '../assets/royal.jpg'
import blo from '../assets/81.jpg'
import blo1 from '../assets/blck.jpg'
import blo3 from '../assets/7.webp'
import blo2 from '../assets/5.jpg'

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'saree', label: 'Sarees' },
    { id: 'lehenga', label: 'Lehenga' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'blouse', label: 'Blouse' },
    { id: 'salwar', label: 'Salwar' },
    { id: 'kids', label: 'Kids' }
  ]

  const images = [
    { id: 1, category: 'bridal', url: blue, title: 'Bridal Collection 1' },
    { id: 2, category: 'saree', url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop', title: 'Silk Saree' },
    { id: 3, category: 'lehenga', url: pink, title: 'Designer Lehenga' },
    { id: 4, category: 'bridal', url: blo1, title: 'Bridal Lehenga' },
    { id: 5, category: 'blouse', url: blo3, title: 'Designer Blouse' },
    { id: 6, category: 'saree', url: royal, title: 'Traditional Saree' },
    { id: 7, category: 'lehenga', url: blo, title: 'Festive Lehenga' },
    { id: 8, category: 'salwar', url: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop', title: 'Anarkali Suit' },
    { id: 9, category: 'bridal', url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&auto=format&fit=crop', title: 'Bridal Set' },
    { id: 10, category: 'kids', url: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800&auto=format&fit=crop', title: 'Kids Lehenga' },
    { id: 11, category: 'saree', url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&auto=format&fit=crop', title: 'Cotton Saree' },
    { id: 12, category: 'blouse', url: blo2, title: 'Embroidered Blouse' },
    { id: 13, category: 'lehenga', url: black, title: 'Party Lehenga' },
    { id: 14, category: 'salwar', url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop', title: 'Punjabi Suit' },
    { id: 15, category: 'kids', url: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&auto=format&fit=crop', title: 'Kids Ethnic Wear' },
    { id: 16, category: 'bridal', url: pink, title: 'Wedding Collection' },
    { id: 17, category: 'saree', url: royal, title: 'Designer Saree' },
    { id: 18, category: 'lehenga', url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&auto=format&fit=crop', title: 'Bridal Lehenga Choli' }
  ]

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our exquisite collection of handcrafted ethnic wear. Each piece tells 
              a unique story of tradition, elegance, and craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Section */}
          <div className="mb-12">
            {/* Desktop Filters */}
            <div className="hidden md:flex justify-center flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-secondary to-accent text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Filter Button */}
            <div className="md:hidden">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-medium"
              >
                <Filter size={20} />
                {activeFilter === 'all' ? 'All Items' : categories.find(c => c.id === activeFilter)?.label}
              </button>

              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 bg-white rounded-2xl shadow-xl p-4 space-y-2"
                  >
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setActiveFilter(category.id)
                          setShowFilters(false)
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          activeFilter === category.id
                            ? 'bg-secondary/10 text-secondary font-medium'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-8"
          >
              <p className="text-gray-600">
              Showing <span className="font-semibold text-secondary">{filteredImages.length}</span> results
              {activeFilter !== 'all' && (
                <span> in <span className="font-semibold">{categories.find(c => c.id === activeFilter)?.label}</span></span>
              )}
            </p>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-[3/4]"
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-serif font-bold mb-2">
                        {image.title}
                      </h3>
                      <p className="text-white/80 text-sm capitalize">
                        {image.category}
                      </p>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800 capitalize">
                      {image.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <X className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                No items found
              </h3>
              <p className="text-gray-600 mb-6">
                Try selecting a different category
              </p>
              <button
                onClick={() => setActiveFilter('all')}
                className="bg-gradient-to-r from-secondary to-accent text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-shadow"
              >
                View All Items
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Found Something You Love?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get in touch with us to customize any design or create something entirely new just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors inline-block"
              >
                Contact Us
              </a>
              <a
                href="/collection/bridal-blouse"
                className="border-2 border-black text-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-colors inline-block"
              >
                View Collections
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
