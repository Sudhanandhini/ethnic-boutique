import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Award, Heart, Users, Sparkles, CheckCircle } from 'lucide-react'

// Testimonial images
import testimonial1 from '../assets/1.jpg'
import testimonial2 from '../assets/2.jpg'
import testimonial3 from '../assets/3.jpg'
import pi from '../assets/p2.png'
import blue from '../assets/royal.jpg'
import a7 from '../assets/a7.png';

const About = () => {
  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion',
      description:
        'We pour our heart into every stitch, creating garments that reflect our love for traditional craftsmanship.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality',
      description:
        "Only the finest fabrics and materials make it into our collections, ensuring lasting beauty and durability."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We work closely with you to bring your vision to life.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Innovation',
      description: 'While honoring tradition, we embrace modern design elements to create timeless pieces.'
    }
  ]

  const features = [
    'Expert craftsmanship with 16+ years of experience',
    'Customization available for all designs',
    'Premium quality fabrics and materials',
    'Timely delivery guaranteed',
    'Affordable pricing without compromising quality',
    'Personalized consultation and styling advice'
  ]

  const team = [
    {
      name: 'Meera Sharma',
      role: 'Founder & Head Designer',
      image: testimonial1
    },
    {
      name: 'Kavita Patel',
      role: 'Senior Designer',
      image: testimonial2
    },
    {
      name: 'Anjali Reddy',
      role: 'Embroidery Specialist',
      image: testimonial3
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20" style={{ backgroundImage: "linear-gradient(175deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 25%, rgb(253, 228, 219) 65%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center">
            <motion.h1
              variants={fadeInFromLeft}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6"
            >
              About Us
            </motion.h1>
            <motion.p
              variants={fadeInFromLeft}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Weaving dreams into reality, one stitch at a time. Discover the story behind Ethnic Boutique and our
              passion for creating exquisite ethnic wear.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                Ethnic Boutique was born from a deep love for traditional Indian textiles and a vision to make exquisite
                ethnic wear accessible to every woman. Founded in 2009, we started as a small studio with just three
                artisans and a dream to preserve and celebrate India's rich textile heritage.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                Over the years, we've grown into a trusted name in ethnic fashion, serving thousands of happy customers
                across India and Abroad. Our journey has been marked by countless milestones, from dressing brides for their
                special day to creating everyday ethnic wear that empowers women to embrace their cultural roots.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Today, we continue to blend traditional craftsmanship with contemporary design, creating pieces that are
                both timeless and trendy. Every garment that leaves our studio carries with it the dedication, skill,
                and passion of our talented artisans.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center items-center"
            >
              <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[650px] aspect-square mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-secondary/10 to-accent/10 rounded-full blur-2xl opacity-70" />

                <div className="relative rounded-full w-full h-full overflow-hidden shadow-2xl">
                  <img src={pi} alt="Bride" className="w-full h-full object-cover" />
                </div>

                {/* Top Left Small Image */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute top-0 left-0 sm:-top-5 sm:-left-8 md:-top-10 md:-left-16 w-24 h-20 sm:w-32 sm:h-24 md:w-48 md:h-32 lg:w-56 lg:h-40 rounded-2xl overflow-hidden shadow-xl z-10"
                >
                  <img src={blue} alt="Bridal jewelry detail" className="w-full h-full object-cover" />
                </motion.div>

                {/* Bottom Right Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white shadow-xl"
                >
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold">16+</p>
                    <p className="text-xs sm:text-sm">Years</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 lg:py-32 gradient-bg1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              The principles that guide everything we do at Ethnic Boutique.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-900 mb-4 mt-6 sm:mt-8">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <img
                src={a7}
                alt="Why choose us"
                className="rounded-2xl shadow-xl w-full max-w-[600px] h-auto aspect-square object-cover mx-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">Why Choose Us</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                When you choose Ethnic Boutique, you're not just buying a garment – you're investing in quality,
                craftsmanship, and a piece of tradition. Here's what sets us apart:
              </p>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-28 gradient-bg2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Let us help you find or create the perfect outfit for your special occasion. Get in touch with us today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors inline-block text-sm sm:text-base"
                aria-label="Contact us"
              >
                Contact Us
              </Link>

              <Link
                to="/gallery"
                className="border-2 border-black text-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-colors inline-block text-sm sm:text-base"
                aria-label="View gallery"
              >
                View Gallery
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
