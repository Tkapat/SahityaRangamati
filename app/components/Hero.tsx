'use client';

import { motion } from 'framer-motion';

interface HeroProps {
  language: 'en' | 'bn';
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    en: {
      title: "Sahitya Rangamati",
      subtitle: "Celebrating the Rich Heritage of Bengali Literature",
      description: "A literary magazine that brings together the finest works of Bengali literature, poetry, and cultural expressions. Discover the essence of Rangamati through words that paint the landscape of our heritage.",
      cta: "Explore Publications"
    },
    bn: {
      title: "সাহিত্য রাঙামাটি",
      subtitle: "বাংলা সাহিত্যের সমৃদ্ধ ঐতিহ্য উদযাপন",
      description: "একটি সাহিত্যিক পত্রিকা যা বাংলা সাহিত্য, কবিতা এবং সাংস্কৃতিক প্রকাশের শ্রেষ্ঠ রচনাগুলিকে একত্রিত করে। আমাদের ঐতিহ্যের ল্যান্ডস্কেপ আঁকার শব্দের মাধ্যমে রাঙামাটির সারমর্ম আবিষ্কার করুন।",
      cta: "প্রকাশনা দেখুন"
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mandala-bg">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#DAA520]/20 to-[#8B4513]/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#D2691E]/20 to-[#A0522D]/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-[#FDF5E6]/30 to-[#F5F5DC]/30 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Title */}
          <motion.h1 
            className={`text-5xl md:text-7xl font-bold text-[#2F1B14] leading-tight ${language === 'bn' ? 'bengali' : ''}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {content[language].title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-[#A0522D] font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content[language].subtitle}
          </motion.p>

          {/* Description */}
          <motion.p 
            className={`max-w-3xl mx-auto text-lg md:text-xl text-[#2F1B14]/80 leading-relaxed ${language === 'bn' ? 'bengali' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {content[language].description}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8B4513] to-[#D2691E] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={language === 'bn' ? 'bengali' : ''}>
              {content[language].cta}
            </span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="w-6 h-10 border-2 border-[#DAA520] rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-[#DAA520] rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
