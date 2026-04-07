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
          padding: 1rem 0;
        }
        .marquee-content {
          display: flex;
          gap: 2rem;
          animation: scroll 30s linear infinite;
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

      {/* Navigation - Enhanced */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95'}`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <motion.div
            className="serif-display text-2xl font-bold"
            style={{ color: 'var(--green-primary)' }}
            whileHover={{ scale: 1.05 }}
          >
            John Eluwa
          </motion.div>

          <div className="hidden md:flex gap-12 text-sm font-medium">
            {['Services', 'About', 'Testimonials', 'Contact'].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{ opacity: 0.6 }}
                className="relative group"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-accent group-hover:w-full transition-all" style={{ backgroundColor: 'var(--gold-accent)' }}></span>
              </motion.a>
            ))}
          </div>

          <motion.button
            className="hidden md:block px-6 py-2.5 text-white font-medium text-sm rounded-full hover:shadow-lg"
            style={{ backgroundColor: 'var(--green-primary)' }}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Free Consultation
          </motion.button>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} style={{ color: 'var(--green-primary)' }}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <motion.div
            className="md:hidden bg-white border-t"
            style={{ borderColor: 'var(--light-border)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="p-6 space-y-4">
              {['Services', 'About', 'Testimonials', 'Contact'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block text-sm font-medium hover:opacity-60">
                  {link}
                </a>
              ))}
              <motion.button
                className="w-full py-3 text-white font-medium rounded-full text-sm"
                style={{ backgroundColor: 'var(--green-primary)' }}
                whileHover={{ y: -2 }}
              >
                Free Consultation
              </motion.button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section - Enhanced with Animations */}
      <section className="pt-40 pb-24 px-6 md:pt-48 md:pb-32" style={{ backgroundColor: 'var(--cream-bg)' }}>
        <div className="absolute inset-0 opacity-30" style={{
          background: 'linear-gradient(135deg, rgba(27,77,62,0.05) 0%, rgba(212,165,116,0.05) 100%)',
          pointerEvents: 'none'
        }}></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div className="space-y-10" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full"
              style={{ backgroundColor: 'var(--green-primary)', color: 'white' }}
              variants={itemVariants}
            >
              <Award size={16} />
              25+ Years of Excellence
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <h1 className="serif-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" style={{ color: 'var(--green-primary)' }}>
                Facing Deportation?
              </h1>
              <h2 className="text-3xl md:text-4xl font-light" style={{ color: 'var(--dark-text)' }}>
                Get the legal protection you deserve.
              </h2>
            </motion.div>

            <motion.p className="text-lg leading-relaxed opacity-85 max-w-lg" variants={itemVariants} style={{ color: 'var(--dark-text)' }}>
              Over 25 years helping families stay together. Expert immigration counsel, criminal defense, and personal injury representation.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 pt-4" variants={itemVariants}>
              <motion.button
                className="px-8 py-4 text-white font-semibold rounded-full hover:shadow-xl text-center"
                style={{ backgroundColor: 'var(--green-primary)' }}
                whileHover={{ y: -4 }}
                whileTap={{ y: 0 }}
              >
                Schedule Free Consultation
              </motion.button>
              <motion.button
                className="px-8 py-4 font-semibold rounded-full border-2 hover:opacity-70 flex items-center justify-center gap-2"
                style={{ borderColor: 'var(--gold-accent)', color: 'var(--gold-accent)' }}
                whileHover={{ scale: 1.05 }}
              >
                Call Now <ChevronRight size={18} />
              </motion.button>
            </motion.div>

            <motion.div className="pt-8 space-y-6 border-t" style={{ borderColor: 'var(--light-border)' }} variants={itemVariants}>
              <div className="flex gap-8">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <div className="serif-display text-4xl font-bold" style={{ color: 'var(--gold-accent)' }}>25+</div>
                  <p className="text-sm mt-2 opacity-75">Years Experience</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <div className="serif-display text-4xl font-bold" style={{ color: 'var(--gold-accent)' }}>1000+</div>
                  <p className="text-sm mt-2 opacity-75">Cases Won</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <div className="serif-display text-4xl font-bold" style={{ color: 'var(--gold-accent)' }}>98%</div>
                  <p className="text-sm mt-2 opacity-75">Success Rate</p>
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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop"
                alt="Professional Attorney"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Trust Bar */}
      <div className="marquee">
        <div className="marquee-content">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 whitespace-nowrap">
              <span className="font-semibold" style={{ color: 'var(--gold-accent)' }}>★ Avvo 10/10 Superb ★</span>
              <span className="font-semibold" style={{ color: 'var(--gold-accent)' }}>BBB A+ Accredited ★</span>
              <span className="font-semibold" style={{ color: 'var(--gold-accent)' }}>25+ Years Experience ★</span>
              <span className="font-semibold" style={{ color: 'var(--gold-accent)' }}>Supreme Court Admitted ★</span>
              <span className="font-semibold" style={{ color: 'var(--gold-accent)' }}>1000+ Cases Won ★</span>
              <span className="font-semibold" style={{ color: 'var(--gold-accent)' }}>Free Consultation ★</span>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section - Enhanced */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="serif-display text-5xl md:text-6xl font-bold mb-4" style={{ color: 'var(--green-primary)' }}>
              Practice Areas
            </h2>
            <p className="text-lg opacity-75 max-w-lg">Comprehensive legal services tailored to your situation</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Immigration Law', items: ['Family-based immigration', 'Employment visa sponsorship', 'Deportation defense', 'Naturalization & citizenship'] },
              { icon: Scale, title: 'Criminal Defense', items: ['Traffic violations', 'Felony & misdemeanor charges', 'Juvenile delinquency', 'Federal representation'] },
              { icon: Shield, title: 'Personal Injury', items: ['Accident claims', 'Negligence lawsuits', 'Abuse & neglect matters', 'Settlement negotiation'] }
            ].map((service, i) => (
              <motion.div
                key={i}
                className="p-8 border-l-4 hover:shadow-lg"
                style={{ borderColor: 'var(--gold-accent)', backgroundColor: 'white' }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <service.icon size={40} style={{ color: 'var(--green-primary)' }} className="mb-6" />
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

      {/* Why Choose Us - NEW */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="serif-display text-5xl md:text-6xl font-bold mb-4" style={{ color: 'var(--green-primary)' }}>
              Why Choose Us
            </h2>
            <p className="text-lg opacity-75">Our commitment to your success</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
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
                <motion.div whileHover={{ scale: 1.1 }} className="mb-4">
                  <item.icon size={48} className="mx-auto" style={{ color: 'var(--gold-accent)' }} />
                </motion.div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--green-primary)' }}>{item.title}</h3>
                <p className="text-sm opacity-85">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Attorney Spotlight - Enhanced */}
      <section id="about" className="py-24 px-6 border-b" style={{ borderColor: 'var(--light-border)' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="hidden md:block relative h-96"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                alt="John Eluwa"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="serif-display text-5xl md:text-6xl font-bold mb-4" style={{ color: 'var(--green-primary)' }}>
                Meet John Eluwa, Esq.
              </h2>
              <p className="text-lg leading-relaxed opacity-85">
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

      {/* Stats Counter - NEW */}
      <section className="py-24 px-6" style={{ backgroundColor: 'var(--green-primary)', color: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
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
      <section id="testimonials" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="serif-display text-5xl md:text-6xl font-bold mb-4" style={{ color: 'var(--green-primary)' }}>
              What Clients Say
            </h2>
            <p className="text-lg opacity-75">Real results, real families, real trust</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="serif-display text-5xl md:text-6xl font-bold mb-4" style={{ color: 'var(--green-primary)' }}>
              Latest Insights
            </h2>
            <p className="text-lg opacity-75">Tips and guides for immigration and legal matters</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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
                whileHover={{ y: -8, shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
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
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="serif-display text-5xl md:text-6xl font-bold mb-4" style={{ color: 'var(--green-primary)' }}>
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: 'How long does the immigration process take?', a: 'Timeline varies by case type, ranging from months to years. We\'ll provide realistic estimates.' },
              { q: 'What is the cost of legal representation?', a: 'Our fees are transparent and discussed upfront. We offer flexible payment plans.' },
              { q: 'Do you offer payment plans?', a: 'Yes, we work with clients to create affordable payment arrangements.' },
              { q: 'Can you represent me if I have a criminal record?', a: 'Absolutely. We handle complex cases involving prior convictions.' },
              { q: 'What should I bring to my consultation?', a: 'Bring relevant documents: passport, visa, birth certificate, and any legal notices.' }
            ].map((faq, i) => (
              <motion.details
                key={i}
                className="border rounded-lg p-4 cursor-pointer group"
                style={{ borderColor: 'var(--light-border)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <summary className="font-semibold flex items-center justify-between" style={{ color: 'var(--green-primary)' }}>
                  {faq.q}
                  <ChevronRight size={20} className="group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-3 opacity-85 text-sm">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA - Enhanced */}
      <section className="py-24 px-6" style={{ backgroundColor: 'var(--green-primary)' }}>
        <div className="max-w-5xl mx-auto text-center space-y-12 text-white">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.7 }}
          >
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <Calendar size={56} className="mx-auto" style={{ color: 'var(--gold-accent)' }} />
            </motion.div>
            <h2 className="serif-display text-5xl md:text-6xl font-bold">
              Your Future Begins
            </h2>
            <p className="text-3xl font-light">With One Call.</p>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Stop stressing about your legal situation. Schedule your free consultation and let us fight for you.
            </p>
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.button
              className="px-8 py-4 font-semibold rounded-full text-green-900 hover:shadow-lg"
              style={{ backgroundColor: 'white' }}
              whileHover={{ y: -4 }}
              variants={itemVariants}
            >
              Book Online Now
            </motion.button>
            <motion.button
              className="px-8 py-4 font-semibold rounded-full border-2 border-white hover:bg-green-700"
              style={{ color: 'white' }}
              whileHover={{ y: -4 }}
              variants={itemVariants}
            >
              Call (919) 555-0123
            </motion.button>
          </motion.div>

          <p className="text-sm opacity-75">Available Mon-Fri, 9am-5pm EST • Spanish interpreter available • Se Habla Español</p>
        </div>
      </section>

      {/* Contact Form Section - NEW */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="serif-display text-5xl md:text-6xl font-bold mb-4" style={{ color: 'var(--green-primary)' }}>
              Get in Touch
            </h2>
            <p className="text-lg opacity-75">Send us a message and we'll respond within 24 hours</p>
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
      <footer className="py-16 px-6" style={{ backgroundColor: 'var(--green-primary)', color: 'white' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div>
            <h4 className="serif-display text-xl font-bold mb-4">John Eluwa, PLLC</h4>
            <p className="text-sm opacity-80">Professional legal services since 1995</p>
            <p className="text-sm opacity-80 mt-4">Se Habla Español</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Practice Areas</h4>
            <ul className="text-sm space-y-2 opacity-80">
              <li><a href="#services" className="hover:opacity-100 transition">Immigration Law</a></li>
              <li><a href="#services" className="hover:opacity-100 transition">Criminal Defense</a></li>
              <li><a href="#services" className="hover:opacity-100 transition">Personal Injury</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="text-sm space-y-2 opacity-80">
              <li><a href="#about" className="hover:opacity-100 transition">About John Eluwa</a></li>
              <li><a href="#testimonials" className="hover:opacity-100 transition">Testimonials</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Connect</h4>
            <div className="flex gap-4 text-sm opacity-80">
              <a href="#" className="hover:opacity-100 transition">LinkedIn</a>
              <a href="#" className="hover:opacity-100 transition">Facebook</a>
              <a href="#" className="hover:opacity-100 transition">Google</a>
            </div>
            <div className="mt-6">
              <p className="text-sm font-semibold mb-2">Newsletter</p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded text-sm text-black"
              />
            </div>
          </div>
        </div>

        <div className="text-center text-xs opacity-75 space-y-2">
          <p>&copy; 2024 Law Offices of John Eluwa, PLLC. All rights reserved.</p>
          <p>This website is for informational purposes only. Not a substitute for legal advice. Prior results do not guarantee outcomes.</p>
          <p className="pt-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            Powered by <a href="https://appwizardpro.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition font-semibold">App Wizard</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
