import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ShoppingBag, Heart, Eye } from 'lucide-react'

const Collection = () => {
  const { category } = useParams()

  const collectionData = {
    'western': {
      title: 'Western Collection',
      description: 'Modern and stylish western ethnic fusion wear that blends contemporary fashion with traditional elements.',
      items: [
        { id: 1, name: 'Indo-Western Gown',  image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop' },
        { id: 2, name: 'Fusion Dress', image: 'https://images.unsplash.com/photo-1583391733981-5a9d2a0e9d9e?w=600&auto=format&fit=crop' },
        { id: 3, name: 'Designer Jumpsuit', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop' },
        { id: 4, name: 'Contemporary Suit', image: 'https://images.unsplash.com/photo-1596385193050-d11c9f08e5fc?w=600&auto=format&fit=crop' }
      ]
    },
    'indo-western': {
      title: 'Indo-Western Collection',
      description: 'Perfect blend of Indian tradition and western silhouettes for the modern woman.',
      items: [
        { id: 1, name: 'Jacket Style Lehenga', image: 'https://images.unsplash.com/photo-1596385193050-d11c9f08e5fc?w=600&auto=format&fit=crop' },
        { id: 2, name: 'Cape Dress', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop' },
        { id: 3, name: 'Dhoti Pants Set', image: 'https://images.unsplash.com/photo-1583391733981-5a9d2a0e9d9e?w=600&auto=format&fit=crop' },
        { id: 4, name: 'Fusion Saree', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop' }
      ]
    },
    'bridal-blouse': {
      title: 'Bridal Blouse Collection',
      description: 'Exquisitely designed bridal blouses with intricate embroidery and embellishments for your special day.',
      items: [
        { id: 1, name: 'Heavy Work Blouse', image: 'https://images.unsplash.com/photo-1617627143956-3c9ac17c2e01?w=600&auto=format&fit=crop' },
        { id: 2, name: 'Aari Work Blouse', image: 'https://images.unsplash.com/photo-1617627143627-0d2a3f61e007?w=600&auto=format&fit=crop' },
        { id: 3, name: 'Maggam Work Blouse', image: 'https://images.unsplash.com/photo-1622290799326-f3a6c83b7d95?w=600&auto=format&fit=crop' },
        { id: 4, name: 'Designer Blouse', image: 'https://images.unsplash.com/photo-1583391733981-5a9d2a0e9d9e?w=600&auto=format&fit=crop' }
      ]
    },
    'salwar': {
      title: 'Salwar Collection',
      description: 'Elegant and comfortable salwar suits perfect for every occasion from casual to festive.',
      items: [
        { id: 1, name: 'Anarkali Suit', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&fit=crop' },
        { id: 2, name: 'Punjabi Suit', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop' },
        { id: 3, name: 'Palazzo Suit', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop' },
        { id: 4, name: 'Churidar Suit', image: 'https://images.unsplash.com/photo-1596385193050-d11c9f08e5fc?w=600&auto=format&fit=crop' }
      ]
    },
    'kids': {
      title: 'Kids Collection',
      description: 'Adorable ethnic wear for your little ones, designed with comfort and style in mind.',
      items: [
        { id: 1, name: 'Kids Lehenga', image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&auto=format&fit=crop' },
        { id: 2, name: 'Kids Kurta Set', image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format&fit=crop' },
        { id: 3, name: 'Kids Anarkali', image: 'https://images.unsplash.com/photo-1583391733981-5a9d2a0e9d9e?w=600&auto=format&fit=crop' },
        { id: 4, name: 'Kids Pavada', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop' }
      ]
    },
    'lehenga': {
      title: 'Lehenga Collection',
      description: 'Stunning lehengas for weddings, festivals, and celebrations, adorned with beautiful embellishments.',
      items: [
        { id: 1, name: 'Bridal Lehenga', image: 'https://images.unsplash.com/photo-1596385193050-d11c9f08e5fc?w=600&auto=format&fit=crop' },
        { id: 2, name: 'Party Lehenga', image: 'https://images.unsplash.com/photo-1595777216528-071e0127ccbf?w=600&auto=format&fit=crop' },
        { id: 3, name: 'Festive Lehenga', image: 'https://images.unsplash.com/photo-1583391733981-5a9d2a0e9d9e?w=600&auto=format&fit=crop' },
        { id: 4, name: 'Designer Lehenga', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop' }
      ]
    },
    'pattu-pavada': {
      title: 'Pattu Pavada Collection',
      description: 'Traditional South Indian silk pavadas for young girls, perfect for festivals and special occasions.',
      items: [
        { id: 1, name: 'Silk Pavada', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop' },
        { id: 2, name: 'Designer Pavada', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop' },
        { id: 3, name: 'Festive Pavada', image: 'https://images.unsplash.com/photo-1583391733981-5a9d2a0e9d9e?w=600&auto=format&fit=crop' },
        { id: 4, name: 'Traditional Pavada', image: 'https://images.unsplash.com/photo-1596385193050-d11c9f08e5fc?w=600&auto=format&fit=crop' }
      ]
    },
    'ready-to-wear-sarees': {
      title: 'Ready to Wear Sarees',
      description: 'Pre-stitched sarees for effortless draping, combining convenience with traditional elegance.',
      items: [
        { id: 1, name: 'Designer Saree', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop' },
        { id: 2, name: 'Ruffle Saree',  image: 'https://images.unsplash.com/photo-1622290799326-f3a6c83b7d95?w=600&auto=format&fit=crop' },
        { id: 3, name: 'Party Saree', price: '₹9,999', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop' },
        { id: 4, name: 'Fusion Saree', price: '₹8,999', image: 'https://images.unsplash.com/photo-1583391733981-5a9d2a0e9d9e?w=600&auto=format&fit=crop' }
      ]
    }
  }

  const collection = collectionData[category] || collectionData['western']

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-secondary mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              {collection.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              {collection.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collection Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {collection.items.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-colors"
                    >
                      <Eye size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-colors"
                    >
                      <Heart size={20} />
                    </motion.button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-2xl font-bold text-secondary mb-4">
                    {item.price}
                  </p>
                  {/* <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-secondary to-accent text-white py-3 rounded-full font-medium hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
                  >
                    <ShoppingBag size={18} />
                    Enquire Now
                  </motion.button> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Why Shop With Us
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: 'Premium Quality', desc: 'Only the finest fabrics and materials' },
              { title: 'Custom Designs', desc: 'Personalized to match your vision' },
              { title: 'Fast Delivery', desc: 'Timely delivery guaranteed' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Need Something Custom?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We can create a unique design just for you. Contact us to discuss your requirements.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Collection
