import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 98869 87278"],
      link: "tel:+919886987278"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["sandysethnic@gmail.com"],
      link: "mailto:sandysethnic@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["#120, 14th Main, 29th Cross, Jayanagar, 4th Block, Bangalore, India"],
      link: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Mon - Sat: 10:00 AM - 8:00 PM", "Sunday: Closed"],
      link: null
    }
  ]

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
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you! Whether you have a question about our collections, 
              pricing, or anything else, our team is ready to answer all your questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-secondary/10 to-accent/10 p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {info.icon}
                </div>
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  info.link && idx === 0 ? (
                    <a
                      key={idx}
                      href={info.link}
                      className="block text-gray-600 text-sm hover:text-pink-500 transition-colors"
                    >
                      {detail}
                    </a>
                  ) : (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  )
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about what you're looking for..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-secondary to-accent text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-shadow flex items-center justify-center gap-2">
                
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Visit Our Store
                </h2>
                <p className="text-gray-600 mb-6">
                  Come visit us at our boutique to experience our collection in person. 
                  Our team is here to help you find the perfect outfit.
                </p>

                {/* Map Placeholder */}
                <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709656!3d19.082177513688024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                  Book an Appointment
                </h3>
                <p className="text-gray-600 mb-4">
                  Schedule a one-on-one consultation with our design team to discuss your 
                  requirements and explore our collection.
                </p>
                <a
                  href="tel:+919876543210"
                  className="inline-block bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
                >
                  Call to Book
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions about our services.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "Do you offer customization services?",
                a: "Yes! We offer complete customization for all our designs. You can choose fabrics, colors, embroidery styles, and more to create your perfect outfit."
              },
              {
                q: "How long does it take to complete an order?",
                a: "Standard orders typically take 2-3 weeks. Custom designs may take 3-4 weeks depending on complexity. Rush orders are available with additional charges."
              },
              {
                q: "What is your return policy?",
                a: "We offer returns within 7 days of delivery if the product is unused and in original condition. Custom orders are non-returnable unless there's a manufacturing defect."
              },
              {
                q: "Do you ship internationally?",
                a: "Currently, we ship within India. International shipping is available on request for bulk orders."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Contact
