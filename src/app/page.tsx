'use client';

import { useState } from "react";
import { Crimson_Text, Outfit } from 'next/font/google';
import { Menu, X, Calendar, Shield, Scale, Users, Award, MapPin, Phone, Mail, ChevronRight } from "lucide-react";

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

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

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
      {/* CSS for Color System */}
      <style>{`
        .serif-display { font-family: var(--font-crimson); }
        .sans-body { font-family: var(--font-outfit); }
        * { transition: all 0.2s ease; }
      `}</style>

      {/* Navigation - Fixed, Minimal */}
      <nav className="fixed w-full bg-white/98 backdrop-blur-sm z-50 border-b" style={{ borderColor: 'var(--light-border)' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Logo */}
          <div className="serif-display text-2xl font-bold" style={{ color: 'var(--green-primary)' }}>
            John Eluwa
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12 text-sm font-medium">
            <a href="#services" className="hover:opacity-60">Services</a>
            <a href="#about" className="hover:opacity-60">About</a>
            <a href="#testimonials" className="hover:opacity-60">Testimonials</a>
            <a href="#contact" className="hover:opacity-60">Contact</a>
          </div>

          {/* CTA Button */}
          <button
            className="hidden md:block px-6 py-2.5 text-white font-medium text-sm rounded-full hover:shadow-lg transform hover:-translate-y-0.5"
            style={{ backgroundColor: 'var(--gold-accent)', color: 'white' }}
          >
            Free Consultation
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} style={{ color: 'var(--green-primary)' }}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t" style={{ borderColor: 'var(--light-border)' }}>
            <div className="p-6 space-y-4">
              <a href="#services" className="block text-sm font-medium hover:opacity-60">Services</a>
              <a href="#about" className="block text-sm font-medium hover:opacity-60">About</a>
              <a href="#testimonials" className="block text-sm font-medium hover:opacity-60">Testimonials</a>
              <a href="#contact" className="block text-sm font-medium hover:opacity-60">Contact</a>
              <button
                className="w-full py-3 text-white font-medium rounded-full text-sm"
                style={{ backgroundColor: 'var(--gold-accent)' }}
              >
                Free Consultation
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Asymmetric Layout */}
      <section className="pt-40 pb-24 px-6 md:pt-48 md:pb-32" style={{ backgroundColor: 'var(--cream-bg)' }}>
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          background: 'linear-gradient(135deg, rgba(27,77,62,0.05) 0%, rgba(212,165,116,0.05) 100%)',
          pointerEvents: 'none'
        }}></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left: Content (Asymmetric - takes less space on desktop) */}
          <div className="space-y-10">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full"
              style={{ backgroundColor: 'var(--green-primary)', color: 'white' }}
            >
              <Award size={16} />
              25+ Years of Excellence
            </div>

            {/* Main Headline - Serif Display */}
            <div className="space-y-4">
              <h1 className="serif-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" style={{ color: 'var(--green-primary)' }}>
                Facing Deportation?
              </h1>
              <h2 className="text-3xl md:text-4xl font-light" style={{ color: 'var(--dark-text)' }}>
                Get the legal protection you deserve.
              </h2>
            </div>

            {/* Supporting Copy */}
            <p className="text-lg leading-relaxed opacity-85 max-w-lg" style={{ color: 'var(--dark-text)' }}>
              Over 25 years helping families stay together. Expert immigration counsel, criminal defense, and personal injury representation across North Carolina and federal courts.
            </p>

            {/* CTAs - Asymmetric Placement */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                className="px-8 py-4 text-white font-semibold rounded-full hover:shadow-xl transform hover:-translate-y-1 text-center"
                style={{ backgroundColor: 'var(--gold-accent)' }}
              >
                Schedule Free Consultation
              </button>
              <button
                className="px-8 py-4 font-semibold rounded-full border-2 hover:opacity-70 flex items-center justify-center gap-2"
                style={{ borderColor: 'var(--green-primary)', color: 'var(--green-primary)' }}
              >
                Call Now <ChevronRight size={18} />
              </button>
            </div>

            {/* Stats - Minimal, Asymmetric */}
            <div className="pt-8 space-y-6 border-t" style={{ borderColor: 'var(--light-border)' }}>
              <div className="flex gap-8">
                <div>
                  <div className="serif-display text-4xl font-bold" style={{ color: 'var(--gold-accent)' }}>25+</div>
                  <p className="text-sm mt-2 opacity-75">Years Experience</p>
                </div>
                <div>
                  <div className="serif-display text-4xl font-bold" style={{ color: 'var(--gold-accent)' }}>1000+</div>
                  <p className="text-sm mt-2 opacity-75">Cases Won</p>
                </div>
                <div>
                  <div className="serif-display text-4xl font-bold" style={{ color: 'var(--gold-accent)' }}>98%</div>
                  <p className="text-sm mt-2 opacity-75">Success Rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Hero Image (Asymmetric - overlapping design) */}
          <div className="hidden md:block relative h-96 md:h-full">
            {/* Decorative element behind image */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                backgroundColor: 'var(--green-primary)',
                transform: 'translate(20px, 20px)',
                zIndex: 0
              }}
            ></div>

            {/* Main image container */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl" style={{ zIndex: 1 }}>
              <img
                src="https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=600&h=600&fit=crop"
                alt="Professional attorney John Eluwa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Minimal, Gold Accents */}
      <section className="py-16 px-6 border-b" style={{ borderColor: 'var(--light-border)' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <Award size={40} className="mx-auto mb-4" style={{ color: 'var(--gold-accent)' }} />
            <p className="font-semibold text-sm" style={{ color: 'var(--green-primary)' }}>Avvo 10/10</p>
            <p className="text-xs mt-1 opacity-75">Superb Rating</p>
          </div>
          <div className="text-center">
            <Shield size={40} className="mx-auto mb-4" style={{ color: 'var(--gold-accent)' }} />
            <p className="font-semibold text-sm" style={{ color: 'var(--green-primary)' }}>BBB Accredited</p>
            <p className="text-xs mt-1 opacity-75">A+ Rating</p>
          </div>
          <div className="text-center">
            <Scale size={40} className="mx-auto mb-4" style={{ color: 'var(--gold-accent)' }} />
            <p className="font-semibold text-sm" style={{ color: 'var(--green-primary)' }}>US Supreme Court</p>
            <p className="text-xs mt-1 opacity-75">Admitted</p>
          </div>
          <div className="text-center">
            <Users size={40} className="mx-auto mb-4" style={{ color: 'var(--gold-accent)' }} />
            <p className="font-semibold text-sm" style={{ color: 'var(--green-primary)' }}>All NC Courts</p>
            <p className="text-xs mt-1 opacity-75">Licensed</p>
          </div>
        </div>
      </section>

      {/* Services Section - Minimal Cards with Left Border Accents */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <h2 className="serif-display text-5xl md:text-6xl font-bold mb-4" style={{ color: 'var(--green-primary)' }}>
              Practice Areas
            </h2>
            <p className="text-lg opacity-75 max-w-lg">Comprehensive legal services tailored to your situation</p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Immigration Law */}
            <div
              className="p-8 border-l-4 hover:shadow-lg"
              style={{
                borderColor: 'var(--gold-accent)',
                backgroundColor: 'white'
              }}
            >
              <div className="mb-6">
                <Users size={40} style={{ color: 'var(--green-primary)' }} />
              </div>
              <h3 className="serif-display text-2xl font-bold mb-6" style={{ color: 'var(--green-primary)' }}>
                Immigration Law
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm opacity-85">
                  <span className="font-bold" style={{ color: 'var(--gold-accent)' }}>→</span>
                  <span>Family-based immigration & sponsorship</span>
                </li>
                <li className="flex gap-3 text-sm opacity-85">
                  <span className="font-bold" style={{ color: 'var(--gold-accent)' }}>→</span>
                  <span>Employment visa & green card sponsorship</span>
                </li>
                <li className="flex gap-3 text-sm opacity-85">
                  <span className="font-bold" style={{ color: 'var(--gold-accent)' }}>→</span>
                  <span>Deportation & removal defense</span>
                </li>
                <li className="flex gap-3 text-sm opacity-85">
                  <span className="font-bold" style={{ color: 'var(--gold-accent)' }}>→</span>
                  <span>Naturalization & citizenship</span>
                </li>
              </ul>
            </div>

            {/* Criminal Defense */}
            <div
              className="p-8 border-l-4 hover:shadow-lg"
              style={{
                borderColor: 'var(--gold-accent)',
                backgroundColor: 'white'
              }}
            >
              <div className="mb-6">
                <Scale size={40} style={{ color: 'var(--green-primary)' }} />
              </div>
              <h3 className="serif-display text-2xl font-bold mb-6" style={{ color: 'var(--green-primary)' }}>
                Criminal Defense
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm opacity-85">
                  <span className="font-bold" style={{ color: 'var(--gold-accent)' }}>→</span>
                  <span>Traffic violations & driving offenses</span>
                </li>
                <li className="flex gap-3 text-sm opacity-85">
                  <span className="font-bold" style={{ color: 'var(--gold-accent)' }}>→</span>
                  <span>Felony & misdemeanor charges</span>
                </li>
                <li className="flex gap-3 text-sm opacity-85">
                  <span className="font-bold" style={{ color: 'var(--gold-accent)' }}>→</span>
                  <span>Juvenile delinquency cases</span>
                </li>
                <li className="flex gap-3 text-sm opacity-85">
                  <span className="font-bold" style={{ color: 'var(--gold-accent)' }}>→</span>
                  <span>Federal & state court representation</span>
                </li>
              </ul>
            </div>

            {/* Personal Injury & Other */}
            <div
              className="p-8 border-l-4 hover:shadow-lg"
              style={{
                borderColor: 'var(--gold-accent)',
                backgroundColor: 'white'
              }}
            >
              <div className="mb-6">
                <Shield size={40} style={{ color: 'var(--green-primary)' }} />
              </div>
              <h3 className="serif-display text-2xl font-bold mb-6" style={{ color: 'var(--green-primary)' }}>
                Personal Injury & Family
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm opacity-85">
                  <span className="font-bold" style={{ color: 'var(--gold-accent)' }}>→</span>
                  <span>Accident & injury claims</span>
                </li>
                <li className="flex gap-3 text-sm opacity-85">
                  <span className="font-bold" style={{ color: 'var(--gold-accent)' }}>→</span>
                  <span>Negligence & liability cases</span>
                </li>
                <li className="flex gap-3 text-sm opacity-85">
                  <span className="font-bold" style={{ color: 'var(--gold-accent)' }}>→</span>
                  <span>Abuse & neglect protection</span>
                </li>
                <li className="flex gap-3 text-sm opacity-85">
                  <span className="font-bold" style={{ color: 'var(--gold-accent)' }}>→</span>
                  <span>Settlement negotiation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Attorney Spotlight - Asymmetric Layout */}
      <section id="about" className="py-24 px-6 border-b" style={{ borderColor: 'var(--light-border)' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image - Left, Overlapping Design */}
          <div className="hidden md:block relative h-96">
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                backgroundColor: 'var(--gold-accent)',
                transform: 'translate(-20px, -20px)',
                zIndex: 0
              }}
            ></div>
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl" style={{ zIndex: 1 }}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                alt="John Eluwa, Attorney at Law"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content - Right */}
          <div className="space-y-8">
            <div>
              <h2 className="serif-display text-5xl md:text-6xl font-bold mb-4" style={{ color: 'var(--green-primary)' }}>
                Meet John Eluwa, Esq.
              </h2>
              <p className="text-lg leading-relaxed opacity-85">
                A dedicated immigration and criminal defense attorney with 25+ years of experience protecting families and fighting for clients' rights. John earned his J.D. from North Carolina Central University School of Law and graduated Cum Laude from Shaw University.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="space-y-6 border-t border-b" style={{ borderColor: 'var(--light-border)' }} >
              <div className="pt-6">
                <h4 className="font-semibold mb-2" style={{ color: 'var(--green-primary)' }}>Education & Licensing</h4>
                <p className="text-sm opacity-85">Admitted to NC State Courts, US Federal District Court (EDNC), all Immigration Courts nationwide, and the US Supreme Court</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--green-primary)' }}>Core Expertise</h4>
                <p className="text-sm opacity-85">Family-based immigration, employment visa sponsorship, deportation defense, and comprehensive criminal representation</p>
              </div>
              <div className="pb-6">
                <h4 className="font-semibold mb-2" style={{ color: 'var(--green-primary)' }}>Mission</h4>
                <p className="text-sm opacity-85">Dedicated to keeping families together and protecting clients' rights with compassionate, aggressive legal advocacy</p>
              </div>
            </div>

            <button
              className="px-6 py-3 font-semibold rounded-full text-white"
              style={{ backgroundColor: 'var(--gold-accent)' }}
            >
              View Full Biography
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials - Minimal Social Proof */}
      <section id="testimonials" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <h2 className="serif-display text-5xl md:text-6xl font-bold mb-4" style={{ color: 'var(--green-primary)' }}>
              What Clients Say
            </h2>
            <p className="text-lg opacity-75">Real results, real families, real trust</p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Garcia",
                city: "Raleigh, NC",
                text: "John helped my family reunite. He was professional, compassionate, and got results. We can't thank him enough for fighting for us."
              },
              {
                name: "David Chen",
                city: "Durham, NC",
                text: "Outstanding expertise in employment visas. John made a complex process smooth and stress-free. He truly cares about his clients."
              },
              {
                name: "Sarah Williams",
                city: "Chapel Hill, NC",
                text: "Excellent criminal defense. John fought hard, understood my situation, and achieved a favorable outcome. Highly recommended."
              }
            ].map((testimonial, i) => (
              <div key={i} className="p-8 border" style={{ borderColor: 'var(--light-border)' }}>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} style={{ color: 'var(--gold-accent)' }}>★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="italic mb-8 opacity-85 leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>

                {/* Name & Location */}
                <div className="border-t" style={{ borderColor: 'var(--light-border)' }}>
                  <p className="font-semibold mt-4 text-sm" style={{ color: 'var(--green-primary)' }}>
                    {testimonial.name}
                  </p>
                  <p className="text-xs opacity-75">{testimonial.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA - High Conversion */}
      <section className="py-24 px-6" style={{ backgroundColor: 'var(--green-primary)' }}>
        <div className="max-w-5xl mx-auto text-center space-y-12 text-white">
          <div className="space-y-4">
            <Calendar size={56} className="mx-auto" style={{ color: 'var(--gold-accent)' }} />
            <h2 className="serif-display text-5xl md:text-6xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Schedule your free, confidential consultation today. We'll review your case and discuss your options—no obligation.
            </p>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-4 font-semibold rounded-full text-green-900 hover:shadow-lg transform hover:-translate-y-1"
              style={{ backgroundColor: 'white' }}
            >
              Book Online Now
            </button>
            <button
              className="px-8 py-4 font-semibold rounded-full border-2 border-white hover:bg-green-700"
              style={{ color: 'white' }}
            >
              Call (919) 555-0123
            </button>
          </div>

          {/* Trust Line */}
          <p className="text-sm opacity-75">Available Mon-Fri, 9am-5pm EST • Spanish interpreter available</p>
        </div>
      </section>

      {/* Contact Section - Minimal, Asymmetric */}
      <section id="contact" className="py-24 px-6 border-b" style={{ borderColor: 'var(--light-border)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="serif-display text-5xl md:text-6xl font-bold mb-4" style={{ color: 'var(--green-primary)' }}>
              Get in Touch
            </h2>
            <p className="text-lg opacity-75">Reach out to schedule your free consultation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Location */}
            <div className="space-y-4">
              <MapPin size={40} style={{ color: 'var(--gold-accent)' }} />
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--green-primary)' }}>Office Location</h3>
                <p className="text-sm opacity-85">Raleigh, NC<br/>Downtown Legal District</p>
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-4">
              <Phone size={40} style={{ color: 'var(--gold-accent)' }} />
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--green-primary)' }}>Phone</h3>
                <p className="text-sm opacity-85">
                  <a href="tel:+19195550123" className="hover:opacity-60">(919) 555-0123</a>
                  <br />
                  Mon-Fri, 9am-5pm EST
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-4">
              <Mail size={40} style={{ color: 'var(--gold-accent)' }} />
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--green-primary)' }}>Email</h3>
                <p className="text-sm opacity-85">
                  <a href="mailto:info@johneluwa.com" className="hover:opacity-60">info@johneluwa.com</a>
                  <br />
                  Response within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Clean, Professional */}
      <footer className="py-16 px-6" style={{ backgroundColor: 'var(--green-primary)', color: 'white' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          {/* Branding */}
          <div>
            <h4 className="serif-display text-xl font-bold mb-4">John Eluwa, PLLC</h4>
            <p className="text-sm opacity-80">Professional legal services since 1995</p>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Practice Areas</h4>
            <ul className="text-sm space-y-2 opacity-80">
              <li><a href="#services" className="hover:opacity-100 transition">Immigration Law</a></li>
              <li><a href="#services" className="hover:opacity-100 transition">Criminal Defense</a></li>
              <li><a href="#services" className="hover:opacity-100 transition">Personal Injury</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="text-sm space-y-2 opacity-80">
              <li><a href="#about" className="hover:opacity-100 transition">About John Eluwa</a></li>
              <li><a href="#testimonials" className="hover:opacity-100 transition">Testimonials</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Connect</h4>
            <div className="flex gap-4 text-sm opacity-80">
              <a href="#" className="hover:opacity-100 transition">LinkedIn</a>
              <a href="#" className="hover:opacity-100 transition">Facebook</a>
              <a href="#" className="hover:opacity-100 transition">Google</a>
            </div>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="text-center text-xs opacity-75 space-y-2">
          <p>&copy; 2024 Law Offices of John Eluwa, PLLC. All rights reserved.</p>
          <p>This website is for informational purposes only and is not a substitute for legal advice. Prior results do not guarantee future outcomes.</p>
        </div>
      </footer>
    </div>
  );
}
