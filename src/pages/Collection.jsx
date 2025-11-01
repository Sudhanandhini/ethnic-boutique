import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Heart, Star, Package, Truck, Shield } from 'lucide-react'
import gallery1 from '../assets/81.jpg';
import gallery2 from '../assets/7.webp';
import gallery3 from '../assets/blck.jpg';
import gallery4 from '../assets/pink.jpg';
import gallery5 from '../assets/royal.jpg';
import gallery6 from '../assets/2_blue.jpg';


const Collection = () => {
  const { category } = useParams()

  const collectionData = {
    'western': {
      title: 'Western Collection',
      description: 'Modern and stylish western ethnic fusion wear that blends contemporary fashion with traditional elements.',
      heroImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=1200&auto=format&fit=crop',
      items: [
        { 
          id: 1, 
          name: 'Indo-Western Gown',
          description: 'An elegant indo-western gown that beautifully merges contemporary western silhouettes with traditional Indian embroidery techniques. This stunning piece features a modern fitted bodice that flows into a graceful floor-length skirt, adorned with intricate hand-embroidered motifs inspired by Mughal art.',
          collection: 'Signature Fusion Collection',
          origin: 'Designed in Mumbai, India',
          fabric: 'Premium georgette with silk lining',
          embroidery: 'Hand-embroidered with zari and thread work',
          occasion: 'Perfect for cocktail parties, evening receptions, and festive celebrations',
          care: 'Dry clean only to preserve embroidery and fabric quality',
          availability: 'Made to order with 2-3 weeks delivery time',
          customization: 'Available in custom sizes and color variations',
          features: ['Premium Georgette Fabric', 'Hand Embroidered Details', 'Custom Fit Available', 'Floor Length Design', 'Silk Inner Lining'],
          image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop' 
        },
        { 
          id: 2, 
          name: 'Fusion Dress',
          description: 'A modern fusion dress that seamlessly blends western contemporary cuts with vibrant ethnic prints and traditional Indian textile patterns. This versatile piece features a comfortable A-line silhouette that flatters all body types while celebrating Indian craftsmanship.',
          collection: 'Contemporary Ethnic Collection',
          origin: 'Crafted in Jaipur, Rajasthan',
          fabric: 'Breathable cotton with digital ethnic prints',
          embroidery: 'Block print patterns with mirror work accents',
          occasion: 'Ideal for day events, casual gatherings, office wear, and semi-formal occasions',
          care: 'Gentle hand wash or dry clean recommended',
          availability: 'Ready to ship within 5-7 business days',
          customization: 'Length and sleeve modifications available',
          features: ['Breathable Cotton Fabric', 'Traditional Block Prints', 'A-Line Silhouette', 'Mirror Work Details', 'Easy Care Material'],
          image: 'https://images.unsplash.com/photo-1583391733981-5a9d2a0e9d9e?w=600&auto=format&fit=crop' 
        },
        { 
          id: 3, 
          name: 'Designer Jumpsuit',
          description: 'A chic designer jumpsuit that revolutionizes traditional Indian wear by incorporating ethnic embellishments on a contemporary western silhouette. This statement piece combines the comfort of modern fashion with the richness of Indian decorative arts.',
          collection: 'Urban Fusion Collection',
          origin: 'Created in Delhi, India',
          fabric: 'Premium crepe with cotton blend',
          embroidery: 'Sequin and bead embellishments on shoulders and waist',
          occasion: 'Perfect for parties, dinner events, gallery openings, and modern celebrations',
          care: 'Dry clean only due to embellishments',
          availability: 'Limited edition - 3-4 weeks for made-to-order',
          customization: 'Available in petite, regular, and tall lengths',
          features: ['Premium Crepe Fabric', 'Sequin Embellishments', 'Contemporary Cut', 'Side Zip Closure', 'Comfortable Fit'],
          image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop' 
        },
        { 
          id: 4, 
          name: 'Contemporary Suit',
          description: 'A contemporary suit set that redefines professional ethnic wear by combining modern tailoring with subtle traditional details. This elegant ensemble features clean lines and structured cuts enhanced with delicate Indian embroidery, perfect for the modern working woman.',
          collection: 'Professional Ethnic Collection',
          origin: 'Tailored in Bangalore, India',
          fabric: 'High-quality linen blend with wrinkle-resistant finish',
          embroidery: 'Minimal thread work on collar and cuffs',
          occasion: 'Ideal for office wear, business meetings, formal events, and professional gatherings',
          care: 'Machine washable on gentle cycle or dry clean',
          availability: 'Ready stock with immediate shipping',
          customization: 'Blazer and trouser alterations available',
          features: ['Linen Blend Fabric', 'Wrinkle-Resistant', 'Professional Tailoring', 'Minimal Embroidery', 'Structured Fit'],
          image: 'https://images.unsplash.com/photo-1596385193050-d11c9f08e5fc?w=600&auto=format&fit=crop' 
        }
      ]
    },
    'indo-western': {
      title: 'Indo-Western Collection',
      description: 'Perfect blend of Indian tradition and western silhouettes for the modern woman.',
      heroImage: 'https://images.unsplash.com/photo-1596385193050-d11c9f08e5fc?w=1200&auto=format&fit=crop',
      items: [
        { 
          id: 1, 
          name: 'Jacket Style Lehenga',
          price: '₹15,999',
          description: 'Trendy jacket style lehenga with contemporary design and traditional embroidery work.',
          features: ['Designer Jacket', 'Embroidered Lehenga', 'Matching Dupatta'],
          image: 'https://images.unsplash.com/photo-1596385193050-d11c9f08e5fc?w=600&auto=format&fit=crop' 
        },
        { 
          id: 2, 
          name: 'Cape Dress',
          price: '₹13,999',
          description: 'Elegant cape dress with flowing silhouette and intricate detailing perfect for special occasions.',
          features: ['Flowing Cape', 'Premium Fabric', 'Elegant Design'],
          image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop' 
        },
        { 
          id: 3, 
          name: 'Dhoti Pants Set',
          price: '₹9,999',
          description: 'Comfortable dhoti pants paired with designer top, perfect fusion of traditional and modern.',
          features: ['Comfortable Fit', 'Unique Style', 'Easy to Wear'],
          image: 'https://images.unsplash.com/photo-1583391733981-5a9d2a0e9d9e?w=600&auto=format&fit=crop' 
        },
        { 
          id: 4, 
          name: 'Fusion Saree',
          price: '₹14,999',
          description: 'Pre-draped fusion saree that combines traditional elegance with modern convenience.',
          features: ['Pre-draped', 'Contemporary Style', 'Party Ready'],
          image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop' 
        }
      ]
    },
    'bridal-blouse': {
      title: 'Bridal Blouse Collection',
      description: 'Exquisitely designed bridal blouses with intricate embroidery and embellishments for your special day.',
      heroImage: 'https://images.unsplash.com/photo-1617627143956-3c9ac17c2e01?w=1200&auto=format&fit=crop',
      items: [
        { 
          id: 1, 
          name: 'Heavy Work Blouse',
          price: '₹8,999',
          description: 'Heavily embellished bridal blouse with zari and stone work, perfect for your wedding day.',
          features: ['Heavy Embroidery', 'Premium Zari', 'Stone Work'],
          image: 'https://images.unsplash.com/photo-1617627143956-3c9ac17c2e01?w=600&auto=format&fit=crop' 
        },
        { 
          id: 2, 
          name: 'Aari Work Blouse',
          price: '₹7,999',
          description: 'Traditional aari work blouse handcrafted by skilled artisans with intricate designs.',
          features: ['Handcrafted', 'Aari Work', 'Traditional Design'],
          image: 'https://images.unsplash.com/photo-1617627143627-0d2a3f61e007?w=600&auto=format&fit=crop' 
        },
        { 
          id: 3, 
          name: 'Maggam Work Blouse',
          price: '₹9,499',
          description: 'Exquisite maggam work blouse with detailed embroidery perfect for South Indian brides.',
          features: ['Maggam Work', 'Rich Design', 'Bridal Collection'],
          image: 'https://images.unsplash.com/photo-1622290799326-f3a6c83b7d95?w=600&auto=format&fit=crop' 
        },
        { 
          id: 4, 
          name: 'Designer Blouse',
          price: '₹6,999',
          description: 'Contemporary designer blouse with unique cut and embellishments for the modern bride.',
          features: ['Modern Cut', 'Designer Work', 'Unique Style'],
          image: 'https://images.unsplash.com/photo-1583391733981-5a9d2a0e9d9e?w=600&auto=format&fit=crop' 
        }
      ]
    },
    'salwar': {
      title: 'Salwar Collection',
      description: 'Elegant and comfortable salwar suits perfect for every occasion from casual to festive.',
      heroImage: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1200&auto=format&fit=crop',
      items: [
        { 
          id: 1, 
          name: 'Anarkali Suit',
          price: '₹7,999',
          description: 'Flowing anarkali suit with beautiful prints and comfortable fit, ideal for festive occasions.',
          features: ['Flowing Design', 'Festive Wear', 'Comfortable Fit'],
          image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&fit=crop' 
        },
        { 
          id: 2, 
          name: 'Punjabi Suit',
          price: '₹5,999',
          description: 'Classic Punjabi suit with traditional embroidery and vibrant colors.',
          features: ['Traditional Style', 'Vibrant Colors', 'Quality Fabric'],
          image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop' 
        },
        { 
          id: 3, 
          name: 'Palazzo Suit',
          price: '₹6,499',
          description: 'Trendy palazzo suit set with contemporary design and comfortable palazzo pants.',
          features: ['Trendy Design', 'Palazzo Pants', 'Modern Look'],
          image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop' 
        },
        { 
          id: 4, 
          name: 'Churidar Suit',
          price: '₹5,499',
          description: 'Elegant churidar suit with refined embroidery suitable for both casual and formal wear.',
          features: ['Versatile', 'Elegant Design', 'Easy to Wear'],
          image: 'https://images.unsplash.com/photo-1596385193050-d11c9f08e5fc?w=600&auto=format&fit=crop' 
        }
      ]
    },
    'kids': {
      title: 'Kids Collection',
      description: 'Adorable ethnic wear for your little ones, designed with comfort and style in mind.',
      heroImage: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=1200&auto=format&fit=crop',
      items: [
        { 
          id: 1, 
          name: 'Kids Lehenga',
          price: '₹4,999',
          description: 'Cute lehenga for kids with comfortable fabric and beautiful embellishments.',
          features: ['Comfortable', 'Festive Wear', 'Kids Friendly'],
          image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&auto=format&fit=crop' 
        },
        { 
          id: 2, 
          name: 'Kids Kurta Set',
          price: '₹3,499',
          description: 'Traditional kurta set for kids perfect for festivals and family gatherings.',
          features: ['Traditional', 'Soft Fabric', 'Easy Wear'],
          image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format&fit=crop' 
        },
        { 
          id: 3, 
          name: 'Kids Anarkali',
          price: '₹4,499',
          description: 'Adorable anarkali dress for little girls with playful design and comfortable fit.',
          features: ['Playful Design', 'Party Wear', 'Comfortable'],
          image: 'https://images.unsplash.com/photo-1583391733981-5a9d2a0e9d9e?w=600&auto=format&fit=crop' 
        },
        { 
          id: 4, 
          name: 'Kids Pavada',
          price: '₹3,999',
          description: 'Traditional pavada for young girls perfect for festivals and celebrations.',
          features: ['Traditional', 'Festive', 'Quality Fabric'],
          image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop' 
        }
      ]
    },
    'lehenga': {
      title: 'Lehenga Collection',
      description: 'Stunning lehengas for weddings, festivals, and celebrations, adorned with beautiful embellishments.',
      heroImage: 'https://images.unsplash.com/photo-1596385193050-d11c9f08e5fc?w=1200&auto=format&fit=crop',
      items: [
        { 
          id: 1, 
          name: 'Bridal Lehenga',
          price: '₹45,999',
          description: 'Exquisite bridal lehenga with heavy embroidery and luxurious fabric for your special day.',
          features: ['Heavy Embroidery', 'Luxury Fabric', 'Bridal Collection'],
          image: 'https://images.unsplash.com/photo-1596385193050-d11c9f08e5fc?w=600&auto=format&fit=crop' 
        },
        { 
          id: 2, 
          name: 'Party Lehenga',
          price: '₹25,999',
          description: 'Glamorous party lehenga with contemporary design and stunning embellishments.',
          features: ['Contemporary', 'Party Wear', 'Stunning Design'],
          image: 'https://images.unsplash.com/photo-1595777216528-071e0127ccbf?w=600&auto=format&fit=crop' 
        },
        { 
          id: 3, 
          name: 'Festive Lehenga',
          price: '₹18,999',
          description: 'Beautiful festive lehenga with traditional work perfect for celebrations.',
          features: ['Traditional Work', 'Festive', 'Rich Colors'],
          image: 'https://images.unsplash.com/photo-1583391733981-5a9d2a0e9d9e?w=600&auto=format&fit=crop' 
        },
        { 
          id: 4, 
          name: 'Designer Lehenga',
          price: '₹32,999',
          description: 'Designer lehenga with unique patterns and modern embellishments.',
          features: ['Designer Piece', 'Unique Pattern', 'Modern'],
          image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop' 
        }
      ]
    },
    'pattu-pavada': {
      title: 'Pattu Pavada Collection',
      description: 'Traditional South Indian silk pavadas for young girls, perfect for festivals and special occasions.',
      heroImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=1200&auto=format&fit=crop',
      items: [
        { 
          id: 1, 
          name: 'Silk Pavada',
          price: '₹5,999',
          description: 'Pure silk pavada with traditional zari border perfect for festivals.',
          features: ['Pure Silk', 'Zari Border', 'Traditional'],
          image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop' 
        },
        { 
          id: 2, 
          name: 'Designer Pavada',
          price: '₹6,999',
          description: 'Designer silk pavada with contemporary patterns and traditional elegance.',
          features: ['Designer', 'Contemporary', 'Elegant'],
          image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop' 
        },
        { 
          id: 3, 
          name: 'Festive Pavada',
          price: '₹5,499',
          description: 'Festive silk pavada with rich colors and beautiful embellishments.',
          features: ['Rich Colors', 'Festive', 'Quality Silk'],
          image: 'https://images.unsplash.com/photo-1583391733981-5a9d2a0e9d9e?w=600&auto=format&fit=crop' 
        },
        { 
          id: 4, 
          name: 'Traditional Pavada',
          price: '₹4,999',
          description: 'Classic traditional pavada with timeless design for young girls.',
          features: ['Traditional', 'Timeless', 'Classic Design'],
          image: 'https://images.unsplash.com/photo-1596385193050-d11c9f08e5fc?w=600&auto=format&fit=crop' 
        }
      ]
    },
    'ready-to-wear-sarees': {
      title: 'Ready to Wear Sarees',
      description: 'Pre-stitched sarees for effortless draping, combining convenience with traditional elegance.',
      heroImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&auto=format&fit=crop',
      items: [
        { 
          id: 1, 
          name: 'Designer Saree',
          price: '₹12,999',
          description: 'Pre-stitched designer saree with contemporary draping and elegant design.',
          features: ['Pre-stitched', 'Contemporary', 'Easy to Wear'],
          image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop' 
        },
        { 
          id: 2, 
          name: 'Ruffle Saree',
          price: '₹10,999',
          description: 'Trendy ruffle saree with pre-pleated design ready to wear in minutes.',
          features: ['Ruffle Design', 'Trendy', 'Pre-pleated'],
          image: 'https://images.unsplash.com/photo-1622290799326-f3a6c83b7d95?w=600&auto=format&fit=crop' 
        },
        { 
          id: 3, 
          name: 'Party Saree',
          price: '₹9,999',
          description: 'Glamorous party saree with shimmer and embellishments perfect for celebrations.',
          features: ['Glamorous', 'Party Ready', 'Embellished'],
          image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop' 
        },
        { 
          id: 4, 
          name: 'Fusion Saree',
          price: '₹8,999',
          description: 'Modern fusion saree combining traditional draping with contemporary styling.',
          features: ['Fusion Style', 'Modern', 'Versatile'],
          image: 'https://images.unsplash.com/photo-1583391733981-5a9d2a0e9d9e?w=600&auto=format&fit=crop' 
        }
      ]
    }
  }

  const collection = collectionData[category] || collectionData['western']

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section - Image and Text Split */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 items-center min-h-[600px]">
            {/* Hero Image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInLeft}
              className="relative h-full min-h-[600px]"
            >
              <img
                src={collection.heroImage}
                alt={collection.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30"></div>
            </motion.div>

            {/* Hero Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              className="px-8 md:px-16 py-12"
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-pink-600 mb-6 transition-colors"
              >
                <ArrowLeft size={20} />
                Back to Home
              </Link>
              
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
                {collection.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {collection.description}
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Package className="text-pink-600" size={24} />
                  <span className="text-gray-700">Premium Quality</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="text-pink-600" size={24} />
                  <span className="text-gray-700">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="text-pink-600" size={24} />
                  <span className="text-gray-700">Secure Shopping</span>
                </div>
              </div>

              <a
                href="#products"
                className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all transform hover:scale-105"
              >
                Explore Collection
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section - Alternating Layout */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Our Collection
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto"></div>
          </motion.div>

          {collection.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="mb-20 last:mb-0"
            >
              <div className={`bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-0 ${
                index % 2 === 0 ? '' : 'md:grid-flow-dense'
              }`}>
                {/* Product Image */}
                <motion.div
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  className={`relative group ${index % 2 === 0 ? '' : 'md:col-start-2'}`}
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Wishlist Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-colors"
                  >
                    <Heart size={20} />
                  </motion.button>

                  {/* Rating Badge */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <Star className="text-yellow-500 fill-yellow-500" size={16} />
                    <span className="font-semibold text-gray-900">4.8</span>
                    <span className="text-gray-600 text-sm">(120)</span>
                  </div>
                </motion.div>

                {/* Product Details */}
                <motion.div
                  variants={index % 2 === 0 ? slideInRight : slideInLeft}
                  className={`p-8 md:p-12 flex flex-col justify-center ${
                    index % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'
                  }`}
                >
                  <div className="mb-4">
                    <span className="inline-block bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-sm font-medium mb-2">
                      {item.collection}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                    {item.name}
                  </h3>
                  
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Detailed Information */}
                  <div className="space-y-4 mb-6">
                    <div className="border-l-4 border-pink-500 pl-4">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Origin</p>
                      <p className="text-gray-600">{item.origin}</p>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Fabric Details</p>
                      <p className="text-gray-600">{item.fabric}</p>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Embroidery & Work</p>
                      <p className="text-gray-600">{item.embroidery}</p>
                    </div>

                    <div className="border-l-4 border-pink-500 pl-4">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Perfect For</p>
                      <p className="text-gray-600">{item.occasion}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className="pt-6 border-t border-gray-200 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Care Instructions</p>
                        <p className="text-sm text-gray-600">{item.care}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Availability</p>
                        <p className="text-sm text-gray-600">{item.availability}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Customization</p>
                        <p className="text-sm text-gray-600">{item.customization}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-pink-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">
              Looking for Something Unique?
            </h2>
            <p className="text-black/90 text-lg mb-8 max-w-2xl mx-auto">
              We specialize in custom designs tailored to your preferences. Let us create something special just for you.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-purple-600 px-10 py-4 rounded-full font-semibold hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Start Custom Order
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Collection