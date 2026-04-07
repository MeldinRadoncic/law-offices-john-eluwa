'use client';

import Image from "next/image";
import { useState } from "react";
import { Menu, X, Calendar, Shield, Scale, Users, Award, MapPin, Phone, Mail } from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur z-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900 tracking-tight">John Eluwa</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-blue-900 transition">Services</a>
            <a href="#about" className="hover:text-blue-900 transition">About</a>
            <a href="#testimonials" className="hover:text-blue-900 transition">Testimonials</a>
            <a href="#contact" className="hover:text-blue-900 transition">Contact</a>
          </div>

          {/* CTA Button */}
          <button className="hidden md:block bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-2 rounded-full hover:shadow-lg transition transform hover:-translate-y-0.5">
            Free Consultation
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-neutral-200 p-4 space-y-4">
            <a href="#services" className="block hover:text-blue-900">Services</a>
            <a href="#about" className="block hover:text-blue-900">About</a>
            <a href="#testimonials" className="block hover:text-blue-900">Testimonials</a>
            <a href="#contact" className="block hover:text-blue-900">Contact</a>
            <button className="w-full bg-blue-900 text-white py-2 rounded-full">Free Consultation</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-neutral-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                25+ Years of Excellence
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-blue-900 leading-tight">
                Your Immigration & Legal Advocate
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Experienced counsel for immigration, criminal defense, and personal injury matters. Licensed across North Carolina and US Federal Courts.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition transform hover:-translate-y-1">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-200">
              <div>
                <div className="text-3xl font-bold text-blue-900">25+</div>
                <p className="text-sm text-neutral-600">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">1000+</div>
                <p className="text-sm text-neutral-600">Cases Won</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">98%</div>
                <p className="text-sm text-neutral-600">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-blue-200 to-blue-100 rounded-2xl h-96 flex items-center justify-center shadow-2xl">
              <div className="text-center space-y-4">
                <Scale size={64} className="text-blue-900 mx-auto" />
                <p className="text-blue-900 font-semibold">Professional Attorney Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-blue-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <Award size={40} className="mx-auto mb-4 text-yellow-400" />
            <p className="font-semibold">Avvo Rated</p>
            <p className="text-sm text-blue-100">10/10 Superb</p>
          </div>
          <div className="text-center">
            <Shield size={40} className="mx-auto mb-4 text-yellow-400" />
            <p className="font-semibold">BBB Accredited</p>
            <p className="text-sm text-blue-100">A+ Rating</p>
          </div>
          <div className="text-center">
            <Scale size={40} className="mx-auto mb-4 text-yellow-400" />
            <p className="font-semibold">US Supreme Court</p>
            <p className="text-sm text-blue-100">Admitted & Qualified</p>
          </div>
          <div className="text-center">
            <Users size={40} className="mx-auto mb-4 text-yellow-400" />
            <p className="font-semibold">NC State Courts</p>
            <p className="text-sm text-blue-100">All Districts Licensed</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">Practice Areas</h2>
            <p className="text-xl text-neutral-600">Comprehensive legal services for your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Immigration */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Users size={32} className="text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Immigration Law</h3>
              <ul className="space-y-3 text-neutral-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold">•</span>
                  <span>Family-based immigration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold">•</span>
                  <span>Employment visa sponsorship</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold">•</span>
                  <span>Removal/deportation defense</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold">•</span>
                  <span>Naturalization & citizenship</span>
                </li>
              </ul>
            </div>

            {/* Criminal Defense */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Scale size={32} className="text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Criminal Defense</h3>
              <ul className="space-y-3 text-neutral-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold">•</span>
                  <span>Traffic violations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold">•</span>
                  <span>Felony & misdemeanor charges</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold">•</span>
                  <span>Juvenile delinquency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold">•</span>
                  <span>Federal court representation</span>
                </li>
              </ul>
            </div>

            {/* Personal Injury */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Shield size={32} className="text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Personal Injury</h3>
              <ul className="space-y-3 text-neutral-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold">•</span>
                  <span>Accident claims</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold">•</span>
                  <span>Negligence lawsuits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold">•</span>
                  <span>Abuse & neglect matters</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold">•</span>
                  <span>Injury settlement negotiation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Attorney Spotlight */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl h-96 flex items-center justify-center shadow-xl">
              <Users size={80} className="text-blue-900" />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">Meet John Eluwa, Esq.</h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              John Eluwa is a highly experienced immigration and criminal defense attorney with over 25 years of practice. He holds a J.D. from North Carolina Central University School of Law and graduated Cum Laude from Shaw University.
            </p>
            <div className="space-y-4 border-l-4 border-blue-900 pl-6">
              <div>
                <h4 className="font-bold text-blue-900 mb-2">Education & Licensing</h4>
                <p className="text-neutral-600">Admitted to NC State Courts, US Federal District Court (EDNC), all Immigration Courts, and US Supreme Court</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-2">Expertise</h4>
                <p className="text-neutral-600">Family-based immigration, employment visas, deportation defense, and criminal matters</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-2">Commitment</h4>
                <p className="text-neutral-600">Dedicated to helping families stay together and protecting clients' rights</p>
              </div>
            </div>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition">
              View Full Bio
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">Client Testimonials</h2>
            <p className="text-xl text-neutral-600">See what our clients have to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Maria Garcia", city: "Raleigh, NC", text: "John helped my family reunite. He was professional, compassionate, and got results. Highly recommended!" },
              { name: "David Chen", city: "Durham, NC", text: "Outstanding legal representation. John's expertise in employment visas made the process smooth and stress-free." },
              { name: "Sarah Williams", city: "Chapel Hill, NC", text: "John provided excellent criminal defense. He fought hard for me and achieved a favorable outcome." }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-neutral-200 pt-4">
                  <p className="font-bold text-blue-900">{testimonial.name}</p>
                  <p className="text-sm text-neutral-600">{testimonial.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Scheduling CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Calendar size={48} className="mx-auto text-yellow-400" />
            <h2 className="text-4xl md:text-5xl font-bold">Schedule Your Consultation</h2>
            <p className="text-xl text-blue-100">Get professional legal guidance tailored to your situation</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition">
              Book Online Appointment
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition">
              Call: (919) XXX-XXXX
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Contact Us</h2>
            <p className="text-lg text-neutral-600">Multiple ways to reach us for your legal needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-2xl space-y-4 text-center">
              <MapPin size={40} className="mx-auto text-blue-900" />
              <div>
                <h3 className="font-bold text-blue-900 mb-2">Office Location</h3>
                <p className="text-neutral-600">Raleigh, NC<br/>Downtown Legal District</p>
              </div>
            </div>
            <div className="bg-neutral-50 p-8 rounded-2xl space-y-4 text-center">
              <Phone size={40} className="mx-auto text-blue-900" />
              <div>
                <h3 className="font-bold text-blue-900 mb-2">Phone</h3>
                <p className="text-neutral-600">(919) XXX-XXXX<br/>Available Mon-Fri, 9am-5pm</p>
              </div>
            </div>
            <div className="bg-neutral-50 p-8 rounded-2xl space-y-4 text-center">
              <Mail size={40} className="mx-auto text-blue-900" />
              <div>
                <h3 className="font-bold text-blue-900 mb-2">Email</h3>
                <p className="text-neutral-600">info@johneluwa.com<br/>We respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8 border-b border-blue-800 pb-8">
          <div>
            <h4 className="font-bold mb-4">Law Offices of John Eluwa, PLLC</h4>
            <p className="text-sm text-blue-100">Professional legal services since 1995</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Practice Areas</h4>
            <ul className="text-sm space-y-2 text-blue-100">
              <li><a href="#" className="hover:text-white transition">Immigration Law</a></li>
              <li><a href="#" className="hover:text-white transition">Criminal Defense</a></li>
              <li><a href="#" className="hover:text-white transition">Personal Injury</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="text-sm space-y-2 text-blue-100">
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-yellow-400 transition">LinkedIn</a>
              <a href="#" className="hover:text-yellow-400 transition">Facebook</a>
              <a href="#" className="hover:text-yellow-400 transition">Twitter</a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-blue-100">
          <p>&copy; 2024 Law Offices of John Eluwa, PLLC. All rights reserved. | Disclaimer: This website is not a substitute for legal advice.</p>
        </div>
      </footer>
    </div>
  );
}
