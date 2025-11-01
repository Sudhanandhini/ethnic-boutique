import { motion } from 'framer-motion'
import { Award, Heart, Users, Sparkles, CheckCircle } from 'lucide-react'

// Testimonial images
import testimonial1 from '../assets/1.jpg';
import testimonial2 from '../assets/2.jpg';
import testimonial3 from '../assets/3.jpg';
import pink from '../assets/pink.jpg'
import blue from "../assets/royal.jpg"


const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
      title: "Passion",
      description: "We pour our heart into every stitch, creating garments that reflect our love for traditional craftsmanship."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality",
      description: "Only the finest fabrics and materials make it into our collections, ensuring lasting beauty and durability."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer First",
      description: "Your satisfaction is our priority. We work closely with you to bring your vision to life."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Innovation",
      description: "While honoring tradition, we embrace modern design elements to create timeless pieces."
    }
  ]

  const features = [
    "Expert craftsmanship with 10+ years of experience",
    "Customization available for all designs",
    "Premium quality fabrics and materials",
    "Timely delivery guaranteed",
    "Affordable pricing without compromising quality",
    "Personalized consultation and styling advice"
  ]

  const team = [
    {
      name: "Meera Sharma",
      role: "Founder & Head Designer",
      image: testimonial1
    },
    {
      name: "Kavita Patel",
      role: "Senior Designer",
      image: testimonial2
    },
    {
      name: "Anjali Reddy",
      role: "Embroidery Specialist",
      image: testimonial3
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-bg1 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6"
            >
              About Us
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Weaving dreams into reality, one stitch at a time. Discover the story behind Ethnic Boutique
              and our passion for creating exquisite ethnic wear.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Ethnic Boutique was born from a deep love for traditional Indian textiles and a vision to
                make exquisite ethnic wear accessible to every woman. Founded in 2014, we started as a
                small studio with just three artisans and a dream to preserve and celebrate India's rich
                textile heritage.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Over the years, we've grown into a trusted name in ethnic fashion, serving thousands of
                happy customers across the country. Our journey has been marked by countless milestones,
                from dressing brides for their special day to creating everyday ethnic wear that empowers
                women to embrace their cultural roots.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we continue to blend traditional craftsmanship with contemporary design, creating
                pieces that are both timeless and trendy. Every garment that leaves our studio carries
                with it the dedication, skill, and passion of our talented artisans.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center items-center"
            >
              <div className="relative w-[600px] h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-secondary/10 to-accent/10 rounded-full blur-2xl opacity-70"></div>

                <div className="relative rounded-full w-full h-full overflow-hidden shadow-2xl">
                  <img
                    src={pink}
                    alt="Bride"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -top-10 -left-16 w-56 h-40 rounded-2xl overflow-hidden shadow-xl z-10"
              >
                <img
                  src={blue}
                  alt="Bridal jewelry detail"
                  className="w-[300px] h-[200px] object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-1 -right-6 w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white">
                <div className="text-center">
                  <p className="text-3xl font-bold">10+</p>
                  <p className="text-sm">Years</p>
                </div>
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&auto=format&fit=crop"
                  alt="Our work"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop"
                  alt="Craftsmanship"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white">
                <div className="text-center">
                  <p className="text-3xl font-bold">10+</p>
                  <p className="text-sm">Years</p>
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 gradient-bg1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Ethnic Boutique.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4 mt-8">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={pink}
                alt="Why choose us"
                className="rounded-2xl shadow-xl w-[600px] h-[600px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Why Choose Us
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                When you choose Ethnic Boutique, you're not just buying a garment – you're investing in
                quality, craftsmanship, and a piece of tradition. Here's what sets us apart:
              </p>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-28 gradient-bg1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The talented individuals behind every beautiful creation at Ethnic Boutique.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div> */}
                </div>
                <div className="p-6 text-center -mt-20 relative z-10 bg-white ">
                  <h3 className="text-2xl font-serif font-bold text-black mb-2">
                    {member.name}
                  </h3>
                  <p className="text-secondary/70 font-medium">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us help you find or create the perfect outfit for your special occasion.
              Get in touch with us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors inline-block"
              >
                Contact Us
              </a>
              <a
                href="/gallery"
                className="border-2 border-black text-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-colors inline-block"
              >
                View Gallery
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
