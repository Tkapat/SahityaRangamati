'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Publications from './components/Publications';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const [currentSection, setCurrentSection] = useState<string>('home');

  // Handle navigation
  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle language change
  const handleLanguageChange = (newLanguage: 'en' | 'bn') => {
    setLanguage(newLanguage);
  };

  // Update document language when language changes
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header 
        language={language} 
        onLanguageChange={handleLanguageChange}
        onNavigate={handleNavigate}
      />

      {/* Hero Section */}
      <section id="home">
        <Hero language={language} />
      </section>

      {/* Publications Section */}
      <section id="publications">
        <Publications language={language} />
      </section>

      {/* Gallery Section hello */}
      <section id="gallery">
        <Gallery language={language} />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact language={language} />
      </section>

      {/* Footer */}
      <footer className="bg-[#2F1B14] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#8B4513] to-[#D2691E] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">স</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Sahitya Rangamati</h3>
                  <p className="text-sm text-[#DAA520] bengali">সাহিত্য রাঙামাটি</p>
                </div>
              </div>
              <p className={`text-[#F5F5DC]/80 text-sm ${language === 'bn' ? 'bengali' : ''}`}>
                {language === 'en' 
                  ? 'Celebrating the rich heritage of Bengali literature and culture.' 
                  : 'বাংলা সাহিত্য এবং সংস্কৃতির সমৃদ্ধ ঐতিহ্য উদযাপন।'
                }
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className={`text-lg font-semibold mb-4 ${language === 'bn' ? 'bengali' : ''}`}>
                {language === 'en' ? 'Quick Links' : 'দ্রুত লিঙ্ক'}
              </h4>
              <div className="space-y-2">
                {[
                  { id: 'publications', label: { en: 'Publications', bn: 'প্রকাশনা' } },
                  { id: 'gallery', label: { en: 'Gallery', bn: 'গ্যালারি' } },
                  { id: 'contact', label: { en: 'Contact', bn: 'যোগাযোগ' } }
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavigate(link.id)}
                    className={`block w-full text-[#F5F5DC]/80 hover:text-[#DAA520] transition-colors duration-200 ${language === 'bn' ? 'bengali' : ''}`}
                  >
                    {link.label[language]}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className={`text-lg font-semibold mb-4 ${language === 'bn' ? 'bengali' : ''}`}>
                {language === 'en' ? 'Contact Info' : 'যোগাযোগের তথ্য'}
              </h4>
              <div className="space-y-2 text-sm text-[#F5F5DC]/80">
                <p>sahityarangamati@gmail.com</p>
                <p>+91 8910913005</p>
                <p className={language === 'bn' ? 'bengali' : ''}>
                  {language === 'en' 
                    ? 'Town Mission School Road, Uluberia, Howrah, West Bengal-711315' 
                    : 'টাউন মিশন স্কুল রোড, উলুবেড়িয়া, হাওড়া, পশ্চিমবঙ্গ- ৭১১৩১৫'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-[#8B4513]/30 mt-8 pt-8 text-center">
            <p className={`text-sm text-[#F5F5DC]/60 ${language === 'bn' ? 'bengali' : ''}`}>
              © {new Date().getFullYear()} {language === 'en' ? 'Sahitya Rangamati' : 'সাহিত্য রাঙামাটি'}. 
              {language === 'en' ? ' All rights reserved.' : ' সর্বস্বত্ব সংরক্ষিত।'}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
