'use client';

import { useState, useEffect } from 'react';
import { Crimson_Text, Outfit } from 'next/font/google';
import { motion } from 'motion/react';
import { Menu, X, Calendar, Shield, Scale, Users, Award, MapPin, Phone, Mail, ChevronRight, Star, BookOpen, MessageCircle, Zap, Heart, Target } from 'lucide-react';

const crimson = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-crimson',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen bg-stone-50 text-stone-900 ${outfit.variable} ${crimson.variable}`}
      style={{
        fontFamily: 'var(--font-outfit)',
        '--green-primary': '#1B4D3E',
        '--gold-accent': '#D4A574',
        '--cream-bg': '#F7F5F0',
        '--dark-text': '#2D2D2D',
        '--light-border': '#E8E3DB',
      } as React.CSSProperties}
    >
      <style>{`
        .serif-display { font-family: var(--font-crimson); }
        .marquee {
          display: flex;
          overflow: hidden;
          background: var(--green-primary);
          padding: clamp(0.75rem, 2vw, 1.5rem) 0;
        }
        .marquee-content {
          display: flex;
          gap: clamp(1rem, 2vw, 2rem);
          animation: scroll 40s linear infinite;
        }
        .marquee-content span {
          font-size: clamp(0.75rem, 1.8vw, 1.125rem);
          font-weight: 700;
          color: white;
          letter-spacing: 0.5px;
          white-space: nowrap;
          padding: clamp(0.25rem, 0.75vw, 0.5rem) clamp(0.5rem, 1vw, 1rem);
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        .marquee-content span:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }
        .marquee-content:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-content-clone {
          margin-left: 2rem;
        }
      `}</style>

      {/* Navigation - Professional Modern Structure */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95'}`}>
        <div className="w-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img
              src="https://www.johneluwa.com/images/EagleLogo.png"
              alt="Law Offices of John Eluwa"
              style={{ height: 'clamp(40px, 6vw, 55px)', width: 'auto' }}
              className="object-contain"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-3 font-medium" style={{ fontSize: 'clamp(0.875rem, 1.3vw, 1rem)' }}>
            <motion.a
              href="#"
              whileHover={{ opacity: 0.6 }}
              className="px-3 py-2 relative group whitespace-nowrap"
              style={{ color: 'var(--dark-text)' }}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-accent group-hover:w-full transition-all" style={{ backgroundColor: 'var(--gold-accent)' }}></span>
            </motion.a>

            {/* Services Dropdown */}
            <div className="relative group">
              <motion.button
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
                className="px-3 py-2 flex items-center gap-2 relative whitespace-nowrap"
                style={{ color: 'var(--dark-text)' }}
              >
                Services
                <ChevronRight size={18} className={`transition-transform ${servicesDropdown ? 'rotate-90' : ''}`} />
              </motion.button>

              {/* Dropdown Menu */}
              {servicesDropdown && (
                <motion.div
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-0 w-56 bg-white border rounded-lg shadow-xl py-2"
                  style={{ borderColor: 'var(--light-border)' }}
                >
                  {[
                    { name: 'Immigration Law', icon: '🌍' },
                    { name: 'Criminal Defense', icon: '⚖️' },
                    { name: 'Traffic Violations', icon: '🚗' },
                    { name: 'Personal Injury', icon: '🛡️' }
                  ].map((service) => (
                    <motion.a
                      key={service.name}
                      href="#services"
                      className="px-4 py-3 flex items-center gap-3 hover:bg-stone-50 transition-colors"
                      whileHover={{ x: 5 }}
                      style={{ color: 'var(--dark-text)' }}
                    >
                      <span className="text-lg">{service.icon}</span>
                      <span className="font-medium text-sm">{service.name}</span>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </div>

            <motion.a
              href="#about"
              whileHover={{ opacity: 0.6 }}
              className="px-3 py-2 relative group whitespace-nowrap"
              style={{ color: 'var(--dark-text)' }}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-accent group-hover:w-full transition-all" style={{ backgroundColor: 'var(--gold-accent)' }}></span>
            </motion.a>

            <motion.a
              href="#testimonials"
              whileHover={{ opacity: 0.6 }}
              className="px-3 py-2 relative group whitespace-nowrap"
              style={{ color: 'var(--dark-text)' }}
            >
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-accent group-hover:w-full transition-all" style={{ backgroundColor: 'var(--gold-accent)' }}></span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ opacity: 0.6 }}
              className="px-3 py-2 relative group whitespace-nowrap"
              style={{ color: 'var(--dark-text)' }}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-accent group-hover:w-full transition-all" style={{ backgroundColor: 'var(--gold-accent)' }}></span>
            </motion.a>
          </div>

          {/* Desktop CTA Button */}
          <motion.button
            className="hidden lg:block px-5 py-2.5 text-white font-medium rounded-full hover:shadow-lg whitespace-nowrap"
            style={{ backgroundColor: 'var(--green-primary)', fontSize: 'clamp(0.8rem, 1vw, 0.95rem)' }}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Free Consultation
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} style={{ color: 'var(--green-primary)' }}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Slide from Right */}
        {menuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              className="fixed inset-0 bg-black lg:hidden z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              transition={{ duration: 0.2 }}
            />

            {/* Sliding Menu */}
            <motion.div
              className="fixed top-0 right-0 h-screen w-[60%] bg-white shadow-2xl lg:hidden z-50 flex flex-col overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Menu Header with Close Button */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b" style={{ borderColor: 'var(--light-border)' }}>
                <h3 className="font-semibold" style={{ color: 'var(--green-primary)', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>Menu</h3>
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-stone-100 transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={24} style={{ color: 'var(--green-primary)' }} />
                </motion.button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 p-4 sm:p-6 space-y-1">
                <motion.a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-4 text-sm font-medium hover:bg-stone-50 rounded-lg transition"
                  style={{ color: 'var(--dark-text)' }}
                  whileHover={{ x: -4 }}
                >
                  Home
                </motion.a>

                {/* Mobile Services Dropdown */}
                <div>
                  <motion.button
                    onClick={() => setServicesDropdown(!servicesDropdown)}
                    className="w-full text-left px-4 py-4 text-sm font-medium flex items-center justify-between rounded-lg hover:bg-stone-50 transition"
                    style={{ color: 'var(--dark-text)' }}
                    whileHover={{ x: -4 }}
                  >
                    Services
                    <ChevronRight size={18} className={`transition-transform ${servicesDropdown ? 'rotate-90' : ''}`} />
                  </motion.button>
                  {servicesDropdown && (
                    <motion.div
                      className="bg-stone-50 py-2 mt-1 rounded-lg overflow-hidden"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {[
                        { name: 'Immigration Law', icon: '🌍' },
                        { name: 'Criminal Defense', icon: '⚖️' },
                        { name: 'Traffic Violations', icon: '🚗' },
                        { name: 'Personal Injury', icon: '🛡️' }
                      ].map((service) => (
                        <motion.a
                          key={service.name}
                          href="#services"
                          onClick={() => setMenuOpen(false)}
                          className="block px-8 py-3 text-xs font-medium hover:opacity-70 transition flex items-center gap-2"
                          style={{ color: 'var(--dark-text)' }}
                          whileHover={{ x: -2 }}
                        >
                          <span>{service.icon}</span>
                          {service.name}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </div>

                <motion.a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-4 text-sm font-medium hover:bg-stone-50 rounded-lg transition"
                  style={{ color: 'var(--dark-text)' }}
                  whileHover={{ x: -4 }}
                >
                  About
                </motion.a>

                <motion.a
                  href="#testimonials"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-4 text-sm font-medium hover:bg-stone-50 rounded-lg transition"
                  style={{ color: 'var(--dark-text)' }}
                  whileHover={{ x: -4 }}
                >
                  Testimonials
                </motion.a>

                <motion.a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-4 text-sm font-medium hover:bg-stone-50 rounded-lg transition"
                  style={{ color: 'var(--dark-text)' }}
                  whileHover={{ x: -4 }}
                >
                  Contact
                </motion.a>
              </div>

              {/* CTA Button at Bottom */}
              <div className="p-4 sm:p-6 border-t" style={{ borderColor: 'var(--light-border)' }}>
                <motion.button
                  className="w-full py-4 text-white font-semibold rounded-full text-sm"
                  style={{ backgroundColor: 'var(--green-primary)' }}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  Free Consultation
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </nav>

      {/* Hero Section - Enhanced with Animations */}
      <section className="pt-28 pb-12 px-3 sm:px-4 md:px-6 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32" style={{ backgroundColor: 'var(--cream-bg)' }}>
        <div className="absolute inset-0 opacity-30" style={{
          background: 'linear-gradient(135deg, rgba(27,77,62,0.05) 0%, rgba(212,165,116,0.05) 100%)',
          pointerEvents: 'none'
        }}></div>

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
          <motion.div className="space-y-6 sm:space-y-8 md:space-y-10 text-center md:text-left" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-full"
              style={{ backgroundColor: 'var(--green-primary)', color: 'white' }}
              variants={itemVariants}
            >
              <Award size={14} className="sm:w-4 sm:h-4" />
              25+ Years of Excellence
            </motion.div>

            <motion.div className="space-y-2 sm:space-y-3" variants={itemVariants}>
              <h1 className="serif-display font-bold leading-tight" style={{ color: 'var(--green-primary)', fontSize: 'clamp(2rem, 7vw, 3.5rem)' }}>
                Facing Deportation?
              </h1>
              <h2 className="font-light" style={{ color: 'var(--dark-text)', fontSize: 'clamp(1.25rem, 4vw, 1.875rem)' }}>
                Get the legal protection you deserve.
              </h2>
            </motion.div>

            <motion.p className="leading-relaxed opacity-85" variants={itemVariants} style={{ color: 'var(--dark-text)', fontSize: 'clamp(0.95rem, 2vw, 1.125rem)' }}>
              Over 25 years helping families stay together. Expert immigration counsel, criminal defense, and personal injury representation.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 md:justify-start justify-center" variants={itemVariants}>
              <motion.button
                className="px-5 sm:px-8 py-3 sm:py-4 text-white font-semibold rounded-full hover:shadow-xl text-center w-full sm:w-auto"
                style={{ backgroundColor: 'var(--green-primary)', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}
                whileHover={{ y: -4 }}
                whileTap={{ y: 0 }}
              >
                Schedule Free Consultation
              </motion.button>
              <motion.button
                className="px-5 sm:px-8 py-3 sm:py-4 font-semibold rounded-full border-2 hover:opacity-70 flex items-center justify-center gap-2 w-full sm:w-auto"
                style={{ borderColor: 'var(--gold-accent)', color: 'var(--gold-accent)', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}
                whileHover={{ scale: 1.05 }}
              >
                Call Now <ChevronRight size={18} />
              </motion.button>
            </motion.div>

            <motion.div className="pt-4 sm:pt-6 md:pt-8 space-y-4 sm:space-y-6 border-t text-center md:text-left" style={{ borderColor: 'var(--light-border)' }} variants={itemVariants}>
              <div className="flex gap-4 sm:gap-6 md:gap-8 justify-center md:justify-start">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <div className="serif-display font-bold" style={{ color: 'var(--gold-accent)', fontSize: 'clamp(1.875rem, 4vw, 2.25rem)' }}>25+</div>
                  <p className="mt-1 sm:mt-2 font-bold" style={{ color: 'var(--gold-accent)', fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>Years Experience</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <div className="serif-display font-bold" style={{ color: 'var(--gold-accent)', fontSize: 'clamp(1.875rem, 4vw, 2.25rem)' }}>1000+</div>
                  <p className="mt-1 sm:mt-2 font-bold" style={{ color: 'var(--gold-accent)', fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>Cases Won</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <div className="serif-display font-bold" style={{ color: 'var(--gold-accent)', fontSize: 'clamp(1.875rem, 4vw, 2.25rem)' }}>98%</div>
                  <p className="mt-1 sm:mt-2 font-bold" style={{ color: 'var(--gold-accent)', fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>Success Rate</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="hidden md:block relative h-96 md:h-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: 'white' }}>
              <img
                src="/john.png"
                alt="Professional Attorney John Eluwa"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Trust Bar */}
      <div className="marquee" role="region" aria-label="Attorney credentials and achievements">
        <div className="marquee-content">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-2 md:gap-4 whitespace-nowrap">
              <span aria-label="Avvo 10 out of 10 Superb rating">★ Avvo 10/10 Superb ★</span>
              <span aria-label="BBB A Plus Accredited">BBB A+ Accredited ★</span>
              <span aria-label="25 plus years experience">25+ Years Experience ★</span>
              <span aria-label="Supreme Court Admitted">Supreme Court Admitted ★</span>
              <span aria-label="1000 plus cases won">1000+ Cases Won ★</span>
              <span aria-label="Free consultation available">Free Consultation ★</span>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section - Enhanced */}
      <section id="services" className="py-12 sm:py-16 md:py-24 px-3 sm:px-4 md:px-6">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            className="mb-8 sm:mb-12 md:mb-20 text-center md:text-left"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="serif-display font-bold mb-2 sm:mb-3 md:mb-4" style={{ color: 'var(--green-primary)', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Practice Areas
            </h2>
            <p className="opacity-75" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.125rem)' }}>Comprehensive legal services tailored to your situation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { icon: Users, title: 'Immigration Law', items: ['Family-based immigration', 'Employment visa sponsorship', 'Deportation defense', 'Naturalization & citizenship'] },
              { icon: Scale, title: 'Criminal Defense', items: ['Traffic violations', 'Felony & misdemeanor charges', 'Juvenile delinquency', 'Federal representation'] },
              { icon: Shield, title: 'Personal Injury', items: ['Accident claims', 'Negligence lawsuits', 'Abuse & neglect matters', 'Settlement negotiation'] }
            ].map((service, i) => (
              <motion.div
                key={i}
                className="p-6 sm:p-8 border-l-4 hover:shadow-lg text-center md:text-left"
                style={{ borderColor: 'var(--gold-accent)', backgroundColor: 'white' }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-center mb-6">
                  <service.icon size={40} style={{ color: 'var(--green-primary)' }} />
                </div>
                <h3 className="serif-display text-2xl font-bold mb-6" style={{ color: 'var(--green-primary)' }}>
                  {service.title}
                </h3>
                <ul className="space-y-4">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm opacity-85">
                      <span className="font-bold" style={{ color: 'var(--gold-accent)' }}>→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Attorney Spotlight - Enhanced */}
      <section id="about" className="py-12 sm:py-16 md:py-24 px-3 sm:px-4 md:px-6 border-b" style={{ borderColor: 'var(--light-border)' }}>
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            className="hidden md:block relative h-96"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/office.png"
                alt="Law Office of John Eluwa"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-6 sm:space-y-8 text-center md:text-left"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="serif-display font-bold mb-2 sm:mb-3 md:mb-4" style={{ color: 'var(--green-primary)', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                Meet John Eluwa, Esq.
              </h2>
              <p className="leading-relaxed opacity-85" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.125rem)' }}>
                A dedicated immigration and criminal defense attorney with 25+ years protecting families and fighting for clients' rights.
              </p>
            </div>

            <div className="space-y-6 border-t border-b" style={{ borderColor: 'var(--light-border)' }}>
              {[
                { title: 'Education & Licensing', desc: 'NC State Courts, US Federal Courts, Immigration Courts nationwide, US Supreme Court' },
                { title: 'Core Expertise', desc: 'Immigration, visa sponsorship, deportation defense, criminal representation' },
                { title: 'Mission', desc: 'Keeping families together with compassionate, aggressive legal advocacy' }
              ].map((item, i) => (
                <motion.div key={i} className="py-4" whileHover={{ x: 10 }}>
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--green-primary)' }}>{item.title}</h4>
                  <p className="text-sm opacity-85">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="px-6 py-3 font-semibold rounded-full text-white hover:shadow-lg"
              style={{ backgroundColor: 'var(--green-primary)' }}
              whileHover={{ y: -2 }}
            >
              Schedule a Meeting
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - NEW */}
      <section className="py-12 sm:py-16 md:py-24 px-3 sm:px-4 md:px-6 bg-white">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="serif-display font-bold mb-2 sm:mb-3 md:mb-4" style={{ color: 'var(--green-primary)', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Why Choose Us
            </h2>
            <p className="opacity-75" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.125rem)' }}>Our commitment to your success</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { icon: Zap, title: 'Experience', desc: '25+ years of proven legal expertise' },
              { icon: Heart, title: 'Compassion', desc: 'We care about you as a person' },
              { icon: Target, title: 'Results', desc: '98% success rate across all cases' },
              { icon: Users, title: 'Accessible', desc: 'Bilingual (English & Spanish) support' }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center p-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <motion.div whileHover={{ scale: 1.1 }} className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full" style={{ backgroundColor: 'var(--green-primary)' }}>
                    <item.icon size={48} className="mx-auto" style={{ color: 'white' }} />
                  </div>
                </motion.div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--green-primary)' }}>{item.title}</h3>
                <p className="text-sm opacity-85">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courts - Can Practice Before */}
      <section className="py-12 sm:py-16 md:py-24 px-3 sm:px-4 md:px-6 bg-stone-100">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="serif-display font-bold" style={{ color: 'var(--green-primary)', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Can Practice Before:
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            <motion.div
              className="w-full md:w-auto flex justify-center"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://www.johneluwa.com/images/sc.png"
                alt="US Supreme Court Seal"
                className="object-contain"
                style={{ height: 'clamp(120px, 30vw, 256px)', width: 'auto' }}
              />
            </motion.div>

            <motion.div
              className="w-full md:w-auto flex justify-center"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://www.johneluwa.com/images/ncsc.jpg"
                alt="North Carolina Supreme Court Seal"
                className="object-contain"
                style={{ height: 'clamp(120px, 30vw, 256px)', width: 'auto' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter - NEW */}
      <section className="py-12 sm:py-16 md:py-24 px-3 sm:px-4 md:px-6" style={{ backgroundColor: 'var(--green-primary)', color: 'white' }}>
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            {[
              { num: 1000, label: 'Cases Won' },
              { num: 25, label: 'Years Experience' },
              { num: 98, label: 'Success Rate %' },
              { num: 50, label: 'States Covered' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -80px 0px' }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
              >
                <div className="serif-display text-5xl font-bold mb-2" style={{ color: 'var(--gold-accent)' }}>
                  {stat.num}+
                </div>
                <p className="text-sm opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Expanded */}
      <section id="testimonials" className="py-12 sm:py-16 md:py-24 px-3 sm:px-4 md:px-6">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            className="mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="serif-display font-bold mb-2 sm:mb-3 md:mb-4" style={{ color: 'var(--green-primary)', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              What Clients Say
            </h2>
            <p className="opacity-75" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.125rem)' }}>Real results, real families, real trust</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { name: 'Maria Garcia', city: 'Raleigh, NC', text: 'John helped my family reunite. Professional, compassionate, and got results!' },
              { name: 'David Chen', city: 'Durham, NC', text: 'Outstanding expertise in employment visas. Made a complex process smooth.' },
              { name: 'Sarah Williams', city: 'Chapel Hill, NC', text: 'Excellent criminal defense. John fought hard and achieved a favorable outcome.' },
              { name: 'James Rodriguez', city: 'Greensboro, NC', text: 'Truly cares about his clients. Best attorney I could have asked for.' },
              { name: 'Lisa Johnson', city: 'Winston-Salem, NC', text: 'Highly professional and dedicated. Exceeded all my expectations.' },
              { name: 'Ahmed Hassan', city: 'Raleigh, NC', text: 'John\'s expertise and dedication made all the difference in my case.' }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="p-8 border"
                style={{ borderColor: 'var(--light-border)' }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" style={{ color: 'var(--gold-accent)' }} />
                  ))}
                </div>
                <p className="italic mb-8 opacity-85 text-sm">"{testimonial.text}"</p>
                <div className="border-t" style={{ borderColor: 'var(--light-border)' }}>
                  <p className="font-semibold mt-4 text-sm" style={{ color: 'var(--green-primary)' }}>{testimonial.name}</p>
                  <p className="text-xs opacity-75">{testimonial.city}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview - NEW */}
      <section className="py-12 sm:py-16 md:py-24 px-3 sm:px-4 md:px-6 bg-white">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            className="mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="serif-display font-bold mb-2 sm:mb-3 md:mb-4" style={{ color: 'var(--green-primary)', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Latest Insights
            </h2>
            <p className="opacity-75" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.125rem)' }}>Tips and guides for immigration and legal matters</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { date: 'Apr 5, 2024', title: 'Guide to Family-Based Immigration', excerpt: 'Learn the step-by-step process to sponsor family members for permanent residence and US citizenship.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop' },
              { date: 'Apr 2, 2024', title: 'Understanding Deportation Defense', excerpt: 'What to do if you\'re facing removal proceedings and how to protect your rights immediately.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop' },
              { date: 'Mar 28, 2024', title: 'Green Card FAQ', excerpt: 'Common questions about obtaining, renewing, and maintaining your precious green card status.', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&h=300&fit=crop' }
            ].map((blog, i) => (
              <motion.div
                key={i}
                className="rounded-lg overflow-hidden border hover:shadow-xl"
                style={{ borderColor: 'var(--light-border)' }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
              >
                <div className="h-48 overflow-hidden bg-stone-200 relative group">
                  <motion.img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs opacity-60 mb-2 font-semibold">{blog.date}</p>
                  <h3 className="font-bold mb-3 line-clamp-2 text-lg" style={{ color: 'var(--green-primary)' }}>{blog.title}</h3>
                  <p className="text-sm opacity-85 mb-5 leading-relaxed">{blog.excerpt}</p>
                  <motion.a href="#" className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold lg:font-bold flex items-center justify-center gap-2 inline-flex px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 lg:py-2.5 rounded-full" style={{ backgroundColor: 'var(--green-primary)', color: 'white' }} whileHover={{ y: -2, boxShadow: '0 10px 25px rgba(27, 77, 62, 0.3)' }} whileTap={{ y: 0 }}>
                    Read Full Article <ChevronRight size={16} className="md:w-5 md:h-5 lg:w-5 lg:h-5" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - NEW */}
      <section className="py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 md:mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="serif-display font-bold mb-2 md:mb-4" style={{ color: 'var(--green-primary)', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {[
              { q: 'How long does the immigration process take?', a: 'Timeline varies by case type, ranging from months to years. We\'ll provide realistic estimates.' },
              { q: 'What is the cost of legal representation?', a: 'Our fees are transparent and discussed upfront. We offer flexible payment plans.' },
              { q: 'Do you offer payment plans?', a: 'Yes, we work with clients to create affordable payment arrangements.' },
              { q: 'Can you represent me if I have a criminal record?', a: 'Absolutely. We handle complex cases involving prior convictions.' },
              { q: 'What should I bring to my consultation?', a: 'Bring relevant documents: passport, visa, birth certificate, and any legal notices.' }
            ].map((faq, i) => (
              <motion.details
                key={i}
                className="border rounded-lg cursor-pointer group"
                style={{ borderColor: 'var(--light-border)', padding: 'clamp(1rem, 2.5vw, 1.5rem)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <summary className="font-semibold flex items-center justify-between cursor-pointer select-none" style={{ color: 'var(--green-primary)', fontSize: 'clamp(0.95rem, 2vw, 1.125rem)' }}>
                  {faq.q}
                  <ChevronRight size={24} className="group-open:rotate-90 transition-transform flex-shrink-0 ml-3" />
                </summary>
                <p className="mt-3 opacity-85" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA - Enhanced */}
      <section className="py-12 sm:py-16 md:py-24 px-3 sm:px-4 md:px-6" style={{ backgroundColor: 'var(--green-primary)' }}>
        <div className="w-full max-w-5xl mx-auto text-center space-y-8 sm:space-y-10 md:space-y-12 text-white">
          <motion.div
            className="space-y-3 sm:space-y-4"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.7 }}
          >
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <Calendar className="mx-auto" style={{ color: 'var(--gold-accent)', width: 'clamp(40px, 8vw, 56px)', height: 'clamp(40px, 8vw, 56px)' }} />
            </motion.div>
            <h2 className="serif-display font-bold" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Your Future Begins
            </h2>
            <p className="font-light" style={{ fontSize: 'clamp(1.25rem, 4vw, 1.875rem)' }}>With One Call.</p>
            <p className="opacity-90" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.25rem)' }}>
              Stop stressing about your legal situation. Schedule your free consultation and let us fight for you.
            </p>
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.button
              className="px-5 sm:px-8 py-3 sm:py-4 font-semibold rounded-full text-green-900 hover:shadow-lg w-full sm:w-auto"
              style={{ backgroundColor: 'white', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}
              whileHover={{ y: -4 }}
              variants={itemVariants}
            >
              Book Online Now
            </motion.button>
            <motion.button
              className="px-5 sm:px-8 py-3 sm:py-4 font-semibold rounded-full border-2 border-white hover:bg-green-700 w-full sm:w-auto"
              style={{ color: 'white', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}
              whileHover={{ y: -4 }}
              variants={itemVariants}
            >
              Call (919) 555-0123
            </motion.button>
          </motion.div>

          <p className="opacity-75" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)' }}>Available Mon-Fri, 9am-5pm EST • Spanish interpreter available • Se Habla Español</p>
        </div>
      </section>

      {/* Contact Form Section - NEW */}
      <section id="contact" className="py-12 sm:py-16 md:py-24 px-3 sm:px-4 md:px-6 bg-white">
        <div className="w-full max-w-2xl mx-auto">
          <motion.div
            className="text-center mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="serif-display font-bold mb-2 sm:mb-3 md:mb-4" style={{ color: 'var(--green-primary)', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Get in Touch
            </h2>
            <p className="opacity-75" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.125rem)' }}>Send us a message and we'll respond within 24 hours</p>
          </motion.div>

          <motion.form
            className="space-y-4"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -80px 0px' }}
            transition={{ duration: 0.7 }}
          >
            {['Name', 'Email', 'Phone'].map((field, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <input
                  type={field === 'Email' ? 'email' : 'text'}
                  placeholder={field}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: 'var(--light-border)', '--tw-ring-color': 'var(--green-primary)' } as any}
                />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <textarea
                placeholder="Tell us about your situation"
                rows={5}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                style={{ borderColor: 'var(--light-border)', '--tw-ring-color': 'var(--green-primary)' } as any}
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full py-4 text-white font-semibold rounded-lg"
              style={{ backgroundColor: 'var(--green-primary)' }}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          <motion.div
            className="mt-12 grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -80px 0px' }}
            transition={{ duration: 0.7 }}
          >
            {[
              { icon: Users, label: 'LinkedIn', url: 'https://www.linkedin.com/company/law-offices-of-john-eluwa-pllc' },
              { icon: MessageCircle, label: 'Facebook', url: 'https://www.facebook.com/lawofficesofjohneluwa/' },
              { icon: Mail, label: 'Email', url: 'mailto:info@johneluwa.com' }
            ].map((social, i) => (
              <motion.a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="text-center cursor-pointer block" whileHover={{ y: -4 }}>
                <social.icon size={48} className="mx-auto mb-3" style={{ color: 'var(--gold-accent)' }} />
                <p className="font-semibold text-sm" style={{ color: 'var(--green-primary)' }}>{social.label}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6" style={{ backgroundColor: 'var(--green-primary)', color: 'white' }}>
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12 pb-6 sm:pb-8 md:pb-10 lg:pb-12 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div>
            <h4 className="serif-display font-bold mb-3 md:mb-4" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>John Eluwa, PLLC</h4>
            <p className="opacity-80 mb-2" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>Professional legal services since 1995</p>
            <p className="opacity-80 mt-2 md:mt-4" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>Se Habla Español</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-4" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.125rem)' }}>Practice Areas</h4>
            <ul className="space-y-2 md:space-y-3" style={{ fontSize: 'clamp(0.875rem, 1.4vw, 1.05rem)' }}>
              <li><a href="#services" className="text-white font-medium hover:text-yellow-300 hover:underline transition-all duration-300 inline-flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">Immigration Law</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a></li>
              <li><a href="#services" className="text-white font-medium hover:text-yellow-300 hover:underline transition-all duration-300 inline-flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">Criminal Defense</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a></li>
              <li><a href="#services" className="text-white font-medium hover:text-yellow-300 hover:underline transition-all duration-300 inline-flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">Personal Injury</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-4" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.125rem)' }}>Quick Links</h4>
            <ul className="space-y-2 md:space-y-3" style={{ fontSize: 'clamp(0.875rem, 1.4vw, 1.05rem)' }}>
              <li><a href="#about" className="text-white font-medium hover:text-yellow-300 hover:underline transition-all duration-300 inline-flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">About John Eluwa</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a></li>
              <li><a href="#testimonials" className="text-white font-medium hover:text-yellow-300 hover:underline transition-all duration-300 inline-flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">Testimonials</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a></li>
              <li><a href="#contact" className="text-white font-medium hover:text-yellow-300 hover:underline transition-all duration-300 inline-flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">Contact</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-4" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.125rem)' }}>Connect</h4>
            <div className="flex flex-wrap gap-3 md:gap-4 mb-4 md:mb-6" style={{ fontSize: 'clamp(0.875rem, 1.4vw, 1.05rem)' }}>
              <a href="#" className="text-white font-medium hover:text-yellow-300 hover:underline transition-all duration-300 inline-flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">LinkedIn</span>
              </a>
              <a href="#" className="text-white font-medium hover:text-yellow-300 hover:underline transition-all duration-300 inline-flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">Facebook</span>
              </a>
              <a href="#" className="text-white font-medium hover:text-yellow-300 hover:underline transition-all duration-300 inline-flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">Google</span>
              </a>
            </div>
            <div>
              <p className="font-semibold mb-3" style={{ fontSize: 'clamp(0.875rem, 1.4vw, 1.05rem)' }}>Newsletter</p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded font-medium text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all"
                style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}
              />
            </div>
          </div>
        </div>

        <div className="text-center opacity-75 space-y-0.5 sm:space-y-1 md:space-y-2" style={{ fontSize: 'clamp(0.7rem, 1vw, 0.875rem)' }}>
          <p>&copy; 2024 Law Offices of John Eluwa, PLLC. All rights reserved.</p>
          <p>This website is for informational purposes only. Not a substitute for legal advice. Prior results do not guarantee outcomes.</p>
          <p className="pt-0.5 sm:pt-1 md:pt-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            Powered by <a href="https://appwizardpro.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition font-semibold">App Wizard</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
