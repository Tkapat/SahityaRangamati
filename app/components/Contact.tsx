'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Facebook, MapPin, Clock } from 'lucide-react';

interface ContactProps {
  language: 'en' | 'bn';
}

const Contact = ({ language }: ContactProps) => {
  const content = {
    en: {
      title: "Contact Us",
      subtitle: "Get in touch with Sahitya Rangamati",
      description: "We'd love to hear from you. Reach out to us for any inquiries about our publications, events, or collaborations.",
      address: "Town Mission Schoool Road, Uluberia, Howrah, West Bengal-711315",
      phone: "+91 8910913005",
      email: "sahityarangamati@gmail.com",
      facebook: "Sahitya Rangamati",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM",
      sendMessage: "Send Message",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      submit: "Send Message",
      contactInfo: "Contact Information",
      followUs: "Follow Us"
    },
    bn: {
      title: "যোগাযোগ",
      subtitle: "সাহিত্য রাঙামাটির সাথে যোগাযোগ করুন",
      description: "আমরা আপনার কাছ থেকে শুনতে চাই। আমাদের প্রকাশনা, অনুষ্ঠান বা সহযোগিতা সম্পর্কে কোন প্রশ্নের জন্য আমাদের সাথে যোগাযোগ করুন।",
      address: "টাউন মিশন স্কুল রোড, উলুবেড়িয়া, হাওড়া, পশ্চিমবঙ্গ- ৭১১৩১৫",
      phone: "+৯১ ৮৯১০৯১৩০০৫",
      email: "sahityarangamati@gmail.com",
      facebook: "সাহিত্য রাঙামাটি",
      hours: "সোমবার - শুক্রবার: সকাল ৯:০০ - বিকাল ৬:০০",
      sendMessage: "বার্তা পাঠান",
      namePlaceholder: "আপনার নাম",
      emailPlaceholder: "আপনার ইমেইল",
      messagePlaceholder: "আপনার বার্তা",
      submit: "বার্তা পাঠান",
      contactInfo: "যোগাযোগের তথ্য",
      followUs: "আমাদের অনুসরণ করুন"
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: { en: "Phone", bn: "ফোন" },
      value: content[language].phone,
      link: `tel:${content[language].phone}`
    },
    {
      icon: Mail,
      label: { en: "Email", bn: "ইমেইল" },
      value: content[language].email,
      link: `mailto:${content[language].email}`
    },
    {
      icon: Facebook,
      label: { en: "Facebook", bn: "ফেসবুক" },
      value: content[language].facebook,
      link: "https://www.facebook.com/profile.php?id=61566512296295"
    },
    {
      icon: MapPin,
      label: { en: "Address", bn: "ঠিকানা" },
      value: content[language].address,
      link: null
    },
    {
      icon: Clock,
      label: { en: "Office Hours", bn: "অফিসের সময়" },
      value: content[language].hours,
      link: null
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FDF5E6] to-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold text-[#2F1B14] mb-4 ${language === 'bn' ? 'bengali' : ''}`}>
            {content[language].title}
          </h2>
          <p className={`text-xl text-[#A0522D] mb-6 ${language === 'bn' ? 'bengali' : ''}`}>
            {content[language].subtitle}
          </p>
          <p className={`max-w-2xl mx-auto text-[#2F1B14]/80 leading-relaxed ${language === 'bn' ? 'bengali' : ''}`}>
            {content[language].description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-2xl font-bold text-[#2F1B14] mb-6 ${language === 'bn' ? 'bengali' : ''}`}>
                {content[language].contactInfo}
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8B4513] to-[#D2691E] rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold text-[#2F1B14] mb-1 ${language === 'bn' ? 'bengali' : ''}`}>
                        {info.label[language]}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className={`text-[#A0522D] hover:text-[#8B4513] transition-colors duration-200 ${language === 'bn' ? 'bengali' : ''}`}
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className={`text-[#A0522D] ${language === 'bn' ? 'bengali' : ''}`}>
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className={`text-2xl font-bold text-[#2F1B14] mb-6 ${language === 'bn' ? 'bengali' : ''}`}>
                {content[language].followUs}
              </h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.facebook.com/profile.php?id=61566512296295"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-[#1877F2] to-[#0D6EFD] rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8"
          >
            <h3 className={`text-2xl font-bold text-[#2F1B14] mb-6 ${language === 'bn' ? 'bengali' : ''}`}>
              {content[language].sendMessage}
            </h3>
            
            <form className="space-y-6">
              <div>
                <label className={`block text-sm font-medium text-[#2F1B14] mb-2 ${language === 'bn' ? 'bengali' : ''}`}>
                  {content[language].namePlaceholder}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-[#DAA520]/30 rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#DAA520] focus:border-transparent transition-all duration-200"
                  placeholder={content[language].namePlaceholder}
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium text-[#2F1B14] mb-2 ${language === 'bn' ? 'bengali' : ''}`}>
                  {content[language].emailPlaceholder}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-[#DAA520]/30 rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#DAA520] focus:border-transparent transition-all duration-200"
                  placeholder={content[language].emailPlaceholder}
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium text-[#2F1B14] mb-2 ${language === 'bn' ? 'bengali' : ''}`}>
                  {content[language].messagePlaceholder}
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-[#DAA520]/30 rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#DAA520] focus:border-transparent transition-all duration-200 resize-none"
                  placeholder={content[language].messagePlaceholder}
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#8B4513] to-[#D2691E] text-white font-semibold rounded-lg hover:from-[#A0522D] hover:to-[#D2691E] transition-all duration-300 transform hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className={language === 'bn' ? 'bengali' : ''}>
                  {content[language].submit}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-[#8B4513] to-[#D2691E] rounded-xl p-8 text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <h3 className={`text-2xl font-bold text-white mb-2 ${language === 'bn' ? 'bengali' : ''}`}>
              {language === 'en' ? 'Visit Our Office' : 'আমাদের অফিসে আসুন'}
            </h3>
            <p className={`text-white/90 ${language === 'bn' ? 'bengali' : ''}`}>
              {content[language].address}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
