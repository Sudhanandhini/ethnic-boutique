import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, Heart, Shield, Award, ArrowRight, Star, Phone, Mail, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'
import pink from '../assets/pink.jpg'
import blue from "../assets/royal.jpg"
import black from "../assets/1_b.jpg"
import worker from "../assets/worker.jpg"

// Gallery images
import gallery1 from '../assets/81.jpg';
import gallery2 from '../assets/7.webp';
import gallery3 from '../assets/blck.jpg';
import gallery4 from '../assets/pink.jpg';
import gallery5 from '../assets/royal.jpg';
import gallery6 from '../assets/2_blue.jpg';

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6
];

// Testimonial images
import testimonial1 from '../assets/1.jpg';
import testimonial2 from '../assets/2.jpg';
import testimonial3 from '../assets/3.jpg';
import testimonial4 from '../assets/4.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) {
      e.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      e.email = "Invalid email";
    }
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || '',
          subject: form.subject || 'Contact from Home Page',
          message: form.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setToastMessage("Thank you for contacting us! We will get back to you soon.");
        setToastType("success");
        setShowToast(true);
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });

        setTimeout(() => setShowToast(false), 5000);
      } else {
        setToastMessage(data.message || "Something went wrong. Please try again.");
        setToastType("error");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      setToastMessage("Failed to send message. Please try again later.");
      setToastType("error");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Saree",
      description: "Our services include bridal sarees, saree customization, and more."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Lehenga",
      description: "Bridal lehengas and customized designs for your special day."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Customization",
      description: "Made-to-order designs tailored to your unique style preferences."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Blouse",
      description: "Designer blouses for every occasion and celebration."
    }
  ];

  const testimonials = [
    {
      date: "31 Jan, 2024",
      text: "Ethnic Boutique made my dream wedding dress! The craftsmanship is exquisite, and the service was exceptional. Highly recommend!",
      name: "Priya Sharma",
      location: "Bangalore",
      image: testimonial1
    },
    {
      date: "3 March, 2024",
      text: "I found the perfect lehenga at Ethnic Boutique. The attention to detail and personalized service made my bridal shopping unforgettable.",
      name: "Anjali Patel",
      location: "Mumbai",
      image: testimonial2
    },
    {
      date: "15 April, 2024",
      text: "The quality and design exceeded my expectations. Every stitch tells a story of tradition and elegance.",
      name: "Neha Kapoor",
      location: "Delhi",
      image: testimonial3
    },
    {
      date: "22 May, 2024",
      text: "Outstanding experience from start to finish. The team made me feel like royalty on my special day!",
      name: "Divya Reddy",
      location: "Hyderabad",
      image: testimonial4
    }
  ];

  const totalSlides = Math.ceil(testimonials.length / 2);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => {
          if (prev === testimonials.length - 1) {
            return 0;
          }
          return prev + 1;
        });
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-img">
        <div className="absolute top-0 right-0 hidden md:block">
          <img src="/src/assets/bg-pink.png" alt="Logo" className="w-64 lg:w-96 h-auto opacity-50" />
        </div>
        <div className="absolute top-0 left-0 hidden md:block">
          <img src="/src/assets/bg-blue.png" alt="Logo" className="w-64 lg:w-96 h-auto opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6 sm:space-y-8 text-center md:text-left"
            >
              <motion.p
                variants={fadeInUp}
                className="text-sm sm:text-base tracking-[0.15em] text-[#b28b78] font-semibold italic leading-relaxed"
              >
                Luxury redefined.
              </motion.p>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
              >
                Tradition<br />
                Meets<br />
                Modernity
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-sm sm:text-base text-gray-600 max-w-md mx-auto md:mx-0 leading-relaxed"
              >
                We are an ethnic design studio that creates a one-of-a-kind experience for your special occasion. Every piece tells a story of elegance and heritage, crafted with passion and precision.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center items-center"
            >
              <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[650px] aspect-square">
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
                className="absolute -top-5 -left-8 sm:-top-10 sm:-left-16 w-32 h-24 sm:w-56 sm:h-40 rounded-2xl overflow-hidden shadow-xl z-10"
              >
                <img
                  src={blue}
                  alt="Bridal jewelry detail"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 lg:py-35 gradient-bg1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base tracking-[0.15em] text-[#b28b78] font-semibold italic leading-relaxed mb-4"
            >
              Our range
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight"
            >
              Explore Exquisite Bridal<br />Collections For Your Dream<br />Wedding
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 text-left"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#cda89687] rounded-full flex items-center justify-center mb-4 text-gray-800 border-2 border-gray-200">
                  {feature.icon}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 mt-5 py-5">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest Designs Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12 sm:mb-16"
            >
              <motion.p
                variants={fadeInUp}
                className="text-sm sm:text-base tracking-[0.15em] text-[#b28b78] font-semibold italic leading-relaxed mb-4"
              >
                Our Art
              </motion.p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Latest Designs</h2>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
          >
            {/* First row - 2 items on mobile, 3 on desktop */}
            <motion.div
              variants={fadeInUp}
              className="rounded-3xl overflow-hidden h-60 sm:h-72"
            >
              <img
                src={blue}
                alt="Bride in red saree"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-[#f5e6e0] rounded-3xl p-6 sm:p-8 flex flex-col justify-center h-60 sm:h-72 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Silk Saree</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Crafted from the finest silk, this saree embodies timeless elegance and tradition. Perfect for your special day.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="rounded-3xl overflow-hidden h-60 sm:h-72 lg:row-span-2 lg:h-auto"
            >
              <img
                src={pink}
                alt="Woman in blue gown"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>

            {/* Second row */}
            <motion.div
              variants={fadeInUp}
              className="bg-black rounded-3xl p-6 sm:p-8 flex flex-col justify-center h-60 sm:h-72 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Bridal Lehenga</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Adorned with intricate embroidery, this lehenga exudes opulence and grace. A dream come true for every bride.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="rounded-3xl overflow-hidden h-60 sm:h-72"
            >
              <img
                src={black}
                alt="Bride with flowers"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center"
          >
            <button className="px-6 sm:px-8 py-3 border-2 border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors">
              Read More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Ethnic Essence Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute right-0 hidden lg:block">
          <img src='/src/assets/template-asset-01247b8c.png' className="w-64 h-auto opacity-30" />
        </div>
        <div className="absolute left-0 hidden lg:block">
          <img src='/src/assets/template-asset-cbc71046.png' className="w-64 h-auto opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 md:order-1"
            >
              <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] aspect-square mx-auto">
                <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src={pink}
                    alt="Craftsperson at work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -top-4 right-4 sm:-top-8 sm:right-8 w-32 h-24 sm:w-48 sm:h-32 rounded-2xl overflow-hidden shadow-xl z-20"
              >
                <img
                  src={black}
                  alt="Design sketch"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-4 left-4 sm:-bottom-8 sm:left-8 w-32 h-32 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-xl z-20"
              >
                <img
                  src={blue}
                  alt="Embroidery pattern"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 order-1 md:order-2 text-center md:text-left"
            >
              <motion.p
                variants={fadeInUp}
                className="text-sm sm:text-base tracking-[0.15em] text-[#b28b78] font-semibold italic leading-relaxed"
              >
                Our Story
              </motion.p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Ethnic Essence
              </h2>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Crafted with Passion
              </h3>

              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                At Ethnic Boutique, we believe in celebrating the rich heritage of Indian craftsmanship. Each design reflects our dedication to quality, elegance, and the timeless beauty of tradition.
              </p>

              <button className="mt-6 px-6 sm:px-8 py-3 border-2 border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors">
                Shop Now
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base tracking-[0.15em] text-[#b28b78] font-semibold italic pb-4 leading-relaxed"
            >
              Our Work
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Our simple and efficient process ensures you get the perfect outfit for your special occasion.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-12"
          >
            <img
              src={worker}
              alt="Our team at work"
              className="w-full h-60 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-xl"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            {[
              { step: "01", title: "Choose Your Style", desc: "Browse our collection and select your favorite design" },
              { step: "02", title: "Customize", desc: "Work with our designers to personalize your outfit" },
              { step: "03", title: "Perfect Fit", desc: "We ensure every piece fits you perfectly" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#f5e6e0] rounded-full flex items-center justify-center mx-auto mb-4 text-black text-xl sm:text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Aari Work Section */}
      <section className="py-16 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1 text-center md:text-left"
            >
              <motion.p
                variants={fadeInUp}
                className="text-sm sm:text-base tracking-[0.15em] text-[#b28b78] font-semibold italic pb-4 leading-relaxed"
              >
                Our Work
              </motion.p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Aari Work
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                Aari work is a traditional form of embroidery that originated in India. This intricate
                craft involves creating beautiful patterns using a specialized hooked needle called an
                'aari'. Our skilled artisans use this ancient technique to create stunning designs that
                add elegance and sophistication to every garment.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">
                Each piece featuring aari work is a masterpiece, taking hours of meticulous craftsmanship
                to complete. The delicate threadwork, often embellished with beads, sequins, and stones,
                creates a rich texture and depth that makes our garments truly unique.
              </p>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 text-black font-medium hover:gap-4 transition-all"
              >
                View Collection
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-1 md:order-2"
            >
              <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] aspect-square mx-auto">
                <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src={pink}
                    alt="Craftsperson at work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -top-4 right-4 sm:-top-8 sm:right-8 w-32 h-24 sm:w-48 sm:h-32 rounded-2xl overflow-hidden shadow-xl z-20"
              >
                <img
                  src={black}
                  alt="Design sketch"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-4 left-4 sm:-bottom-8 sm:left-8 w-32 h-32 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-xl z-20"
              >
                <img
                  src={blue}
                  alt="Embroidery pattern"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base tracking-[0.15em] text-[#b28b78] font-semibold italic pb-4 leading-relaxed"
            >
              Our Gallery
            </motion.p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Image Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Explore our stunning collection of ethnic wear through these beautiful images.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
          >
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer aspect-square"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-8 sm:mt-12"
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-black text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base"
            >
              View All Gallery
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - RESPONSIVE: 1 on Mobile, 2 on Desktop */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.p
              variants={fadeInUp}
              className="text-sm tracking-[0.2em] text-[#b28b78] font-medium italic mb-3"
            >
              Love Us
            </motion.p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
              Happy Customers Say
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
              Discover why brides choose Ethnic Boutique. Read firsthand experiences and let their stories inspire your perfect bridal journey.
            </p>
          </motion.div>

          {/* Slider Container */}
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden">
              {/* Mobile: Shows 1 at a time, Desktop: Shows 2 at a time */}
              <motion.div
                animate={{
                  x: `calc(-${currentSlide * 100}%)`
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="flex"
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/2 flex-shrink-0 px-2 sm:px-4"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 sm:p-8 lg:p-10 h-full"
                    >
                      {/* Date */}
                      <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 font-medium">
                        {testimonial.date}
                      </p>

                      {/* Testimonial Text */}
                      <p className="text-gray-900 text-lg sm:text-xl lg:text-2xl font-bold mb-8 sm:mb-10 leading-tight">
                        {testimonial.text}
                      </p>

                      {/* User Info */}
                      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                        <div>
                          <p className="font-bold text-gray-900 text-base sm:text-lg">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-600 font-medium">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-12 sm:mt-16">
              <button
                onClick={() => {
                  setCurrentSlide((prev) => {
                    if (prev === 0) return testimonials.length - 1;
                    return prev - 1;
                  });
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 5000);
                }}
                className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:bg-gray-50 transition-all border border-gray-200"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => {
                  setCurrentSlide((prev) => {
                    if (prev === testimonials.length - 1) return 0;
                    return prev + 1;
                  });
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 5000);
                }}
                className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:bg-gray-50 transition-all border border-gray-200"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Progress Indicator Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setIsPaused(true);
                    setTimeout(() => setIsPaused(false), 5000);
                  }}
                  className={`transition-all duration-300 rounded-full ${currentSlide === index
                    ? 'w-8 sm:w-10 h-2 sm:h-2.5 bg-gray-900'
                    : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Contact Form Section */}
      <section className="py-12 sm:py-20 relative overflow-hidden">
        <div className="absolute top-10 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-pink-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200 rounded-full blur-3xl opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 order-2 md:order-1"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                Get In Touch
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full bg-gray-100 border-0 rounded-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-secondary placeholder-gray-500 disabled:opacity-50"
                    placeholder="Your Name *"
                  />
                  {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-2 ml-4">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full bg-gray-100 border-0 rounded-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-secondary placeholder-gray-500 disabled:opacity-50"
                    placeholder="Your Email *"
                  />
                  {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-2 ml-4">{errors.email}</p>}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full bg-gray-100 border-0 rounded-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-secondary placeholder-gray-500 disabled:opacity-50"
                    placeholder="Phone Number (Optional)"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full bg-gray-100 border-0 rounded-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-secondary placeholder-gray-500 disabled:opacity-50"
                    placeholder="Subject (Optional)"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    rows="3"
                    className="w-full bg-gray-100 border-0 rounded-3xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-secondary placeholder-gray-500 resize-none disabled:opacity-50"
                    placeholder="Your Message *"
                  />
                  {errors.message && <p className="text-red-500 text-xs sm:text-sm mt-2 ml-4">{errors.message}</p>}
                </div>

                <div className="flex justify-center pt-2 sm:pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-black text-white px-8 sm:px-12 py-3 rounded-full hover:bg-gray-800 transition-all font-medium uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 order-1 md:order-2 text-center md:text-left"
            >
              <motion.p
                variants={fadeInUp}
                className="text-sm sm:text-base tracking-[0.15em] text-[#b28b78] font-semibold italic leading-relaxed"
              >
                Get In Touch
              </motion.p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Contact With Us
              </h2>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                We'd love to hear from you! Reach out for inquiries, collaborations, or to schedule a consultation with our bridal experts.
              </p>

              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#f5e6e0] rounded-full flex items-center justify-center text-black flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-light text-sm sm:text-base lg:text-lg">+91 98869 87278</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#f5e6e0] rounded-full flex items-center justify-center text-black flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-light text-sm sm:text-base lg:text-lg">#120, 14th Main, 29th Cross, Jayanagar, 4th Block, Bangalore, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#f5e6e0] rounded-full flex items-center justify-center text-black flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-light text-sm sm:text-base lg:text-lg">sandysethnic@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Toast Notification */}
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 ${toastType === 'success'
              ? 'bg-green-600'
              : 'bg-red-600'
              } text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-2xl z-50 flex items-center gap-2 sm:gap-3 max-w-sm`}
          >
            {toastType === 'success' ? (
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            <span className="font-medium text-sm sm:text-base">{toastMessage}</span>
          </motion.div>
        )}
      </section>
    </div>
  )
}

export default Home