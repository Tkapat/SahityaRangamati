'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: number;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  category: string;
  categoryBn: string;
  date: string;
  imageUrl: string;
}

interface GalleryProps {
  language: 'en' | 'bn';
}

const Gallery = ({ language }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Mock gallery data
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      title: "Publication Ceremony 1995",
      titleBn: "প্রকাশনা অনুষ্ঠান ১৯৯৫",
      description: "The inaugural publication ceremony celebrating the first edition",
      descriptionBn: "প্রথম সংস্করণ উদযাপন করে উদ্বোধনী প্রকাশনা অনুষ্ঠান",
      category: "Publication Ceremony",
      categoryBn: "প্রকাশনা অনুষ্ঠান",
      date: "March 1995",
      imageUrl: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Poetry Reading Session",
      titleBn: "কবিতা পাঠের সেশন",
      description: "Authors reading their works during the literary festival",
      descriptionBn: "সাহিত্য উৎসবে লেখকদের তাদের রচনা পাঠ",
      category: "Literary Event",
      categoryBn: "সাহিত্যিক অনুষ্ঠান",
      date: "July 1996",
      imageUrl: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Cultural Performance",
      titleBn: "সাংস্কৃতিক পরিবেশনা",
      description: "Traditional Bengali dance and music performance",
      descriptionBn: "ঐতিহ্যগত বাংলা নাচ এবং সঙ্গীত পরিবেশনা",
      category: "Cultural Event",
      categoryBn: "সাংস্কৃতিক অনুষ্ঠান",
      date: "December 1997",
      imageUrl: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Book Launch 2024",
      titleBn: "বই প্রকাশ ২০২৪",
      description: "Launching the latest edition with distinguished guests",
      descriptionBn: "বিশিষ্ট অতিথিদের সাথে সর্বশেষ সংস্করণ প্রকাশ",
      category: "Publication Ceremony",
      categoryBn: "প্রকাশনা অনুষ্ঠান",
      date: "January 2024",
      imageUrl: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Author Meet & Greet",
      titleBn: "লেখক সাক্ষাৎ",
      description: "Readers meeting with contributing authors",
      descriptionBn: "পাঠকদের সাথে অবদানকারী লেখকদের সাক্ষাৎ",
      category: "Literary Event",
      categoryBn: "সাহিত্যিক অনুষ্ঠান",
      date: "June 2024",
      imageUrl: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Traditional Art Exhibition",
      titleBn: "ঐতিহ্যগত শিল্প প্রদর্শনী",
      description: "Showcasing traditional Bengali art and crafts",
      descriptionBn: "ঐতিহ্যগত বাংলা শিল্প এবং কারুশিল্প প্রদর্শন",
      category: "Cultural Event",
      categoryBn: "সাংস্কৃতিক অনুষ্ঠান",
      date: "January 2025",
      imageUrl: "/api/placeholder/600/400"
    }
  ];

  const categories = [
    { value: 'all', label: { en: 'All Events', bn: 'সব অনুষ্ঠান' } },
    { value: 'Publication Ceremony', label: { en: 'Publication Ceremony', bn: 'প্রকাশনা অনুষ্ঠান' } },
    { value: 'Literary Event', label: { en: 'Literary Event', bn: 'সাহিত্যিক অনুষ্ঠান' } },
    { value: 'Cultural Event', label: { en: 'Cultural Event', bn: 'সাংস্কৃতিক অনুষ্ঠান' } }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const content = {
    en: {
      title: "Gallery",
      subtitle: "Capturing moments from our literary journey",
      viewImage: "View Image"
    },
    bn: {
      title: "গ্যালারি",
      subtitle: "আমাদের সাহিত্যিক যাত্রার মুহূর্তগুলি ধারণ",
      viewImage: "ছবি দেখুন"
    }
  };

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex]);
    }
  };

  const prevImage = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
      const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
      setSelectedImage(filteredImages[prevIndex]);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#F5F5DC] to-[#FDF5E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold text-[#2F1B14] mb-4 ${language === 'bn' ? 'bengali' : ''}`}>
            {content[language].title}
          </h2>
          <p className={`text-xl text-[#A0522D] ${language === 'bn' ? 'bengali' : ''}`}>
            {content[language].subtitle}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.value
                  ? 'bg-[#DAA520] text-white shadow-lg'
                  : 'bg-white/80 text-[#2F1B14] hover:bg-[#FDF5E6] border border-[#DAA520]/30'
              }`}
            >
              <span className={language === 'bn' ? 'bengali' : ''}>
                {category.label[language]}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openModal(image)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-[#8B4513] to-[#D2691E] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">📸</div>
                      <p className="text-sm opacity-80">{image.date}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className={`text-[#2F1B14] font-medium ${language === 'bn' ? 'bengali' : ''}`}>
                        {content[language].viewImage}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className={`text-white font-bold text-lg mb-1 ${language === 'bn' ? 'bengali' : ''}`}>
                    {language === 'en' ? image.title : image.titleBn}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {language === 'en' ? image.category : image.categoryBn}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">📷</div>
            <p className={`text-xl text-[#A0522D] ${language === 'bn' ? 'bengali' : ''}`}>
              {language === 'en' ? 'No images found for this category' : 'এই বিভাগের জন্য কোন ছবি পাওয়া যায়নি'}
            </p>
          </motion.div>
        )}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors duration-200"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Image */}
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#8B4513] to-[#D2691E] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-6xl mb-4">📸</div>
                      <p className="text-lg opacity-80">{selectedImage.date}</p>
                    </div>
                  </div>
                </div>

                {/* Image Details */}
                <div className="p-6">
                  <h3 className={`text-2xl font-bold text-[#2F1B14] mb-2 ${language === 'bn' ? 'bengali' : ''}`}>
                    {language === 'en' ? selectedImage.title : selectedImage.titleBn}
                  </h3>
                  <p className="text-[#A0522D] font-medium mb-3">
                    {language === 'en' ? selectedImage.category : selectedImage.categoryBn}
                  </p>
                  <p className={`text-[#2F1B14]/70 leading-relaxed ${language === 'bn' ? 'bengali' : ''}`}>
                    {language === 'en' ? selectedImage.description : selectedImage.descriptionBn}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
