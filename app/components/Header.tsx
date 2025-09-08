'use client';

import { useState } from 'react';
import { BookOpen, Image, Mail, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  language: 'en' | 'bn';
  onLanguageChange: (lang: 'en' | 'bn') => void;
  onNavigate: (section: string) => void;
}

const Header = ({ language, onLanguageChange, onNavigate }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'publications', label: { en: 'Publications', bn: 'প্রকাশনা' }, icon: BookOpen },
    { id: 'gallery', label: { en: 'Gallery', bn: 'গ্যালারি' }, icon: Image },
    { id: 'contact', label: { en: 'Contact Us', bn: 'যোগাযোগ' }, icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#DAA520]/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onNavigate('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#8B4513] to-[#D2691E] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">স</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#2F1B14]">
                Sahitya Rangamati
              </h1>
              <p className="text-sm text-[#A0522D] bengali">
                সাহিত্য রাঙামাটি
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-[#2F1B14] hover:bg-[#FDF5E6] transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-4 h-4" />
                <span className={item.id === 'gallery' ? 'bengali' : ''}>
                  {item.label[language]}
                </span>
              </motion.button>
            ))}
            
            {/* Language Switcher */}
            <motion.button
              onClick={() => onLanguageChange(language === 'en' ? 'bn' : 'en')}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#DAA520] text-white hover:bg-[#B8860B] transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">
                {language === 'en' ? 'বাংলা' : 'English'}
              </span>
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-[#2F1B14] hover:bg-[#FDF5E6]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-[#DAA520]/20"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-[#2F1B14] hover:bg-[#FDF5E6] transition-colors duration-200"
                >
                  <item.icon className="w-4 h-4" />
                  <span className={item.id === 'gallery' ? 'bengali' : ''}>
                    {item.label[language]}
                  </span>
                </button>
              ))}
              <button
                onClick={() => {
                  onLanguageChange(language === 'en' ? 'bn' : 'en');
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#DAA520] text-white hover:bg-[#B8860B] transition-colors duration-200"
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium">
                  {language === 'en' ? 'বাংলা' : 'English'}
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
